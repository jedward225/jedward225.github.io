#!/usr/bin/env python3
"""Check the built site for broken local resources, fragments, and duplicate IDs."""
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
import sys
from urllib.parse import unquote, urlsplit

class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.ids = []
        self.links = []
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        for attribute in ('href', 'src', 'poster'):
            if attribute in attrs:
                self.links.append(attrs[attribute])

root = Path(sys.argv[1] if len(sys.argv) > 1 else '_site').resolve()
baseurl = sys.argv[2].rstrip('/') if len(sys.argv) > 2 else ''
pages = {path: Page(path.read_text()) for path in root.rglob('*.html')}
errors = []
if root / 'index.html' not in pages:
    errors.append('Missing built homepage')
if (root / 'tmp').exists():
    errors.append('Temporary drafts were included in the build')
for path, page in pages.items():
    for value, count in Counter(page.ids).items():
        if count > 1:
            errors.append(f'{path.relative_to(root)}: duplicate id {value}')
    for link in page.links:
        url = urlsplit(link)
        if url.scheme or url.netloc:
            continue
        local = unquote(url.path)
        if local.startswith('/'):
            if baseurl and not (local == baseurl or local.startswith(baseurl + '/')):
                errors.append(f'{path.relative_to(root)}: missing baseurl in {link}')
                continue
            target = root / local[len(baseurl):].lstrip('/')
        else:
            target = path.parent / local if local else path
        target = target.resolve()
        if not target.is_relative_to(root):
            errors.append(f'{path.relative_to(root)}: path escapes site: {link}')
            continue
        if target.is_dir():
            target /= 'index.html'
        if not target.is_file():
            errors.append(f'{path.relative_to(root)}: missing {link}')
        elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
            errors.append(f'{path.relative_to(root)}: missing fragment {link}')
if errors:
    sys.exit('\n'.join(errors))
print(f'Checked {len(pages)} HTML page(s): local links, media, fragments and IDs passed.')

# Jiajun Liu's academic homepage

A Jekyll site hosted at <https://jedward225.github.io>.

## Local development

Use Ruby 3.3 (see `.ruby-version`) and Bundler:

```bash
bundle install
bundle exec jekyll serve
```

Open <http://localhost:4000>. Restart Jekyll after changing `_config.yml`.
`Gemfile.lock` records the resolved dependencies; commit it when updating gems.

## Editing content

- `_data/news.yml`: news, sorted newest first. Dates use `YYYY-MM-01` for month precision; only the month is displayed. The DEX-X announcement uses September 2026 as the posting month.
- `_data/publications.yml`: ordered publications, structured authors, links, media, and `selected` status.
- `_data/experiences.yml`: experiences in display order. Titles and details support inline HTML.
- `index.md`: biography, projects, awards, services and interests. Update its `last_modified_at` when editing content.
- `_sass/`: component styles; `assets/css/main.scss` imports them.

Keep Experience before Publications. Content remains readable without JavaScript;
filtering, news expansion and the carousel are progressive enhancements.

## Media

Reference original image paths through `_includes/image.html`. The generated
`_data/images.json` maps them to resized WebP derivatives with intrinsic dimensions.
Below-the-fold images load lazily; the profile loads eagerly. The HuMiT video uses
a poster and autoplays muted in a loop without native controls. Its source is loaded
when visible, and playback pauses when it leaves the viewport or is filtered out.

To regenerate derivatives after adding or replacing media, install FFmpeg and run:

```bash
python3 scripts/optimize_media.py
```

Commit the generated images, video and manifest. Original media remain available.
Use `image` in page front matter for social sharing. Set `math: true` only on pages
that need KaTeX.

## Validation and publishing

```bash
bundle exec jekyll build
python3 scripts/check_site.py
node --check assets/js/main.js
node --check assets/js/theme.js
```

GitHub Actions runs these checks on pushes and pull requests, including a build
under `/preview` to check subdirectory URLs. Temporary files in `tmp/` and local
tooling are excluded from the generated site.

The check workflow does not deploy. Publishing follows the repository's existing
GitHub Pages configuration. A custom Actions deployment should upload `_site/`
from the locked Jekyll build; branch-based Pages builds use GitHub's own dependency
versions, so they may differ from local builds.

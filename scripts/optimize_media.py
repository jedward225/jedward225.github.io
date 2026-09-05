#!/usr/bin/env python3
"""Generate web-sized derivatives; originals are retained. Requires FFmpeg only."""
import json
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'assets/img'
OUTPUT = SOURCE / 'optimized'
OUTPUT.mkdir(exist_ok=True)

def run(*args):
    subprocess.run(args, check=True)

def dimensions(path):
    result = subprocess.check_output(['ffprobe', '-v', 'error', '-select_streams', 'v:0',
        '-show_entries', 'stream=width,height', '-of', 'json', str(path)])
    stream = json.loads(result)['streams'][0]
    return stream['width'], stream['height']

images = {}
for source in sorted(SOURCE.rglob('*')):
    if source.suffix.lower() not in ('.png', '.jpg') or OUTPUT in source.parents:
        continue
    size = 1040
    if source.name == '1c.png': size = 264
    elif 'logo' in source.name.lower() or 'seal' in source.name.lower(): size = 104
    elif source.name == 'mp_wechat.jpg': size = 300
    elif source.name == 'coffeepig.jpg': size = 64
    elif source.suffix.lower() == '.jpg': size = 800
    relative = source.relative_to(SOURCE).with_suffix('.webp')
    destination = OUTPUT / relative
    destination.parent.mkdir(parents=True, exist_ok=True)
    # No crop: research diagrams retain all their original content.
    run('ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-threads', '2', '-i', str(source),
        '-vf', f'scale=w=min({size}\\,iw):h=-1', '-frames:v', '1', '-c:v', 'libwebp',
        '-quality', '85', '-threads', '2', str(destination))
    width, height = dimensions(destination)
    images['/' + str(source.relative_to(ROOT))] = {
        'src': '/' + str(destination.relative_to(ROOT)), 'width': width, 'height': height}
(ROOT / '_data/images.json').write_text(json.dumps(images, indent=2) + '\n')
run('ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-ss', '1', '-i', str(SOURCE / 'humit.mp4'),
    '-vf', 'scale=854:480', '-frames:v', '1', '-c:v', 'libwebp', '-quality', '85',
    '-threads', '2', str(OUTPUT / 'humit-poster.webp'))
run('ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', str(SOURCE / 'humit.mp4'),
    '-vf', 'scale=854:480', '-c:v', 'libx264', '-crf', '28', '-preset', 'medium',
    '-threads', '2', '-an', '-movflags', '+faststart', str(SOURCE / 'humit-preview.mp4'))
print(f'Generated {len(images)} images, video poster, and full-length web video.')

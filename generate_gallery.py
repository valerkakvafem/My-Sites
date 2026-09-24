import json
from pathlib import Path

root = Path(__file__).resolve().parent
gallery_dir = root / 'assets' / 'gallery'
output_file = root / 'gallery-data.js'

allowed = {'.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif'}
files = sorted(
    [p for p in gallery_dir.iterdir() if p.is_file() and p.suffix.lower() in allowed],
    key=lambda p: p.name.lower(),
)

gallery_data = [
    {
        'src': f'assets/gallery/{p.name}',
        'title': f'Фото {index + 1}',
        'type': 'photo',
    }
    for index, p in enumerate(files)
]

output_file.write_text('window.galleryData = ' + json.dumps(gallery_data, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
print(f'Generated {len(gallery_data)} gallery entries.')

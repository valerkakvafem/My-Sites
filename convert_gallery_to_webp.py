from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image

SUPPORTED_EXTENSIONS = {".png", ".jpg", ".jpeg", ".bmp", ".gif", ".tif", ".tiff"}


def convert_to_webp(source: Path, keep_original: bool = False) -> bool:
    """Convert one image to WebP. Returns True if conversion was made."""
    if source.suffix.lower() == ".webp":
        return False

    if source.suffix.lower() not in SUPPORTED_EXTENSIONS:
        return False

    target = source.with_suffix(".webp")
    if target.exists() and target != source:
        print(f"Skipping: {source.name} -> {target.name} already exists")
        return False

    with Image.open(source) as img:
        if img.mode in {"RGBA", "LA", "P"}:
            rgb_image = img.convert("RGBA")
        else:
            rgb_image = img.convert("RGB")
        rgb_image.save(target, format="WEBP", quality=85, method=6)

    if not keep_original:
        source.unlink(missing_ok=True)

    print(f"Converted: {source} -> {target}")
    return True


def convert_gallery(folder: Path, keep_original: bool = False) -> list[Path]:
    """Convert all non-WebP images in a gallery folder."""
    converted: list[Path] = []

    for path in sorted(folder.iterdir()):
        if not path.is_file():
            continue
        if path.suffix.lower() == ".webp":
            continue
        if path.suffix.lower() in SUPPORTED_EXTENSIONS:
            if convert_to_webp(path, keep_original=keep_original):
                converted.append(path)

    return converted


def main() -> None:
    parser = argparse.ArgumentParser(description="Convert gallery images to WebP")
    parser.add_argument(
        "--folder",
        type=Path,
        default=Path(__file__).resolve().parent / "assets" / "gallery",
        help="Path to the gallery folder (default: ./assets/gallery)",
    )
    parser.add_argument(
        "--keep-originals",
        action="store_true",
        help="Keep original PNG/JPG files after conversion",
    )
    args = parser.parse_args()

    gallery_dir = args.folder.resolve()
    if not gallery_dir.exists():
        raise FileNotFoundError(f"Folder not found: {gallery_dir}")

    print(f"Checking gallery: {gallery_dir}")
    converted = convert_gallery(gallery_dir, keep_original=args.keep_originals)

    if not converted:
        print("All photos in the gallery are already WebP.")
    else:
        print(f"Done. Converted {len(converted)} files.")


if __name__ == "__main__":
    main()

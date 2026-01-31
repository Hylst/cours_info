import os
from PIL import Image
import glob

# Target directory for icons
icons_dir = r"d:\0CODE\AntiGravity\Cours_Memos\Docker\assets\img\icons"

# Find all PNG files
png_files = glob.glob(os.path.join(icons_dir, "*.png"))

print(f"Found {len(png_files)} PNG files in {icons_dir}")

for png_file in png_files:
    webp_file = png_file.rsplit('.', 1)[0] + ".webp"
    try:
        with Image.open(png_file) as image:
            # Save as WebP with quality 85
            image.save(webp_file, "WEBP", quality=85, method=6)
            print(f"Converted: {os.path.basename(png_file)} -> {os.path.basename(webp_file)}")
            # Delete original PNG
            os.remove(png_file)
            print(f"Deleted: {os.path.basename(png_file)}")
    except Exception as e:
        print(f"Error converting {png_file}: {e}")

print("\nConversion complete!")

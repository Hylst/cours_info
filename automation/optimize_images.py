from PIL import Image
import os

assets_dir = r"d:\0CODE\AntiGravity\Cours_Memos\Docker\automation\assets"

for filename in os.listdir(assets_dir):
    if filename.endswith(".png"):
        img_path = os.path.join(assets_dir, filename)
        with Image.open(img_path) as img:
            # Convert to RGB (remove alpha channel for JPG)
            rgb_img = img.convert('RGB')
            
            # Resize by half
            new_size = (img.width // 2, img.height // 2)
            resized_img = rgb_img.resize(new_size, Image.Resampling.LANCZOS)
            
            # Save as JPG
            new_filename = os.path.splitext(filename)[0] + ".jpg"
            save_path = os.path.join(assets_dir, new_filename)
            resized_img.save(save_path, "JPEG", quality=85)
            print(f"Converted and resized: {filename} -> {new_filename}")

        # Optional: Delete original PNG to save space? 
        # User said "compresse png > jpg", implying replacement or conversion.
        # I'll keep originals for safety unless explicitly asked to delete, 
        # but for the "compress" goal, I should probably rely on the JPGs.

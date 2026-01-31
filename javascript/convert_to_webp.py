from PIL import Image
import os

# Chemin du dossier images
images_dir = r"d:\0CODE\AntiGravity\Cours_Memos\Docker\javascript\assets\images"

# Liste des fichiers à convertir
files_to_convert = [
    "favicon.png",
    "js-hero.png",
    "js-og-image.png"
]

print("🔄 Conversion PNG → WebP en cours...\n")

for filename in files_to_convert:
    png_path = os.path.join(images_dir, filename)
    
    if os.path.exists(png_path):
        # Nom du fichier WebP
        webp_filename = filename.replace('.png', '.webp')
        webp_path = os.path.join(images_dir, webp_filename)
        
        # Ouvrir et convertir
        img = Image.open(png_path)
        
        # Sauvegarder en WebP avec qualité optimisée
        img.save(webp_path, 'WEBP', quality=85, method=6)
        
        # Comparer les tailles
        png_size = os.path.getsize(png_path) / 1024  # KB
        webp_size = os.path.getsize(webp_path) / 1024  # KB
        reduction = ((png_size - webp_size) / png_size) * 100
        
        print(f"✅ {filename} → {webp_filename}")
        print(f"   PNG: {png_size:.2f} KB | WebP: {webp_size:.2f} KB | Réduction: {reduction:.1f}%\n")
    else:
        print(f"❌ {filename} introuvable\n")

print("✨ Conversion terminée !")

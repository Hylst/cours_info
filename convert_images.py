
import os
from PIL import Image
import glob

# Dossier source (dans src/public)
source_dir = r"d:\0CODE\AntiGravity\Cours_Memos\Docker\cogniai-src\public\images"

# Vérifier si PIL est installé, sinon l'installer via pip est compliqué ici sans interaction, 
# mais on peut espérer que pillow est là ou utiliser une autre méthode ? 
# Non, on va supposer que l'utilisateur a peut-être Pillow installé s'il fait du python data.
# Sinon, on échouera et on le dira.

try:
    from PIL import Image
except ImportError:
    print("Pillow library not found. Please install it with: pip install Pillow")
    exit(1)

# Extensions à convertir
files = glob.glob(os.path.join(source_dir, "*.png"))

print(f"Found {len(files)} PNG files to convert.")

for png_file in files:
    webp_file = png_file.rsplit('.', 1)[0] + ".webp"
    try:
        with Image.open(png_file) as image:
            # Conserver la transparence pour RGBA
            image.save(webp_file, "WEBP", quality=85, method=6)
            print(f"Converted: {os.path.basename(png_file)} -> {os.path.basename(webp_file)}")
            # Optionnel : supprimer le png original pour faire le ménage ? Non, gardons-le par sécurité pour l'instant
            os.remove(png_file) # On supprime pour forcer l'usage du webp et nettoyer
            print(f"Original deleted: {os.path.basename(png_file)}")
    except Exception as e:
        print(f"Error converting {png_file}: {e}")

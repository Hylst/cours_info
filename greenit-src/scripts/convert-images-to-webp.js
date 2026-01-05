const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

const publicDir = path.join(__dirname, '../public');

const convertImages = async () => {
    console.log('🚀 Démarrage de la conversion des images en WebP...');

    // Trouver tous les fichiers jpg/jpeg/png dans le dossier public
    const files = globSync('**/*.{jpg,jpeg,png}', { cwd: publicDir });

    let count = 0;
    for (const file of files) {
        const inputPath = path.join(publicDir, file);
        const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/, '.webp');

        try {
            await sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath);

            console.log(`✅ Converti: ${file} -> ${path.basename(outputPath)}`);
            count++;
        } catch (err) {
            console.error(`❌ Erreur sur ${file}:`, err.message);
        }
    }

    console.log(`\n🎉 Terminé ! ${count} images converties.`);
    console.log('⚠️  N\'oubliez pas de mettre à jour les extensions dans votre code si nécessaire.');
};

convertImages();

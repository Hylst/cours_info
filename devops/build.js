const fs = require('fs');
const path = require('path');

const components = [
    'src/components/head.html',
    'src/components/header.html',
    'src/components/hero.html',
    'src/components/toc.html'
];

const modules = [
    'src/modules/m00-reseaux.html',
    'src/modules/m01-culture.html',
    'src/modules/m02-git.html',
    'src/modules/m03-ci.html',
    'src/modules/m04-cd.html',
    'src/modules/m05-docker.html',
    'src/modules/m06-kubernetes.html',
    'src/modules/m07-iac.html',
    'src/modules/m08-observabilite.html',
    'src/modules/m09-devsecops.html',
    'src/modules/m10-sre.html'
];

const footer = [
    'src/components/quiz-section.html',
    'src/components/footer.html'
];

function buildHTML() {
    console.log('🔨 Building DevOps HTML...');

    let html = '<!DOCTYPE html>\n<html lang="fr">\n';

    // Head section
    components.forEach(file => {
        if (fs.existsSync(file)) {
            const content = fs.readFileSync(file, 'utf8');
            html += content + '\n';
        } else {
            console.warn(`⚠️  Component missing: ${file}`);
        }
    });

    html += '<body>\n';

    // Modules
    modules.forEach(file => {
        if (fs.existsSync(file)) {
            const content = fs.readFileSync(file, 'utf8');
            html += content + '\n';
        } else {
            console.warn(`⚠️  Module not found: ${file}`);
        }
    });

    // Footer
    footer.forEach(file => {
        if (fs.existsSync(file)) {
            const content = fs.readFileSync(file, 'utf8');
            html += content + '\n';
        } else {
            console.warn(`⚠️  Component missing: ${file}`);
        }
    });

    html += '</body>\n</html>';

    // Write output
    fs.writeFileSync('index.html', html, 'utf8');

    const stats = fs.statSync('index.html');
    console.log('✅ Build complete: index.html generated');
    console.log(`📊 Total size: ${(stats.size / 1024).toFixed(2)} KB`);
    console.log(`📄 Total characters: ${html.length}`);
}

// Run build
try {
    buildHTML();
} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
}

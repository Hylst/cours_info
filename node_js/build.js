const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');
const DIST_FILE = path.join(__dirname, 'index.html');

async function build() {
    console.log('🏗️  Building index.html...');

    try {
        // 1. Read Layout
        let layout = fs.readFileSync(path.join(SRC_DIR, 'layout.html'), 'utf8');

        // 2. Read Partials
        const header = fs.readFileSync(path.join(SRC_DIR, 'partials', 'header.html'), 'utf8');
        const footer = fs.readFileSync(path.join(SRC_DIR, 'partials', 'footer.html'), 'utf8');

        // 3. Read Sections
        const sectionsDir = path.join(SRC_DIR, 'sections');
        const sectionFiles = fs.readdirSync(sectionsDir).filter(f => f.endsWith('.html')).sort();

        let sectionsContent = '';
        for (const file of sectionFiles) {
            console.log(`   - Adding section: ${file}`);
            const content = fs.readFileSync(path.join(sectionsDir, file), 'utf8');
            sectionsContent += content + '\n';
        }

        // 4. Assemble
        let html = layout
            .replace('<!-- HEADER -->', header)
            .replace('<!-- SECTIONS -->', sectionsContent)
            .replace('<!-- FOOTER -->', footer);

        // 5. Write to Disk
        fs.writeFileSync(DIST_FILE, html);
        console.log('✅ Build success! index.html generated.');

    } catch (err) {
        console.error('❌ Build failed:', err);
        process.exit(1);
    }
}

build();

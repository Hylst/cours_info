const codeLines = [
    { text: "# 🎄 Initialisation du Réveillon 2025", type: 'comment' },
    { text: "import", type: 'keyword' }, { text: " universe", type: 'normal' }, { text: "\n", type: 'normal' },
    { text: "from", type: 'keyword' }, { text: " heart ", type: 'normal' }, { text: "import", type: 'keyword' }, { text: " Love, Joy, Peace", type: 'func' }, { text: "\n", type: 'normal' },
    { text: "\n", type: 'normal' },

    { text: "def", type: 'keyword' }, { text: " celebrate_christmas", type: 'func' }, { text: "():", type: 'normal' }, { text: "\n", type: 'normal' },
    { text: "    config = {", type: 'normal' }, { text: "\n", type: 'normal' },
    { text: "        ", type: 'normal' }, { text: "'spirit'", type: 'string' }, { text: ": ", type: 'normal' }, { text: "'Authentique'", type: 'string' }, { text: ",", type: 'normal' }, { text: "\n", type: 'normal' },
    { text: "        ", type: 'normal' }, { text: "'magic'", type: 'string' }, { text: ": ", type: 'normal' }, { text: "True", type: 'keyword' }, { text: ",", type: 'normal' }, { text: "\n", type: 'normal' },
    { text: "        ", type: 'normal' }, { text: "'warmth'", type: 'string' }, { text: ": ", type: 'normal' }, { text: "float", type: 'func' }, { text: "(", type: 'normal' }, { text: "'inf'", type: 'string' }, { text: ")", type: 'normal' }, { text: "\n", type: 'normal' },
    { text: "    }", type: 'normal' }, { text: "\n", type: 'normal' },
    { text: "\n", type: 'normal' },

    { text: "    # Connexion aux cœurs...", type: 'comment' },
    { text: "    for", type: 'keyword' }, { text: " person ", type: 'normal' }, { text: "in", type: 'keyword' }, { text: " universe.everyone:", type: 'normal' }, { text: "\n", type: 'normal' },
    { text: "        person.fill_with(", type: 'normal' }, { text: "Joy", type: 'func' }, { text: ")", type: 'normal' }, { text: "\n", type: 'normal' },
    { text: "        person.wrap_in(", type: 'normal' }, { text: "Love", type: 'func' }, { text: ")", type: 'normal' }, { text: "\n", type: 'normal' },
    { text: "\n", type: 'normal' },

    { text: "    return", type: 'keyword' }, { text: " \"Joyeux Noël ! ✨\"", type: 'string' }, { text: "\n", type: 'normal' },
    { text: "\n", type: 'normal' },
    { text: "celebrate_christmas()", type: 'normal' },
];

const typewriterElement = document.getElementById('typewriter');
const deployBtn = document.getElementById('deployBtn');
const codeEditor = document.getElementById('codeEditor');
const cardContainer = document.getElementById('cardContainer');
// 🎁 Configuration de la magie sonore
const bgMusic = document.getElementById('bgMusic');
const ambienceWind = document.getElementById('ambianceWind');
const ambienceFire = document.getElementById('ambianceFire');
const soundOverlay = document.getElementById('soundOverlay');
const startBtn = document.getElementById('startExperienceBtn');

let audioStarted = false;

// 🕯️ Allumage de l'ambiance via le Bouton "Entrer"
startBtn.addEventListener('click', () => {
    if (!audioStarted) {
        // On règle les volumes pour une ambiance feutrée...
        ambienceWind.volume = 0.4;
        ambienceFire.volume = 0.5;
        bgMusic.volume = 0.6;

        // On lance les ambiances
        const p1 = ambienceWind.play();
        const p2 = ambienceFire.play();

        // Gestion des erreurs (juste au cas où)
        Promise.all([p1, p2]).catch(e => console.log("Erreur audio:", e));

        audioStarted = true;

        // On fait disparaître l'overlay avec une transition douce
        soundOverlay.style.transition = "opacity 1s ease";
        soundOverlay.style.opacity = '0';
        setTimeout(() => soundOverlay.remove(), 1000);

        // On lance la machine à écrire APRES l'interaction pour synchroniser
        setTimeout(typeWriter, 500);
        startSnow();
        startEmbers(); // Ajout des braises pour le côté "Foyer"
    }
});

let lineIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (lineIndex < codeLines.length) {
        const line = codeLines[lineIndex];
        const span = document.createElement('span');
        span.className = line.type || 'normal';
        typewriterElement.appendChild(span);

        let text = line.text;
        let i = 0;

        function typeChar() {
            if (i < text.length) {
                span.textContent += text.charAt(i);
                i++;
                // Variation de vitesse plus naturelle
                setTimeout(typeChar, Math.random() * 40 + 20);
            } else {
                lineIndex++;
                typewriterElement.scrollTop = typewriterElement.scrollHeight;
                setTimeout(typeWriter, 100);
            }
        }
        typeChar();
    } else {
        deployBtn.disabled = false;
        deployBtn.classList.add('ready');
    }
}

// ❄️ Lancement via le bouton Start (plus de chargement auto)
// window.addEventListener('load', () => {});

// 🚀 Le Grand Moment : CLIC sur Déployer !
deployBtn.addEventListener('click', () => {
    // 1. Transition sonore
    fadeOut(ambienceWind);
    fadeOut(ambienceFire);
    bgMusic.play();

    // 2. L'éditeur de code s'efface
    codeEditor.classList.add('deployed');

    // 3. Explosion de joie
    createExplosion();

    // 4. La Carte apparaît
    setTimeout(() => {
        cardContainer.classList.remove('hidden');
        cardContainer.classList.add('visible');
    }, 800);
});

function fadeOut(audio) {
    let vol = audio.volume;
    const interval = setInterval(() => {
        if (vol > 0.05) {
            vol -= 0.05;
            audio.volume = vol;
        } else {
            audio.pause();
            clearInterval(interval);
        }
    }, 100);
}

// 🌨️ La neige qui tombe doucement (Améliorée)
function startSnow() {
    setInterval(() => {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 4 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.background = 'white';
        p.style.boxShadow = '0 0 5px white';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = -10 + 'px';

        // Vent simulé (léger déplacement horizontal)
        const wind = Math.random() * 20 - 10 + 'vw';
        p.style.setProperty('--wind', wind);

        p.style.animation = `snowFall ${Math.random() * 5 + 5}s linear forwards`;
        p.style.opacity = Math.random() * 0.7 + 0.3;

        document.body.appendChild(p);
        p.addEventListener('animationend', () => p.remove());
    }, 100); // Plus de densité
}

// 🔥 Petites braises qui montent (Ambiance Feu)
function startEmbers() {
    setInterval(() => {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 3 + 1;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.background = 'rgb(255, 100, 0)'; // Orange feu
        p.style.boxShadow = '0 0 8px rgb(255, 50, 0)';
        p.style.borderRadius = '50%';

        // Position aléatoire en bas
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = '105vh';

        p.style.animation = `emberRise ${Math.random() * 4 + 3}s ease-out forwards`;
        p.style.opacity = Math.random() * 0.8;

        document.body.appendChild(p);
        p.addEventListener('animationend', () => p.remove());
    }, 150);
}

// Explosion// ✨ Le feu d'artifice de particules (Explonsion finale)
function createExplosion() {
    const colors = ['#f59e0b', '#10b981', '#ef4444', '#ffffff'];
    const count = 150;

    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';

        const size = Math.random() * 10 + 5;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.background = colors[Math.floor(Math.random() * colors.length)];

        // Random start position
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = -10 + 'px';

        // Random animation duration
        p.style.animationDuration = (Math.random() * 3 + 2) + 's';
        p.style.opacity = Math.random();

        document.body.appendChild(p);

        // Cleanup
        p.addEventListener('animationend', () => p.remove());
    }

    // Snow Loop
    setInterval(() => {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.width = '4px';
        p.style.height = '4px';
        p.style.background = 'white';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = -5 + 'px';
        p.style.animationDuration = (Math.random() * 5 + 5) + 's';
        p.style.filter = 'blur(1px)';
        document.body.appendChild(p);
        p.addEventListener('animationend', () => p.remove());
    }, 200);
}

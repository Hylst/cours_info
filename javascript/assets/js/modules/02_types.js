// ============ SECTION 2: Types Analyzer ============

const typeDescriptions = {
    'Number': {
        icon: '🔢',
        desc: 'Représente tous les nombres (entiers et à virgule).',
        code: 'let age = 25;\nlet price = 19.99;\nlet infinity = 1 / 0;',
        note: 'Attention : JS a une limite de précision (Number.MAX_SAFE_INTEGER).'
    },
    'String': {
        icon: '🔤',
        desc: 'Chaîne de caractères (texte). Peut utiliser " ", \' \' ou ` `.',
        code: 'let name = "Alice";\nlet greeting = `Hello ${name}!`;',
        note: 'Les strings sont immuables : on ne peut pas modifier un caractère individuellement.'
    },
    'Boolean': {
        icon: '✅',
        desc: 'Vrai ou Faux. La base de toute logique.',
        code: 'let isDev = true;\nlet hasCoffee = false;',
        note: 'Utilisé dans les conditions (if/else).'
    },
    'BigInt': {
        icon: '🕸️',
        desc: 'Pour les entiers arbitrairement grands (plus grands que 2^53 - 1).',
        code: 'let huge = 9007199254740991n;',
        note: 'Notez le "n" à la fin du nombre.'
    },
    'Null': {
        icon: '👻',
        desc: 'Représente une absence INTENTIONNELLE de valeur.',
        code: 'let user = null; // Pas encore chargé',
        note: 'typeof null renvoie "object" (c\'est un bug historique de JS).'
    },
    'Undefined': {
        icon: '❓',
        desc: 'Variable déclarée mais non définie (pas encore de valeur).',
        code: 'let config;\nconsole.log(config); // undefined',
        note: 'C\'est JS qui dit "je ne sais pas". Null c\'est vous qui dites "c\'est vide".'
    },
    'Symbol': {
        icon: '🔑',
        desc: 'Identifiant unique et immuable.',
        code: 'const id = Symbol("id");',
        note: 'Souvent utilisé pour des clés de propriétés d\'objet privées/cachées.'
    },
    'Object': {
        icon: '📦',
        desc: 'Collection de données ou entités complexes. Stocké dans la LE TAS (Heap).',
        code: 'let user = {\n  name: "Bob",\n  role: "Admin"\n};\nlet tags = ["js", "html"]; // Array est aussi un objet',
        note: 'Passé par référence, pas par valeur !'
    }
};

function showTypeDetails(type, el) {
    // 1. Highlight active card
    document.querySelectorAll('.type-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');

    // 2. Get data
    const data = typeDescriptions[type];
    const container = document.getElementById('type-detail-container');

    // 3. Inject content
    container.style.display = 'block';
    container.innerHTML = `
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:15px;">
            <div style="font-size:2.5rem">${data.icon}</div>
            <div>
                <h3 style="margin:0; font-size:1.4rem; color:var(--primary)">${type}</h3>
                <p style="margin:5px 0 0 0; color:var(--text);">${data.desc}</p>
            </div>
        </div>
        <div style="background:#0f141c; padding:15px; border-radius:6px; border-left:4px solid var(--accent); margin-bottom:10px">
            <pre style="margin:0; font-family:'JetBrains Mono'; color:#d4d4d4;"><code>${data.code}</code></pre>
        </div>
        <div style="font-size:0.9rem; color:var(--muted)">💡 <strong>Note :</strong> ${data.note}</div>
    `;

    // Smooth scroll if needed
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Animated Memory Copy Demonstration
function animateMemoryCopy() {
    const codeBlock = document.getElementById('mem-demo-code');
    const stackB = document.getElementById('stack-b');
    const stackUser1 = document.getElementById('stack-user1');
    const stackUser2 = document.getElementById('stack-user2');
    const heapObj = document.getElementById('heap-obj');

    // Reset
    [stackB, stackUser1, stackUser2, heapObj].forEach(el => el.style.opacity = '0.3');
    codeBlock.style.borderLeftColor = 'var(--muted)';

    // Step 1: Highlight primitive copy (300ms delay between steps)
    setTimeout(() => {
        codeBlock.children[0].style.color = 'var(--primary)';
        codeBlock.children[1].style.color = 'var(--primary)';
        stackB.style.opacity = '1';
        stackB.style.transform = 'scale(1.05)';
        setTimeout(() => stackB.style.transform = 'scale(1)', 200);
    }, 300);

    // Step 2: Show object creation
    setTimeout(() => {
        codeBlock.children[0].style.color = '';
        codeBlock.children[1].style.color = '';
        codeBlock.children[2].style.color = 'var(--accent)';
        stackUser1.style.opacity = '1';
        heapObj.style.opacity = '1';
        heapObj.style.transform = 'scale(1.05)';
        setTimeout(() => heapObj.style.transform = 'scale(1)', 200);
    }, 1500);

    // Step 3: Show reference copy (DANGER!)
    setTimeout(() => {
        codeBlock.children[2].style.color = '';
        codeBlock.children[3].style.color = '#f44336'; // Red for danger
        codeBlock.style.borderLeftColor = '#f44336';
        stackUser2.style.opacity = '1';
        stackUser2.style.transform = 'scale(1.08)';
        stackUser2.style.borderColor = '#f44336';

        // Pulse the heap object to show it's the SAME reference
        heapObj.style.borderColor = '#f44336';
        heapObj.style.transform = 'scale(1.08)';

        setTimeout(() => {
            stackUser2.style.transform = 'scale(1)';
            heapObj.style.transform = 'scale(1)';
        }, 400);
    }, 2800);

    // Step 4: Demonstrate mutation issue
    setTimeout(() => {
        const heapContent = document.getElementById('heap-content');
        heapContent.innerHTML = '{ name: <span style="color:#f44336">"Bob"</span> } <span style="font-size:0.8em">← Modifié!</span>';
        heapObj.style.animation = 'pulse 0.5s ease';
    }, 4200);

    // Reset after demo
    setTimeout(() => {
        codeBlock.children[3].style.color = '';
        codeBlock.style.borderLeftColor = 'var(--muted)';
        stackUser2.style.borderColor = 'var(--border)';
        heapObj.style.borderColor = 'var(--accent)';
        heapObj.style.animation = '';
        document.getElementById('heap-content').innerHTML = '{ name: "Alice" }';
    }, 6000);
}

function demoTypes() {
    // Legacy mapping if needed, but we use analyzeType now directly via input event
    const input = document.getElementById('demo-input');
    analyzeType(input.value);
}

function analyzeType(valStr) {
    const container = document.getElementById('type-analysis');
    const isEval = document.getElementById('eval-check').checked;

    let realVal;
    let label = "";

    if (valStr.trim() === "") {
        container.innerHTML = '<div class="convention-card" style="text-align:center; padding:10px; grid-column: 1/-1">Tapez une valeur ci-dessus</div>';
        return;
    }

    try {
        if (isEval) {
            // DANGER: Eval is evil, but acceptable for a client-side sandbox demo
            // We use a safe-ish wrapper function
            realVal = new Function('return ' + valStr)();
            label = "Évalué";
        } else {
            // Mode String brut
            if (valStr === "true") realVal = true;
            else if (valStr === "false") realVal = false;
            else if (valStr === "null") realVal = null;
            else if (valStr === "undefined") realVal = undefined;
            else if (valStr === "NaN") realVal = NaN;
            else if (!isNaN(Number(valStr)) && valStr.trim() !== "") realVal = Number(valStr);
            else realVal = valStr; // String par défaut

            label = "Interprété";
        }
    } catch (e) {
        container.innerHTML = `<div class="convention-card" style="color:#ff5f56; grid-column: 1/-1">Erreur de syntaxe: ${e.message}</div>`;
        return;
    }

    // Determine Type
    let type = typeof realVal;
    if (realVal === null) type = "object (null bug)";
    if (Array.isArray(realVal)) type = "object (Array)";
    if (Number.isNaN(realVal)) type = "number (NaN)";

    // Coercions
    const asBool = Boolean(realVal);
    const asNum = Number(realVal);
    const asStr = String(realVal);

    const cards = [
        { title: "Valeur", val: String(realVal), color: "var(--primary)" },
        { title: "typeof", val: type, color: "var(--accent)" },
        { title: "Boolean()", val: asBool ? "true" : "false", color: asBool ? "#4caf50" : "#ff5f56" },
        { title: "Number()", val: String(asNum), color: "#ce9178" },
        { title: "String()", val: `"${asStr}"`, color: "#a5d6ff" }
    ];

    container.innerHTML = cards.map(c => `
        <div class="convention-card" style="padding:10px; border-top: 3px solid ${c.color}">
            <div style="font-size:0.75rem; color:var(--muted); margin-bottom:4px">${c.title}</div>
            <div style="font-family:'JetBrains Mono'; font-weight:bold; word-break:break-all">${c.val}</div>
        </div>
    `).join('');
}

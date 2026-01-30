// ============ SECTION 13: Storage ============

// Original demo functions (kept for backward compatibility)
function demoLocalStorage() {
    const input = document.getElementById('demo-storage-input');
    const output = document.getElementById('demo-storage-output');

    if (input.value) {
        localStorage.setItem('memoJS', input.value);
        output.innerHTML = `<span style="color:var(--green)">✓ Sauvegardé: "${input.value}"</span>`;
    }
}

function demoLoadStorage() {
    const output = document.getElementById('demo-storage-output');
    const saved = localStorage.getItem('memoJS');

    if (saved) {
        output.innerHTML = `<span style="color:var(--accent)">📦 Stocké: "${saved}"</span>`;
    } else {
        output.innerHTML = '<span style="color:var(--dim)">Rien en mémoire</span>';
    }
}

// New interactive playground functions
function demoSetItem() {
    const key = document.getElementById('storage-key').value;
    const value = document.getElementById('storage-value').value;
    const output = document.getElementById('storage-output');

    if (!key) {
        output.innerHTML = `<span style="color:var(--red)">❌ Veuillez entrer une clé</span>`;
        return;
    }

    localStorage.setItem(key, value);
    output.innerHTML = `
        <div style="color:var(--green); margin-bottom:8px">✅ <strong>setItem</strong> réussi</div>
        <div style="opacity:0.8">Clé : <code>${key}</code></div>
        <div style="opacity:0.8">Valeur : <code>${value}</code></div>
        <div style="opacity:0.6; margin-top:8px; font-size:0.8rem">💡 Rechargez la page, la donnée persistera !</div>
    `;
}

function demoGetItem() {
    const key = document.getElementById('storage-key').value;
    const output = document.getElementById('storage-output');

    if (!key) {
        output.innerHTML = `<span style="color:var(--red)">❌ Veuillez entrer une clé</span>`;
        return;
    }

    const value = localStorage.getItem(key);

    if (value !== null) {
        output.innerHTML = `
            <div style="color:var(--accent); margin-bottom:8px">📖 <strong>getItem</strong> réussi</div>
            <div style="opacity:0.8">Clé : <code>${key}</code></div>
            <div style="opacity:0.8">Valeur : <code>${value}</code></div>
        `;
    } else {
        output.innerHTML = `
            <div style="color:var(--orange); margin-bottom:8px">⚠️ Clé introuvable</div>
            <div style="opacity:0.8">La clé <code>${key}</code> n'existe pas dans le localStorage</div>
        `;
    }
}

function demoRemoveItem() {
    const key = document.getElementById('storage-key').value;
    const output = document.getElementById('storage-output');

    if (!key) {
        output.innerHTML = `<span style="color:var(--red)">❌ Veuillez entrer une clé</span>`;
        return;
    }

    const existed = localStorage.getItem(key) !== null;
    localStorage.removeItem(key);

    if (existed) {
        output.innerHTML = `
            <div style="color:var(--green); margin-bottom:8px">🗑️ <strong>removeItem</strong> réussi</div>
            <div style="opacity:0.8">La clé <code>${key}</code> a été supprimée</div>
        `;
    } else {
        output.innerHTML = `
            <div style="color:var(--dim); margin-bottom:8px">ℹ️ Aucune action nécessaire</div>
            <div style="opacity:0.8">La clé <code>${key}</code> n'existait pas</div>
        `;
    }
}

function demoClearAll() {
    const output = document.getElementById('storage-output');
    const count = localStorage.length;

    localStorage.clear();

    output.innerHTML = `
        <div style="color:var(--orange); margin-bottom:8px">🧹 <strong>clear()</strong> exécuté</div>
        <div style="opacity:0.8">${count} élément(s) supprimé(s)</div>
        <div style="opacity:0.6; margin-top:8px; font-size:0.8rem">⚠️ Tout le localStorage a été vidé</div>
    `;
}

function demoListAll() {
    const output = document.getElementById('storage-output');
    const count = localStorage.length;

    if (count === 0) {
        output.innerHTML = `
            <div style="opacity:0.5; text-align:center">localStorage vide</div>
        `;
        return;
    }

    let html = `<div style="color:var(--accent); margin-bottom:12px">📋 <strong>${count} élément(s)</strong> dans localStorage</div>`;

    for (let i = 0; i < count; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const truncatedValue = value.length > 50 ? value.substring(0, 50) + '...' : value;

        html += `
            <div style="background:rgba(255,255,255,0.03); padding:8px; margin:5px 0; border-radius:4px; border-left:3px solid var(--primary)">
                <div style="color:var(--accent)"><strong>${key}</strong></div>
                <div style="opacity:0.7; font-size:0.85rem">${truncatedValue}</div>
            </div>
        `;
    }

    output.innerHTML = html;
}

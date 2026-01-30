// ============ SECTION 8: Objects - Explorer & Clone Tester ============

function exploreObject() {
    const input = document.getElementById('obj-input').value;
    const output = document.getElementById('explorer-output');

    try {
        const obj = JSON.parse(input);

        let html = '<div style="margin-bottom:15px"><strong style="color:var(--accent)">📊 Structure de l\'objet :</strong></div>';
        html += renderObject(obj, 0);

        html += '<div style="margin-top:20px; padding:12px; background:rgba(99,102,241,0.1); border-radius:6px">';
        html += `<strong>Statistiques :</strong><br>`;
        html += `• Clés : ${Object.keys(obj).length}<br>`;
        html += `• Type : ${Array.isArray(obj) ? 'Array' : 'Object'}<br>`;
        html += `• Profondeur : ${getDepth(obj)}`;
        html += '</div>';

        output.innerHTML = html;

    } catch (error) {
        output.innerHTML = `<div style="color:#f44336">❌ Erreur JSON: ${error.message}</div>`;
    }
}

function renderObject(obj, level) {
    if (obj === null) return '<span style="color:#f44336">null</span>';
    if (obj === undefined) return '<span style="color:#f44336">undefined</span>';

    const indent = level * 20;
    let html = '';

    if (typeof obj !== 'object') {
        return `<span class="obj-val">${JSON.stringify(obj)}</span>`;
    }

    if (Array.isArray(obj)) {
        html += '<span style="color:var(--muted)">[</span><div class="obj-nested">';
        obj.forEach((item, idx) => {
            html += `<div><span class="obj-key">${idx}</span>: ${renderObject(item, level + 1)}</div>`;
        });
        html += '</div><span style="color:var(--muted)">]</span>';
    } else {
        html += '<span style="color:var(--muted)">{</span><div class="obj-nested">';
        for (const [key, value] of Object.entries(obj)) {
            html += `<div><span class="obj-key">${key}</span>: ${renderObject(value, level + 1)}</div>`;
        }
        html += '</div><span style="color:var(--muted)">}</span>';
    }

    return html;
}

function getDepth(obj, currentDepth = 1) {
    if (typeof obj !== 'object' || obj === null) return currentDepth;

    let maxDepth = currentDepth;
    for (const value of Object.values(obj)) {
        if (typeof value === 'object' && value !== null) {
            maxDepth = Math.max(maxDepth, getDepth(value, currentDepth + 1));
        }
    }
    return maxDepth;
}

function testClone() {
    const input = document.getElementById('obj-input').value;
    const output = document.getElementById('explorer-output');

    try {
        const original = JSON.parse(input);

        // Shallow copy
        const shallow = { ...original };

        // Deep copy
        const deep = structuredClone(original);

        let html = '<div style="margin-bottom:15px"><strong style="color:var(--accent)">🧪 Test de Clone :</strong></div>';

        html += '<div style="background:rgba(255,152,0,0.1); padding:12px; border-radius:6px; margin:10px 0; border-left:3px solid #ff9800">';
        html += '<strong style="color:#ff9800">Shallow Copy (Spread)</strong><br>';
        html += '<code>const copy = {...original}</code><br>';
        html += '<div style="margin-top:8px; font-size:0.9rem">';

        // Test shallow
        if (hasNestedObjects(original)) {
            html += '⚠️ Attention : Les objets imbriqués sont partagés !<br>';
            html += 'Modifier <code>copy.nested.x</code> modifiera aussi <code>original.nested.x</code>';
        } else {
            html += '✅ OK pour cet objet (pas d\'imbrication)';
        }
        html += '</div></div>';

        html += '<div style="background:rgba(76,175,80,0.1); padding:12px; border-radius:6px; margin:10px 0; border-left:3px solid #4caf50">';
        html += '<strong style="color:#4caf50">Deep Copy (structuredClone)</strong><br>';
        html += '<code>const copy = structuredClone(original)</code><br>';
        html += '<div style="margin-top:8px; font-size:0.9rem">';
        html += '✅ Copie complète et indépendante<br>';
        html += '✅ Tous les niveaux sont clonés';
        html += '</div></div>';

        // Comparison
        html += '<div style="margin-top:15px; padding:12px; background:rgba(99,102,241,0.1); border-radius:6px">';
        html += '<strong>Comparaison :</strong><br>';
        html += `• Shallow === Original ? ${shallow === original ? '❌ Oui (même référence!)' : '✅ Non'}<br>`;
        html += `• Deep === Original ? ${deep === original ? '❌ Oui' : '✅ Non'}<br>`;
        html += `• JSON égal ? ${JSON.stringify(deep) === JSON.stringify(original) ? '✅ Oui' : '❌ Non'}`;
        html += '</div>';

        output.innerHTML = html;

    } catch (error) {
        output.innerHTML = `<div style="color:#f44336">❌ Erreur: ${error.message}</div>`;
    }
}

function hasNestedObjects(obj) {
    if (typeof obj !== 'object' || obj === null) return false;

    for (const value of Object.values(obj)) {
        if (typeof value === 'object' && value !== null) {
            return true;
        }
    }
    return false;
}

// Demo functions for console
function demoPrototype() {
    console.log("=== Prototype Chain Demo ===");

    function User(name) {
        this.name = name;
    }

    User.prototype.greet = function () {
        return `Hello, ${this.name}`;
    };

    const user = new User("Alice");

    console.log("user.name:", user.name); // Own property
    console.log("user.greet():", user.greet()); // From prototype
    console.log("user.hasOwnProperty('name'):", user.hasOwnProperty('name')); // true
    console.log("user.hasOwnProperty('greet'):", user.hasOwnProperty('greet')); // false
    console.log("Prototype chain:", Object.getPrototypeOf(user) === User.prototype);
}

function demoClone() {
    console.log("=== Clone Demo ===");

    const original = {
        a: 1,
        nested: { b: 2 }
    };

    // Shallow
    const shallow = { ...original };
    shallow.nested.b = 99;
    console.log("Original after shallow mutation:", original.nested.b); // 99 !

    // Deep
    const original2 = {
        a: 1,
        nested: { b: 2 }
    };
    const deep = structuredClone(original2);
    deep.nested.b = 99;
    console.log("Original2 after deep mutation:", original2.nested.b); // 2 (intact)
}

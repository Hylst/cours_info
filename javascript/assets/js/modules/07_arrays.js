// ============ SECTION 7: Arrays - Method Chain Builder ============

let methodChain = [];
let currentArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const methodExamples = {
    map: { code: '.map(x => x * 2)', fn: arr => arr.map(x => x * 2) },
    filter: { code: '.filter(x => x % 2 === 0)', fn: arr => arr.filter(x => x % 2 === 0) },
    reduce: { code: '.reduce((a, b) => a + b, 0)', fn: arr => arr.reduce((a, b) => a + b, 0) },
    find: { code: '.find(x => x > 5)', fn: arr => arr.find(x => x > 5) },
    findIndex: { code: '.findIndex(x => x > 5)', fn: arr => arr.findIndex(x => x > 5) },
    includes: { code: '.includes(5)', fn: arr => arr.includes(5) },
    some: { code: '.some(x => x > 8)', fn: arr => arr.some(x => x > 8) },
    every: { code: '.every(x => x > 0)', fn: arr => arr.every(x => x > 0) },
    push: { code: '.push(99) // Mutate!', fn: arr => { arr.push(99); return arr; } },
    splice: { code: '.splice(0, 2) // Mutate!', fn: arr => { arr.splice(0, 2); return arr; } },
    sort: { code: '.sort((a, b) => b - a)', fn: arr => [...arr].sort((a, b) => b - a) },
    slice: { code: '.slice(2, 5)', fn: arr => arr.slice(2, 5) },
    flat: { code: '.flat()', fn: arr => arr.flat() },
    join: { code: '.join(", ")', fn: arr => arr.join(', ') },
    concat: { code: '.concat([100, 200])', fn: arr => arr.concat([100, 200]) }
};

function selectMethod(method) {
    // Visual feedback
    document.querySelectorAll('.method-card').forEach(card => card.classList.remove('selected'));
    event.target.closest('.method-card').classList.add('selected');

    // Add to chain
    methodChain.push(method);
    updateChainDisplay();
}

function updateChainDisplay() {
    const chainDisplay = document.getElementById('method-chain');

    if (methodChain.length === 0) {
        chainDisplay.innerHTML = '<div style="opacity:0.5; text-align:center">Sélectionnez des méthodes pour construire une chaîne</div>';
        return;
    }

    let html = '<div style="margin-bottom:10px"><strong>Chaîne construite :</strong></div>';
    html += '<div class="chain-step">array</div>';

    methodChain.forEach((method, idx) => {
        html += `<div class="chain-step">${methodExamples[method].code}</div>`;
    });

    chainDisplay.innerHTML = html;
}

function executeChain() {
    const inputStr = document.getElementById('builder-input').value;
    const resultDiv = document.getElementById('chain-result');

    try {
        // Parse input array
        let arr = JSON.parse(inputStr);

        if (!Array.isArray(arr)) {
            throw new Error("L'input doit être un array");
        }

        // Store original
        const original = JSON.stringify(arr);

        // Execute chain
        let result = arr;
        let steps = [`<div style="margin-bottom:10px"><strong>Exécution étape par étape :</strong></div>`];
        steps.push(`<div style="opacity:0.7">0. Initial: ${JSON.stringify(result)}</div>`);

        methodChain.forEach((method, idx) => {
            result = methodExamples[method].fn(result);
            steps.push(`<div style="margin:5px 0">
                ${idx + 1}. Après <code>${method}()</code>: 
                <strong style="color:var(--primary)">${JSON.stringify(result)}</strong>
            </div>`);
        });

        resultDiv.innerHTML = `
            ${steps.join('')}
            <div style="margin-top:15px; padding:12px; background:rgba(99,102,241,0.2); border-radius:6px; border-left:3px solid var(--primary)">
                <strong>Résultat final :</strong> 
                <span style="font-size:1.1rem; color:var(--accent)">${JSON.stringify(result)}</span>
            </div>
        `;

    } catch (error) {
        resultDiv.innerHTML = `<div style="color:#f44336">❌ Erreur: ${error.message}</div>`;
    }
}

function resetChain() {
    methodChain = [];
    updateChainDisplay();
    document.getElementById('chain-result').innerHTML = '<div style="opacity:0.5; text-align:center">Résultat...</div>';
    document.querySelectorAll('.method-card').forEach(card => card.classList.remove('selected'));
}

// Demo functions for console
function demoReduce() {
    console.log("=== Reduce Examples ===");

    const numbers = [1, 2, 3, 4, 5];

    // Sum
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    console.log("Sum:", sum);

    // Max
    const max = numbers.reduce((acc, n) => Math.max(acc, n), -Infinity);
    console.log("Max:", max);

    // Group by
    const users = [
        { role: 'admin', name: 'Alice' },
        { role: 'user', name: 'Bob' },
        { role: 'admin', name: 'Charlie' }
    ];
    const byRole = users.reduce((acc, user) => {
        (acc[user.role] = acc[user.role] || []).push(user);
        return acc;
    }, {});
    console.log("Grouped:", byRole);
}

function demoImmutability() {
    console.log("=== Immutability Demo ===");

    const original = [1, 2, 3];
    console.log("Original:", original);

    // Mutation (bad)
    const mutated = original;
    mutated.push(4);
    console.log("After push:", original); // [1, 2, 3, 4] - Original modifié !

    // Immutable (good)
    const original2 = [1, 2, 3];
    const immutable = [...original2, 4];
    console.log("Original2:", original2); // [1, 2, 3] - Intact
    console.log("Immutable:", immutable); // [1, 2, 3, 4]
}

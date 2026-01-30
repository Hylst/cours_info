// ============ SECTION 4: Conditions - Interactive Playground ============

let currentPattern = null;

function parseDemoInput(str) {
    if (str === "true") return true;
    if (str === "false") return false;
    if (str === "null") return null;
    if (str === "undefined") return undefined;
    if (str === "NaN") return NaN;
    if (str === '""' || str === "''") return "";
    if (str === "0") return 0;
    if (str === "[]") return [];
    if (str === "{}") return {};

    const num = Number(str);
    if (!isNaN(num) && str.trim() !== "") return num;

    return str;
}

function testPattern(pattern) {
    currentPattern = pattern;

    // Visual feedback
    document.querySelectorAll('.pg-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const output = document.getElementById('pg-output');
    output.innerHTML = `<div style="color:var(--accent); margin-bottom:10px">✓ Pattern sélectionné : <strong>${getPatternName(pattern)}</strong></div><div style="opacity:0.7">Entrez une valeur et cliquez sur Exécuter</div>`;
}

function getPatternName(pattern) {
    const names = {
        ternary: 'Ternaire (? :)',
        shortcircuit: 'Short-Circuit (&&)',
        nullish: 'Nullish Coalescing (??)',
        optional: 'Optional Chaining (?.)',
        guard: 'Guard Clauses',
        lookup: 'Object Lookup'
    };
    return names[pattern] || pattern;
}

function runPlayground() {
    if (!currentPattern) {
        document.getElementById('pg-output').innerHTML = '<div style="color:#f44336">⚠️ Sélectionnez d\'abord un pattern</div>';
        return;
    }

    const inputStr = document.getElementById('pg-input').value;
    const val = parseDemoInput(inputStr);
    const output = document.getElementById('pg-output');

    let result = '';
    let code = '';
    let explanation = '';

    switch (currentPattern) {
        case 'ternary':
            const ternaryResult = val ? "✅ Truthy" : "❌ Falsy";
            code = `const result = ${inputStr} ? "✅ Truthy" : "❌ Falsy";`;
            result = ternaryResult;
            explanation = `Le ternaire évalue <code>${inputStr}</code> comme ${!!val ? 'vrai' : 'faux'}.`;
            break;

        case 'shortcircuit':
            const scResult = val && "ACTION EXÉCUTÉE";
            code = `${inputStr} && console.log("ACTION");`;
            result = scResult || "Rien (court-circuité)";
            explanation = val
                ? `<code>${inputStr}</code> est Truthy → l'action s'exécute.`
                : `<code>${inputStr}</code> est Falsy → court-circuit, rien ne s'exécute.`;
            break;

        case 'nullish':
            const nullishResult = val ?? "DEFAULT";
            const orResult = val || "DEFAULT";
            code = `const x = ${inputStr} ?? "DEFAULT";\nconst y = ${inputStr} || "DEFAULT";`;
            result = `?? → ${JSON.stringify(nullishResult)}\n|| → ${JSON.stringify(orResult)}`;
            explanation = (val === null || val === undefined)
                ? `<code>${inputStr}</code> est null/undefined → prend DEFAULT dans les deux cas.`
                : `<code>${inputStr}</code> est défini → <code>??</code> le garde, <code>||</code> ${!!val ? 'aussi' : 'prend DEFAULT (Falsy)'}.`;
            break;

        case 'optional':
            const mockObj = { user: { name: "Alice", address: { city: "Paris" } } };
            const safeAccess = val ? mockObj?.user?.address?.city : undefined;
            code = `const obj = { user: { address: { city: "Paris" } } };\nconst city = obj?.user?.address?.city;`;
            result = safeAccess || "undefined (accès safe)";
            explanation = `L'optional chaining évite les crashes. Si une propriété n'existe pas, retourne <code>undefined</code> au lieu de crasher.`;
            break;

        case 'guard':
            code = `function process(val) {\n  if (!val) return "❌ Rejeté";\n  if (val < 0) return "❌ Invalide";\n  return "✅ Traité";\n}`;
            let guardResult = "❌ Rejeté";
            if (val) {
                if (typeof val === 'number' && val < 0) {
                    guardResult = "❌ Invalide (négatif)";
                } else {
                    guardResult = "✅ Traité";
                }
            }
            result = guardResult;
            explanation = `Les Guard Clauses valident en début de fonction. Ici : ${guardResult === "✅ Traité" ? 'toutes les validations passent' : 'une validation échoue'}.`;
            break;

        case 'lookup':
            const statusMap = {
                0: "🔴 Inactif",
                1: "🟢 Actif",
                2: "🟡 En attente"
            };
            const lookupResult = statusMap[val] ?? "❓ Inconnu";
            code = `const statusMap = {\n  0: "🔴 Inactif",\n  1: "🟢 Actif",\n  2: "🟡 En attente"\n};\nconst status = statusMap[${inputStr}] ?? "❓ Inconnu";`;
            result = lookupResult;
            explanation = `Object Lookup remplace <code>switch</code>. Performance O(1). Ici : ${lookupResult}`;
            break;
    }

    output.innerHTML = `
        <div style="margin-bottom:15px">
            <div style="color:var(--accent); font-weight:bold; margin-bottom:8px">📝 Code exécuté :</div>
            <pre style="background:rgba(0,0,0,0.3); padding:10px; border-radius:6px; overflow-x:auto"><code class="language-javascript">${code}</code></pre>
        </div>
        <div style="margin-bottom:15px">
            <div style="color:var(--primary); font-weight:bold; margin-bottom:8px">📊 Résultat :</div>
            <div style="background:rgba(99,102,241,0.2); padding:12px; border-radius:6px; border-left:3px solid var(--primary); white-space:pre-wrap">${result}</div>
        </div>
        <div>
            <div style="color:var(--muted); font-weight:bold; margin-bottom:8px">💡 Explication :</div>
            <div style="opacity:0.9">${explanation}</div>
        </div>
    `;

    // Re-highlight code if Prism is available
    if (window.Prism) {
        setTimeout(() => window.Prism.highlightAll(), 50);
    }
}

// Legacy demo function (kept for compatibility)
function demoTruthy() {
    const inputStr = document.getElementById('tf-input')?.value || "0";
    const val = parseDemoInput(inputStr);
    const isTruthy = !!val;

    console.log(`Truthy test: ${inputStr} = ${isTruthy}`);
}

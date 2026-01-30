// ============ SECTION 2: Types Analyzer ============

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

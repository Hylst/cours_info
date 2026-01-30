// ============ SECTION 3: Operators Playground ============

function parseInput(str) {
    if (str === "true") return true;
    if (str === "false") return false;
    if (str === "null") return null;
    if (str === "undefined") return undefined;
    if (str === "NaN") return NaN;
    if (str === "\"\"") return "";
    if (str === "[]") return []; // Simplified for demo
    if (str === "{}") return {}; // Simplified for demo

    // Try number
    const num = Number(str);
    if (!isNaN(num) && str.trim() !== "") return num;

    return str; // Return as string default
}

function demoOperators() {
    const valA = parseInput(document.getElementById('op-input-1').value);
    const valB = parseInput(document.getElementById('op-input-2').value);
    const op = document.getElementById('op-selector').value;
    const resBox = document.getElementById('op-result');
    const detailsBox = document.getElementById('op-details');

    let result;
    let explanation = "";

    try {
        switch (op) {
            case "&&":
                result = valA && valB;
                explanation = !valA ? "Stoppé à A (Falsy)" : "Passé à B (A était Truthy)";
                break;
            case "||":
                result = valA || valB;
                explanation = valA ? "Stoppé à A (Truthy)" : "Passé à B (A était Falsy)";
                break;
            case "??":
                result = valA ?? valB;
                explanation = (valA !== null && valA !== undefined) ? "Gardé A (ni null ni undefined)" : "Fallback sur B";
                break;
            case "===":
                result = valA === valB;
                explanation = result ? "Valeurs et Types identiques" : "Différents";
                break;
            case "==":
                result = valA == valB;
                explanation = "Coercition en jeu " + (result ? "✅" : "❌");
                break;
            case "+":
                result = valA + valB;
                explanation = (typeof valA === 'string' || typeof valB === 'string') ? "Concaténation (String gagne)" : "Addition Mathématique";
                break;
        }

        // Format Result for Display
        let displayRes = result;
        if (typeof result === 'string') displayRes = `"${result}"`;
        if (result === null) displayRes = "null";
        if (result === undefined) displayRes = "undefined";

        resBox.innerHTML = `<span style="color:${result ? '#4caf50' : '#ce9178'}">${String(displayRes)}</span>`;
        if (typeof result === 'boolean' && op !== '===' && op !== '==') {
            // For boolean logic return the actual value causing the bool result logic isn't quite right for display but keeps it simple
            resBox.innerHTML = `<span style="color:${result ? '#4caf50' : '#ff5f56'}">${String(displayRes)}</span>`;
        }

        detailsBox.textContent = `Type résultant : ${typeof result} • ${explanation}`;

    } catch (e) {
        resBox.innerHTML = "Erreur";
        detailsBox.textContent = e.message;
    }
}

// ============ SECTION 1: Variables & Scope Viz ============

function demoScope(level) {
    const container = document.getElementById('demo-scope-viz');

    // Base Global Scope
    let html = `
        <div class="scope-box" style="border-color: var(--primary);">
            <div class="scope-label" style="color:var(--primary)">🌍 Global Scope</div>
            <div class="var-item">
                <span class="var-name">const APP_VERSION</span>
                <span class="var-val">"1.0.0"</span>
            </div>
    `;

    // Function Scope Injection
    if (level === 'function' || level === 'block') {
        html += `
            <div class="scope-box" style="margin-top:10px; border-color: var(--accent);">
                <div class="scope-label" style="color:var(--accent)">📦 Function setup()</div>
                <div class="var-item">
                    <span class="var-name">let user</span>
                    <span class="var-val">"Alice"</span>
                </div>
        `;

        // Block Scope Injection
        if (level === 'block') {
            html += `
                <div class="scope-box" style="margin-top:10px; border-color: #ff5f56;">
                    <div class="scope-label" style="color:#ff5f56">🧱 Block if(true)</div>
                    <div class="var-item">
                        <span class="var-name">let tempId</span>
                        <span class="var-val">12345</span>
                    </div>
                     <div class="var-item" style="opacity:0.5">
                        <span class="var-name" style="text-decoration:line-through">user</span>
                        <span class="var-val">(Shadowing possible)</span>
                    </div>
                </div>
            `;
        }

        html += `</div>`; // Close Function
    }

    html += `</div>`; // Close Global

    // Add Explanation Panel
    let explanation = "";
    if (level === 'global') explanation = "Seules les variables globales sont accessibles ici.";
    else if (level === 'function') explanation = "setup() peut voir ses propres variables ET celles du global (Closure).";
    else if (level === 'block') explanation = "Le bloc voit TOUT (ses variables, celles de la fonction, et globales). Mais l'inverse est faux !";

    html += `
        <div style="margin-top:10px; padding:10px; background:var(--bg2); border-left:3px solid var(--text); font-size:0.9rem">
            ℹ️ ${explanation}
        </div>
    `;

    container.innerHTML = html;
}

// Initial demo load (optional)
// document.addEventListener('DOMContentLoaded', () => demoScope('global'));

/* =====================================================
   COURS REACT - DEMONSTRATIONS (Simulations)
   Créé par Geoffroy Streit - 2025
   ===================================================== */

// ============ SECTION: JSX / Virtual DOM ============
function demoJSX() {
    const output = document.getElementById('demo-jsx-output');

    // Simulation d'un objet Virtual DOM
    const vNode = {
        type: 'div',
        props: {
            className: 'greeting',
            children: 'Hello React'
        }
    };

    output.innerHTML = `
        <div style="font-family:monospace; color:var(--muted)">
            // Ce que React voit (Virtual DOM)
        </div>
        <pre style="margin:5px 0; color:var(--primary)">${JSON.stringify(vNode, null, 2)}</pre>
        <div style="color:var(--green)">✓ Compilé en : React.createElement(...)</div>
    `;
}

// ============ SECTION: Components & Props ============
function demoProps() {
    const output = document.getElementById('demo-props-output');

    // Simulation d'un composant
    const Welcome = ({ name, role }) => `
        <div style="border:1px dashed var(--border); padding:10px; margin-bottom:5px; border-radius:6px;">
            <strong style="color:var(--primary)">Composant Welcome</strong><br>
            Bonjour, je suis ${name} (${role})
        </div>
    `;

    // Rendu simulé
    output.innerHTML =
        Welcome({ name: "Alice", role: "Admin" }) +
        Welcome({ name: "Bob", role: "User" });
}

// ============ SECTION: State (useState) ============
let count = 0;
function demoState() {
    const output = document.getElementById('demo-state-output');
    const display = document.getElementById('state-count');

    // Update simulé
    count++;

    // "Re-render"
    if (display) display.textContent = count;

    output.innerHTML = `
        <div style="margin-top:5px; color:var(--muted)">
            Cycle : 1. State change (${count}) -> 2. Trigger Re-render -> 3. DOM Update
        </div>
    `;
}

// ============ SECTION: Effects (useEffect) ============
function demoEffect() {
    const output = document.getElementById('demo-effect-output');
    output.textContent = "⏳ Effect pending...";

    setTimeout(() => {
        output.innerHTML = `
            <span style="color:var(--green)">✓ Effect exécuté !</span>
            <br>
            <small style="color:var(--muted)">(Simule un chargement de données ou un abonnement)</small>
        `;
    }, 1500);
}

// ============ SECTION: Lists ============
function demoLists() {
    const output = document.getElementById('demo-lists-output');
    const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
    ];

    const listItems = users.map(u =>
        `<li style="padding:4px 0; border-bottom:1px solid var(--border)">
            <span style="color:var(--purple)">key=${u.id}</span> &bull; ${u.name}
         </li>`
    ).join('');

    output.innerHTML = `<ul style="list-style:none; padding:0;">${listItems}</ul>`;
}

// ============ SECTION: Events ============
function demoEventClick(e) {
    const output = document.getElementById('demo-event-output');
    e.target.style.backgroundColor = 'var(--purple)';
    e.target.textContent = "Clicked!";

    output.innerHTML = `
        <div>Event React (SyntheticEvent) encapsule le DOM Event natif.</div>
        <div style="color:var(--primary)">Handler exécuté !</div>
    `;

    setTimeout(() => {
        e.target.style.backgroundColor = 'var(--primary)';
        e.target.textContent = "Click Me";
    }, 1000);
}

// ============ Init ============
document.addEventListener('DOMContentLoaded', () => {
    console.log("⚛️ Mémo React chargé");
});

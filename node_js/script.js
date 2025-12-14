/* =====================================================
   COURS NODE.JS - INTERACTIVE DEMOS
   Simulation of Backend concepts in Browser
   ===================================================== */

// --- UTILS ---
function log(id, message, color = '#f0f0f0') {
    const output = document.getElementById(id);
    const line = document.createElement('div');
    line.innerHTML = `<span style="color:${color}">></span> ${message}`;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

function clearLog(id) {
    document.getElementById(id).innerHTML = '';
}

// --- DEMO 1: EVENT LOOP ---
async function demoEventLoop() {
    const out = 'demo-loop-output';
    clearLog(out);

    log(out, '1. Start script', '#82aaff');

    // Simulate setTimeout(0)
    log(out, '2. setTimeout(..., 0) registered', '#c792ea');

    // Simulate Promise
    log(out, '3. Promise.resolve() registered', '#c792ea');

    log(out, '4. End script', '#82aaff');

    log(out, '--- CALL STACK VIDE ---', '#546e7a');

    // Microtasks (Promise) run before Macrotasks (Timeout)
    await new Promise(r => setTimeout(r, 500));
    log(out, '5. Promise callback executed (Microtask)', '#c3e88d');

    await new Promise(r => setTimeout(r, 500));
    log(out, '6. Timeout callback executed (Macrotask)', '#f78c6c');
}

// --- DEMO 2: VIRTUAL FILE SYSTEM ---
let virtualFileContent = "Ceci est un fichier texte.\nIl contient des données.";

function demoFSRead() {
    const out = 'demo-fs-output';
    clearLog(out);
    log(out, 'fs.readFile("data.txt", "utf8", (err, data) => { ... })', '#546e7a');

    setTimeout(() => {
        log(out, `> Contenu lu :\n${virtualFileContent}`, '#c3e88d');
    }, 600);
}

function demoFSWrite() {
    const out = 'demo-fs-output';
    const newContent = "Mise à jour à " + new Date().toLocaleTimeString();

    log(out, `fs.writeFile("data.txt", "${newContent}...", callback)`, '#546e7a');

    setTimeout(() => {
        virtualFileContent = newContent;
        log(out, '> Fichier sauvegardé avec succès !', '#c792ea');
    }, 600);
}

// --- DEMO 3: EVENT EMITTER ---
const listeners = [];

function demoEmit() {
    const out = 'demo-events-output';
    const eventName = 'order';
    const data = { id: Math.floor(Math.random() * 1000) };

    log(out, `myEmitter.emit('${eventName}', ${JSON.stringify(data)})`, '#82aaff');

    if (listeners.length === 0) {
        log(out, 'Aucun listener ! Evénement ignoré.', '#f78c6c');
    } else {
        listeners.forEach(cb => cb(data));
    }
}

function demoSubscribe() {
    const out = 'demo-events-output';

    if (listeners.length > 0) {
        log(out, 'Listener déjà actif.', '#f78c6c');
        return;
    }

    log(out, `myEmitter.on('order', (data) => { ... })`, '#c3e88d');

    listeners.push((data) => {
        log(out, `[LISTENER] Commande reçue : ID ${data.id}`, '#c3e88d');
    });
}

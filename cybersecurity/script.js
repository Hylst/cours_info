/* =====================================================
   COURS MEMO - INTERACTIVE DEMOS
   ===================================================== */

// --- UTILS ---
function log(id, message, color = '#f0f0f0') {
    const output = document.getElementById(id);
    if (!output) return;
    const line = document.createElement('div');
    line.innerHTML = `<span style="color:${color}">></span> ${message}`;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

function clearLog(id) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '';
}

console.log("Course Script Loaded");

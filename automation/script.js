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

// --- TOAST V2 ---
document.addEventListener('DOMContentLoaded', () => {
    // Inject Toast Container if not present
    if (!document.querySelector('.toast-container')) {
        const toast = document.createElement('div');
        toast.className = 'toast-container';
        toast.innerHTML = `
            <div class="toast-title">Définition <span style="cursor:pointer;" onclick="this.parentElement.parentElement.classList.remove('show')">✕</span></div>
            <div class="toast-body">...</div>
        `;
        document.body.appendChild(toast);
    }

    const toastEl = document.querySelector('.toast-container');
    const toastBody = toastEl.querySelector('.toast-body');
    let toastTimeout;

    // Handle Vocab Clicks
    document.querySelectorAll('.vocab-chip').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const def = btn.getAttribute('data-def');
            if (def) {
                toastBody.textContent = def;
                toastEl.classList.add('show');

                // Auto hide after 6s
                clearTimeout(toastTimeout);
                toastTimeout = setTimeout(() => {
                    toastEl.classList.remove('show');
                }, 6000);
            }
        });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!toastEl.contains(e.target) && !e.target.classList.contains('vocab-chip')) {
            toastEl.classList.remove('show');
        }
    });
});

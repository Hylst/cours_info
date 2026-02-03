/* =====================================================
   COURS MEMO - INTERACTIVE DEMOS
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initTerminal();
    initVocabulary();

    // Attach Hash Listener if element exists
    const hashInput = document.getElementById('hashInput');
    if (hashInput) {
        hashInput.addEventListener('input', updateHash);
    }

    // === CAESAR CIPHER WIDGET ===
    const caesarInput = document.getElementById('caesarInput');
    const caesarShift = document.getElementById('caesarShift');
    const caesarOutput = document.getElementById('caesarOutput');
    const shiftValue = document.getElementById('shiftValue');

    if (caesarInput && caesarShift && caesarOutput) {
        const encrypt = () => {
            const text = caesarInput.value;
            const shift = parseInt(caesarShift.value);
            if (shiftValue) shiftValue.textContent = shift;

            // Simple Caesar Shift
            caesarOutput.textContent = text.replace(/[a-zA-Z]/g, c => {
                const base = c <= 'Z' ? 65 : 97;
                const code = c.charCodeAt(0) - base;
                // Avoid negative modulo issues (though here we only add positive shift)
                const shifted = (code + shift) % 26;
                return String.fromCharCode(shifted + base);
            });
        };

        caesarInput.addEventListener('input', encrypt);
        caesarShift.addEventListener('input', encrypt);
    }
});

function initVocabulary() {
    const terms = document.querySelectorAll('.vocab-term');

    // Create Toast Container
    const toast = document.createElement('div');
    toast.id = 'vocab-toast';
    Object.assign(toast.style, {
        position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
        background: 'rgba(50, 50, 50, 0.95)', color: '#fff', padding: '15px 25px',
        borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
        zIndex: '1000', display: 'none', borderLeft: '4px solid var(--primary)',
        maxWidth: '90%', width: '400px', fontSize: '1rem'
    });
    document.body.appendChild(toast);

    terms.forEach(term => {
        term.style.cursor = 'pointer';
        term.style.borderBottom = '1px dashed var(--primary)';

        term.addEventListener('click', (e) => {
            e.stopPropagation();
            const def = term.getAttribute('data-def');
            toast.innerHTML = `<strong>📖 ${term.textContent.trim()}</strong><br><span style="color:#dcdcdc; font-size:0.9rem">${def}</span>`;
            toast.style.display = 'block';

            // Auto hide after 5s
            if (term.timeout) clearTimeout(term.timeout);
            term.timeout = setTimeout(() => {
                toast.style.display = 'none';
            }, 6000);
        });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!e.target.classList.contains('vocab-term')) {
            toast.style.display = 'none';
        }
    });
}

function initTerminal() {
    const input = document.getElementById('cmd-input');
    const output = document.getElementById('term-output');
    if (!input || !output) return; // Exit if terminal not present

    // Focus input when clicking anywhere in terminal
    document.querySelector('.terminal-body').addEventListener('click', () => input.focus());

    const commands = {
        'help': "Commandes disponibles : <br>- <span style='color:var(--kw)'>help</span> : Affiche ce message<br>- <span style='color:var(--kw)'>scan</span> : Simule un scan Nmap<br>- <span style='color:var(--kw)'>ping</span> : Teste la connexion<br>- <span style='color:var(--kw)'>whoami</span> : Identité actuelle<br>- <span style='color:var(--kw)'>clear</span> : Efface l'écran",
        'whoami': "root@kali-linux-box",
        'ping': "Pinging target (192.168.1.10)...<br>Reply from 192.168.1.10: bytes=32 time=4ms TTL=64<br>Reply from 192.168.1.10: bytes=32 time=5ms TTL=64<br>Packet loss: 0%",
        'scan': "Starting Nmap 7.94...<br>Scanning target 10.0.0.5...<br><br><span style='color:var(--primary-bright)'>PORT     STATE SERVICE</span><br>22/tcp   open  ssh<br>80/tcp   open  http<br>443/tcp  open  https<br>3306/tcp open  mysql<br><br>Nmap done: 1 IP address (1 host up) scanned in 0.45 seconds"
    };

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const cmd = this.value.trim().toLowerCase();
            if (cmd) {
                // Echo command
                output.innerHTML += `<div style='margin-bottom:5px'><span style='color:var(--primary-bright)'>➜ ~ </span>${this.value}</div>`;

                // Process command
                if (cmd === 'clear') {
                    output.innerHTML = '';
                } else if (commands[cmd]) {
                    output.innerHTML += `<div style='color:#a0a0a0; margin-bottom:15px'>${commands[cmd]}</div>`;
                } else {
                    output.innerHTML += `<div style='color:#ff5f56; margin-bottom:15px'>Commande introuvable: ${cmd}. Tapez 'help'.</div>`;
                }
            }
            this.value = '';
            // Auto scroll
            const body = document.querySelector('.terminal-body');
            body.scrollTop = body.scrollHeight;
        }
    });

    // Welcome message
    output.innerHTML += "<div style='color:#dcdcdc; opacity:0.7; margin-bottom:15px'>Kali Linux Terminal Simulator v1.0 <br>Tapez 'help' pour commencer...</div>";
}

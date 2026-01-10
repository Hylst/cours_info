/* =====================================================
   COURS PYTHON - JAVASCRIPT (interactions UI)
   Créé par Geoffroy Streit - 2025
   ===================================================== */

// Copy code to clipboard
function copyCode(btn) {
    const code = btn.parentElement.nextElementSibling.textContent;
    navigator.clipboard.writeText(code).then(() => {
        const original = btn.textContent;
        btn.textContent = '✓ Copié!';
        setTimeout(() => btn.textContent = original, 1500);
    });
}

// === ENRICHMENT INTERACTIVE FUNCTIONS ===

// Timeline Data (Module 00)
const timelineData = [
    { year: '1991', title: 'Naissance', desc: '<strong>1991 : Guido van Rossum</strong> publie la première version. Un langage propre et simple pour remplacer les scripts Shell et C.' },
    { year: '2000', title: 'Python 2', desc: '<strong>2000 : Python 2.0</strong> introduit les List Comprehensions et un Garbage Collector cyclique. C\'est l\'ère de l\'essor.' },
    { year: '2008', title: 'Python 3', desc: '<strong>2008 : Python 3.0</strong> brise la rétrocompatibilité pour corriger des défauts majeurs (Unicode par défaut, division entière stricte).' },
    { year: '2025', title: 'Modern', desc: '<strong>2025 : Python 3.12+</strong> se concentre sur la performance (JIT), le typage statique optionnel robuste et l\'asynchrone.' }
];

function updateTimeline(index) {
    // Update active class
    const points = document.querySelectorAll('.timeline-point');
    points.forEach((p, i) => {
        if (i === index) p.classList.add('active');
        else p.classList.remove('active');
    });

    // Update text
    const desc = document.getElementById('timeline-desc');
    desc.style.opacity = '0';
    setTimeout(() => {
        desc.innerHTML = timelineData[index].desc;
        desc.style.opacity = '1';
    }, 300);
}

// Memory Visualizer (Module 01)
function setMemory(type) {
    const valEl = document.getElementById('mem-val');
    const typeEl = document.getElementById('mem-type');

    // Reset classes
    valEl.className = 'memory-value';
    valEl.style.transform = 'scale(0.9)';

    setTimeout(() => {
        if (type === 'int') {
            valEl.textContent = '42';
            valEl.classList.add('type-int');
            typeEl.textContent = 'type: <int>';
        } else if (type === 'str') {
            valEl.textContent = '"Python"';
            valEl.classList.add('type-str');
            typeEl.textContent = 'type: <str>';
        } else if (type === 'list') {
            valEl.textContent = '[1, 2, 3]';
            valEl.classList.add('type-list');
            typeEl.textContent = 'type: <list>';
        }
        valEl.style.transform = 'scale(1)';
    }, 150);
}

// Logic Gate (Module 02)
let logicState = { a: false, b: false };

function toggleLogic(key) {
    logicState[key] = !logicState[key];

    // Update Btn Visual
    const btn = document.getElementById(`btn-${key}`);
    if (logicState[key]) {
        btn.style.background = 'var(--primary)';
        btn.style.color = '#fff';
        btn.style.borderColor = 'var(--accent)';
        btn.textContent = `${key.toUpperCase()}=1`;
    } else {
        btn.style.background = 'var(--bg)';
        btn.style.color = 'var(--muted)';
        btn.style.borderColor = 'var(--border)';
        btn.textContent = `${key.toUpperCase()}=0`;
    }

    // Update Result
    const resAnd = document.getElementById('res-and');
    const resOr = document.getElementById('res-or');

    const isAnd = logicState.a && logicState.b;
    const isOr = logicState.a || logicState.b;

    resAnd.textContent = isAnd ? 'True' : 'False';
    resAnd.style.color = isAnd ? 'var(--green)' : 'var(--red)';

    resOr.textContent = isOr ? 'True' : 'False';
    resOr.style.color = isOr ? 'var(--green)' : 'var(--red)';
}

// Collections (Mod 04)
let demoList = [];
let demoSet = new Set();

function addCollectionItem() {
    const input = document.getElementById('coll-input');
    const val = input.value.trim();
    if (!val) return;

    demoList.push(val);
    demoSet.add(val);

    document.getElementById('demo-list').textContent = JSON.stringify(demoList).replace(/,/g, ', ');
    document.getElementById('demo-set').textContent = '{' + Array.from(demoSet).map(x => `"${x}"`).join(', ') + '}';

    input.value = '';
}

// Class Factory (Mod 05)
function generateClass() {
    const name = document.getElementById('class-name').value || 'MyClass';
    const p1 = document.getElementById('class-prop1').value || 'prop1';
    const p2 = document.getElementById('class-prop2').value || 'prop2';

    const code = `class ${name}:
    def __init__(self, ${p1}: str, ${p2}: int):
        self.${p1} = ${p1}
        self.${p2} = ${p2}

    def __repr__(self):
        return f"${name}(${p1}='{self.${p1}}', ${p2}={self.${p2}})"`;

    document.getElementById('class-output').textContent = code;
}

// Exception Flow (Mod 06)
function triggerError(isError) {
    const tryBlock = document.getElementById('flow-try');
    const exceptBlock = document.getElementById('flow-except');
    const elseBlock = document.getElementById('flow-else');
    const finallyBlock = document.getElementById('flow-finally');
    const status = document.getElementById('flow-status');
    const valSpan = document.getElementById('flow-val');

    // Reset
    [tryBlock, exceptBlock, elseBlock, finallyBlock].forEach(el => {
        el.style.background = 'transparent';
        el.style.opacity = '0.5';
    });
    tryBlock.style.opacity = '1';
    finallyBlock.style.opacity = '1';
    valSpan.textContent = isError ? '0' : '2';

    // Animation
    status.textContent = "Exécution du TRY...";
    tryBlock.style.background = 'rgba(55, 118, 171, 0.2)';

    setTimeout(() => {
        if (isError) {
            status.textContent = "🔥 ERREUR ! Saut vers EXCEPT";
            tryBlock.style.background = 'transparent';
            exceptBlock.style.opacity = '1';
            exceptBlock.style.background = 'rgba(231, 76, 60, 0.2)';
        } else {
            status.textContent = "✅ Succès ! Saut vers ELSE";
            tryBlock.style.background = 'transparent';
            elseBlock.style.opacity = '1';
            elseBlock.style.background = 'rgba(39, 174, 96, 0.2)';
        }

        setTimeout(() => {
            status.textContent = "🏁 Exécution du FINALLY (Toujours)";
            exceptBlock.style.background = 'transparent';
            elseBlock.style.background = 'transparent';
            finallyBlock.style.background = 'rgba(255, 212, 59, 0.2)';
        }, 1500);
    }, 1500);
}

// File Mode (Mod 07)
function setFileMode(mode) {
    const viz = document.getElementById('file-viz');
    const content = document.getElementById('file-content');
    const cursor = document.getElementById('file-cursor');
    const desc = document.getElementById('mode-desc');

    // Reset style
    viz.style.borderColor = 'var(--muted)';
    content.textContent = 'Contenu...';
    content.style.opacity = '1';

    if (mode === 'r') {
        cursor.style.top = '15px';
        cursor.style.left = '10px';
        cursor.style.background = 'var(--green)';
        desc.textContent = "Lecture seule. Curseur au début.";
    } else if (mode === 'w') {
        cursor.style.top = '15px';
        cursor.style.left = '10px';
        cursor.style.background = 'var(--red)';
        content.textContent = ''; // TRUNCATE
        desc.textContent = "Écriture. FICHIER VIDÉ (Truncate) !";
        viz.style.borderColor = 'var(--red)';
    } else if (mode === 'a') {
        cursor.style.top = '40px'; // approximate end
        cursor.style.left = '60px';
        cursor.style.background = 'var(--orange)';
        desc.textContent = "Ajout (Append). Curseur à la fin.";
    }
}

// Format Lab (Mod 09)
function updateFormat() {
    const valStr = document.getElementById('fmt-val').value;
    const spec = document.getElementById('fmt-spec').value;
    const resEl = document.getElementById('fmt-res');

    let val = parseFloat(valStr);
    if (isNaN(val)) val = valStr; // fallback for strings

    try {
        // Simple JS emulation of Python formatting
        let res = "Error";

        if (typeof val === 'number') {
            if (spec.includes('f')) {
                const precision = parseInt(spec.match(/\.(\d+)f/)?.[1] || 0);
                res = val.toFixed(precision);
                if (spec.includes('+') && val >= 0) res = '+' + res;
            } else if (spec.includes('%')) {
                res = (val * 100).toFixed(6) + '%';
            } else if (spec.includes('d')) {
                // Zero padding emulation :05d
                let intVal = Math.round(val);
                res = intVal.toString();
                const pad = spec.match(/0(\d+)d/);
                if (pad) {
                    const len = parseInt(pad[1]);
                    while (res.length < len) res = '0' + res;
                }
            } else {
                res = val.toString(); // basic fallback
            }
        } else {
            res = val.toString();
        }

        resEl.textContent = res;
    } catch (e) {
        resEl.textContent = "Invalid";
    }
}

// Regex Tester (Mod 10)
function testRegex() {
    const text = document.getElementById('regex-text').value;
    const patternStr = document.getElementById('regex-input').value;
    const resEl = document.getElementById('regex-res');

    try {
        const regex = new RegExp(patternStr, 'g');
        const matches = text.match(regex);

        if (matches) {
            resEl.textContent = JSON.stringify(matches).replace(/,/g, ', ');
            resEl.style.color = 'var(--green)';
        } else {
            resEl.textContent = "None";
            resEl.style.color = 'var(--muted)';
        }
    } catch (e) {
        resEl.textContent = "Pattern Invalide";
        resEl.style.color = 'var(--red)';
    }
}

// Yield Machine (Mod 11)
let yieldStep = 0;
function nextYield() {
    const val = yieldStep + 1;
    if (val > 3) { // Reset
        yieldStep = 0;
        document.getElementById('yield-out').textContent = "Stop";
        document.getElementById('yield-out').style.color = "var(--red)";
        document.getElementById('yield-out').style.borderColor = "var(--red)";
        // reset visuals
        [1, 2, 3].forEach(i => document.getElementById(`yield-${i}`).style.color = "var(--text)");
        return;
    }

    yieldStep = val;
    document.getElementById('yield-out').textContent = val;
    document.getElementById('yield-out').style.color = "var(--green)";
    document.getElementById('yield-out').style.borderColor = "var(--green)";

    // Highlight code
    [1, 2, 3].forEach(i => {
        document.getElementById(`yield-${i}`).style.color = (i === val) ? "var(--green)" : "var(--dim)";
        document.getElementById(`yield-${i}`).style.fontWeight = (i === val) ? "bold" : "normal";
    });
}

// Async Visualizer (Mod 12)
function resetAsync() {
    ['task-1', 'task-2', 'task-3'].forEach(id => {
        document.getElementById(id).style.width = '0%';
    });
    document.getElementById('async-time').textContent = 'Time: 0s';
}

function runSync() {
    resetAsync();
    const desc = document.getElementById('async-desc');
    desc.textContent = "SYNCHRONE : Les tâches s'exécutent l'une APRES l'autre. Temps total = T1 + T2 + T3.";

    // Task 1
    animateTask('task-1', 1000, 0, () => {
        // Task 2
        animateTask('task-2', 1000, 0, () => {
            // Task 3
            animateTask('task-3', 1000, 0, () => {
                desc.innerHTML += " <strong>(Fini en 3s)</strong>";
                document.getElementById('async-time').textContent = 'Time: 3s';
            });
        });
    });
}

function runAsync() {
    resetAsync();
    const desc = document.getElementById('async-desc');
    desc.textContent = "ASYNCHRONE : Les tâches s'exécutent EN MÊME TEMPS (concurrence). Temps total = Max(T1, T2, T3).";

    let active = 3;
    const onFinish = () => {
        active--;
        if (active === 0) {
            desc.innerHTML += " <strong>(Fini en 1s)</strong>";
            document.getElementById('async-time').textContent = 'Time: 1s';
        }
    };

    animateTask('task-1', 1000, 0, onFinish);
    animateTask('task-2', 1000, 0, onFinish);
    animateTask('task-3', 1000, 0, onFinish);
}

function animateTask(id, duration, delay, callback) {
    const el = document.getElementById(id);
    setTimeout(() => {
        el.style.width = '80%'; // visual full
        setTimeout(callback, duration);
    }, delay);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    console.log('🐍 Mémo Python chargé!');

    // Add copy buttons to code blocks
    document.querySelectorAll('.code-head').forEach(head => {
        if (!head.querySelector('.copy-btn')) {
            const btn = document.createElement('button');
            btn.className = 'copy-btn';
            btn.textContent = '📋 Copier';
            btn.onclick = function () { copyCode(this); };
            btn.style.cssText = 'margin-left:auto;background:var(--bg);border:1px solid var(--border);color:var(--muted);padding:4px 10px;border-radius:4px;font-size:0.7rem;cursor:pointer;transition:all 0.2s';
            head.appendChild(btn);
        }
    });

    // Generate Side Nav
    const sideNav = document.createElement('div');
    sideNav.className = 'side-nav';

    document.querySelectorAll('section[id]').forEach(sec => {
        if (sec.id === 'quiz-section') return;

        const title = sec.querySelector('.sec-title')?.textContent || sec.id;
        const num = sec.querySelector('.sec-num')?.textContent || '';
        const link = document.createElement('a');
        link.href = '#' + sec.id;
        link.innerHTML = `<span style="opacity:0.5; margin-right:5px">${num}</span> ${title.replace("introduction à ", "")}`;
        sideNav.appendChild(link);
    });

    document.body.appendChild(sideNav);

    // Scroll Spy
    window.addEventListener('scroll', () => {
        const fromTop = window.scrollY + 150;
        let current = null;

        document.querySelectorAll('section[id]').forEach(sec => {
            if (sec.offsetTop <= fromTop) {
                current = sec;
            }
        });

        if (current) {
            document.querySelectorAll('.side-nav a').forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href') === '#' + current.id) {
                    a.classList.add('active');
                }
            });
        }
    });

    // Back to Top Button
    const btt = document.createElement('a');
    btt.className = 'back-to-top';
    btt.innerHTML = '↑';
    btt.href = '#';
    btt.onclick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    document.body.appendChild(btt);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btt.classList.add('visible');
        } else {
            btt.classList.remove('visible');
        }
    });
});

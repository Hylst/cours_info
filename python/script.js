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

/* =====================================================
   COURS PYTHON DATA - JAVASCRIPT
   Créé par Geoffroy Streit - 2025
   ===================================================== */

// Copy code function
function copyCode(btn) {
    const codeBlock = btn.parentElement.nextElementSibling;
    const code = codeBlock.textContent;

    navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.textContent;
        btn.textContent = '✓ Copié!';
        btn.style.color = '#10b981';
        btn.style.borderColor = '#10b981';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.color = '';
            btn.style.borderColor = '';
        }, 2000);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('📊 Mémo Python Data Science chargé!');

    // Auto-add copy buttons
    document.querySelectorAll('.code-head').forEach(head => {
        if (!head.querySelector('.copy-btn')) {
            const btn = document.createElement('button');
            btn.className = 'copy-btn';
            btn.textContent = '📋 Copier';
            btn.onclick = function () { copyCode(this); };
            btn.style.cssText = `
                margin-left: auto;
                background: transparent;
                border: 1px solid var(--border);
                color: var(--muted);
                padding: 4px 12px;
                border-radius: 6px;
                font-size: 0.75rem;
                cursor: pointer;
                transition: all 0.2s;
                font-family: inherit;
            `;

            btn.onmouseover = function () {
                this.style.background = 'rgba(255,255,255,0.05)';
                this.style.color = 'var(--text)';
            };
            btn.onmouseout = function () {
                this.style.background = 'transparent';
                this.style.color = 'var(--muted)';
            };

            head.appendChild(btn);
        }
    });

    // Add visual placeholders for Data Viz (SVG simple generation)
    document.querySelectorAll('.viz-placeholder').forEach(viz => {
        const type = viz.getAttribute('data-type');
        if (type === 'scatter') {
            viz.innerHTML = `
                <svg width="100%" height="100%" viewBox="0 0 200 100">
                    <circle cx="20" cy="80" r="3" fill="#3b82f6" opacity="0.6"/>
                    <circle cx="40" cy="60" r="3" fill="#3b82f6" opacity="0.6"/>
                    <circle cx="60" cy="70" r="3" fill="#3b82f6" opacity="0.6"/>
                    <circle cx="80" cy="40" r="3" fill="#3b82f6" opacity="0.6"/>
                    <circle cx="100" cy="50" r="3" fill="#3b82f6" opacity="0.6"/>
                    <circle cx="120" cy="30" r="3" fill="#3b82f6" opacity="0.6"/>
                    <circle cx="140" cy="40" r="3" fill="#3b82f6" opacity="0.6"/>
                    <circle cx="160" cy="20" r="3" fill="#3b82f6" opacity="0.6"/>
                    <line x1="10" y1="90" x2="190" y2="90" stroke="#334155" stroke-width="2"/>
                    <line x1="10" y1="90" x2="10" y2="10" stroke="#334155" stroke-width="2"/>
                </svg>
                <span style="position:absolute; bottom:5px; right:10px; font-size:0.7rem;">Scatter Plot</span>
            `;
        } else if (type === 'heatmap') {
            viz.innerHTML = `
                <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:2px; width:60%; height:60%;">
                    <div style="background:#1e3a8a"></div><div style="background:#1d4ed8"></div><div style="background:#2563eb"></div><div style="background:#3b82f6"></div><div style="background:#60a5fa"></div>
                    <div style="background:#1e3a8a"></div><div style="background:#3b82f6"></div><div style="background:#93c5fd"></div><div style="background:#bfdbfe"></div><div style="background:#60a5fa"></div>
                    <div style="background:#1d4ed8"></div><div style="background:#2563eb"></div><div style="background:#60a5fa"></div><div style="background:#93c5fd"></div><div style="background:#bfdbfe"></div>
                </div>
                <span style="position:absolute; bottom:5px; right:10px; font-size:0.7rem;">Heatmap</span>
            `;
        }
    });

    // === SCROLL SPY & BACK TO TOP ===
    const sideLinks = document.querySelectorAll('.side-link');
    const sections = document.querySelectorAll('section');

    // Create Back to Top button
    const backToTop = document.createElement('a');
    backToTop.href = '#';
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '↑';
    document.body.appendChild(backToTop);

    function handleScroll() {
        const scrollPos = window.scrollY + 100;

        // Back to top visibility
        if (window.scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }

        // Active state for side nav
        sections.forEach(section => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                const id = section.getAttribute('id');
                sideLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    handleScroll(); // Init
});

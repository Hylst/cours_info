/* =====================================================
   COURS PYTHON WEB - JAVASCRIPT (interactions UI)
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
    console.log('🌐 Mémo Python Web chargé!');

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

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMobile = document.getElementById('navMobile');
    const body = document.body;

    if (hamburger && navMobile) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMobile.classList.toggle('active');
            body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a link
        navMobile.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navMobile.classList.remove('active');
                body.style.overflow = '';
            });
        });
    }
});

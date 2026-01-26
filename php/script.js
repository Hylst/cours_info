/* =====================================================
   COURS PHP - JAVASCRIPT (interactions UI)
   Créé par Geoffroy Streit - 2025
   ===================================================== */

// Toggle code output visibility
function toggleOutput(id) {
    const el = document.getElementById(id);
    if (el) {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
    }
}

// Copy code to clipboard
function copyCode(btn) {
    const code = btn.parentElement.nextElementSibling.textContent;
    navigator.clipboard.writeText(code).then(() => {
        const original = btn.textContent;
        btn.textContent = '✓ Copié!';
        setTimeout(() => btn.textContent = original, 1500);
    });
}

// Smooth scroll to section
document.addEventListener('DOMContentLoaded', function () {
    console.log('🐘 Mémo PHP chargé!');

    // Add copy buttons to code blocks
    document.querySelectorAll('.code-head').forEach(head => {
        if (!head.querySelector('.copy-btn')) {
            const btn = document.createElement('button');
            btn.className = 'copy-btn';
            btn.textContent = '📋 Copier';
            btn.onclick = function () { copyCode(this); };
            btn.style.cssText = 'margin-left:auto;background:var(--bg);border:1px solid var(--border);color:var(--muted);padding:4px 10px;border-radius:4px;font-size:0.7rem;cursor:pointer';
            head.appendChild(btn);
        }
    });

    // Handle expandable examples with smooth animation
    document.querySelectorAll('.example-toggle').forEach(toggle => {
        // Initialize all examples as hidden
        const content = toggle.nextElementSibling;
        content.style.display = 'none';
        
        toggle.addEventListener('click', function() {
            this.classList.toggle('expanded');
            const content = this.nextElementSibling;
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                content.style.opacity = '0';
                content.style.transform = 'translateY(-10px)';
                
                // Smooth animation
                setTimeout(() => {
                    content.style.transition = 'all 0.3s ease';
                    content.style.opacity = '1';
                    content.style.transform = 'translateY(0)';
                }, 10);
            } else {
                content.style.opacity = '0';
                content.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    content.style.display = 'none';
                }, 300);
            }
        });
    });
});

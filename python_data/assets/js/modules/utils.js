/* =====================================================
   MODULE: UTILS
   Helpers and generic functions
   ===================================================== */

window.App.utils = {
    copyCode: function (btn) {
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
    },

    initCopyButtons: function () {
        document.querySelectorAll('.code-head').forEach(head => {
            if (!head.querySelector('.copy-btn')) {
                const btn = document.createElement('button');
                btn.className = 'copy-btn';
                btn.textContent = '📋 Copier';
                // Bind to local function via closure reference or global path
                const self = this;
                btn.onclick = function () { self.copyCode(this); };

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
    }
};

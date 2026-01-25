/* =====================================================
   ROUTER MODULE
   Handles hash-based navigation and content loading
   ===================================================== */

export class Router {
    constructor(routes, contentId) {
        this.routes = routes;
        this.contentId = contentId;
        this.currentHash = '';

        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute(); // Initial load
    }

    async handleRoute() {
        let hash = window.location.hash.slice(1) || 'intro';
        if (hash === '') hash = 'intro';

        // Find route match
        const route = this.routes.find(r => r.path === hash);

        if (route) {
            this.currentHash = hash;
            await this.loadContent(route.file, route.path);
            this.updateActiveLink(hash);

            // Execute route specific callback if any (e.g. for Quiz)
            if (route.onLoad) route.onLoad();

            // Scroll Logic
            if (hash === 'intro') {
                // Return to menu -> Scroll to TOC (below intro content)
                const toc = document.getElementById('toc-container');
                if (toc) {
                    setTimeout(() => toc.scrollIntoView({ behavior: 'smooth' }), 100);
                }
            } else {
                // New module -> Scroll top
                window.scrollTo(0, 0);
            }
        } else {
            console.warn(`Route not found: ${hash}`);
            window.location.hash = '#intro';
        }
    }

    async loadContent(file, hash) {
        const container = document.getElementById(this.contentId);

        try {
            const response = await fetch(`sections/${file}`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const html = await response.text();

            // Inject content
            // Add Back Button if not Intro
            if (hash !== 'intro') {
                const backBtn = `
                    <div class="nav-actions" style="margin-bottom: 20px;">
                        <a href="#intro" class="btn-back">
                            <span class="icon">←</span> Menu Principal
                        </a>
                    </div>`;
                container.innerHTML = backBtn + html + backBtn;
            } else {
                container.innerHTML = html;
            }

            // Show/Hide TOC based on route
            const toc = document.getElementById('toc-container');
            if (toc) {
                toc.style.display = (hash === 'intro') ? 'block' : 'none';
            }

            // Re-initialize code copy buttons and other UI interactions
            this.initUI();

        } catch (error) {
            container.innerHTML = `<div class="warning">
                <strong>Erreur de chargement</strong>
                <p>Impossible de charger le contenu : ${error.message}</p>
                <p>Assurez-vous de consulter ce site via un serveur (HTTP/HTTPS) et non directement via le système de fichiers.</p>
            </div>`;
        }
    }

    updateActiveLink(hash) {
        document.querySelectorAll('nav a, .toc-item').forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${hash}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    initUI() {
        // Prism-like syntax highlighting or simple Copy buttons
        document.querySelectorAll('.code-head').forEach(head => {
            if (!head.querySelector('.copy-btn')) {
                const btn = document.createElement('button');
                btn.className = 'copy-btn';
                btn.textContent = '📋 Copier';
                btn.onclick = function () {
                    const codeBlock = this.parentElement.nextElementSibling;
                    const code = codeBlock.textContent;
                    navigator.clipboard.writeText(code).then(() => {
                        const original = this.textContent;
                        this.textContent = '✓ Copié!';
                        this.style.color = 'var(--green)';
                        setTimeout(() => {
                            this.textContent = original;
                            this.style.color = '';
                        }, 1500);
                    });
                };

                // Style the button (inline for simplicity, or move to CSS)
                btn.style.marginLeft = 'auto';
                btn.style.background = 'transparent';
                btn.style.border = '1px solid var(--border)';
                btn.style.color = 'var(--muted-foreground)';
                btn.style.padding = '4px 10px';
                btn.style.borderRadius = '4px';
                btn.style.fontSize = '0.7rem';
                btn.style.cursor = 'pointer';

                head.appendChild(btn);
            }
        });
    }
}

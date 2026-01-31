/**
 * LAYOUT MANAGER
 * Injects Header (Nav) and Footer into all pages.
 * Handles active link highlighting, responsive menu, and relative paths.
 */

// Determine if we are in the root or a module
const isModule = window.location.pathname.includes('/modules/');
const rootPath = isModule ? '../' : './';

const headerHTML = `
<header>
    <div class="container header-content">
        <a href="${rootPath}index.html" class="logo" style="text-decoration:none; color:inherit">
            <div class="logo-icon">JS</div>JavaScript
        </a>
        
        <!-- Hamburger Button (Mobile) -->
        <button class="hamburger" id="hamburger-btn" aria-label="Menu" aria-expanded="false">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </button>
        
        <!-- Navigation -->
        <nav id="main-nav" class="main-nav">
            <a href="${rootPath}modules/01_variables.html">Variables</a>
            <a href="${rootPath}modules/02_types.html">Types</a>
            <a href="${rootPath}modules/04_conditions.html">Conditions</a>
            <a href="${rootPath}modules/05_loops.html">Boucles</a>
            <a href="${rootPath}modules/06_functions.html">Fonctions</a>
            <a href="${rootPath}modules/07_arrays.html">Arrays</a>
            <a href="${rootPath}modules/09_dom.html">DOM</a>
            <a href="${rootPath}modules/10_events.html">Events</a>
            <a href="${rootPath}modules/11_async.html">Async</a>
            <a href="${rootPath}modules/12_fetch.html">Fetch</a>
            <a href="${rootPath}modules/18_cheatsheets.html">Cheatsheets</a>
            <a href="${rootPath}quiz.html" style="color:var(--accent)">🧠 Quiz</a>
        </nav>
    </div>
</header>
<link rel="stylesheet" href="${rootPath}assets/css/prism.css">
<link rel="stylesheet" href="${rootPath}assets/css/prism-overrides.css">
`;

const footerHTML = `
<footer>
    <div class="container">
        <p><strong>Mémo JavaScript</strong> • Créé par Geoffroy Streit, assisté par IA</p>
        <p style="font-size:0.85rem; margin-top:8px; line-height:1.5; max-width:800px; margin-left:auto; margin-right:auto; opacity:0.85">
            Pour consolider sa mémoire avec un cours concis, graphique et structuré, mais aussi pour le plaisir de partager la connaissance et faciliter l'apprentissage des autres.
        </p>
        <p style="font-size:0.75rem; margin-top:12px; opacity:0.6">
            <a href="${rootPath}mentions-legales.html" style="color:var(--muted); text-decoration:none; border-bottom:1px dotted var(--border)">Mentions légales</a>
        </p>
    </div>
</footer>
<script src="${rootPath}assets/js/prism.js" onload="if(window.Prism)window.Prism.highlightAll()"></script>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Inject Header at the start of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Inject Footer at the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // === HAMBURGER MENU LOGIC ===
    const hamburger = document.getElementById('hamburger-btn');
    const nav = document.getElementById('main-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('nav-open');
            hamburger.classList.toggle('hamburger-active');
            hamburger.setAttribute('aria-expanded', isOpen);

            // Prevent body scroll when menu is open (mobile)
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close menu when clicking on a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-open');
                hamburger.classList.remove('hamburger-active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        // Close menu on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('nav-open')) {
                nav.classList.remove('nav-open');
                hamburger.classList.remove('hamburger-active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    // Highlight active link (optional enhancement)
    const currentPath = window.location.pathname;
    nav?.querySelectorAll('a').forEach(link => {
        if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href').replace('../', ''))) {
            link.style.background = 'var(--card)';
            link.style.color = 'var(--text)';
        }
    });
});


/**
 * LAYOUT MANAGER
 * Injects Header (Nav) and Footer into all pages.
 * Handles active link highlighting and relative paths.
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
        <nav>
            <a href="${rootPath}modules/01_variables.html">Variables</a>
            <a href="${rootPath}modules/06_functions.html">Fonctions</a>
            <a href="${rootPath}modules/09_dom.html">DOM</a>
            <a href="${rootPath}modules/11_async.html">Async</a>
            <a href="${rootPath}modules/12_fetch.html">Fetch</a>
            <a href="${rootPath}quiz.html" style="color:var(--accent)">Quiz</a>
        </nav>
    </div>
</header>
<link rel="stylesheet" href="${rootPath}assets/css/prism.css">
<link rel="stylesheet" href="${rootPath}assets/css/prism-overrides.css">
`;

const footerHTML = `
<footer>
    <div class="container">
        <p><strong>Mémo JavaScript</strong> • Créé par Geoffroy Streit - 2025</p>
        <p style="font-size:0.8rem; margin-top:5px; opacity:0.7">Guide interactif Vanilla JS</p>
    </div>
</footer>
<script src="${rootPath}assets/js/prism.js" onload="if(window.Prism)window.Prism.highlightAll()"></script>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Inject Header at the start of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Inject Footer at the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Highlight active link if needed (can be enhanced later)
});

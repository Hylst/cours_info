const navConfig = {
    rootPath: '../', // Path to root from modules/
    activeClass: 'active',
    items: [
        { id: 'home', label: 'Accueil', path: 'index.html', icon: '🏠' }, // Points to dashboard
        { id: 's1', label: '01. JSX', path: 'modules/01_jsx.html' },
        { id: 's2', label: '02. Components', path: 'modules/02_components.html' },
        { id: 's3', label: '03. Props', path: 'modules/03_props.html' },
        { id: 's4', label: '04. State', path: 'modules/04_state.html' },
        { id: 's5', label: '05. Effect', path: 'modules/05_effect.html' },
        { id: 's6', label: '06. Events', path: 'modules/06_events.html' },
        { id: 's7', label: '07. Lists', path: 'modules/07_lists.html' },
        { id: 's8', label: '08. Forms', path: 'modules/08_forms.html' },
        { id: 's9', label: '09. Hook Rules', path: 'modules/09_hooks_rules.html' },
        { id: 's10', label: '10. Custom Hooks', path: 'modules/10_custom_hooks.html' },
        { id: 's11', label: '11. Context', path: 'modules/11_context.html' },
        { id: 's12', label: '12. Refs', path: 'modules/12_refs.html' },
        { id: 'quiz', label: 'Quiz', path: 'modules/quiz.html', icon: '📝' },
    ]
};

function initNav() {
    injectHeader();
    injectSidebar();
    highlightActiveLink();
    initMobileMenu();
}

function injectHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    // Determine if we are in root or modules
    const isModule = window.location.pathname.includes('/modules/');
    const basePath = isModule ? '../' : './';
    const logoPath = isModule ? '../' : './'; // For logo link

    header.innerHTML = `
        <div class="container header-content">
            <a href="${logoPath}index.html" class="logo" style="text-decoration:none; color:inherit;">
                <div class="logo-icon">⚛</div>React.js
            </a>
            <div class="burger-menu" id="burger-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav class="top-nav" id="top-nav">
                <!-- Most important links for top nav -->
                <a href="${basePath}modules/01_jsx.html">JSX</a>
                <a href="${basePath}modules/02_components.html">Components</a>
                <a href="${basePath}modules/04_state.html">Hooks</a>
                <a href="${basePath}modules/quiz.html">Quiz</a>
            </nav>
        </div>
    `;
}

function injectSidebar() {
    const sidebarContainer = document.querySelector('#sidebar-container');
    if (!sidebarContainer) return;

    // Determine path prefix
    const isModule = window.location.pathname.includes('/modules/');
    const basePath = isModule ? '../' : './';

    let linksHtml = navConfig.items.map(item => {
        // Adjust path based on where we are
        let finalPath = item.path;
        if (!isModule && item.path.startsWith('modules/')) {
            // In root, link to modules/
            finalPath = item.path;
        } else if (isModule) {
            // In modules
            if (item.path === 'index.html') {
                finalPath = '../index.html';
            } else {
                // Link to sibling module
                finalPath = item.path.replace('modules/', './');
            }
        }

        return `<a href="${finalPath}" class="sidebar-link" data-id="${item.id}">
            ${item.icon ? `<span class="icon">${item.icon}</span>` : `<span class="num">${item.id.replace('s', '').padStart(2, '0')}</span>`}
            ${item.label.replace(/^\d+\.\s/, '')}
        </a>`;
    }).join('');

    sidebarContainer.innerHTML = `
        <div class="sidebar-inner">
            <div class="sidebar-header">Table des Matières</div>
            <nav class="sidebar-nav">
                ${linksHtml}
            </nav>
            <div class="sidebar-footer">
                <a href="https://hylst.fr" target="_blank">© Hylst 2025</a>
            </div>
        </div>
    `;
}

function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    // Default to 'index.html' if empty pathname (root)
    const target = filename || 'index.html';

    // Sidebar
    document.querySelectorAll('.sidebar-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes(target)) {
            link.classList.add('active');
        }
    });

    // Top Nav
    document.querySelectorAll('.top-nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes(target)) {
            link.classList.add('active');
        }
    });
}

function initMobileMenu() {
    const burger = document.getElementById('burger-btn');
    const nav = document.getElementById('top-nav');
    const sidebar = document.getElementById('sidebar-container');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('open');
            nav.classList.toggle('open');
            if (sidebar) sidebar.classList.toggle('open');
        });
    }
}

document.addEventListener('DOMContentLoaded', initNav);

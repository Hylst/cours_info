/**
 * Layout Manager
 * Injects Nav and Footer, handles active states and mobile menu.
 */

document.addEventListener('DOMContentLoaded', async () => {
    const isModule = window.location.pathname.includes('/modules/');
    const rootPath = isModule ? '../' : './';

    // 1. Inject Header
    const header = document.querySelector('header');
    if (header) {
        try {
            const resp = await fetch(`${rootPath}components/nav.html`);
            if (resp.ok) {
                const html = await resp.text();
                header.innerHTML = html;
                initNav(rootPath);
            }
        } catch (e) {
            console.error("Failed to load nav", e);
        }
    }

    // 2. Inject Footer
    const footer = document.querySelector('footer');
    if (footer) {
        try {
            const resp = await fetch(`${rootPath}components/footer.html`);
            if (resp.ok) {
                const html = await resp.text();
                footer.innerHTML = html;
            }
        } catch (e) {
            console.error("Failed to load footer", e);
        }
    }
});

function initNav(rootPath) {
    const navLinks = document.querySelectorAll('#main-nav a');
    const logoLink = document.querySelector('.logo');
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    // A. Fix Links & Active State
    navLinks.forEach(link => {
        const originalHref = link.getAttribute('href');
        let newHref = originalHref;

        // 1. Path Correction
        if (rootPath === '../') {
            // We are in modules/
            if (originalHref === 'index.html') {
                newHref = '../index.html';
            } else if (originalHref.startsWith('modules/')) {
                // modules/m00.html -> m00.html
                newHref = originalHref.replace('modules/', '');
            }
        }
        link.setAttribute('href', newHref);

        // 2. Active State Logic
        const linkFilename = newHref.split('/').pop();

        // Check exact match
        if (linkFilename === currentFile) {
            link.classList.add('active');
        }
        // Special case: Landing page (root)
        else if (currentFile === '' && linkFilename === 'index.html') {
            link.classList.add('active');
        }
        // Special case: When in a module, highlight the "Home" if needed? No.

    });

    if (logoLink && rootPath === '../') {
        logoLink.setAttribute('href', '../index.html');
    }

    // C. Hamburger Logic
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu'); // Changed selector from .nav-wrapper to .nav-menu

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

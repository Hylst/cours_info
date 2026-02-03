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

    // A. Fix Links
    const fixLink = (el) => {
        const originalHref = el.getAttribute('href');
        // If we are in modules/ and link is NOT absolute, prepend ../
        // But nav.html links are like "modules/m00.html" or "index.html"

        let newHref = originalHref;
        if (rootPath === '../') {
            // We are in modules/
            if (originalHref === 'index.html') {
                newHref = '../index.html';
            } else if (originalHref.startsWith('modules/')) {
                // modules/m00.html -> m00.html
                newHref = originalHref.replace('modules/', '');
            }
        } else {
            // We are in root
            // Links are already correct (modules/..., index.html)
        }
        el.setAttribute('href', newHref);

        // B. Active State
        if (newHref === currentFile || (currentFile === '' && newHref === 'index.html') || (rootPath === '../' && newHref === currentFile)) {
            el.classList.add('active');
        }
    };

    navLinks.forEach(fixLink);
    if (logoLink) fixLink(logoLink);


    // C. Hamburger Logic
    const hamburger = document.querySelector('.hamburger');
    const navWrapper = document.querySelector('.nav-wrapper');

    if (hamburger && navWrapper) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navWrapper.classList.toggle('active');
        });

        // Close on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navWrapper.classList.remove('active');
            });
        });
    }
}

/**
 * Java Memo - Script Principal
 * Gère: Copy Code, Animations, Scroll Spy, TOC
 */

// Make functions globally available for manual init after dynamic loading
window.initTOC = initTOC;
window.initVisualEnhancements = initVisualEnhancements;
window.initCodeCopySupport = initCodeCopySupport;

// Removed auto-init on DOMContentLoaded to prevent race condition with async loader
// loadModules() in index.html will call these when ready.

/**
 * Génère la Table of Contents (TOC) dynamique
 */
function initTOC() {
    const tocContainer = document.getElementById('toc-sidebar');
    if (!tocContainer) return;

    const sections = document.querySelectorAll('section');
    const ul = document.createElement('ul');

    sections.forEach(sec => {
        // Trouver le titre et le numéro
        const titleEl = sec.querySelector('.sec-title');
        const numEl = sec.querySelector('.sec-num');

        if (titleEl && numEl) {
            const title = titleEl.innerText;
            const num = numEl.innerText;
            const id = sec.id;

            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${id}`;
            a.innerText = `${num}. ${title}`;
            a.dataset.target = id;
            a.title = `${num}. ${title}`; // Tooltip natif

            li.appendChild(a);
            ul.appendChild(li);
        }
    });

    tocContainer.appendChild(ul);
}


/**
 * Animations, Scroll, BackToTop
 */
function initVisualEnhancements() {
    // 1. Scroll Progress Bar
    const progressBar = document.getElementById('scrollProgress');

    // 2. Back To Top
    const backToTopBtn = document.getElementById('backToTop');

    // 3. TOC Active State (Scroll Spy)
    const tocLinks = document.querySelectorAll('#toc-sidebar a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        // Progress Bar
        if (progressBar) {
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        }

        // Back To Top Visibility
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        // Scroll Spy Logic
        let current = '';
        sections.forEach(sec => {
            const sectionTop = sec.offsetTop;
            const sectionHeight = sec.clientHeight;
            // Active si on est dans la section (avec un offset pour le header)
            if (scrollY >= (sectionTop - 150)) {
                current = sec.id;
            }
        });

        tocLinks.forEach(a => {
            a.classList.remove('active');
            if (a.dataset.target === current) {
                a.classList.add('active');
            }
        });
    });

    // Back to Top Click
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 3. Fade-in on Scroll (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const targets = document.querySelectorAll('section, .callout, .analogy, .use-case, .intro-box, .tool-card');
    targets.forEach(target => {
        target.classList.add('fade-in-section');
        observer.observe(target);
    });
}


/**
 * Ajoute bouton Copy sur les blocs de code
 */
function initCodeCopySupport() {
    const codeBlocks = document.querySelectorAll('.code');

    codeBlocks.forEach(block => {
        if (block.querySelector('.copy-btn')) return;

        const copyBtn = document.createElement('button');
        copyBtn.innerHTML = '📋';
        copyBtn.className = 'copy-btn';
        copyBtn.style.position = 'absolute';
        copyBtn.style.top = '10px';
        copyBtn.style.right = '10px';
        copyBtn.style.background = 'transparent';
        copyBtn.style.border = 'none';
        copyBtn.style.cursor = 'pointer';
        copyBtn.style.fontSize = '1.2rem';
        copyBtn.style.opacity = '0.5';
        copyBtn.style.transition = 'opacity 0.2s';

        copyBtn.addEventListener('mouseenter', () => copyBtn.style.opacity = '1');
        copyBtn.addEventListener('mouseleave', () => copyBtn.style.opacity = '0.5');

        copyBtn.addEventListener('click', () => {
            const pre = block.querySelector('pre');
            if (!pre) return;

            navigator.clipboard.writeText(pre.innerText).then(() => {
                copyBtn.innerHTML = '✅';
                setTimeout(() => copyBtn.innerHTML = '📋', 2000);
            });
        });

        block.appendChild(copyBtn);
    });
}

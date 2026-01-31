/* =====================================================
   APP ENTRY POINT
   Defines routes and initializes the application
   ===================================================== */

import { Router } from './router.js';

const routes = [
    { path: 'home', file: 'home.html', title: 'Accueil' },
    { path: 'intro', file: '00_intro.html', title: '00 Intro' },
    { path: 'variables', file: '02_variables.html', title: '02 Variables' },
    { path: 'arrays', file: '03_arrays.html', title: '03 Tableaux & Collections' },
    { path: 'structures', file: '04_structures.html', title: '04 Structures' },
    { path: 'functions', file: '05_functions.html', title: '05 Fonctions' },
    { path: 'strings', file: '06_strings.html', title: '06 Strings' },
    { path: 'oop', file: '07_oop.html', title: '07 POO' },
    { path: 'errors', file: '08_errors.html', title: '08 Erreurs' },
    { path: 'pdo', file: '09_pdo.html', title: '09 PDO' },
    { path: 'sessions', file: '10_sessions.html', title: '10 Sessions' },
    { path: 'files', file: '11_files.html', title: '11 Fichiers' },
    { path: 'forms', file: '12_forms.html', title: '12 Formulaires' },
    { path: 'reference', file: '13_reference.html', title: '13 Référence' },
    { path: 'php8', file: '14_php8.html', title: '14 PHP 8.x' },
    { path: 'api', file: '15_api.html', title: '15 API REST' },
    { path: 'security', file: '16_security.html', title: '16 Sécurité' },
    { path: 'mvc', file: '17_mvc.html', title: '17 MVC' },
    { path: 'ecosystem', file: '18_ecosystem.html', title: '18 Écosystème' },
    { path: 'libs', file: '19_libs.html', title: '19 Librairies' },
    { path: 'mvc-ecommerce', file: '20_mvc_ecommerce.html', title: '20 MVC Ecommerce' },
    {
        path: 'quiz',
        file: '99_quiz.html',
        title: 'Quiz',
        onLoad: initQuiz
    }
];

function initSectionExamples() {
    document.querySelectorAll('.example-toggle').forEach(toggle => {
        if (toggle.dataset.bound === 'true') return;
        const content = toggle.nextElementSibling;
        if (!content) return;

        toggle.dataset.bound = 'true';
        toggle.setAttribute('aria-expanded', 'false');
        content.classList.remove('is-open');
        content.style.maxHeight = '0px';

        toggle.addEventListener('click', () => {
            const isOpen = content.classList.toggle('is-open');
            toggle.classList.toggle('expanded', isOpen);
            toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            toggle.textContent = isOpen ? 'Masquer l\'exemple' : 'Voir l\'exemple';

            if (isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0px';
            }
        });
    });
}

function initApp() {
    console.log('🐘 PHP Memo App initializing...');

    // Generate Navigation
    generateNav();
    generateTOC();

    // Initialize Router
    new Router(routes, 'app-content');
}

function generateNav() {
    const nav = document.getElementById('main-nav');
    // Filter key routes for top nav to avoid overcrowding
    const mainRoutes = routes.filter(r => ['variables', 'functions', 'oop', 'pdo', 'ecosystem', 'quiz'].includes(r.path));

    mainRoutes.forEach(route => {
        const a = document.createElement('a');
        a.href = `#${route.path}`;
        a.textContent = route.title.replace(/^\d+\s/, ''); // Remove numbers for top nav
        nav.appendChild(a);
    });
}

function generateTOC() {
    const grid = document.getElementById('toc-grid');
    if (!grid) return;

    routes.filter(r => r.path !== 'home').forEach(route => {
        const a = document.createElement('a');
        a.href = `#${route.path}`;
        a.className = 'toc-item';

        let numMatch = route.title.match(/^(\d+)/);
        let num = numMatch ? numMatch[1] : '??';
        let label = route.title.replace(/^\d+\s/, '');

        // Specific cases for non-numbered or special titles
        if (route.path === 'quiz') {
            num = '√';
            label = 'Quiz PHP';
        }

        a.innerHTML = `<span class="toc-num">${num}</span>${label}`;
        grid.appendChild(a);
    });
}

async function initQuiz() {
    console.log('Testing Quiz Module Load...');
    const container = document.getElementById('quiz-app');
    if (!container) return;

    // Check if QuizEngine is already loaded globally
    if (!window.QuizEngine) {
        // Dynamically import the local quiz engine
        try {
            await import('./quiz-engine.js');
        } catch (e) {
            console.error("Failed to load Quiz Engine:", e);
            container.innerHTML = `<div class="warning">Impossible de charger le moteur de quiz.</div>`;
            return;
        }
    }

    if (window.QuizEngine) {
        new window.QuizEngine({
            containerId: 'quiz-app',
            jsonPath: 'quiz_php.json',
            questionsPerSession: 10
        });
    }
}

window.initSectionExamples = initSectionExamples;
document.addEventListener('DOMContentLoaded', initApp);

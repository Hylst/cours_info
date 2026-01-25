/* =====================================================
   APP ENTRY POINT
   Defines routes and initializes the application
   ===================================================== */

import { Router } from './router.js';

const routes = [
    { path: 'intro', file: '00_intro.html', title: 'Intro' },
    { path: 'variables', file: '01_variables.html', title: '01 Variables' },
    { path: 'arrays', file: '02_arrays.html', title: '02 Tableaux' },
    { path: 'structures', file: '03_structures.html', title: '03 Structures' },
    { path: 'functions', file: '04_functions.html', title: '04 Fonctions' },
    { path: 'strings', file: '05_strings.html', title: '05 Strings' },
    { path: 'oop', file: '06_oop.html', title: '06 POO' },
    { path: 'errors', file: '07_errors.html', title: '07 Erreurs' },
    { path: 'pdo', file: '08_pdo.html', title: '08 PDO' },
    { path: 'sessions', file: '09_sessions.html', title: '09 Sessions' },
    { path: 'files', file: '10_files.html', title: '10 Fichiers' },
    { path: 'forms', file: '11_forms.html', title: '11 Formulaires' },
    { path: 'reference', file: '12_reference.html', title: '12 Référence' },
    { path: 'php8', file: '13_php8.html', title: '13 PHP 8.x' },
    { path: 'api', file: '14_api.html', title: '14 API REST' },
    { path: 'security', file: '15_security.html', title: '15 Sécurité' },
    { path: 'mvc', file: '16_mvc.html', title: '16 MVC' },
    { path: 'ecosystem', file: '17_ecosystem.html', title: '17 Écosystème' },
    { path: 'libs', file: '18_libs.html', title: '18 Librairies' },
    { path: 'env', file: '19_env.html', title: '19 Environnement' },
    {
        path: 'quiz',
        file: '99_quiz.html',
        title: 'Quiz',
        onLoad: initQuiz
    }
];

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

    routes.filter(r => r.path !== 'intro').forEach(route => {
        const a = document.createElement('a');
        a.href = `#${route.path}`;
        a.className = 'toc-item';

        let num = route.title.match(/^(\d+)/);
        num = num ? num[1] : '??';

        let label = route.title.replace(/^\d+\s/, '');

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

document.addEventListener('DOMContentLoaded', initApp);

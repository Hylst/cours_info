/* =====================================================
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
    { path: 'strings', file: '06_strings.html', title: '05 Strings' },
    { path: 'oop', file: '07_oop.html', title: '06 POO' },
    { path: 'errors', file: '08_errors.html', title: '07 Erreurs' },
    { path: 'pdo', file: '09_pdo.html', title: '08 PDO' },
    { path: 'sessions', file: '10_sessions.html', title: '09 Sessions' },
    { path: 'files', file: '11_files.html', title: '10 Fichiers' },
    { path: 'forms', file: '12_forms.html', title: '11 Formulaires' },
    { path: 'reference', file: '13_reference.html', title: '12 Référence' },
    { path: 'php8', file: '14_php8.html', title: '13 PHP 8.x' },
    { path: 'api', file: '15_api.html', title: '14 API REST' },
    { path: 'security', file: '16_security.html', title: '15 Sécurité' },
    { path: 'mvc', file: '17_mvc.html', title: '16 MVC' },
    { path: 'ecosystem', file: '18_ecosystem.html', title: '17 Écosystème' },
    { path: 'libs', file: '19_libs.html', title: '18 Librairies' },
    { path: 'mvc-ecommerce', file: '20_mvc_ecommerce.html', title: '20 MVC Ecommerce' },

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

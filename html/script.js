/* 
   =====================================================
   LOGIQUE INTERACTIVE - MÉMO HTML5
   Auteur : Geoffroy Streit
   Dernière mise à jour : 2025
   ===================================================== 
*/

/**
 * 📱 SIMULATEUR DE RESPONSIVE DESIGN (Section 10)
 * Gère le slider pour redimensionner le conteneur d'image et simuler les media queries.
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * 📱 MENU MOBILE BURGER
     * Gère l'ouverture/fermeture du menu mobile
     */
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('main-nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

            // Toggle états
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            nav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Fermer le menu au clic sur un lien
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Fermer le menu au clic sur le backdrop
        document.body.addEventListener('click', (e) => {
            if (document.body.classList.contains('menu-open') &&
                !nav.contains(e.target) &&
                !menuToggle.contains(e.target)) {
                menuToggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    /**
     * 📱 SIMULATEUR DE RESPONSIVE DESIGN (Section 10)
     * Gère le slider pour redimensionner le conteneur d'image et simuler les media queries.
     */
    const slider = document.getElementById('resp-slider');
    const container = document.getElementById('resp-container');
    const valDisplay = document.getElementById('resp-val');
    const deviceDisplay = document.getElementById('resp-device');
    const currentSrc = document.getElementById('current-src');

    // Les images pour chaque format
    const imgDesktop = document.getElementById('img-desktop');
    const imgTablet = document.getElementById('img-tablet');
    const imgMobile = document.getElementById('img-mobile');

    // On vérifie que les éléments existent bien avant de mettre les écouteurs
    if (slider && container) {
        slider.addEventListener('input', (e) => {
            const width = e.target.value;
            container.style.width = width + 'px';
            if (valDisplay) valDisplay.innerText = width;

            // Logique de simulation des seuils (breakpoints)
            if (width < 600) {
                // Format Mobile : Focus sur le détail
                if (deviceDisplay) deviceDisplay.innerText = "(Mobile - Focus Détail)";
                if (imgDesktop) imgDesktop.style.display = 'none';
                if (imgTablet) imgTablet.style.display = 'none';
                if (imgMobile) imgMobile.style.display = 'block';
                if (currentSrc) currentSrc.innerText = 'responsive-mobile.png';
            } else if (width < 900) {
                // Format Tablette : Plan moyen
                if (deviceDisplay) deviceDisplay.innerText = "(Tablette - Plan Moyen)";
                if (imgDesktop) imgDesktop.style.display = 'none';
                if (imgTablet) imgTablet.style.display = 'block';
                if (imgMobile) imgMobile.style.display = 'none';
                if (currentSrc) currentSrc.innerText = 'responsive-tablet.png';
            } else {
                // Format Bureau : Plan large
                if (deviceDisplay) deviceDisplay.innerText = "(Desktop - Plan Large)";
                if (imgDesktop) imgDesktop.style.display = 'block';
                if (imgTablet) imgTablet.style.display = 'none';
                if (imgMobile) imgMobile.style.display = 'none';
                if (currentSrc) currentSrc.innerText = 'responsive-desktop.png';
            }
        });
    }

    /**
     * 🎓 INITIALISATION DU MOTEUR DE QUIZ
     * On essaie d'initialiser le quiz une fois que tout est chargé.
     */
    const initQuiz = () => {
        // On vérifie que QuizEngine est bien disponible globalement
        if (window.QuizEngine && !document.querySelector('.quiz-intro')) {
            new window.QuizEngine({
                containerId: 'quiz-app',
                jsonPath: 'quiz_html.json',
                questionsPerSession: 10
            });
            console.log("✅ Quiz HTML initialisé avec succès.");
        }
    };

    // On lance l'init du quiz
    initQuiz();
});

// Fallback additionnel pour être sûr que le quiz se charge bien
window.addEventListener('load', () => {
    // Si le quiz n'est toujours pas là après le chargement complet de la fenêtre
    if (window.QuizEngine && !document.querySelector('.quiz-intro')) {
        new window.QuizEngine({
            containerId: 'quiz-app',
            jsonPath: 'quiz_html.json',
            questionsPerSession: 10
        });
    }
});

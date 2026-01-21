/* =====================================================
   MODULE: NAVIGATION
   Side Nav, Scroll Spy, Back to Top
   ===================================================== */

window.App.nav = {
    init: function () {
        const sideLinks = document.querySelectorAll('.side-link');
        const sections = document.querySelectorAll('section');

        // === BACK TO TOP ===
        const backToTop = document.createElement('a');
        backToTop.href = '#';
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = '↑';
        document.body.appendChild(backToTop);

        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // === SCROLL HANDLER ===
        function handleScroll() {
            const scrollPos = window.scrollY + 100;

            // Back to top visibility
            if (window.scrollY > 400) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }

            // Active state for side nav
            sections.forEach(section => {
                if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                    const id = section.getAttribute('id');
                    sideLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Init Check
    }
};

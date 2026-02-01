console.log("DevOps script loaded");

// === MOBILE MENU TOGGLE ===
(function () {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav-menu');
    const body = document.body;

    function toggleMenu() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('menu-open');
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('menu-open');
    }

    // Toggle on hamburger click
    hamburger.addEventListener('click', toggleMenu);

    // Close on link click
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on overlay click (clicking outside menu)
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') &&
            !nav.contains(e.target) &&
            !hamburger.contains(e.target)) {
            closeMenu();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            closeMenu();
        }
    });
})();

// === K8S MAP TOOLTIPS ===
document.querySelectorAll('.k8s-comp').forEach(comp => {
    comp.addEventListener('mouseenter', (e) => {
        const tooltip = document.getElementById('k8s-tooltip');
        if (tooltip) {
            tooltip.textContent = e.target.getAttribute('data-tooltip');
            tooltip.style.color = "white";
        }
    });
    comp.addEventListener('mouseleave', () => {
        const tooltip = document.getElementById('k8s-tooltip');
        if (tooltip) {
            tooltip.textContent = "Survolez un composant...";
            tooltip.style.color = "var(--primary-bright)";
        }
    });
});

// === DEPLOYMENT SIMULATOR ===
window.simDeploy = function (type) {
    const visual = document.getElementById('sim-visual');
    const status = document.getElementById('sim-status');
    visual.innerHTML = ''; // Clear

    if (type === 'rolling') {
        status.innerHTML = "Rolling Update: v1 -> v2 (Un par un)";
        for (let i = 0; i < 5; i++) {
            let pod = createPod(i, 'blue');
            visual.appendChild(pod);
            // Animation
            setTimeout(() => {
                pod.style.backgroundColor = '#27ca40'; // Green
                pod.style.transform = 'scale(1.2)';
                setTimeout(() => pod.style.transform = 'scale(1)', 200);
            }, i * 600);
        }
    }
    else if (type === 'bluegreen') {
        status.innerHTML = "Blue/Green: Switch instantané";
        // Setup Blue
        let group1 = document.createElement('div');
        group1.style.display = 'flex'; group1.style.gap = '5px';
        visual.appendChild(group1);
        for (let i = 0; i < 3; i++) group1.appendChild(createPod(i, 'blue'));

        setTimeout(() => {
            // Setup Green (Hidden) then Switch
            visual.innerHTML = '';
            let group2 = document.createElement('div');
            group2.style.display = 'flex'; group2.style.gap = '5px';
            visual.appendChild(group2);
            for (let i = 0; i < 3; i++) group2.appendChild(createPod(i, '#27ca40'));
            status.innerHTML += " -> <strong>BASILÉ !</strong>";
        }, 1500);
    }
    else if (type === 'canary') {
        status.innerHTML = "Canary: 1 seul utilisateur teste v2";
        for (let i = 0; i < 5; i++) {
            let color = (i === 4) ? '#27ca40' : 'blue'; // Last one is green
            visual.appendChild(createPod(i, color));
        }
    }
}

function createPod(id, color) {
    let div = document.createElement('div');
    div.style.width = '30px';
    div.style.height = '30px';
    div.style.borderRadius = '50%';
    div.style.background = color;
    div.style.margin = '0 5px';
    div.style.transition = 'all 0.4s ease';
    div.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';
    return div;
}

// === SLO CALCULATOR ===
window.calcSLO = function () {
    const slo = parseFloat(document.getElementById('slo-input').value);
    const downtimeMins = 525600 * (1 - (slo / 100));

    // Format duration
    const hours = Math.floor(downtimeMins / 60);
    const minutes = Math.floor(downtimeMins % 60);

    const res = document.getElementById('slo-res');
    if (isNaN(downtimeMins)) {
        res.innerHTML = "Entrez un chiffre valide.";
        return;
    }

    res.innerHTML = `Downtime/An autorisé : <br><span style="font-size:1.4rem; color:var(--danger)">${hours}h ${minutes}m</span>`;
}

    // === VOCABULARY MODAL SYSTEM ===
    (function () {
        // Create modal element
        const modal = document.createElement('div');
        modal.id = 'vocab-modal';
        modal.innerHTML = `
        <button class="close-btn" onclick="closeVocabModal()">&times;</button>
        <div class="vocab-title"></div>
        <div class="vocab-def"></div>
    `;
        document.body.appendChild(modal);

        // Attach click handlers to all vocab terms
        document.querySelectorAll('.vocab-term').forEach(term => {
            term.addEventListener('click', (e) => {
                const title = e.target.textContent;
                const def = e.target.getAttribute('data-def');

                modal.querySelector('.vocab-title').textContent = title;
                modal.querySelector('.vocab-def').textContent = def;
                modal.classList.add('show');

                // Remove active from all, add to clicked
                document.querySelectorAll('.vocab-term').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Close on click outside
        document.addEventListener('click', (e) => {
            if (!e.target.classList.contains('vocab-term') && !modal.contains(e.target)) {
                closeVocabModal();
            }
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeVocabModal();
        });
    })();

window.closeVocabModal = function () {
    const modal = document.getElementById('vocab-modal');
    if (modal) {
        modal.classList.remove('show');
        document.querySelectorAll('.vocab-term').forEach(t => t.classList.remove('active'));
    }
}


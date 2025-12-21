console.log("DevOps script loaded");

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

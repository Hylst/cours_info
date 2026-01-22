/* =====================================================
   MODULE: DEEP LEARNING
   Interactive Neural Network Visualization
   ===================================================== */

window.App.deepLearning = {
    init: function () {
        this.initNeuronViz();
        this.initActivationViz();
    },

    // --- 1. NEURAL NETWORK VISUALIZER ---
    initNeuronViz: function () {
        const container = document.getElementById('dl-neuron-container');
        if (!container) return;

        const layers = [
            { name: 'Input', neurons: 4, color: '#3b82f6', desc: 'Données brutes (features)' },
            { name: 'Hidden 1', neurons: 6, color: '#8b5cf6', desc: 'Extraction de patterns' },
            { name: 'Hidden 2', neurons: 4, color: '#8b5cf6', desc: 'Abstraction' },
            { name: 'Output', neurons: 2, color: '#10b981', desc: 'Prédiction (classes)' }
        ];

        let html = '<div class="interactive-title" style="margin-bottom:15px; font-weight:600;">🧠 Architecture d\'un Réseau de Neurones</div>';
        html += '<p style="font-size:0.85rem; color:var(--muted); margin-bottom:20px;">Chaque neurone reçoit des entrées, applique une <strong>somme pondérée</strong>, ajoute un <strong>biais</strong>, puis passe par une <strong>fonction d\'activation</strong>.</p>';

        html += '<div style="display:flex; justify-content:center; align-items:center; gap:30px; padding:20px; overflow-x:auto;">';

        layers.forEach((layer, i) => {
            html += `
                <div style="text-align:center;">
                    <div style="font-size:0.7rem; font-weight:bold; color:${layer.color}; margin-bottom:10px;">${layer.name}</div>
                    <div style="display:flex; flex-direction:column; gap:8px; align-items:center;">
            `;
            for (let n = 0; n < layer.neurons; n++) {
                html += `
                    <div class="neuron" style="
                        width:30px; height:30px; border-radius:50%; 
                        background:${layer.color}22; border:2px solid ${layer.color};
                        display:flex; align-items:center; justify-content:center;
                        transition:all 0.3s; cursor:pointer;"
                        title="${layer.desc}">
                    </div>
                `;
            }
            html += `</div>
                    <div style="font-size:0.65rem; color:var(--muted); margin-top:8px;">${layer.neurons} neurones</div>
                </div>
            `;

            if (i < layers.length - 1) {
                html += `<div style="color:var(--primary); font-size:1.5rem;">→</div>`;
            }
        });
        html += '</div>';

        html += `
            <div style="margin-top:20px; padding:12px; background:rgba(139, 92, 246, 0.05); border-left:3px solid #8b5cf6; border-radius:4px;">
                <p style="margin:0; font-size:0.85rem;"><strong>💡 Forward Propagation :</strong> Les données traversent le réseau de gauche à droite. Chaque couche transforme l'information jusqu'à la prédiction finale.</p>
            </div>
        `;

        container.innerHTML = html;

        // Add hover animation
        document.querySelectorAll('.neuron').forEach(n => {
            n.addEventListener('mouseenter', () => {
                n.style.transform = 'scale(1.2)';
                n.style.boxShadow = '0 0 15px currentColor';
            });
            n.addEventListener('mouseleave', () => {
                n.style.transform = 'scale(1)';
                n.style.boxShadow = 'none';
            });
        });
    },

    // --- 2. ACTIVATION FUNCTIONS VISUALIZER ---
    initActivationViz: function () {
        const container = document.getElementById('dl-activation-container');
        if (!container) return;

        const activations = [
            {
                name: 'ReLU',
                formula: 'max(0, x)',
                desc: 'Standard pour les couches cachées. Simple et efficace.',
                svg: '<line x1="0" y1="50" x2="50" y2="50" stroke="#3b82f6" stroke-width="3"/><line x1="50" y1="50" x2="100" y2="10" stroke="#3b82f6" stroke-width="3"/>',
                color: '#3b82f6'
            },
            {
                name: 'Sigmoid',
                formula: '1 / (1 + e^-x)',
                desc: 'Sortie entre 0 et 1. Utilisée pour la classification binaire.',
                svg: '<path d="M 0 45 Q 30 45 50 25 Q 70 5 100 5" stroke="#10b981" stroke-width="3" fill="none"/>',
                color: '#10b981'
            },
            {
                name: 'Softmax',
                formula: 'e^xi / Σe^xj',
                desc: 'Normalise les sorties en probabilités (somme = 1).',
                svg: '<rect x="10" y="35" width="15" height="15" fill="#f59e0b"/><rect x="30" y="20" width="15" height="30" fill="#f59e0b"/><rect x="50" y="40" width="15" height="10" fill="#f59e0b"/><rect x="70" y="10" width="15" height="40" fill="#f59e0b"/>',
                color: '#f59e0b'
            },
            {
                name: 'Tanh',
                formula: '(e^x - e^-x) / (e^x + e^-x)',
                desc: 'Sortie entre -1 et 1. Centrée sur zéro.',
                svg: '<path d="M 0 45 Q 25 45 50 25 Q 75 5 100 5" stroke="#ef4444" stroke-width="3" fill="none"/>',
                color: '#ef4444'
            }
        ];

        let html = '<div class="interactive-title" style="margin-bottom:15px; font-weight:600;">⚡ Fonctions d\'Activation</div>';
        html += '<p style="font-size:0.85rem; color:var(--muted); margin-bottom:20px;">Elles introduisent la <strong>non-linéarité</strong> nécessaire pour apprendre des patterns complexes.</p>';
        html += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:15px;">';

        activations.forEach(a => {
            html += `
                <div style="background:var(--card-bg); border:1px solid var(--border); padding:15px; border-radius:8px; text-align:center;">
                    <div style="font-weight:600; color:${a.color}; margin-bottom:8px;">${a.name}</div>
                    <svg viewBox="0 0 100 50" style="width:100%; max-width:120px; height:50px; margin:10px auto; display:block;">
                        <line x1="0" y1="25" x2="100" y2="25" stroke="var(--border)" stroke-width="1" stroke-dasharray="3"/>
                        <line x1="50" y1="0" x2="50" y2="50" stroke="var(--border)" stroke-width="1" stroke-dasharray="3"/>
                        ${a.svg}
                    </svg>
                    <div style="font-family:monospace; font-size:0.75rem; color:var(--text); margin-bottom:8px;">${a.formula}</div>
                    <div style="font-size:0.7rem; color:var(--muted);">${a.desc}</div>
                </div>
            `;
        });
        html += '</div>';

        container.innerHTML = html;
    }
};

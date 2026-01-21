/* =====================================================
   MODULE: ECOSYSTEM
   Interactive Data Journey & Environment Visuals
   ===================================================== */

window.App.ecosystem = {
    lifecycleSteps: [
        {
            title: "1. Acquisition",
            icon: "📥",
            desc: "SQL, APIs, Web Scraping ou Streaming. C'est l'entrée brute.",
            color: "#3b82f6"
        },
        {
            title: "2. Nettoyage",
            icon: "🧼",
            desc: "Gestion des missing values, outliers et formats (Pandas).",
            color: "#10b981"
        },
        {
            title: "3. Exploration",
            icon: "🔍",
            desc: "Analyses statistiques et dataviz (Matplotlib / Seaborn).",
            color: "#8b5cf6"
        },
        {
            title: "4. Modélisation",
            icon: "🤖",
            desc: "Entraînement de modèles ML ou Deep Learning (Sklearn, PyTorch).",
            color: "#f59e0b"
        },
        {
            title: "5. Production",
            icon: "🚀",
            desc: "Déploiement en API (FastAPI) ou Tableau (Streamlit).",
            color: "#ef4444"
        }
    ],

    init: function () {
        const container = document.getElementById('ecosystem-viz-container');
        if (!container) return;

        // Build HTML for Lifecycle
        let html = `
            <div class="interactive-title" style="margin-bottom:20px; font-weight:600; font-size:1.1rem; color:var(--text);">
                🛤️ Le Parcours de la Donnée (Workflow)
            </div>
            <div style="display:flex; justify-content:space-between; align-items:flex-start; position:relative; gap:10px; padding:20px 0;">
                <div style="position:absolute; top:45px; left:5%; right:5%; height:2px; background:var(--border); z-index:0;"></div>
                ${this.lifecycleSteps.map((step, i) => `
                    <div class="ecosystem-step" data-index="${i}" style="z-index:1; flex:1; text-align:center; cursor:pointer; transition:all 0.3s; position:relative;">
                        <div class="step-icon-circle" style="
                            width:50px; height:50px; border-radius:50%; background:var(--card-bg); 
                            border:2px solid var(--border); margin:0 auto 10px; 
                            display:flex; align-items:center; justify-content:center; 
                            font-size:1.4rem; transition:all 0.3s;">
                            ${step.icon}
                        </div>
                        <div style="font-size:0.75rem; font-weight:600; color:var(--muted);">${step.title.split('. ')[1]}</div>
                    </div>
                `).join('')}
            </div>
            <div id="step-detail-box" style="
                margin-top:20px; padding:15px; border-radius:8px; 
                background:rgba(255,255,255,0.03); border:1px solid var(--border);
                min-height:80px; transition:all 0.3s; opacity:0; transform:translateY(10px);">
                <div id="step-detail-title" style="font-weight:600; margin-bottom:5px;"></div>
                <div id="step-detail-desc" style="font-size:0.9rem; color:var(--muted);"></div>
            </div>
        `;

        container.innerHTML = html;

        // Logic
        const self = this;
        const steps = container.querySelectorAll('.ecosystem-step');

        steps.forEach(step => {
            step.addEventListener('mouseenter', () => self.showStep(step.dataset.index));
        });

        // Default: Show first step
        this.showStep(0);
    },

    showStep: function (index) {
        const step = this.lifecycleSteps[index];
        const detailBox = document.getElementById('step-detail-box');
        const detailTitle = document.getElementById('step-detail-title');
        const detailDesc = document.getElementById('step-detail-desc');
        const icons = document.querySelectorAll('.step-icon-circle');

        // Update Icons
        icons.forEach((icon, i) => {
            if (i == index) {
                icon.style.borderColor = step.color;
                icon.style.boxShadow = `0 0 15px ${step.color}44`;
                icon.style.transform = "scale(1.15)";
                icon.style.background = `${step.color}11`;
            } else {
                icon.style.borderColor = 'var(--border)';
                icon.style.boxShadow = "none";
                icon.style.transform = "scale(1)";
                icon.style.background = "var(--card-bg)";
            }
        });

        // Update Box content with small fade effect
        detailBox.style.opacity = '0';
        detailBox.style.transform = 'translateY(5px)';

        setTimeout(() => {
            detailTitle.textContent = step.title;
            detailTitle.style.color = step.color;
            detailDesc.textContent = step.desc;
            detailBox.style.opacity = '1';
            detailBox.style.transform = 'translateY(0)';
            detailBox.style.borderColor = step.color + "44";
        }, 150);
    }
};

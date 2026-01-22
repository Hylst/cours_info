/* =====================================================
   MODULE: MLOPS / PRODUCTION
   Interactive Deployment Workflow
   ===================================================== */

window.App.mlops = {
    init: function () {
        this.initDeploymentViz();
        this.initToolsComparison();
    },

    initDeploymentViz: function () {
        const container = document.getElementById('mlops-deploy-container');
        if (!container) return;

        const stages = [
            { icon: '🧪', title: 'Expérimentation', desc: 'Notebook, prototypage rapide', color: '#3b82f6' },
            { icon: '📦', title: 'Packaging', desc: 'requirements.txt, joblib.dump()', color: '#8b5cf6' },
            { icon: '🔌', title: 'API', desc: 'FastAPI, Flask, endpoints', color: '#10b981' },
            { icon: '🐳', title: 'Container', desc: 'Docker, reproductibilité', color: '#f59e0b' },
            { icon: '☁️', title: 'Deploy', desc: 'Cloud, Kubernetes, CI/CD', color: '#ef4444' },
            { icon: '📊', title: 'Monitoring', desc: 'Drift, performance, logs', color: '#ec4899' }
        ];

        let html = '<div class="interactive-title" style="margin-bottom:15px; font-weight:600;">🚀 Pipeline MLOps</div>';
        html += '<p style="font-size:0.85rem; color:var(--muted); margin-bottom:20px;">Du prototype Jupyter à la production : chaque étape est cruciale pour un modèle fiable et maintenable.</p>';
        html += '<div style="display:flex; flex-wrap:wrap; justify-content:center; gap:10px; align-items:center;">';

        stages.forEach((s, i) => {
            html += `
                <div style="text-align:center; padding:12px; background:var(--card-bg); border:2px solid ${s.color}44; border-radius:10px; min-width:100px; transition:all 0.3s;" 
                     onmouseenter="this.style.borderColor='${s.color}'; this.style.boxShadow='0 0 15px ${s.color}44';"
                     onmouseleave="this.style.borderColor='${s.color}44'; this.style.boxShadow='none';">
                    <div style="font-size:1.5rem;">${s.icon}</div>
                    <div style="font-size:0.75rem; font-weight:600; color:${s.color}; margin:5px 0;">${s.title}</div>
                    <div style="font-size:0.65rem; color:var(--muted);">${s.desc}</div>
                </div>
            `;
            if (i < stages.length - 1) {
                html += `<span style="font-size:1.2rem; color:var(--primary);">→</span>`;
            }
        });
        html += '</div>';

        html += `
            <div style="margin-top:20px; padding:12px; background:rgba(239, 68, 68, 0.05); border-left:3px solid #ef4444; border-radius:4px;">
                <p style="margin:0; font-size:0.85rem;"><strong>⚠️ Data Drift :</strong> Un modèle déployé peut perdre en performance si les données changent. Monitorez régulièrement les métriques et prévoyez un pipeline de ré-entraînement.</p>
            </div>
        `;

        container.innerHTML = html;
    },

    initToolsComparison: function () {
        const container = document.getElementById('mlops-tools-container');
        if (!container) return;

        const tools = [
            { name: 'Streamlit', icon: '🎨', desc: 'Démos rapides, UI Python pure', use: 'POC, prototypes' },
            { name: 'FastAPI', icon: '⚡', desc: 'API haute performance, async', use: 'Production, microservices' },
            { name: 'MLflow', icon: '📈', desc: 'Tracking expériences, modèles', use: 'Gestion versions ML' },
            { name: 'Docker', icon: '🐳', desc: 'Conteneurisation, isolation', use: 'Reproductibilité' }
        ];

        let html = '<div class="interactive-title" style="margin-bottom:15px; font-weight:600;">🛠️ Outils MLOps Essentiels</div>';
        html += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:12px;">';

        tools.forEach(t => {
            html += `
                <div style="background:var(--card-bg); border:1px solid var(--border); padding:12px; border-radius:8px;">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                        <span style="font-size:1.3rem;">${t.icon}</span>
                        <strong style="font-size:0.9rem;">${t.name}</strong>
                    </div>
                    <div style="font-size:0.8rem; color:var(--text); margin-bottom:5px;">${t.desc}</div>
                    <div style="font-size:0.7rem; color:var(--muted); font-style:italic;">→ ${t.use}</div>
                </div>
            `;
        });
        html += '</div>';

        container.innerHTML = html;
    }
};

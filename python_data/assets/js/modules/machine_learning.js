/* =====================================================
   MODULE: MACHINE LEARNING
   Interactive ML Workflow & Algorithm Selector
   ===================================================== */

window.App.machineLearning = {
    algorithms: [
        {
            id: 'regression',
            icon: '📈',
            title: 'Régression',
            type: 'Supervisé',
            desc: 'Prédire une valeur numérique continue.',
            examples: 'Prix immobilier, température, chiffre d\'affaires.',
            models: 'LinearRegression, Ridge, Lasso, RandomForestRegressor',
            color: '#3b82f6'
        },
        {
            id: 'classification',
            icon: '🏷️',
            title: 'Classification',
            type: 'Supervisé',
            desc: 'Prédire une catégorie parmi un ensemble fini.',
            examples: 'Spam/Ham, Diagnostic médical, Churn client.',
            models: 'LogisticRegression, RandomForestClassifier, SVM, XGBoost',
            color: '#10b981'
        },
        {
            id: 'clustering',
            icon: '🔮',
            title: 'Clustering',
            type: 'Non-supervisé',
            desc: 'Regrouper des données similaires sans labels.',
            examples: 'Segmentation clients, Détection d\'anomalies.',
            models: 'KMeans, DBSCAN, Hierarchical Clustering',
            color: '#8b5cf6'
        },
        {
            id: 'dimreduction',
            icon: '🗜️',
            title: 'Réduction Dim.',
            type: 'Non-supervisé',
            desc: 'Compresser les features tout en gardant l\'information.',
            examples: 'Visualisation 2D, Preprocessing, Débruitage.',
            models: 'PCA, t-SNE, UMAP',
            color: '#f59e0b'
        }
    ],

    init: function () {
        this.initAlgoSelector();
        this.initWorkflowViz();
    },

    initAlgoSelector: function () {
        const container = document.getElementById('ml-algo-container');
        if (!container) return;

        let html = '<div class="interactive-title" style="margin-bottom:15px; font-weight:600;">🤖 Quel Algorithme Choisir ?</div>';
        html += '<p style="font-size:0.85rem; color:var(--muted); margin-bottom:20px;">Cliquez sur un type pour voir les détails et les modèles Scikit-Learn associés.</p>';
        html += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:15px;">';

        this.algorithms.forEach(a => {
            html += `
                <div class="algo-card" data-id="${a.id}" style="
                    background:var(--card-bg); border:2px solid var(--border); 
                    padding:15px; border-radius:10px; cursor:pointer;
                    transition:all 0.3s;">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                        <span style="font-size:1.5rem;">${a.icon}</span>
                        <div>
                            <div style="font-weight:600; color:${a.color};">${a.title}</div>
                            <div style="font-size:0.7rem; color:var(--muted);">${a.type}</div>
                        </div>
                    </div>
                    <p style="font-size:0.8rem; margin:0; color:var(--text);">${a.desc}</p>
                </div>
            `;
        });
        html += '</div>';

        html += `
            <div id="algo-detail" style="
                margin-top:20px; padding:15px; border-radius:8px; 
                background:rgba(255,255,255,0.03); border:1px solid var(--border);
                display:none;">
                <div id="algo-detail-title" style="font-weight:600; margin-bottom:8px;"></div>
                <div id="algo-detail-examples" style="font-size:0.85rem; color:var(--muted); margin-bottom:10px;"></div>
                <div id="algo-detail-models" style="font-size:0.85rem;"><strong>Modèles :</strong> <code id="algo-models-list"></code></div>
            </div>
        `;

        container.innerHTML = html;

        const self = this;
        document.querySelectorAll('.algo-card').forEach(card => {
            card.addEventListener('click', () => self.showAlgoDetail(card.dataset.id));
        });
    },

    showAlgoDetail: function (id) {
        const algo = this.algorithms.find(a => a.id === id);
        if (!algo) return;

        document.querySelectorAll('.algo-card').forEach(c => {
            c.style.borderColor = 'var(--border)';
            c.style.boxShadow = 'none';
        });
        const activeCard = document.querySelector(`.algo-card[data-id="${id}"]`);
        activeCard.style.borderColor = algo.color;
        activeCard.style.boxShadow = `0 0 15px ${algo.color}44`;

        const detailBox = document.getElementById('algo-detail');
        detailBox.style.display = 'block';
        detailBox.style.borderColor = algo.color + '44';

        document.getElementById('algo-detail-title').textContent = `${algo.icon} ${algo.title}`;
        document.getElementById('algo-detail-title').style.color = algo.color;
        document.getElementById('algo-detail-examples').innerHTML = `<strong>Exemples :</strong> ${algo.examples}`;
        document.getElementById('algo-models-list').textContent = algo.models;
    },

    initWorkflowViz: function () {
        const container = document.getElementById('ml-workflow-container');
        if (!container) return;

        const steps = [
            { icon: '📊', title: 'Data', desc: 'Collecter & Nettoyer' },
            { icon: '✂️', title: 'Split', desc: 'Train / Test (80/20)' },
            { icon: '⚙️', title: 'Preprocess', desc: 'Scale, Encode' },
            { icon: '🧠', title: 'Train', desc: 'model.fit()' },
            { icon: '📏', title: 'Evaluate', desc: 'Métriques' },
            { icon: '🔧', title: 'Tune', desc: 'GridSearchCV' }
        ];

        let html = '<div class="interactive-title" style="margin-bottom:15px; font-weight:600;">🔄 Workflow ML Standard</div>';
        html += '<div style="display:flex; flex-wrap:wrap; justify-content:center; gap:10px; align-items:center;">';

        steps.forEach((s, i) => {
            html += `
                <div style="text-align:center; padding:10px 15px; background:var(--card-bg); border:1px solid var(--border); border-radius:8px; min-width:80px;">
                    <div style="font-size:1.3rem;">${s.icon}</div>
                    <div style="font-size:0.75rem; font-weight:600; margin:5px 0;">${s.title}</div>
                    <div style="font-size:0.65rem; color:var(--muted);">${s.desc}</div>
                </div>
            `;
            if (i < steps.length - 1) {
                html += `<span style="font-size:1.2rem; color:var(--primary);">→</span>`;
            }
        });
        html += '</div>';

        container.innerHTML = html;
    }
};

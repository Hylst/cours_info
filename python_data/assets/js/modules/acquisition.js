/* =====================================================
   MODULE: ACQUISITION
   Interactive Data Sources & Pipeline Visualization
   ===================================================== */

window.App.acquisition = {
    methods: [
        { id: 'collect', icon: '📊', title: 'Collecte', desc: 'Génération de données originales : enquêtes, capteurs IoT, tracking web.', color: '#3b82f6' },
        { id: 'convert', icon: '🔄', title: 'Conversion', desc: 'Transformation de données internes en format standardisé et exploitable.', color: '#10b981' },
        { id: 'share', icon: '🔗', title: 'Partage', desc: 'Transfert via APIs, Open Data, partenariats inter-organisations.', color: '#8b5cf6' },
        { id: 'buy', icon: '💰', title: 'Achat', desc: 'Acquisition auprès de fournisseurs spécialisés (données comportementales, sectorielles).', color: '#f59e0b' }
    ],

    vigilances: [
        { icon: '🎯', title: 'Qualité', desc: '"Garbage In, Garbage Out" - La préparation peut prendre 90% du temps.' },
        { icon: '🔌', title: 'Intégration', desc: 'Normaliser les formats (dates, unités) dès l\'acquisition.' },
        { icon: '🔒', title: 'RGPD', desc: 'Consentements, anonymisation, sécurisation des flux.' },
        { icon: '💸', title: 'Coût', desc: 'Infrastructure cloud, ROI des données externes.' }
    ],

    init: function () {
        this.initMethodsViz();
        this.initPipelineViz();
    },

    initMethodsViz: function () {
        const container = document.getElementById('acquisition-methods-container');
        if (!container) return;

        let html = '<div class="interactive-title" style="margin-bottom:15px; font-weight:600;">🎯 Les 4 Méthodes d\'Acquisition</div>';
        html += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:15px;">';

        this.methods.forEach(m => {
            html += `
                <div class="method-card" data-id="${m.id}" style="
                    background:var(--card-bg); border:1px solid var(--border); 
                    padding:15px; border-radius:8px; text-align:center; 
                    cursor:pointer; transition:all 0.3s;">
                    <div style="font-size:2rem; margin-bottom:10px;">${m.icon}</div>
                    <div style="font-weight:600; margin-bottom:5px;">${m.title}</div>
                    <div style="font-size:0.8rem; color:var(--muted);">${m.desc}</div>
                </div>
            `;
        });
        html += '</div>';

        html += '<div style="margin-top:25px;">';
        html += '<div class="interactive-title" style="margin-bottom:15px; font-weight:600;">⚠️ Points de Vigilance</div>';
        html += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:10px;">';
        this.vigilances.forEach(v => {
            html += `
                <div style="display:flex; align-items:flex-start; gap:10px; padding:10px; background:rgba(239, 68, 68, 0.05); border-radius:6px; border-left:3px solid var(--red);">
                    <span style="font-size:1.2rem;">${v.icon}</span>
                    <div>
                        <div style="font-weight:600; font-size:0.85rem;">${v.title}</div>
                        <div style="font-size:0.75rem; color:var(--muted);">${v.desc}</div>
                    </div>
                </div>
            `;
        });
        html += '</div></div>';

        container.innerHTML = html;
    },

    initPipelineViz: function () {
        const container = document.getElementById('acquisition-pipeline-container');
        if (!container) return;

        const steps = [
            { num: '1', title: 'Besoin Métier', desc: 'Définir le problème' },
            { num: '2', title: 'Sources', desc: 'Identifier & évaluer' },
            { num: '3', title: 'Pipeline', desc: 'APIs, connecteurs' },
            { num: '4', title: 'ETL/ELT', desc: 'Nettoyer & valider' },
            { num: '5', title: 'Monitoring', desc: 'Documenter & surveiller' }
        ];

        let html = '<div class="interactive-title" style="margin-bottom:15px; font-weight:600;">📊 Pipeline d\'Acquisition Type</div>';
        html += '<div style="display:flex; justify-content:space-between; align-items:center; position:relative; padding:20px 0;">';
        html += '<div style="position:absolute; top:50%; left:5%; right:5%; height:2px; background:var(--primary); z-index:0;"></div>';

        steps.forEach((s, i) => {
            html += `
                <div style="z-index:1; text-align:center; flex:1;">
                    <div style="
                        width:40px; height:40px; border-radius:50%; 
                        background:var(--primary); color:white; 
                        display:flex; align-items:center; justify-content:center; 
                        margin:0 auto 8px; font-weight:bold;">${s.num}</div>
                    <div style="font-size:0.75rem; font-weight:600;">${s.title}</div>
                    <div style="font-size:0.65rem; color:var(--muted);">${s.desc}</div>
                </div>
            `;
        });
        html += '</div>';

        container.innerHTML = html;
    }
};

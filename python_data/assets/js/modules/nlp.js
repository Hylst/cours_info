/* =====================================================
   MODULE: NLP - Traitement du Texte
   Interactive Text Processing Concepts
   ===================================================== */

window.App.nlp = {
    init: function () {
        this.initPipelineViz();
        this.initTechniquesViz();
    },

    initPipelineViz: function () {
        const container = document.getElementById('nlp-pipeline-container');
        if (!container) return;

        const steps = [
            { icon: '📝', title: 'Texte Brut', desc: 'Input utilisateur', color: '#3b82f6' },
            { icon: '🔤', title: 'Tokenization', desc: 'Découper en mots/tokens', color: '#8b5cf6' },
            { icon: '🧹', title: 'Nettoyage', desc: 'Stop words, ponctuation', color: '#10b981' },
            { icon: '📐', title: 'Normalisation', desc: 'Lemmatisation, stemming', color: '#f59e0b' },
            { icon: '🔢', title: 'Vectorisation', desc: 'TF-IDF, Word2Vec, BERT', color: '#ef4444' },
            { icon: '🤖', title: 'Modèle', desc: 'Classification, NER...', color: '#ec4899' }
        ];

        let html = '<div class="interactive-title" style="margin-bottom:15px; font-weight:600;">🔄 Pipeline NLP Classique</div>';
        html += '<div style="display:flex; flex-wrap:wrap; justify-content:center; gap:8px; align-items:center;">';

        steps.forEach((s, i) => {
            html += `
                <div style="text-align:center; padding:10px; background:${s.color}11; border:1px solid ${s.color}44; border-radius:8px; min-width:90px;">
                    <div style="font-size:1.3rem;">${s.icon}</div>
                    <div style="font-size:0.7rem; font-weight:600; color:${s.color}; margin:4px 0;">${s.title}</div>
                    <div style="font-size:0.6rem; color:var(--muted);">${s.desc}</div>
                </div>
            `;
            if (i < steps.length - 1) {
                html += `<span style="color:var(--muted);">→</span>`;
            }
        });
        html += '</div>';

        container.innerHTML = html;
    },

    initTechniquesViz: function () {
        const container = document.getElementById('nlp-techniques-container');
        if (!container) return;

        const techniques = [
            { name: 'Bag of Words', icon: '👜', desc: 'Compte les occurrences de mots. Simple mais perd l\'ordre.', level: 'Basique' },
            { name: 'TF-IDF', icon: '⚖️', desc: 'Pondère par rareté dans le corpus. Standard ML classique.', level: 'Intermédiaire' },
            { name: 'Word2Vec', icon: '🧭', desc: 'Embeddings appris. Les mots similaires sont proches.', level: 'Avancé' },
            { name: 'Transformers', icon: '🤖', desc: 'BERT, GPT. Contexte bidirectionnel, état de l\'art.', level: 'Expert' }
        ];

        let html = '<div class="interactive-title" style="margin-bottom:15px; font-weight:600;">📊 Techniques de Vectorisation</div>';
        html += '<p style="font-size:0.85rem; color:var(--muted); margin-bottom:15px;">Transformer du texte en vecteurs numériques exploitables par les modèles ML.</p>';
        html += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px;">';

        techniques.forEach(t => {
            html += `
                <div style="background:var(--card-bg); border:1px solid var(--border); padding:12px; border-radius:8px;">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                        <span style="font-size:1.3rem;">${t.icon}</span>
                        <div>
                            <strong style="font-size:0.9rem;">${t.name}</strong>
                            <div style="font-size:0.65rem; color:var(--accent);">${t.level}</div>
                        </div>
                    </div>
                    <div style="font-size:0.8rem; color:var(--text);">${t.desc}</div>
                </div>
            `;
        });
        html += '</div>';

        container.innerHTML = html;
    }
};

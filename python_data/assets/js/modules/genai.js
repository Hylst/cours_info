/* =====================================================
   MODULE: GENERATIVE AI & LLMs
   Interactive Prompt Engineering & RAG Concepts
   ===================================================== */

window.App.genAI = {
    init: function () {
        this.initPromptViz();
        this.initRAGViz();
    },

    initPromptViz: function () {
        const container = document.getElementById('genai-prompt-container');
        if (!container) return;

        const techniques = [
            {
                name: 'Zero-Shot',
                icon: '🎯',
                desc: 'Demande directe sans exemple.',
                example: '"Traduis en anglais : Bonjour"',
                color: '#3b82f6'
            },
            {
                name: 'Few-Shot',
                icon: '📝',
                desc: 'Quelques exemples avant la question.',
                example: '"chat→cat, chien→dog, maison→?"',
                color: '#10b981'
            },
            {
                name: 'Chain-of-Thought',
                icon: '🔗',
                desc: 'Forcer le raisonnement étape par étape.',
                example: '"Réfléchis étape par étape..."',
                color: '#8b5cf6'
            },
            {
                name: 'System Prompt',
                icon: '🤖',
                desc: 'Définir le rôle et le comportement.',
                example: '"Tu es un expert Data Science..."',
                color: '#f59e0b'
            }
        ];

        let html = '<div class="interactive-title" style="margin-bottom:15px; font-weight:600;">✨ Techniques de Prompt Engineering</div>';
        html += '<p style="font-size:0.85rem; color:var(--muted); margin-bottom:20px;">La qualité de la réponse dépend directement de la qualité du prompt. Maîtrisez ces techniques :</p>';
        html += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:15px;">';

        techniques.forEach(t => {
            html += `
                <div style="background:var(--card-bg); border:1px solid var(--border); padding:15px; border-radius:10px; cursor:pointer; transition:all 0.3s;"
                     onmouseenter="this.style.borderColor='${t.color}'; this.style.boxShadow='0 0 15px ${t.color}33';"
                     onmouseleave="this.style.borderColor='var(--border)'; this.style.boxShadow='none';">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                        <span style="font-size:1.3rem;">${t.icon}</span>
                        <strong style="color:${t.color};">${t.name}</strong>
                    </div>
                    <div style="font-size:0.82rem; color:var(--text); margin-bottom:8px;">${t.desc}</div>
                    <div style="font-size:0.75rem; color:var(--muted); font-family:monospace; background:rgba(0,0,0,0.2); padding:6px; border-radius:4px;">${t.example}</div>
                </div>
            `;
        });
        html += '</div>';

        container.innerHTML = html;
    },

    initRAGViz: function () {
        const container = document.getElementById('genai-rag-container');
        if (!container) return;

        const steps = [
            { icon: '📄', title: 'Documents', desc: 'Vos données privées', color: '#3b82f6' },
            { icon: '✂️', title: 'Chunking', desc: 'Découper en morceaux', color: '#8b5cf6' },
            { icon: '🔢', title: 'Embeddings', desc: 'Vectoriser (OpenAI, HF)', color: '#10b981' },
            { icon: '🗄️', title: 'Vector DB', desc: 'Stocker (Pinecone, Chroma)', color: '#f59e0b' },
            { icon: '🔍', title: 'Retrieval', desc: 'Recherche sémantique', color: '#ef4444' },
            { icon: '🤖', title: 'LLM + Context', desc: 'Réponse augmentée', color: '#ec4899' }
        ];

        let html = '<div class="interactive-title" style="margin-bottom:15px; font-weight:600;">🔄 RAG : Retrieval Augmented Generation</div>';
        html += '<p style="font-size:0.85rem; color:var(--muted); margin-bottom:20px;">Connectez un LLM à vos propres données sans fine-tuning. Le pattern le plus utilisé en entreprise.</p>';
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

        html += `
            <div style="margin-top:20px; padding:12px; background:rgba(16, 185, 129, 0.05); border-left:3px solid #10b981; border-radius:4px;">
                <p style="margin:0; font-size:0.85rem;"><strong>💡 Avantage RAG :</strong> Pas besoin de fine-tuner le modèle (coûteux). Vos données restent à jour et sous votre contrôle. Idéal pour les documents internes, FAQ, bases de connaissances.</p>
            </div>
        `;

        container.innerHTML = html;
    }
};

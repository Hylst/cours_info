/* =====================================================
   MODULE: NUMPY VISUALIZER
   Interactive Slicing & Tensor Dimensions
   ===================================================== */

window.App.numpyViz = {
    init: function () {
        this.initSlicing();
        this.initDimensions();
    },

    // --- 1. SLICING VISUALIZER ---
    initSlicing: function () {
        const container = document.getElementById('numpy-viz-container');
        if (!container) return;

        let gridHTML = '<div class="interactive-title" style="margin-bottom:15px; font-weight:600;">🧩 Interactive Slicing (2D Array)</div>';
        gridHTML += '<div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:5px; margin-bottom:15px;">';
        for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 4; c++) {
                gridHTML += `<div id="cell-${r}-${c}" class="numpy-cell" style="
                    border:1px solid var(--border);
                    background:var(--card-bg);
                    color:var(--text);
                    display:flex; align-items:center; justify-content:center;
                    height:40px; border-radius:4px; font-family:monospace; font-size:0.9rem;
                    transition:all 0.2s;">
                    ${r},${c}
                </div>`;
            }
        }
        gridHTML += '</div>';

        const btnStyle = `
            background: transparent;
            border: 1px solid var(--primary);
            color: var(--primary);
            padding: 6px 12px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.85rem;
            font-family: 'JetBrains Mono';
            transition: all 0.2s;
        `;

        const controlsHTML = `
            <div style="display:flex; gap:10px; flex-wrap:wrap;">
                <button class="slice-btn" data-slice="row1" style="${btnStyle}">arr[1, :]</button>
                <button class="slice-btn" data-slice="col2" style="${btnStyle}">arr[:, 2]</button>
                <button class="slice-btn" data-slice="subgrid" style="${btnStyle}">arr[0:2, 0:2]</button>
                <button class="slice-btn" data-slice="step" style="${btnStyle}">arr[::2, ::2]</button>
                <button class="slice-btn" data-slice="bool" style="${btnStyle}">arr[arr > 5]</button>
            </div>
            <div id="slice-code" style="margin-top:15px; font-family:'JetBrains Mono', monospace; color:var(--accent); min-height:1.2em;">
                Hover controls to see slice
            </div>
        `;

        container.innerHTML = gridHTML + controlsHTML;

        const self = this;
        document.querySelectorAll('.slice-btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => self.highlightSlice(btn.dataset.slice));
            btn.addEventListener('mouseleave', () => self.clearHighlight());
        });
    },

    // --- 2. DIMENSIONS / TENSORS VISUALIZER ---
    initDimensions: function () {
        const container = document.getElementById('numpy-dim-container');
        if (!container) return;

        const dims = [
            {
                name: "Scalar (0D)",
                shape: "()",
                example: "42",
                useCase: "Une seule valeur : température, prix, score.",
                css: "width:24px; height:24px; border-radius:50%;",
                color: "#3b82f6"
            },
            {
                name: "Vector (1D)",
                shape: "(n,)",
                example: "[1, 2, 3, 4]",
                useCase: "Liste de features, série temporelle.",
                css: "width:100px; height:24px;",
                color: "#10b981"
            },
            {
                name: "Matrix (2D)",
                shape: "(m, n)",
                example: "Tableau Excel, image N&B",
                useCase: "Dataset (lignes=samples, colonnes=features).",
                css: "width:70px; height:70px;",
                color: "#8b5cf6"
            },
            {
                name: "Tensor 3D",
                shape: "(h, w, c)",
                example: "Image RGB (224, 224, 3)",
                useCase: "Image couleur : Hauteur × Largeur × Canaux.",
                css: "width:60px; height:60px; box-shadow: 5px 5px 0 rgba(139, 92, 246, 0.5), 10px 10px 0 rgba(139, 92, 246, 0.3);",
                color: "#f59e0b"
            },
            {
                name: "Tensor 4D+",
                shape: "(b, h, w, c)",
                example: "Batch (32, 224, 224, 3)",
                useCase: "Batch d'images pour le Deep Learning.",
                css: "width:50px; height:50px; box-shadow: 4px 4px 0 rgba(239, 68, 68, 0.4), 8px 8px 0 rgba(239, 68, 68, 0.3), 12px 12px 0 rgba(239, 68, 68, 0.2);",
                color: "#ef4444"
            }
        ];

        let html = '<div class="interactive-title" style="margin-bottom:15px; font-weight:600;">📐 De la Donnée au Tenseur (Shapes)</div>';
        html += '<p style="font-size:0.85rem; color:var(--muted); margin-bottom:20px;">En Numpy, la <code>shape</code> définit les dimensions d\'un array. Comprendre cette notion est <strong>fondamental</strong> pour le Machine Learning.</p>';
        html += '<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:15px;">';

        dims.forEach(d => {
            html += `
                <div class="dim-card" style="
                    background:var(--card-bg); border:1px solid var(--border); 
                    padding:15px; border-radius:8px; text-align:center; 
                    transition:all 0.3s; cursor:help;"
                    title="${d.example}">
                    <div style="font-size:0.75rem; font-weight:bold; color:${d.color}; margin-bottom:8px;">${d.name}</div>
                    <div style="margin:12px auto; border:2px solid ${d.color}; ${d.css} background:${d.color}22;"></div>
                    <div style="font-family:monospace; font-size:0.9rem; color:var(--text); margin-bottom:8px;">${d.shape}</div>
                    <div style="font-size:0.7rem; color:var(--muted); line-height:1.3;">${d.useCase}</div>
                </div>
            `;
        });
        html += '</div>';

        html += `
            <div style="margin-top:20px; padding:12px; background:rgba(59, 130, 246, 0.05); border-left:3px solid var(--primary); border-radius:4px;">
                <p style="margin:0; font-size:0.85rem;"><strong>💡 Astuce :</strong> Utilisez <code>arr.shape</code> pour connaître les dimensions et <code>arr.reshape()</code> pour les modifier. Le <code>-1</code> laisse Numpy calculer automatiquement une dimension.</p>
            </div>
        `;

        container.innerHTML = html;
    },

    highlightSlice: function (type) {
        const codeEl = document.getElementById('slice-code');
        this.clearHighlight();

        if (type === 'row1') {
            this.highlightCells((r, c) => r === 1);
            codeEl.textContent = "arr[1, :]  # Deuxième ligne complète";
        } else if (type === 'col2') {
            this.highlightCells((r, c) => c === 2);
            codeEl.textContent = "arr[:, 2]  # Troisième colonne";
        } else if (type === 'subgrid') {
            this.highlightCells((r, c) => r < 2 && c < 2);
            codeEl.textContent = "arr[0:2, 0:2]  # Sous-grille 2x2 (Haut-Gauche)";
        } else if (type === 'step') {
            this.highlightCells((r, c) => r % 2 === 0 && c % 2 === 0);
            codeEl.textContent = "arr[::2, ::2]  # Un élément sur deux";
        } else if (type === 'bool') {
            this.highlightCells((r, c) => (r * 4 + c) > 5);
            codeEl.textContent = "arr[arr > 5]  # Masque booléen (Valeurs > 5)";
        }
    },

    highlightCells: function (predicate) {
        for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 4; c++) {
                if (predicate(r, c)) {
                    const cell = document.getElementById(`cell-${r}-${c}`);
                    cell.style.background = 'var(--primary)';
                    cell.style.color = '#fff';
                    cell.style.transform = 'scale(1.05)';
                    cell.style.boxShadow = '0 0 10px var(--primary)';
                    cell.textContent = (r * 4 + c);
                }
            }
        }
    },

    clearHighlight: function () {
        document.querySelectorAll('.numpy-cell').forEach(cell => {
            cell.style.background = 'var(--card-bg)';
            cell.style.color = 'var(--text)';
            cell.style.transform = 'scale(1)';
            cell.style.boxShadow = 'none';
            const [_, r, c] = cell.id.split('-');
            cell.textContent = `${r},${c}`;
        });
        const codeEl = document.getElementById('slice-code');
        if (codeEl) codeEl.textContent = "Hover controls to see slice";
    }
};

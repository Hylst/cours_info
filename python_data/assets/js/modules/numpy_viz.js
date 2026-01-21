/* =====================================================
   MODULE: NUMPY VISUALIZER
   Interactive Array Slicing
   ===================================================== */

window.App.numpyViz = {
    init: function () {
        const container = document.getElementById('numpy-viz-container');
        if (!container) return;

        // Create 4x4 Grid UI
        let gridHTML = '<div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:5px; margin-bottom:15px;">';
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

        // Controls
        const controlsHTML = `
            <div style="display:flex; gap:10px; flex-wrap:wrap;">
                <button class="slice-btn" data-slice="row1" style="${btnStyle}">arr[1, :]</button>
                <button class="slice-btn" data-slice="col2" style="${btnStyle}">arr[:, 2]</button>
                <button class="slice-btn" data-slice="subgrid" style="${btnStyle}">arr[0:2, 0:2]</button>
                <button class="slice-btn" data-slice="step" style="${btnStyle}">arr[::2, ::2]</button>
                <button class="slice-btn" data-slice="bool" style="${btnStyle}">arr[arr > 5]</button>
            </div>
            <div id="slice-code" style="margin-top:15px; font-family:'JetBrains Mono', monospace; color:var(--accent);">
                Hover controls to see slice
            </div>
        `;

        container.innerHTML = gridHTML + controlsHTML;

        // Logic
        const self = this;
        document.querySelectorAll('.slice-btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => self.highlightSlice(btn.dataset.slice));
            btn.addEventListener('mouseleave', () => self.clearHighlight());
        });
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

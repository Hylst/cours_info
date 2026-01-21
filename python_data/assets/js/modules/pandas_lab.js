/* =====================================================
   MODULE: PANDAS LAB
   Interactive DataFrame Operations
   ===================================================== */

window.App.pandasLab = {
    initialData: [
        { id: 1, product: 'Laptop', category: 'Tech', price: 1200, rating: 4.5 },
        { id: 2, product: 'Mouse', category: 'Tech', price: 25, rating: 4.1 },
        { id: 3, product: 'Coffee', category: 'Food', price: 5, rating: 4.8 },
        { id: 4, product: 'Book', category: 'Media', price: 15, rating: 3.9 },
        { id: 5, product: 'Monitor', category: 'Tech', price: 300, rating: 4.3 },
    ],

    currentData: [],

    init: function () {
        const container = document.getElementById('pandas-lab-container');
        if (!container) return;

        this.currentData = [...this.initialData];

        // Build UI
        container.innerHTML = `
            <div style="margin-bottom:15px; display:flex; gap:10px; flex-wrap:wrap;">
                <button id="pd-reset" class="viz-btn" style="border-color:var(--text);">Reset</button>
                <button id="pd-filter" class="viz-btn">df[df.price > 50]</button>
                <button id="pd-sort" class="viz-btn">df.sort_values('rating')</button>
                <button id="pd-group" class="viz-btn">df.groupby('category').mean()</button>
            </div>
            
            <div id="pd-code-display" style="font-family:'JetBrains Mono', monospace; color:var(--accent); margin-bottom:10px; min-height:1.2em;">
                df # Initial DataFrame
            </div>

            <div style="overflow-x:auto;">
                <table id="pd-table" style="width:100%; border-collapse:collapse; font-size:0.9rem;">
                    <!-- Header injected here -->
                    <!-- Body injected here -->
                </table>
            </div>
        `;

        this.renderTable(this.currentData);

        const self = this;
        document.getElementById('pd-reset').onclick = () => {
            self.currentData = [...self.initialData];
            self.renderTable(self.currentData);
            self.updateCode("df # Reset");
        };

        document.getElementById('pd-filter').onclick = () => {
            self.currentData = self.initialData.filter(r => r.price > 50);
            self.renderTable(self.currentData);
            self.updateCode("df[df['price'] > 50]");
        };

        document.getElementById('pd-sort').onclick = () => {
            self.currentData = [...self.currentData].sort((a, b) => b.rating - a.rating);
            self.renderTable(self.currentData);
            self.updateCode("df.sort_values(by='rating', ascending=False)");
        };

        document.getElementById('pd-group').onclick = () => {
            const grouped = {
                'Tech': { price: 508.3, rating: 4.3 },
                'Food': { price: 5.0, rating: 4.8 },
                'Media': { price: 15.0, rating: 3.9 }
            };
            self.renderGrouped(grouped);
            self.updateCode("df.groupby('category')[['price', 'rating']].mean()");
        };
    },

    updateCode: function (str) {
        const el = document.getElementById('pd-code-display');
        el.style.opacity = '0';
        setTimeout(() => {
            el.textContent = str;
            el.style.opacity = '1';
        }, 150);
    },

    renderTable: function (data) {
        const table = document.getElementById('pd-table');
        if (!data.length) {
            table.innerHTML = '<tr><td colspan="5" style="padding:10px; text-align:center;">Empty DataFrame</td></tr>';
            return;
        }

        const keys = Object.keys(data[0]);

        let html = `<thead><tr style="border-bottom:2px solid var(--border); color:var(--muted);">`;
        html += `<th style="padding:8px; text-align:left;">Index</th>`;
        keys.forEach(k => html += `<th style="padding:8px; text-align:left; text-transform:capitalize;">${k}</th>`);
        html += `</tr></thead>`;

        html += `<tbody>`;
        data.forEach((row, i) => {
            html += `<tr style="border-bottom:1px solid rgba(255,255,255,0.05); transition:background 0.2s;">`;
            html += `<td style="padding:8px; font-family:monospace; color:var(--muted);">${i}</td>`;
            keys.forEach(k => {
                const val = row[k];
                const color = (typeof val === 'number') ? 'var(--accent)' : 'var(--text)';
                html += `<td style="padding:8px; color:${color};">${val}</td>`;
            });
            html += `</tr>`;
        });
        html += `</tbody>`;

        table.innerHTML = html;
    },

    renderGrouped: function (groupedData) {
        const table = document.getElementById('pd-table');
        let html = `<thead><tr style="border-bottom:2px solid var(--border); color:var(--muted);">
            <th style="padding:8px; text-align:left;">category</th>
            <th style="padding:8px; text-align:left;">price (mean)</th>
            <th style="padding:8px; text-align:left;">rating (mean)</th>
        </tr></thead><tbody>`;

        for (const [cat, vals] of Object.entries(groupedData)) {
            html += `<tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
                <td style="padding:8px; font-weight:bold;">${cat}</td>
                <td style="padding:8px; color:var(--accent);">${vals.price}</td>
                <td style="padding:8px; color:var(--accent);">${vals.rating}</td>
            </tr>`;
        }
        html += `</tbody>`;
        table.innerHTML = html;
    }
};

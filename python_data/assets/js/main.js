/* =====================================================
   MAIN ENTRY POINT
   Cours Python Data
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 App Initialized (Namespace Mode)');

    // Access via global window.App
    if (window.App) {
        if (window.App.utils) window.App.utils.initCopyButtons();
        if (window.App.nav) window.App.nav.init();
        if (window.App.numpyViz) window.App.numpyViz.init();
        if (window.App.pandasLab) window.App.pandasLab.init();
    }

    initVizPlaceholders();
});

function initVizPlaceholders() {
    document.querySelectorAll('.viz-placeholder').forEach(viz => {
        const type = viz.getAttribute('data-type');
        if (type === 'scatter') {
            viz.innerHTML = `
                <svg width="100%" height="100%" viewBox="0 0 200 100">
                    <circle cx="20" cy="80" r="3" fill="#3b82f6" opacity="0.6"/>
                    <circle cx="40" cy="60" r="3" fill="#3b82f6" opacity="0.6"/>
                    <circle cx="60" cy="70" r="3" fill="#3b82f6" opacity="0.6"/>
                    <circle cx="80" cy="40" r="3" fill="#3b82f6" opacity="0.6"/>
                    <circle cx="100" cy="50" r="3" fill="#3b82f6" opacity="0.6"/>
                    <circle cx="120" cy="30" r="3" fill="#3b82f6" opacity="0.6"/>
                    <circle cx="140" cy="40" r="3" fill="#3b82f6" opacity="0.6"/>
                    <circle cx="160" cy="20" r="3" fill="#3b82f6" opacity="0.6"/>
                    <line x1="10" y1="90" x2="190" y2="90" stroke="#334155" stroke-width="2"/>
                    <line x1="10" y1="90" x2="10" y2="10" stroke="#334155" stroke-width="2"/>
                </svg>
                <span style="position:absolute; bottom:5px; right:10px; font-size:0.7rem;">Scatter Plot</span>
            `;
        } else if (type === 'heatmap') {
            viz.innerHTML = `
                <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:2px; width:60%; height:60%;">
                    <div style="background:#1e3a8a"></div><div style="background:#1d4ed8"></div><div style="background:#2563eb"></div><div style="background:#3b82f6"></div><div style="background:#60a5fa"></div>
                    <div style="background:#1e3a8a"></div><div style="background:#3b82f6"></div><div style="background:#93c5fd"></div><div style="background:#bfdbfe"></div><div style="background:#60a5fa"></div>
                    <div style="background:#1d4ed8"></div><div style="background:#2563eb"></div><div style="background:#60a5fa"></div><div style="background:#93c5fd"></div><div style="background:#bfdbfe"></div>
                </div>
                <span style="position:absolute; bottom:5px; right:10px; font-size:0.7rem;">Heatmap</span>
            `;
        }
    });
}

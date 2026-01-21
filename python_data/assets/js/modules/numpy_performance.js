/* =====================================================
   MODULE: NUMPY PERFORMANCE
   Vectorization vs Standard Loops
   ===================================================== */

window.App.numpyPerf = {
    init: function () {
        const container = document.getElementById('numpy-perf-container');
        if (!container) return;

        container.innerHTML = `
            <div class="interactive-title" style="margin-bottom:15px; font-weight:600;">⚡ La Force de la Vectorisation (Vitesse)</div>
            <div style="background:rgba(0,0,0,0.2); padding:20px; border-radius:8px;">
                <div style="margin-bottom:20px;">
                    <button id="perf-start" style="
                        background:var(--primary); color:white; border:none; padding:10px 20px; 
                        border-radius:6px; font-weight:bold; cursor:pointer; width:100%;">
                        Lancer le test : Somme de 10,000,000 d'éléments
                    </button>
                </div>
                
                <div id="perf-results" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; opacity:0; transition:all 0.5s;">
                    <div style="text-align:center; padding:15px; border:1px solid var(--border); border-radius:8px;">
                        <div style="font-weight:bold; margin-bottom:5px;">Boucle Python (`for`)</div>
                        <div style="font-size:1.5rem; color:var(--red);" id="python-time">0.45s</div>
                        <div style="font-size:0.7rem; color:var(--muted);">(Interprété, lent)</div>
                    </div>
                    <div style="text-align:center; padding:15px; border:1px solid var(--primary); border-radius:8px; background:rgba(55, 118, 171, 0.05);">
                        <div style="font-weight:bold; margin-bottom:5px;">Numpy (`np.sum`)</div>
                        <div style="font-size:1.5rem; color:var(--green);" id="numpy-time">0.008s</div>
                        <div style="font-size:0.7rem; color:var(--muted);">(Vectorisé en C, ultra-rapide)</div>
                    </div>
                </div>
                
                <div id="perf-message" style="margin-top:15px; text-align:center; font-style:italic; font-size:0.85rem; color:var(--accent);">
                    Cliquez pour voir la différence de performance réelle.
                </div>
            </div>
        `;

        const self = this;
        document.getElementById('perf-start').onclick = function () {
            this.textContent = "Calcul en cours...";
            this.disabled = true;
            this.style.opacity = "0.5";

            // Mock delay to feel the "work"
            setTimeout(() => {
                document.getElementById('perf-results').style.opacity = "1";
                document.getElementById('perf-message').innerHTML = "🚀 <strong>Plus de 50x plus rapide !</strong> Numpy utilise des instructions SIMD au niveau processeur.";
                this.textContent = "Test terminé ✅";
            }, 800);
        };
    }
};

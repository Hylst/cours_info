/**
 * Quiz Engine for CyberMemo
 * Loads questions from JSON, manages state, and renders interactive UI.
 */
export class QuizEngine {
    constructor({ containerId, jsonPath, questionsPerSession = 10 }) {
        this.container = document.getElementById(containerId);
        this.jsonPath = jsonPath;
        this.limit = questionsPerSession;
        this.questions = [];
        this.currentIndex = 0;
        this.score = 0;

        this.init();
    }

    async init() {
        if (!this.container) return;

        try {
            this.container.innerHTML = '<div class="text-center text-muted">Chargement du quiz...</div>';
            const response = await fetch(this.jsonPath);
            if (!response.ok) throw new Error('Failed to load questions');

            const data = await response.json();
            // Data might be an array or object { questions: [...] }
            const allQuestions = Array.isArray(data) ? data : (data.questions || []);

            // Shuffle and slice
            this.questions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, this.limit);

            this.renderIntro();
        } catch (e) {
            console.error(e);
            this.container.innerHTML = `<div class="warning text-red">Erreur chargement: ${e.message}</div>`;
        }
    }

    renderIntro() {
        this.container.innerHTML = `
            <div class="glass-panel p-40 text-center">
                <div class="fs-3 mb-20">🛡️</div>
                <h3 class="gradient-text-primary mb-10">Prêt à relever le défi ?</h3>
                <p class="text-muted mb-30">Vous allez devoir répondre à ${this.questions.length} questions aléatoires.</p>
                <button id="start-btn" class="btn-primary">Commencer le Quiz</button>
            </div>
        `;
        document.getElementById('start-btn').addEventListener('click', () => this.renderQuestion());
    }

    renderQuestion() {
        if (this.currentIndex >= this.questions.length) {
            this.renderResults();
            return;
        }

        const q = this.questions[this.currentIndex];
        const progress = ((this.currentIndex) / this.questions.length) * 100;

        this.container.innerHTML = `
            <div class="glass-panel p-30 relative overflow-hidden">
                <!-- Progress Bar -->
                <div style="position:absolute; top:0; left:0; width:100%; height:4px; background:rgba(255,255,255,0.1);">
                    <div style="width:${progress}%; height:100%; background:var(--primary); transition:width 0.3s;"></div>
                </div>

                <div class="flex-between mb-20">
                    <span class="text-muted fs-0-9">Question ${this.currentIndex + 1}/${this.questions.length}</span>
                    <span class="text-primary fw-bold level-badge">${q.level || 'Normal'}</span>
                </div>
                
                <h3 class="mb-30 fw-500">${q.question}</h3>
                
                <div class="options-grid">
                    ${q.options.map((opt, i) => `
                        <button class="option-btn" data-idx="${i}">${opt}</button>
                    `).join('')}
                </div>
            </div>
        `;

        this.container.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleAnswer(parseInt(e.target.dataset.idx)));
        });
    }

    handleAnswer(selectedIndex) {
        const q = this.questions[this.currentIndex];
        const isCorrect = selectedIndex === q.answer; // Assuming answer is index 0-3

        if (isCorrect) this.score++;

        // Visual Feedback
        const btns = this.container.querySelectorAll('.option-btn');
        btns[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
        btns[q.answer].classList.add('correct'); // Always show correct one

        // Disable all
        btns.forEach(b => b.disabled = true);

        // Next button or auto-advance
        setTimeout(() => {
            this.currentIndex++;
            this.renderQuestion();
        }, 1500);
    }

    renderResults() {
        const percentage = Math.round((this.score / this.questions.length) * 100);
        let msg = '';
        let icon = '';

        if (percentage === 100) { msg = "Hacker Ultime ! 🏆"; icon = "👽"; }
        else if (percentage >= 80) { msg = "Excellent !"; icon = "🔥"; }
        else if (percentage >= 50) { msg = "Pas mal, soldat."; icon = "👮"; }
        else { msg = "Retourne en formation."; icon = "💀"; }

        this.container.innerHTML = `
            <div class="glass-panel p-40 text-center">
                <div class="fs-4 mb-20">${icon}</div>
                <h3 class="text-white mb-10">${msg}</h3>
                <div class="fs-2 gradient-text-primary fw-bold mb-10">${this.score} / ${this.questions.length}</div>
                <p class="text-muted fs-0-9 mb-30">Score: ${percentage}%</p>
                
                <button id="retry-btn" class="btn-primary">Recommencer</button>
            </div>
        `;

        document.getElementById('retry-btn').addEventListener('click', () => {
            this.currentIndex = 0;
            this.score = 0;
            this.init(); // Reshuffle
        });
    }
}

// Make it globally available for script tag usage if needed, 
// OR just rely on standard module usage. 
// The quiz.html imports it.
window.QuizEngine = QuizEngine;

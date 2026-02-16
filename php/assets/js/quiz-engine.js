/**
 * Moteur de Quiz Générique - AntiGravity
 * Charge un fichier JSON et gère l'affichage des questions/réponses.
 */

class QuizEngine {
    constructor(config) {
        this.config = config; // Store full config
        this.containerId = config.containerId || 'quiz-app';
        this.jsonPath = config.jsonPath; // Path relative to the HTML file
        this.questionsPerSession = config.questionsPerSession || 10;

        this.state = {
            allQuestions: [],
            currentSession: [],
            currentIndex: 0,
            score: 0,
            userAnswers: [], // { questionId, answerIndex, isCorrect }
            isFinished: false
        };

        this.elements = {
            container: document.getElementById(this.containerId)
        };

        if (this.elements.container) {
            this.init();
        } else {
            console.error('Quiz container not found:', this.containerId);
        }
    }

    async init() {
        try {
            this.showLoading();

            let data;
            if (this.config.data) {
                // Direct data injection (bypasses CORS/fetch)
                data = this.config.data;
            } else if (this.jsonPath) {
                // Standard fetch
                const response = await fetch(this.jsonPath);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                data = await response.json();
            } else {
                throw new Error("No data or jsonPath provided");
            }

            this.state.allQuestions = data.questions;
            this.renderIntro(data.meta);
        } catch (error) {
            console.error('Failed to load quiz data:', error);
            this.showError('Impossible de charger le quiz. ' + error.message);
        }
    }

    startParams() {
        // --- Persistence Logic ---
        const STORAGE_KEY = 'quiz_php_mastery';
        const answeredIds = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

        // Filter out questions already answered correctly
        let availableQuestions = this.state.allQuestions.filter(q => !answeredIds.includes(q.id));

        console.log(`Questions available: ${availableQuestions.length} / ${this.state.allQuestions.length}`);

        // If not enough questions left, or empty, logic to recycle or reset
        if (availableQuestions.length < this.questionsPerSession) {
            if (availableQuestions.length === 0) {
                // Formatting: "Cycle complete"
                alert("Félicitations ! Vous avez passé en revue toutes les questions PHP. Le quiz va se réinitialiser.");
                localStorage.removeItem(STORAGE_KEY);
                availableQuestions = [...this.state.allQuestions];
            } else {
                // Fill with some already answered questions to reach the count
                const needed = this.questionsPerSession - availableQuestions.length;
                const answeredQuestions = this.state.allQuestions.filter(q => answeredIds.includes(q.id));
                // Shuffle answered questions to pick random recycled ones
                const recycled = [...answeredQuestions].sort(() => 0.5 - Math.random()).slice(0, needed);
                availableQuestions = [...availableQuestions, ...recycled];
            }
        }

        // Shuffle and pick N questions
        const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
        this.state.currentSession = shuffled.slice(0, this.questionsPerSession);

        // Reset state
        this.state.currentIndex = 0;
        this.state.score = 0;
        this.state.userAnswers = [];
        this.state.isFinished = false;

        this.renderQuestion();
    }

    renderIntro(meta) {
        this.elements.container.innerHTML = `
            <div class="quiz-intro">
                <div class="quiz-badge">${meta.total} Questions</div>
                <h3>${meta.title}</h3>
                <p>Testez vos connaissances avec une série aléatoire de <strong>${this.questionsPerSession} questions</strong>.</p>
                <button id="btn-start" class="quiz-btn primary">Commencer le Quiz</button>
            </div>
        `;
        document.getElementById('btn-start').addEventListener('click', () => this.startParams());
    }

    renderQuestion() {
        const question = this.state.currentSession[this.state.currentIndex];
        const progress = ((this.state.currentIndex) / this.questionsPerSession) * 100;

        // Shuffle options dynamically
        const currentQ = this.state.currentSession[this.state.currentIndex];

        // Create an array of indices [0, 1, 2, 3...]
        const indices = currentQ.options.map((_, i) => i);
        // Shuffle indices
        const shuffledIndices = indices.sort(() => Math.random() - 0.5);

        // Store the mapping for this specific question instance to checks answers later
        this.state.currentShuffledIndices = shuffledIndices;

        let optionsHtml = '';
        shuffledIndices.forEach((originalIdx, displayIdx) => {
            const optText = currentQ.options[originalIdx];
            optionsHtml += `
                <button class="quiz-option" data-original-idx="${originalIdx}">
                    <span class="opt-letter">${String.fromCharCode(65 + displayIdx)}</span>
                    <span class="opt-text">${this.escapeHtml(optText)}</span>
                </button>
            `;
        });

        this.elements.container.innerHTML = `
            <div class="quiz-game">
                <div class="quiz-header">
                    <div class="quiz-progress-bar"><div style="width:${progress}%"></div></div>
                    <div class="quiz-stats">Question ${this.state.currentIndex + 1} / ${this.questionsPerSession}</div>
                </div>
                <div class="quiz-question">
                    <h4>${this.escapeHtml(question.question)}</h4>
                </div>
                <div class="quiz-options">
                    ${optionsHtml}
                </div>
                <div id="quiz-feedback" class="quiz-feedback hidden"></div>
                <div id="quiz-controls" class="quiz-controls hidden">
                    <button id="btn-next" class="quiz-btn primary">Suivant</button>
                </div>
            </div>
        `;

        // Add listeners
        document.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleAnswer(e.currentTarget));
        });

        document.getElementById('btn-next').addEventListener('click', () => this.nextQuestion());
    }

    handleAnswer(btn) {
        if (this.elements.container.querySelector('.quiz-option.selected')) return; // Already answered

        const selectedOriginalIdx = parseInt(btn.dataset.originalIdx);
        const question = this.state.currentSession[this.state.currentIndex];
        const isCorrect = selectedOriginalIdx === question.answer;

        // Visuals
        btn.classList.add('selected');
        if (isCorrect) {
            btn.classList.add('correct');
            this.state.score++;
            this.saveProgress(question.id);
        } else {
            btn.classList.add('wrong');
            // Show correct one by finding the button with the correct original index
            const correctBtn = this.elements.container.querySelector(`.quiz-option[data-original-idx="${question.answer}"]`);
            if (correctBtn) correctBtn.classList.add('correct');
        }

        // Show Feedback
        const feedback = document.getElementById('quiz-feedback');
        feedback.innerHTML = `
            <div class="feedback-icon">${isCorrect ? '✅' : '❌'}</div>
            <div class="feedback-text">
                <strong>${isCorrect ? 'Correct !' : 'Oups...'}</strong>
                <p>${this.escapeHtml(question.explanation)}</p>
            </div>
        `;
        feedback.classList.remove('hidden');
        feedback.classList.add(isCorrect ? 'success' : 'error');

        // Show Next Button
        document.getElementById('quiz-controls').classList.remove('hidden');

        // Disable all options
        document.querySelectorAll('.quiz-option').forEach(b => b.style.pointerEvents = 'none');
    }

    nextQuestion() {
        this.state.currentIndex++;
        if (this.state.currentIndex < this.questionsPerSession) {
            this.renderQuestion();
        } else {
            this.renderResults();
        }
    }

    renderResults() {
        const percentage = Math.round((this.state.score / this.questionsPerSession) * 100);
        let message = '';
        let color = '';

        if (percentage === 100) { message = 'Expert absolu ! 🏆'; color = '#10b981'; }
        else if (percentage >= 80) { message = 'Excellent ! 🚀'; color = '#3b82f6'; }
        else if (percentage >= 50) { message = 'Pas mal, continuez ! 💪'; color = '#f59e0b'; }
        else { message = 'Encore un peu d\'entraînement... 📚'; color = '#ef4444'; }

        this.elements.container.innerHTML = `
            <div class="quiz-results">
                <div class="score-circle" style="background:conic-gradient(${color} ${percentage}%, #334155 0)">
                    <span>${this.state.score}/${this.questionsPerSession}</span>
                </div>
                <h3>${message}</h3>
                <p>Vous avez obtenu ${percentage}% de bonnes réponses.</p>
                <div class="result-actions">
                    <button id="btn-restart" class="quiz-btn primary">Rejouer</button>
                    <!-- <button id="btn-home" class="quiz-btn secondary">Retour au cours</button> -->
                </div>
            </div>
        `;

        document.getElementById('btn-restart').addEventListener('click', () => this.startParams());
    }

    showLoading() {
        this.elements.container.innerHTML = '<div class="quiz-loading">Chargement du quiz...</div>';
    }

    showError(msg) {
        this.elements.container.innerHTML = `<div class="quiz-error">${msg}</div>`;
    }

    escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    saveProgress(questionId) {
        const STORAGE_KEY = 'quiz_php_mastery';
        let answeredIds = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        if (!answeredIds.includes(questionId)) {
            answeredIds.push(questionId);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(answeredIds));
        }
    }
}

// Auto-init if config is present
window.QuizEngine = QuizEngine;

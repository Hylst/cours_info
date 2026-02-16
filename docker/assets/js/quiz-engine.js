/**
 * Moteur de Quiz Générique - AntiGravity
 * Charge un fichier JSON et gère l'affichage des questions/réponses.
 * Features:
 * - Persistance (localStorage)
 * - Aléatoire (Questions + Réponses)
 * - Feedback Visuel (Icones - Couleurs)
 */

class QuizEngine {
    constructor(config) {
        this.containerId = config.containerId || 'quiz-app';
        this.jsonPath = config.jsonPath; // Path relative to the HTML file
        this.questionsPerSession = config.questionsPerSession || 10;
        this.storageKey = `quiz_mastered_${this.jsonPath.replace(/\W/g, '_')}`; // Unique key based on filename

        this.state = {
            allQuestions: [],
            currentSession: [],     // Array of { ...questionData, shuffledOptions: [], originalIndices: [] }
            currentIndex: 0,
            score: 0,
            userAnswers: [],        // { questionId, answerIndex, isCorrect }
            masteredIds: this.loadMastered(),
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

    loadMastered() {
        try {
            return JSON.parse(localStorage.getItem(this.storageKey)) || [];
        } catch (e) {
            return [];
        }
    }

    saveMastered(id) {
        if (!this.state.masteredIds.includes(id)) {
            this.state.masteredIds.push(id);
            localStorage.setItem(this.storageKey, JSON.stringify(this.state.masteredIds));
        }
    }

    async init() {
        try {
            this.showLoading();
            const response = await fetch(this.jsonPath);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            this.state.allQuestions = data.questions;

            this.renderIntro(data.meta);
        } catch (error) {
            console.error('Failed to load quiz data:', error);
            this.showError('Impossible de charger le quiz. Vérifiez votre connexion.');
        }
    }

    startParams() {
        // Filter out mastered questions first (if any remain)
        let available = this.state.allQuestions.filter(q => !this.state.masteredIds.includes(q.id));

        // If all mastered (or empty), reset !
        if (available.length === 0) {
            alert("Bravo ! Vous avez maîtrisé toutes les questions de ce module ! Le quiz va se réinitialiser.");
            this.state.masteredIds = [];
            localStorage.removeItem(this.storageKey);
            available = [...this.state.allQuestions];
        }

        // Shuffle available questions (Fisher-Yates)
        const shuffledQuestions = [...available];
        for (let i = shuffledQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
        }

        // Pick N questions and PREPARE them (shuffle options immediately)
        this.state.currentSession = shuffledQuestions
            .slice(0, this.questionsPerSession)
            .map(q => this.prepareQuestion(q));

        // Reset state
        this.state.currentIndex = 0;
        this.state.score = 0;
        this.state.userAnswers = [];
        this.state.isFinished = false;

        this.renderQuestion();
    }

    // Helper to shuffle options and keep track of original index
    prepareQuestion(question) {
        // Create an array of indices [0, 1, 2, 3]
        const indices = question.options.map((_, i) => i);

        // Fisher-Yates Shuffle
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }

        const shuffledIndices = indices;

        // Map to new options array
        const shuffledOptions = shuffledIndices.map(i => question.options[i]);

        return {
            ...question,
            shuffledOptions: shuffledOptions,
            shuffledIndices: shuffledIndices // shuffledIndices[newIndex] = originalIndex
        };
    }

    renderIntro(meta) {
        const masteredCount = this.state.masteredIds.length;
        const total = meta.total;
        const percent = Math.round((masteredCount / total) * 100);

        this.elements.container.innerHTML = `
            <div class="quiz-intro">
                <div class="quiz-badge">${total} Questions</div>
                <h3>${meta.title}</h3>
                <p>Testez vos connaissances avec une série aléatoire de <strong>${this.questionsPerSession} questions</strong>.</p>
                
                <div class="mastery-progress" style="margin: 20px 0; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 8px;">
                    <p style="margin-bottom: 5px;">Progression globale : <strong>${percent}%</strong> maîtrisé</p>
                    <div style="width: 100%; height: 8px; background: #333; border-radius: 4px; overflow: hidden;">
                        <div style="width: ${percent}%; height: 100%; background: #10b981;"></div>
                    </div>
                    <small style="opacity: 0.7;">Questions déjà réussies : ${masteredCount}/${total}</small>
                </div>

                <button id="btn-start" class="quiz-btn primary">Commencer le Quiz</button>
            </div>
        `;
        document.getElementById('btn-start').addEventListener('click', () => this.startParams());
    }

    renderQuestion() {
        const question = this.state.currentSession[this.state.currentIndex];
        const progress = ((this.state.currentIndex) / this.questionsPerSession) * 100;

        let optionsHtml = '';
        question.shuffledOptions.forEach((opt, idx) => {
            optionsHtml += `
                <button class="quiz-option" data-display-idx="${idx}">
                    <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
                    <span class="opt-text">${this.escapeHtml(opt)}</span>
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

        const nextBtn = document.getElementById('btn-next');
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());
    }

    handleAnswer(btn) {
        if (this.elements.container.querySelector('.quiz-option.selected')) return; // Already answered

        const displayIdx = parseInt(btn.dataset.displayIdx);
        const question = this.state.currentSession[this.state.currentIndex];

        // Retrieve original index from the shuffled map
        const originalIndex = question.shuffledIndices[displayIdx];

        // Check against the 'answer' property (which is an index)
        const isCorrect = originalIndex === question.answer;

        // Visuals
        btn.classList.add('selected');

        // Mark the selected button
        if (isCorrect) {
            btn.classList.add('correct');
            btn.innerHTML += ' <span class="feedback-status-icon" style="float:right">✅</span>';
            this.state.score++;
            this.saveMastered(question.id); // Save persistence
        } else {
            btn.classList.add('wrong');
            btn.innerHTML += ' <span class="feedback-status-icon" style="float:right">❌</span>';

            // Find and highlight the correct button
            // We need to find which display-index corresponds to the original answer index
            const correctDisplayIndex = question.shuffledIndices.indexOf(question.answer);
            const correctBtn = this.elements.container.querySelector(`.quiz-option[data-display-idx="${correctDisplayIndex}"]`);
            if (correctBtn) {
                correctBtn.classList.add('correct');
                correctBtn.innerHTML += ' <span class="feedback-status-icon" style="float:right">✅</span>';
            }
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
                
                 <div class="mastery-summary" style="margin-top:20px; font-size: 0.9em; opacity: 0.8;">
                    <p>Total questions maîtrisées : ${this.state.masteredIds.length} / ${this.state.allQuestions.length}</p>
                </div>

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
}

// Auto-init if config is present
window.QuizEngine = QuizEngine;

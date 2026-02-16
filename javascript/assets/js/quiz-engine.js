// Quiz Engine for JavaScript Memo

class QuizEngine {
    constructor(options) {
        this.containerId = options.containerId || 'quiz-app';
        this.jsonPath = options.jsonPath || 'quiz_js.json';
        this.questionsPerSession = options.questionsPerSession || 10;
        this.currentQuestion = 0;
        this.score = 0;
        this.questions = [];
        this.userAnswers = [];

        this.init();
    }

    async init() {
        try {
            await this.loadQuestions();
            this.renderIntro();
        } catch (error) {
            console.error('Error loading quiz:', error);
            this.renderError();
        }
    }

    async loadQuestions() {
        const response = await fetch(this.jsonPath);
        if (!response.ok) {
            throw new Error('Failed to load quiz questions');
        }
        const data = await response.json();

        const allQuestions = data.questions || [];
        this.totalQuestions = allQuestions.length;

        // --- Persistence Logic ---
        const STORAGE_KEY = 'quiz_js_mastery';
        const answeredIds = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

        // Filter out questions already answered correctly
        let availableQuestions = allQuestions.filter(q => !answeredIds.includes(q.id));

        console.log(`Questions available: ${availableQuestions.length} / ${this.totalQuestions}`);

        // If not enough questions left, or empty, logic to recycle or reset
        if (availableQuestions.length < this.questionsPerSession) {
            if (availableQuestions.length === 0) {
                // Formatting: "Cycle complete"
                alert("Félicitations ! Vous avez passé en revue toutes les questions. Le quiz va se réinitialiser.");
                localStorage.removeItem(STORAGE_KEY);
                availableQuestions = [...allQuestions];
            } else {
                // Fill with some already answered questions to reach the count
                const needed = this.questionsPerSession - availableQuestions.length;
                const answeredQuestions = allQuestions.filter(q => answeredIds.includes(q.id));
                const recycled = this.shuffleArray(answeredQuestions).slice(0, needed);
                availableQuestions = [...availableQuestions, ...recycled];
            }
        }

        // Shuffle and select
        this.questions = this.shuffleArray(availableQuestions).slice(0, this.questionsPerSession);
    }

    saveProgress(questionId) {
        const STORAGE_KEY = 'quiz_js_mastery';
        let answeredIds = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        if (!answeredIds.includes(questionId)) {
            answeredIds.push(questionId);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(answeredIds));
        }
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    renderIntro() {
        const container = document.getElementById(this.containerId);
        container.innerHTML = `
            <div class="quiz-intro">
                <h3>Prêt à tester vos connaissances ?</h3>
                <p>Une série aléatoire de <strong>${this.questions.length} questions</strong> tirées d'une banque de <strong>${this.totalQuestions} questions</strong>.</p>
                <p>Bonne chance ! 🚀</p>
                <button class="demo-btn" onclick="window.quizInstance.startQuiz()">Commencer le Quiz</button>
            </div>
        `;
        window.quizInstance = this;
    }

    startQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.renderQuestion();
    }

    renderQuestion() {
        const container = document.getElementById(this.containerId);
        const question = this.questions[this.currentQuestion];

        // Shuffle options to avoid pattern bias
        const optionsIndices = question.options.map((_, i) => i);
        this.currentShuffledIndices = optionsIndices.sort(() => Math.random() - 0.5);

        const optionsHTML = this.currentShuffledIndices.map((originalIndex, displayIndex) => {
            const optionText = question.options[originalIndex];
            const letter = String.fromCharCode(65 + displayIndex); // A, B, C...

            return `
            <div class="quiz-option" onclick="window.quizInstance.selectAnswer(${originalIndex}, this)">
                <span class="opt-letter" style="margin-right:10px; font-weight:bold; color:var(--primary)">${letter}.</span>
                ${optionText}
            </div>
            `;
        }).join('');

        container.innerHTML = `
            <div class="quiz-progress">
                <span>Question ${this.currentQuestion + 1} / ${this.questions.length}</span>
                <span class="quiz-score">Score: ${this.score} / ${this.currentQuestion}</span>
            </div>
            
            <div class="quiz-question">
                <h3>${question.question}</h3>
                <div class="quiz-options">
                    ${optionsHTML}
                </div>
            </div>
        `;
    }

    selectAnswer(originalIndex, element) {
        const question = this.questions[this.currentQuestion];
        const isCorrect = originalIndex === question.correct;

        if (isCorrect) {
            this.score++;
            this.saveProgress(question.id);
        }

        this.userAnswers.push({
            question: question.question,
            userAnswer: originalIndex,
            correct: question.correct,
            isCorrect: isCorrect
        });

        this.showFeedback(originalIndex, question);
    }

    showFeedback(userOriginalIndex, question) {
        const options = document.querySelectorAll('.quiz-option');

        // Disable all clicks
        options.forEach(opt => opt.style.pointerEvents = 'none');

        // Loop through the displayed options to find which one corresponds to the user's choice and the correct answer
        this.currentShuffledIndices.forEach((originalIndex, displayIndex) => {
            const optionElement = options[displayIndex];

            // Remove existing icons if any (idempotency)
            const existingIcon = optionElement.querySelector('.feedback-status-icon');
            if (existingIcon) existingIcon.remove();

            if (originalIndex === question.correct) {
                optionElement.classList.add('correct');
                optionElement.innerHTML += ' <span class="feedback-status-icon" style="float:right">✅</span>';
            } else if (originalIndex === userOriginalIndex && userOriginalIndex !== question.correct) {
                optionElement.classList.add('incorrect');
                optionElement.innerHTML += ' <span class="feedback-status-icon" style="float:right">❌</span>';
            }
        });

        const container = document.getElementById(this.containerId);
        const questionDiv = container.querySelector('.quiz-question');

        const explanationHTML = question.explanation ? `
            <div class="quiz-explanation">
                <strong>💡 Explication :</strong> ${question.explanation}
            </div>
        ` : '';

        questionDiv.innerHTML += explanationHTML;

        questionDiv.innerHTML += `
            <div style="margin-top:20px; text-align:center">
                <button class="demo-btn" onclick="window.quizInstance.nextQuestion()">
                    ${this.currentQuestion < this.questions.length - 1 ? 'Question Suivante →' : 'Voir les Résultats'}
                </button>
            </div>
        `;
    }

    nextQuestion() {
        this.currentQuestion++;
        if (this.currentQuestion < this.questions.length) {
            this.renderQuestion();
        } else {
            this.renderResults();
        }
    }

    renderResults() {
        const container = document.getElementById(this.containerId);
        const percentage = Math.round((this.score / this.questions.length) * 100);

        let message = '';
        let emoji = '';
        if (percentage >= 90) {
            message = 'Excellent ! Vous maîtrisez JavaScript ! 🎉';
            emoji = '🏆';
        } else if (percentage >= 70) {
            message = 'Très bien ! Continuez comme ça ! 👍';
            emoji = '⭐';
        } else if (percentage >= 50) {
            message = 'Pas mal ! Encore un peu de pratique ! 💪';
            emoji = '📚';
        } else {
            message = 'Continuez à apprendre ! Vous allez y arriver ! 🚀';
            emoji = '📖';
        }

        container.innerHTML = `
            <div class="quiz-results">
                <h3>Résultats ${emoji}</h3>
                <div class="score-display">${this.score} / ${this.questions.length}</div>
                <div class="score-message">${percentage}% de réussite</div>
                <p>${message}</p>
                
                <div style="margin-top:30px; display:flex; gap:10px; justify-content:center">
                    <button class="demo-btn" onclick="window.quizInstance.startQuiz()">Recommencer</button>
                    <a href="index.html" class="demo-btn" style="text-decoration:none; background:var(--bg2)">Retour au Menu</a>
                </div>
            </div>
        `;
    }

    renderError() {
        const container = document.getElementById(this.containerId);
        container.innerHTML = `
            <div class="warning">
                <strong>⚠️ Erreur de chargement</strong>
                <p>Impossible de charger les questions du quiz. Vérifiez que le fichier <code>quiz_js.json</code> existe.</p>
                <a href="index.html" class="demo-btn" style="text-decoration:none; margin-top:15px; display:inline-block">Retour au Menu</a>
            </div>
        `;
    }
}

// Auto-initialize if QuizEngine is loaded
if (typeof window !== 'undefined') {
    window.QuizEngine = QuizEngine;
}

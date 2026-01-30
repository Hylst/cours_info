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

        // Shuffle and select questions
        const allQuestions = data.questions || [];
        this.questions = this.shuffleArray(allQuestions)
            .slice(0, this.questionsPerSession);
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
                <p>Ce quiz contient ${this.questions.length} questions sur JavaScript.</p>
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

        const optionsHTML = question.options.map((option, index) => `
            <div class="quiz-option" onclick="window.quizInstance.selectAnswer(${index})">
                ${option}
            </div>
        `).join('');

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

    selectAnswer(answerIndex) {
        const question = this.questions[this.currentQuestion];
        const isCorrect = answerIndex === question.correct;

        if (isCorrect) {
            this.score++;
        }

        this.userAnswers.push({
            question: question.question,
            userAnswer: answerIndex,
            correct: question.correct,
            isCorrect: isCorrect
        });

        this.showFeedback(answerIndex, question);
    }

    showFeedback(answerIndex, question) {
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((option, index) => {
            option.style.pointerEvents = 'none';
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === answerIndex) {
                option.classList.add('incorrect');
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

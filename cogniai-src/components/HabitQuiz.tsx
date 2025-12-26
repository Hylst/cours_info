
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QUIZ_RESULTS } from '../constants';
import { ChevronRight, RotateCcw, Award } from 'lucide-react';

const HabitQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (optionScore: number) => {
    const nextScore = score + optionScore;
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setScore(nextScore);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setScore(nextScore);
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  const getResult = () => {
    return QUIZ_RESULTS.find(r => score <= r.maxScore) || QUIZ_RESULTS[QUIZ_RESULTS.length - 1];
  };

  if (isFinished) {
    const result = getResult();
    return (
      <div className="max-w-3xl mx-auto animate-in fade-in zoom-in duration-500">
        <div className="glass-card rounded-3xl p-10 text-center border-2 border-amber-500/30">
          <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500">
            <Award size={40} />
          </div>
          <h3 className={`text-4xl font-black mb-4 ${result.color}`}>{result.title}</h3>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            {result.message}
          </p>
          <div className="bg-slate-900/50 p-6 rounded-2xl mb-10 border border-white/5">
            <div className="text-sm uppercase tracking-widest text-slate-500 mb-2 font-bold">Votre score de risque</div>
            <div className="text-4xl font-mono font-bold text-white">{score} / 15</div>
          </div>
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 mx-auto text-slate-400 hover:text-white transition-colors"
          >
            <RotateCcw size={18} />
            Refaire le test
          </button>
        </div>
      </div>
    );
  }

  const questionData = QUIZ_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Auto-Évaluation</h2>
        <p className="text-slate-400">Évaluez vos habitudes d'apprentissage avec l'IA en 1 minute.</p>
      </div>

      <div className="glass-card rounded-3xl overflow-hidden shadow-2xl">
        <div className="h-1.5 bg-slate-800 w-full">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-amber-700 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="p-8 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full mb-4 inline-block">
              Question {currentQuestion + 1} / 5
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              {questionData.question}
            </h3>
          </div>

          <div className="grid gap-4">
            {questionData.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.score)}
                className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all text-left"
              >
                <span className="text-slate-300 group-hover:text-white font-medium text-lg">
                  {option.text}
                </span>
                <ChevronRight className="text-slate-600 group-hover:text-amber-500 transition-colors" size={20} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitQuiz;

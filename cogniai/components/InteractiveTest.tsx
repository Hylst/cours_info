
import React, { useState, useEffect } from 'react';
import { AI_TEXT_SNIPPETS } from '../constants';
import { RefreshCcw, EyeOff, FileCheck, Timer, BrainCircuit, AlertCircle, CheckCircle2 } from 'lucide-react';

const InteractiveTest: React.FC = () => {
  const [snippet, setSnippet] = useState('');
  const [userInput, setUserInput] = useState('');
  const [step, setStep] = useState<'view' | 'type' | 'result'>('view');
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    setSnippet(AI_TEXT_SNIPPETS[Math.floor(Math.random() * AI_TEXT_SNIPPETS.length)]);
  }, []);

  useEffect(() => {
    let timer: number;
    if (step === 'view' && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && step === 'view') {
      handleStart();
    }
    return () => clearInterval(timer);
  }, [step, timeLeft]);

  const handleStart = () => {
    setStep('type');
  };

  const handleCompare = () => {
    setStep('result');
  };

  const resetTest = () => {
    setSnippet(AI_TEXT_SNIPPETS[Math.floor(Math.random() * AI_TEXT_SNIPPETS.length)]);
    setUserInput('');
    setStep('view');
    setTimeLeft(15);
  };

  const getComparisonData = () => {
    const clean = (text: string) => text.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"").split(/\s+/);
    const originalWords = clean(snippet);
    const userWords = clean(userInput);
    
    const keywords = Array.from(new Set(originalWords.filter(w => w.length > 4)));
    const matched = keywords.filter(w => userWords.includes(w));
    const missed = keywords.filter(w => !userWords.includes(w));
    const score = Math.min(100, Math.round((matched.length / keywords.length) * 100));

    return { matched, missed, score };
  };

  const { matched, missed, score } = getComparisonData();

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black mb-4">L'épreuve de la Restitution</h2>
        <div className="max-w-2xl mx-auto p-4 bg-white/5 border border-white/10 rounded-xl flex items-center gap-4 text-left">
           <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
             <BrainCircuit size={20} />
           </div>
           <p className="text-xs text-slate-400 leading-relaxed">
             <strong>Diagnostic :</strong> Si vous ne pouvez pas réécrire l'idée, vous ne la possédez pas. Ce test mesure votre <strong>profondeur d'encodage</strong>.
           </p>
        </div>
      </div>

      <div className="glass-card rounded-[2.5rem] p-6 md:p-12 border-2 border-dashed border-white/10 relative overflow-hidden shadow-2xl">
        {step === 'view' && (
          <div className="space-y-8 animate-in fade-in duration-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-500">Observation Active</span>
              <div className="flex items-center gap-2 text-amber-500 font-mono font-bold text-xl">
                <Timer size={20} />
                {timeLeft}s
              </div>
            </div>
            <div className="p-8 bg-slate-950 rounded-2xl text-lg md:text-xl font-medium leading-relaxed shadow-inner border border-white/5 text-slate-200">
              {snippet}
            </div>
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handleStart}
                className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all flex items-center gap-3 shadow-xl shadow-amber-600/20"
              >
                <EyeOff size={20} /> Je l'ai en tête, cacher
              </button>
            </div>
          </div>
        )}

        {step === 'type' && (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
             <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">Restitution Manuelle</span>
                <span className="text-[10px] text-slate-500 uppercase font-bold">Ne trichez pas, votre cerveau regarde.</span>
             </div>
            <textarea
              className="w-full h-48 bg-white/5 border border-white/10 rounded-2xl p-8 text-white focus:outline-none focus:border-cyan-500 transition-all text-xl font-medium placeholder:text-slate-700 shadow-2xl"
              placeholder="Réécrivez l'idée principale du texte..."
              value={userInput}
              autoFocus
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              onClick={handleCompare}
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-5 rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-cyan-600/20"
            >
              <FileCheck size={24} /> Analyser mon encodage
            </button>
          </div>
        )}

        {step === 'result' && (
          <div className="space-y-8 animate-in zoom-in-95 duration-500">
            <div className="text-center p-10 bg-gradient-to-br from-slate-900 to-transparent rounded-[2rem] border border-white/5">
              <div className={`text-7xl font-black mb-4 ${score > 60 ? 'text-emerald-500' : 'text-amber-500'}`}>{score}%</div>
              <div className="text-xl font-bold mb-2">Indice de Maîtrise Réelle</div>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                {score > 60 ? "Excellent. Vous traitez l'information activement." : "Attention : Vous subissez l'illusion de fluidité. L'information glisse sur votre mémoire."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs uppercase mb-4 tracking-widest">
                  <CheckCircle2 size={14} /> Concepts Ancrés
                </div>
                <div className="flex flex-wrap gap-2">
                  {matched.length > 0 ? matched.map((w, i) => (
                    <span key={i} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-medium">{w}</span>
                  )) : <span className="text-slate-600 text-xs italic">Aucun concept clé n'a été retenu.</span>}
                </div>
              </div>
              <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
                <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase mb-4 tracking-widest">
                  <AlertCircle size={14} /> Concepts "Fantômes" (Oubliés)
                </div>
                <div className="flex flex-wrap gap-2">
                  {missed.map((w, i) => (
                    <span key={i} className="px-3 py-1 bg-red-500/10 text-red-400 rounded-lg text-xs font-medium">{w}</span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={resetTest}
              className="w-full py-4 text-slate-500 hover:text-white flex items-center justify-center gap-3 transition-all font-bold group"
            >
              <RefreshCcw size={20} className="group-hover:rotate-180 transition-transform duration-700" /> Essayer un autre défi
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveTest;

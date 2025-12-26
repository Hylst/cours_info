
/**
 * InteractiveTest.tsx
 * ---------------------
 * Le coeur de CogniAI : le test de restitution qui mesure si tu as vraiment
 * compris ou si tu as juste "lu" sans encoder.
 * 
 * Principe : on te montre un texte, tu mémorises, on cache, tu réécris.
 * Simple mais terriblement révélateur.
 * 
 * TODO: Peut-être ajouter un mode "difficile" avec des textes plus longs ?
 * 
 * @author Geoffroy (hylst)
 */

import React, { useState, useEffect } from 'react';
import { AI_TEXT_SNIPPETS } from '../constants';
import { RefreshCcw, EyeOff, FileCheck, Timer, BrainCircuit, AlertCircle, CheckCircle2, Info } from 'lucide-react';

const InteractiveTest: React.FC = () => {
  // Le snippet qu'on va afficher (choisi aléatoirement)
  const [snippet, setSnippet] = useState('');

  // Ce que l'utilisateur tape dans la zone de restitution
  const [userInput, setUserInput] = useState('');

  // Les 3 étapes : lecture -> restitution -> résultat
  const [step, setStep] = useState<'view' | 'type' | 'result'>('view');

  // Compte à rebours de 15 secondes pour la phase de lecture
  // (oui c'est court, mais c'est fait exprès pour simuler une vraie situation)
  const [timeLeft, setTimeLeft] = useState(15);

  // Au montage du composant, on choisit un texte aléatoire
  useEffect(() => {
    setSnippet(AI_TEXT_SNIPPETS[Math.floor(Math.random() * AI_TEXT_SNIPPETS.length)]);
  }, []);

  // Gestion du timer - quand il arrive à 0, on passe automatiquement à l'étape suivante
  useEffect(() => {
    let timer: number;
    if (step === 'view' && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && step === 'view') {
      // Temps écoulé ! On cache le texte même si l'utilisateur n'a pas cliqué
      handleStart();
    }
    return () => clearInterval(timer);
  }, [step, timeLeft]);

  // L'utilisateur clique sur "Je l'ai en tête" ou le timer expire
  const handleStart = () => {
    setStep('type');
  };

  // L'utilisateur soumet sa restitution
  const handleCompare = () => {
    setStep('result');
  };

  // Reset complet pour réessayer avec un nouveau texte
  const resetTest = () => {
    setSnippet(AI_TEXT_SNIPPETS[Math.floor(Math.random() * AI_TEXT_SNIPPETS.length)]);
    setUserInput('');
    setStep('view');
    setTimeLeft(15);
  };

  /**
   * Algorithme de comparaison (simpliste mais efficace)
   * 
   * On extrait les mots-clés (> 4 caractères) du texte original,
   * puis on vérifie combien l'utilisateur en a restitué.
   * 
   * C'est pas une comparaison mot-à-mot, on cherche les CONCEPTS.
   * Par exemple, si le texte parle de "neuroplasticité" et que l'utilisateur
   * écrit "la plasticité du cerveau", on devrait idéalement matcher...
   * mais bon, on est pas encore là niveau NLP :/
   */
  const getComparisonData = () => {
    // Nettoie le texte : minuscules, sans ponctuation, split par espaces
    const clean = (text: string) => text.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").split(/\s+/);
    const originalWords = clean(snippet);
    const userWords = clean(userInput);

    // On garde que les mots de plus de 4 caractères (les mots courts c'est du bruit)
    const keywords = Array.from(new Set(originalWords.filter(w => w.length > 4)));

    // Calcul des mots retrouvés vs oubliés
    const matched = keywords.filter(w => userWords.includes(w));
    const missed = keywords.filter(w => !userWords.includes(w));

    // Score sur 100 - capé pour éviter les valeurs bizarres
    const score = Math.min(100, Math.round((matched.length / keywords.length) * 100));

    return { matched, missed, score };
  };

  const { matched, missed, score } = getComparisonData();

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* En-tête de la section */}
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

      {/* Zone principale du test - 3 états différents */}
      <div className="glass-card rounded-[2.5rem] p-6 md:p-12 border-2 border-dashed border-white/10 relative overflow-hidden shadow-2xl">

        {/* ÉTAPE 1 : Lecture et mémorisation */}
        {step === 'view' && (
          <div className="space-y-8 animate-in fade-in duration-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-500">Observation Active</span>
              <div className="flex items-center gap-2 text-amber-500 font-mono font-bold text-xl">
                <Timer size={20} />
                {timeLeft}s
              </div>
            </div>

            {/* Le texte à mémoriser */}
            <div className="p-8 bg-slate-950 rounded-2xl text-lg md:text-xl font-medium leading-relaxed shadow-inner border border-white/5 text-slate-200">
              {snippet}
            </div>

            {/* Instructions claires pour l'utilisateur */}
            <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl flex items-start gap-3">
              <Info size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-amber-200/80 leading-relaxed">
                <strong>Ce qu'on attend :</strong> Lisez attentivement et retenez les <strong>concepts clés</strong> (pas besoin de réciter mot pour mot).
                Vous devrez reformuler l'idée principale avec vos propres mots.
              </p>
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

        {/* ÉTAPE 2 : Restitution - le texte est caché, on écrit */}
        {step === 'type' && (
          <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400">Restitution Manuelle</span>
              <span className="text-[10px] text-slate-500 uppercase font-bold">Ne trichez pas, votre cerveau regarde.</span>
            </div>

            {/* Zone de texte pour écrire la reformulation */}
            <textarea
              className="w-full h-48 bg-white/5 border border-white/10 rounded-2xl p-8 text-white focus:outline-none focus:border-cyan-500 transition-all text-xl font-medium placeholder:text-slate-700 shadow-2xl"
              placeholder="Reformulez l'idée principale du texte avec vos propres mots... Quels étaient les concepts clés ?"
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

        {/* ÉTAPE 3 : Résultats - on compare ce qui a été retenu */}
        {step === 'result' && (
          <div className="space-y-8 animate-in zoom-in-95 duration-500">
            {/* Score principal */}
            <div className="text-center p-10 bg-gradient-to-br from-slate-900 to-transparent rounded-[2rem] border border-white/5">
              <div className={`text-7xl font-black mb-4 ${score > 60 ? 'text-emerald-500' : 'text-amber-500'}`}>{score}%</div>
              <div className="text-xl font-bold mb-2">Indice de Maîtrise Réelle</div>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                {score > 60
                  ? "Excellent. Vous traitez l'information activement. Vous avez capté l'essentiel."
                  : "Attention : Vous subissez l'illusion de fluidité. L'information a glissé sur votre mémoire sans s'y ancrer."}
              </p>
            </div>

            {/* Détail des concepts retrouvés vs oubliés */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Concepts retenus */}
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

              {/* Concepts oubliés */}
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

            {/* Bouton pour recommencer */}
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


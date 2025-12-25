
import React, { useEffect } from 'react';
import { ArrowLeft, BookOpen, Lightbulb, Microscope, Target, Sparkles } from 'lucide-react';
import { DEEP_DIVE_CONTENT } from '../constants';
import AIImage from './AIImage';

interface DetailPageProps {
  id: string;
  onBack: () => void;
}

const DetailPage: React.FC<DetailPageProps> = ({ id, onBack }) => {
  const content = DEEP_DIVE_CONTENT[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <button onClick={onBack} className="text-white flex items-center gap-2 underline">
          <ArrowLeft size={20} /> Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Retour</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-amber-500 rounded flex items-center justify-center font-bold text-slate-950 text-xs">C</div>
            <span className="font-bold text-sm tracking-tight">Cogni<span className="text-cyan-400">AI</span></span>
          </div>
          <div className="w-20"></div> {/* Spacer */}
        </div>
      </nav>

      <main className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <header className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
              {content.title}
            </h1>
            <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
          </header>

          <div className="mb-20 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <AIImage 
              prompt={content.fullContent.imagePrompt}
              alt={content.title}
              className="h-[400px] w-full"
              aspectRatio="16:9"
            />
          </div>

          <div className="grid gap-16">
            {/* Analogy Section */}
            <section className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-amber-500/20 rounded-full"></div>
              <div className="flex items-center gap-3 mb-6 text-amber-500">
                <Lightbulb size={24} />
                <h2 className="text-2xl font-black uppercase tracking-widest">L'Analogie</h2>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed font-serif italic">
                {content.fullContent.analogy}
              </p>
            </section>

            {/* Scientific Explanation */}
            <section className="p-10 rounded-[2.5rem] bg-slate-900 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Microscope size={120} />
              </div>
              <div className="flex items-center gap-3 mb-8 text-cyan-400">
                <BookOpen size={24} />
                <h2 className="text-2xl font-black uppercase tracking-widest">Le Mécanisme</h2>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed">
                {content.fullContent.scientificExplanation}
              </p>
            </section>

            {/* Scenario */}
            <section>
              <div className="flex items-center gap-3 mb-6 text-amber-500">
                <Target size={24} />
                <h2 className="text-2xl font-black uppercase tracking-widest">Mise en Situation</h2>
              </div>
              <div className="p-8 rounded-[2rem] bg-amber-500/5 border border-amber-500/20">
                <p className="text-lg text-slate-300 leading-relaxed">
                  {content.fullContent.scenario}
                </p>
              </div>
            </section>

            {/* Actionable Tip */}
            <section className="text-center bg-gradient-to-br from-amber-600 to-amber-700 p-12 rounded-[3rem] shadow-2xl shadow-amber-900/20">
              <Sparkles size={48} className="mx-auto mb-6 text-white animate-pulse" />
              <h2 className="text-3xl font-black mb-6 text-white uppercase tracking-tighter">Conseil d'Expert</h2>
              <p className="text-xl text-white/90 font-bold leading-relaxed max-w-2xl mx-auto">
                {content.fullContent.actionableTip}
              </p>
              <button 
                onClick={onBack}
                className="mt-12 bg-white text-slate-950 px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform"
              >
                J'ai compris, je continue
              </button>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-white/10 text-center">
        <p className="text-slate-500 text-sm">CogniAI - Guide de survie cognitive pour développeurs</p>
      </footer>
    </div>
  );
};

export default DetailPage;

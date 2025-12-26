
import React from 'react';
import { ArrowRight, Brain, ChevronDown } from 'lucide-react';
import AIImage from './AIImage';

interface HeroProps {
  onDetail: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onDetail }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-1/4 -left-20 w-[30rem] h-[30rem] bg-amber-600/10 rounded-full blur-[140px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-[140px] -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 items-center gap-16 relative z-10">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-inner">
            <Brain size={14} className="animate-bounce" />
            Pédagogie Cognitive & IA
          </div>
          
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
            L'Illusion de <br />
            <span className="text-gradient-human">Compétence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed font-medium">
            Avez-vous réellement appris, ou avez-vous simplement lu la réponse ? Découvrez comment le <strong>"Phantom Learning"</strong> fragilise votre avenir technique.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-16">
            <a
              href="#test"
              className="px-10 py-5 bg-amber-600 hover:bg-amber-700 text-white rounded-[1.5rem] font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-2xl shadow-amber-900/40 transform hover:-translate-y-1"
            >
              Faire le test interactif
              <ArrowRight size={22} />
            </a>
            <button
              onClick={() => onDetail('phantom-knowledge')}
              className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-[1.5rem] font-bold text-lg transition-all backdrop-blur-sm"
            >
              Comprendre l'Illusion
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto lg:mx-0">
            <div className="flex flex-col items-center lg:items-start group">
              <span className="text-3xl font-black text-white group-hover:text-amber-500 transition-colors">0%</span>
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500 mt-2">Effort Réel</span>
            </div>
            <div className="flex flex-col items-center lg:items-start group">
              <span className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors">100%</span>
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500 mt-2">Confiance</span>
            </div>
            <div className="flex flex-col items-center lg:items-start group">
              <span className="text-3xl font-black text-red-500">90%</span>
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500 mt-2">Taux d'oubli</span>
            </div>
            <div className="flex flex-col items-center lg:items-start group">
              <span className="text-3xl font-black text-white group-hover:text-amber-500 transition-colors">∞</span>
              <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500 mt-2">Dépendance</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative group cursor-pointer" onClick={() => onDetail('phantom-knowledge')}>
          <div className="absolute -inset-4 bg-amber-500/10 rounded-[3.5rem] blur-2xl group-hover:bg-amber-500/20 transition-all"></div>
          <AIImage 
            prompt="A sophisticated digital artwork showing a human brain glowing with golden light, partially made of transparent crystal and intricate neural circuits, floating in a dark cosmic void with cyan data particles, hyper-realistic, high contrast." 
            alt="Human intelligence and AI fusion illustration"
            className="h-[600px] w-full shadow-2xl shadow-slate-950 group-hover:scale-[1.01] transition-transform"
            aspectRatio="3:4"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-amber-500 text-slate-950 px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl">
              Explorer l'esprit
            </div>
          </div>
        </div>
      </div>

      <a href="#diagnostic" className="absolute bottom-10 animate-bounce text-slate-600 hover:text-white transition-colors">
        <ChevronDown size={32} />
      </a>
    </div>
  );
};

export default Hero;

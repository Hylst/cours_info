
import React from 'react';
import { SOLUTIONS } from '../constants';
import { Clock, Edit3, MessageCircle, Lightbulb, Search, BookOpen, ChevronRight, Sparkle, ExternalLink } from 'lucide-react';
import AIImage from './AIImage';

interface SolutionsProps {
  onDetail: (id: string) => void;
}

const Solutions: React.FC<SolutionsProps> = ({ onDetail }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'clock': return <Clock className="text-amber-500" />;
      case 'edit': return <Edit3 className="text-amber-500" />;
      case 'message': return <MessageCircle className="text-amber-500" />;
      case 'search': return <Search className="text-amber-500" />;
      case 'book': return <BookOpen className="text-amber-500" />;
      default: return <Lightbulb className="text-amber-500" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase mb-6 tracking-widest">
          Protocole de Survie
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-6">Le Guide de l'Apprentissage <br /><span className="text-gradient-human">Indestructible</span></h2>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12">
          6 rituels quotidiens pour transformer l'IA en mentor plutôt qu'en béquille.
        </p>
        <div className="max-w-4xl mx-auto mb-16 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer" onClick={() => onDetail('friction')}>
          <AIImage
            prompt="A survival guide layout: a futuristic compass pointing towards a glowing golden sun, digital ruins in the background, high fantasy tech aesthetic, cinematic lighting."
            alt="Survival Guide Hero"
            className="h-64 w-full transition-transform duration-700 group-hover:scale-105"
            aspectRatio="16:9"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SOLUTIONS.map((solution, index) => (
          <div
            key={index}
            onClick={() => onDetail(solution.id)}
            className="glass-card p-8 rounded-[2.5rem] relative overflow-hidden group transition-all duration-500 border border-white/5 hover:border-amber-500/40 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_30px_60px_-15px_rgba(245,158,11,0.2)] cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/5 rounded-full group-hover:bg-amber-500/20 group-hover:scale-150 transition-all duration-1000 blur-3xl"></div>

            <div className="flex justify-between items-start mb-8">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg group-hover:scale-110 group-hover:rotate-6 group-hover:border-amber-500/60 transition-all duration-500">
                {getIcon(solution.icon)}
              </div>
              <ExternalLink size={16} className="text-slate-700 group-hover:text-amber-500" />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white group-hover:text-amber-400 transition-colors duration-300">
                {solution.title}
                <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-amber-500" />
              </h3>

              <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-200 transition-colors duration-300">
                {solution.description}
              </p>
            </div>

            <div className="absolute top-4 right-4 text-amber-500/20 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-1000">
              <Sparkle size={12} />
            </div>

            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <div className="max-w-4xl mx-auto p-12 bg-slate-900/80 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8 group-hover:text-amber-100 transition-colors">Prêt à sortir de l'illusion ?</h3>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              L'expertise ne s'achète pas avec un abonnement à 20$/mois. Elle se construit dans le silence, la recherche et l'effort. <strong>Reprenez votre autonomie.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#manifesto" className="group/btn relative bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-amber-600/20 flex items-center gap-2 justify-center hover:scale-105 active:scale-95 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Signer le Manifeste
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              </a>
              <a href="#library" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95 hover:border-white/30 flex items-center justify-center">
                Voir la bibliographie
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;

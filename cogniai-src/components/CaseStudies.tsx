
import React from 'react';
import { CASE_STUDIES } from '../constants';
import { TrendingUp, TrendingDown, Info } from 'lucide-react';
import AIImage from './AIImage';

const CaseStudies: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Deux Chemins, Deux Destins</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto italic">
          Comment vos habitudes d'aujourd'hui sculptent l'expert que vous serez dans 2 ans.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {CASE_STUDIES.map((study, index) => (
          <div key={index} className={`glass-card p-4 rounded-[2.5rem] border-2 ${study.color} flex flex-col h-full hover:scale-[1.01] transition-all duration-500`}>
            <AIImage 
              prompt={index === 0 
                ? "A person in a dark room leaning back, eyes closed, surrounded by fading digital screens with broken code, representing mental stagnation." 
                : "A person actively writing on a digital tablet with bright golden neural sparks connecting their hand to their head, intense focus, creative energy."
              }
              alt={study.profile}
              className="h-64 w-full mb-8"
              aspectRatio="16:9"
            />
            
            <div className="px-6 pb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl border border-white/5">
                  {study.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{study.profile}</h3>
                  <div className="flex items-center gap-2 text-[9px] uppercase font-bold tracking-widest text-slate-500 mt-1">
                    {index === 0 ? <TrendingDown size={12} className="text-red-500" /> : <TrendingUp size={12} className="text-emerald-500" />}
                    {index === 0 ? "Risque d'obsolescence" : "Croissance exponentielle"}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <Info size={10} /> Comportement quotidien
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed italic">"{study.behavior}"</p>
                </div>

                <div className="space-y-2 pt-6 border-t border-white/5">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Résultat après 12 mois</span>
                  <p className="text-slate-400 leading-relaxed text-xs">{study.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;

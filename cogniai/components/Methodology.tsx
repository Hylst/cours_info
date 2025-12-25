
import React from 'react';
import { METHODOLOGY_PILLARS } from '../constants';
import AIImage from './AIImage';

const Methodology: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-black leading-tight">
            Les 3 Piliers de la <br />
            <span className="text-gradient-human underline decoration-amber-500/30">Maîtrise Durable</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Comprendre pourquoi votre cerveau refuse de mémoriser ce qu'il n'a pas « mérité » par l'effort.
          </p>
          
          <div className="space-y-4 pt-4">
            {METHODOLOGY_PILLARS.map((pillar, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                <div className="flex-shrink-0 pt-1">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">{pillar.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 w-full">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-900">
             <AIImage 
               prompt="A visual representation of deep mental mastery: a library emerging from a digital brain, golden light illuminating ancient books and futuristic code lines, high quality cinematic art."
               alt="Mastery Pillars Illustration"
               className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
               aspectRatio="16:9"
             />
             <div className="absolute bottom-8 left-8 right-8 z-20 pointer-events-none">
               <div className="bg-amber-500/90 text-slate-950 px-3 py-1 rounded-full text-xs font-black uppercase mb-3 inline-block">Flash Focus</div>
               <p className="text-xl font-bold text-white italic">"L'illusion de compétence est le plus grand obstacle au progrès."</p>
             </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-white/5 text-center">
              <div className="text-2xl font-bold text-cyan-400">80%</div>
              <div className="text-[10px] uppercase tracking-tighter text-slate-500">Taux de rétention actif</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-white/5 text-center">
              <div className="text-2xl font-bold text-red-500">12%</div>
              <div className="text-[10px] uppercase tracking-tighter text-slate-500">Taux de rétention passif</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;

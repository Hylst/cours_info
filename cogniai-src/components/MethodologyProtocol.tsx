
import React from 'react';
import { ACTE_PROTOCOL } from '../constants';
import { Microscope, HelpCircle, ArrowRight, ExternalLink } from 'lucide-react';

interface MethodologyProtocolProps {
  onDetail: (id: string) => void;
}

const MethodologyProtocol: React.FC<MethodologyProtocolProps> = ({ onDetail }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase mb-6 tracking-widest">
          La Solution Scientifique
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-8">Le Protocole <span className="text-gradient-human">A.C.T.E.</span></h2>
        
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/10 text-left flex gap-4 cursor-pointer hover:bg-white/10 transition-colors group" onClick={() => onDetail('acte-analysis')}>
           <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 flex-shrink-0">
             <Microscope size={24} />
           </div>
           <div className="flex-grow">
             <div className="flex items-center justify-between">
                <h4 className="text-amber-500 font-bold mb-1">L'avis de l'Expert Pédagogique</h4>
                <ExternalLink size={14} className="text-slate-600 group-hover:text-amber-500" />
             </div>
             <p className="text-slate-400 text-sm leading-relaxed">
               Découvrez comment hacker votre plasticité synaptique avec ces 4 piliers. Cliquez pour voir des exemples concrets d'application.
             </p>
           </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACTE_PROTOCOL.map((step, index) => (
          <div key={index} className="relative group cursor-pointer" onClick={() => onDetail(step.id)}>
            <div className="h-full glass-card p-8 rounded-[2.5rem] border border-white/10 hover:border-amber-500/40 transition-all duration-500 relative z-10">
              <div className="text-6xl font-black text-white/5 absolute -top-2 -left-2 select-none group-hover:text-amber-500/10 transition-colors">
                {step.step}
              </div>
              
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-xl border border-white/5 text-2xl group-hover:scale-110 transition-transform">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">
                {step.title}
              </h3>
              
              <div className="text-xs font-bold text-amber-500/80 mb-4 uppercase tracking-widest px-2 py-1 bg-amber-500/5 rounded-md inline-block">
                {step.action}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {step.desc}
              </p>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest flex items-center gap-2">
                    <HelpCircle size={12} /> Science :
                  </p>
                  <p className="text-[11px] text-slate-500 italic mt-1 leading-tight">
                    {step.science}
                  </p>
                </div>
                <ArrowRight size={16} className="text-slate-700 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MethodologyProtocol;


import React from 'react';
import { Brain, Network, Zap, Target, Activity, Lightbulb, ExternalLink } from 'lucide-react';
import AIImage from './AIImage';

interface NeurologyProps {
  onDetail: (id: string) => void;
}

const Neurology: React.FC<NeurologyProps> = ({ onDetail }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4">La Science de l'Effort</h2>
        <p className="text-slate-400 text-lg">Pourquoi votre cerveau a besoin de friction pour exister.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-10">
          <div 
            onClick={() => onDetail('neural-effort')}
            className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 cursor-pointer hover:bg-cyan-500/10 transition-all group"
          >
             <div className="flex items-center justify-between mb-3 text-cyan-400">
               <div className="flex items-center gap-2">
                 <Lightbulb size={18} />
                 <span className="text-xs font-bold uppercase tracking-widest">Le Piège de la Dopamine</span>
               </div>
               <ExternalLink size={14} className="text-slate-600 group-hover:text-cyan-400" />
             </div>
             <p className="text-slate-400 text-sm leading-relaxed">
               L'IA nous offre des solutions instantanées, déclenchant un pic de dopamine qui court-circuite la plasticité synaptique. Cliquez pour explorer la neurologie de l'apprentissage.
             </p>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/5 to-transparent relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
                <Brain size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">L'Effet de Génération</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Les études montrent que l'acte de <strong>générer activement</strong> une solution crée des traces mémorielles incomparablement plus fortes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950/50 p-4 rounded-2xl border border-white/5">
                <div className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-1">Production</div>
                <div className="text-sm text-slate-200">Rétention : 70%</div>
              </div>
              <div className="bg-slate-950/50 p-4 rounded-2xl border border-white/5">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Validation</div>
                <div className="text-sm text-slate-200">Rétention : 8%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-24 space-y-8 cursor-pointer group" onClick={() => onDetail('neural-effort')}>
          <AIImage 
            prompt="Macro 3D illustration of human synapses firing intense golden electrical sparks, connecting with each other in a dense forest of neural branches, cinematic dark atmosphere." 
            alt="Neural plasticity illustration"
            className="aspect-square shadow-2xl transition-transform group-hover:scale-[1.02]"
          />
          <div className="glass-card rounded-[2.5rem] flex flex-col items-center justify-center p-12 text-center border border-white/5 relative overflow-hidden shadow-2xl">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-white/10 group-hover:border-amber-500/40 transition-colors">
                <Zap className="text-amber-500" size={32} />
              </div>
              <h4 className="text-2xl font-black mb-4">L'Inconfort est une <span className="text-amber-500">Fonction</span></h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Cliquez pour comprendre pourquoi la frustration est le signal exact où votre cerveau grave l'information. 
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neurology;

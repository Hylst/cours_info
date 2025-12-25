
import React from 'react';
import { Zap, ShieldAlert, Cpu, Ghost, Info, ExternalLink } from 'lucide-react';
import AIImage from './AIImage';

interface DiagnosticProps {
  onDetail: (id: string) => void;
}

const Diagnostic: React.FC<DiagnosticProps> = ({ onDetail }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase mb-4">
          Analyse de Risque
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-6">Le Fantôme de la Connaissance</h2>

        <div className="max-w-3xl mx-auto mb-12 p-6 rounded-2xl bg-white/5 border-l-4 border-amber-500 text-left cursor-pointer hover:bg-white/10 transition-colors group" onClick={() => onDetail('phantom-knowledge')}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-amber-500">
              <Info size={18} />
              <span className="text-sm font-bold uppercase tracking-wider">Contexte Pédagogique</span>
            </div>
            <ExternalLink size={14} className="text-slate-600 group-hover:text-amber-500" />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Ce que nous vivons avec l'IA s'appelle le <strong>Cognitive Offloading</strong>. Cliquez pour découvrir comment le cerveau finit par désapprendre à résoudre des problèmes complexes.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div
          onClick={() => onDetail('phantom-knowledge')}
          className="glass-card p-4 rounded-[2.5rem] group hover:border-amber-500/50 transition-all shadow-xl cursor-pointer"
        >
          <AIImage
            prompt="A spectral transparent human figure looking at a computer monitor that emits golden dust, representing knowledge that fades away without effort, dark artistic style."
            alt="Phantom Knowledge illustration"
            className="h-48 w-full mb-6"
          />
          <div className="px-4 pb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
                <Ghost size={20} />
              </div>
              <ExternalLink size={16} className="text-slate-700 group-hover:text-amber-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Connaissance Fantôme</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Vous avez la réponse sous les yeux, donc votre cerveau l'enregistre comme « acquise ». Pourtant, si l'écran s'éteint, la connaissance disparaît...
            </p>
          </div>
        </div>

        <div
          onClick={() => onDetail('algorithmic-blindness')}
          className="glass-card p-4 rounded-[2.5rem] group hover:border-cyan-500/50 transition-all shadow-xl cursor-pointer"
        >
          <AIImage
            prompt="A digital eye with algorithmic matrix code patterns looking through a glass that distorts reality, symbolising blindness and loss of human audit capabilities."
            alt="Algorithmic Blindness illustration"
            className="h-48 w-full mb-6"
          />
          <div className="px-4 pb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400">
                <Cpu size={20} />
              </div>
              <ExternalLink size={16} className="text-slate-700 group-hover:text-cyan-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Cécité Algorithmique</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              À force de déléguer la logique, on perd la capacité à détecter les erreurs subtiles. On devient un simple "valideur".
            </p>
          </div>
        </div>

        <div
          onClick={() => onDetail('creative-atrophy')}
          className="glass-card p-4 rounded-[2.5rem] group hover:border-red-500/50 transition-all shadow-xl cursor-pointer"
        >
          <AIImage
            prompt="A dry tree in a digital landscape where leaves are replaced by binary code, representing the loss of creative growth and atrophy, surrealist style."
            alt="Creative Atrophy illustration"
            className="h-48 w-full mb-6"
          />
          <div className="px-4 pb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500">
                <ShieldAlert size={20} />
              </div>
              <ExternalLink size={16} className="text-slate-700 group-hover:text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Atrophie Créative</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              L'IA propose le chemin le plus probable. En l'utilisant systématiquement, vous uniformisez votre pensée.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnostic;


import React, { useState } from 'react';
import { MANIFESTO_POINTS } from '../constants';
import { ShieldCheck, PenTool, Sparkles } from 'lucide-react';

const Manifesto: React.FC = () => {
  const [signed, setSigned] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Le Manifeste</h2>
        <p className="text-slate-500 uppercase tracking-[0.3em] text-sm">Philosophie de l'effort conscient</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 mb-24">
        {MANIFESTO_POINTS.map((point, index) => (
          <div key={index} className="text-center space-y-6 group">
            <div className="w-20 h-20 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:border-amber-500/50 transition-all duration-500">
              {point.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{point.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
              {point.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className={`p-10 md:p-16 rounded-[3rem] border-2 transition-all duration-1000 relative overflow-hidden text-center ${signed ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-white/10 bg-slate-900'}`}>
          {signed && <div className="absolute inset-0 bg-emerald-500/10 animate-pulse"></div>}
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10">
              {signed ? <ShieldCheck size={32} className="text-emerald-500" /> : <PenTool size={32} className="text-amber-500" />}
            </div>
            
            <h3 className="text-3xl font-black mb-6">Le Serment de l'Apprenant</h3>
            
            <div className="space-y-4 text-slate-300 text-lg italic mb-10 leading-relaxed">
              <p>"Je m'engage à ne jamais laisser l'IA penser à ma place."</p>
              <p>"Je traiterai chaque réponse comme une hypothèse à vérifier."</p>
              <p>"Je cultiverai l'effort comme le seul chemin vers ma propre expertise."</p>
            </div>

            {!signed ? (
              <button
                onClick={() => setSigned(true)}
                className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-amber-600/20 flex items-center gap-3 mx-auto group"
              >
                Signer le manifeste
                <Sparkles size={20} className="group-hover:rotate-12" />
              </button>
            ) : (
              <div className="text-emerald-500 font-bold text-xl flex items-center justify-center gap-2 animate-bounce">
                Engagement Enregistré <Sparkles />
              </div>
            )}
            
            <p className="mt-8 text-xs text-slate-500 uppercase tracking-widest font-bold">
              CogniAI — Reprenez le contrôle de votre évolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifesto;

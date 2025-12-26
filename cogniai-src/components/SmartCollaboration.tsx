
import React from 'react';
import { SMART_AI_TIPS } from '../constants';
import { Users, ZapOff, ShieldAlert, Target } from 'lucide-react';
import AIImage from './AIImage';

const SmartCollaboration: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6">L'IA comme <span className="text-gradient-ai">Collaborateur</span></h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-12">
          Comment intégrer l'intelligence artificielle sans sacrifier votre propre faculté de réflexion. Soyez le pilote, pas le passager.
        </p>
        <div className="max-w-4xl mx-auto rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
          <AIImage 
            prompt="A human hand and a robotic hand working together to assemble a complex glowing puzzle made of light, symmetrical composition, unity, dark background with blue and amber accents."
            alt="Human-AI Collaboration Symbiosis"
            className="h-64 w-full"
            aspectRatio="16:9"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="space-y-6">
          <div className="p-8 rounded-[2.5rem] bg-slate-900 border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <ZapOff size={80} className="text-red-500" />
            </div>
            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
              <ShieldAlert size={20} /> Le Risque de Dégénérescence
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Sans sollicitation constante, les circuits de résolution de problèmes s'atrophient. À terme, vous devenez incapable d'architecturer un système complexe sans assistance, perdant ainsi votre valeur ajoutée humaine.
            </p>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/20">
            <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
              <Users size={20} /> Le Duo Augmenté
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              L'IA excelle dans la vitesse et la synthèse. L'Humain excelle dans le contexte, l'éthique et l'innovation. Une collaboration intelligente utilise l'IA pour les tâches répétitives, libérant votre cerveau pour la <strong>réflexion stratégique</strong>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SMART_AI_TIPS.map((tip, index) => (
            <div key={index} className="glass-card p-6 rounded-3xl border border-white/5 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-4">
                {tip.icon}
              </div>
              <h4 className="font-bold text-white mb-2 text-sm">{tip.title}</h4>
              <p className="text-xs text-slate-500 leading-tight">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-amber-500/10 rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyan-400">
            <Target size={24} />
          </div>
          <div>
            <p className="text-white font-bold">Objectif : Symbiose Cognitive</p>
            <p className="text-xs text-slate-500">Maintenir votre muscle intellectuel tout en multipliant votre productivité.</p>
          </div>
        </div>
        <a href="#protocol" className="px-6 py-3 bg-white text-slate-950 rounded-xl font-bold text-sm hover:bg-cyan-400 transition-all">
          Appliquer le protocole
        </a>
      </div>
    </div>
  );
};

export default SmartCollaboration;


import React from 'react';
import { Github, Twitter, Linkedin, Heart, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-slate-950">
              C
            </div>
            <span className="font-bold text-xl tracking-tight">Cogni<span className="text-cyan-400">AI</span></span>
          </div>
          <p className="text-slate-500 text-sm max-w-xs">
            Sensibilisation à la psychologie cognitive appliquée aux nouveaux outils d'intelligence artificielle.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-slate-400 text-sm mb-4 flex items-center gap-1">
            Fait avec <Heart size={14} className="text-red-500 fill-red-500" /> pour les bâtisseurs de demain.
          </p>
          <div className="text-[10px] text-slate-600 uppercase tracking-widest font-black flex items-center gap-2 mb-6">
            Créé par <span className="text-white">Geoffroy</span> <span className="text-slate-500 mx-1">—</span> <Sparkles size={10} className="text-amber-500" /> <span className="text-slate-400">Assisté par IA</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="text-right">
          <p className="text-slate-500 text-sm">© 2025 Apprentissage Fantôme.</p>
          <p className="text-slate-600 text-xs mt-1 italic">L'effort est la seule preuve du savoir.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { SCIENTIFIC_RESOURCES } from '../constants';
import { ExternalLink, Bookmark } from 'lucide-react';
import AIImage from './AIImage';

const Library: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4">La Bibliothèque de l'Apprenant</h2>
        <p className="text-slate-400 text-lg mb-8">Pour aller plus loin dans la compréhension des mécanismes de l'esprit.</p>
        <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl opacity-80 hover:opacity-100 transition-opacity">
          <AIImage 
            prompt="A grand futuristic library inside a crystal dome, glowing holographic scrolls floating in the air, sunset lighting, architectural masterpiece, hyper-realistic."
            alt="Futuristic Library"
            className="h-48 w-full"
            aspectRatio="16:9"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SCIENTIFIC_RESOURCES.map((resource, index) => (
          <div key={index} className="glass-card p-6 rounded-[2rem] border border-white/5 flex flex-col h-full hover:bg-slate-900 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
                {resource.icon}
              </div>
              <Bookmark size={18} className="text-slate-700 group-hover:text-amber-500 transition-colors" />
            </div>

            <div className="flex-grow">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">
                {resource.type}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
              <p className="text-xs text-amber-500 font-medium mb-4 italic">Par {resource.author}</p>
              <p className="text-sm text-slate-400 leading-relaxed">
                {resource.desc}
              </p>
            </div>

            <a
              href="#"
              className="mt-8 flex items-center justify-center gap-2 py-3 bg-white/5 rounded-xl text-xs font-bold hover:bg-amber-500 hover:text-slate-950 transition-all"
            >
              Consulter <ExternalLink size={12} />
            </a>
          </div>
        ))}
      </div>
      
      <div className="mt-16 p-8 bg-gradient-to-r from-amber-500/10 to-cyan-500/10 rounded-3xl border border-white/5 text-center">
        <p className="text-slate-300 italic">"L'accès à l'information n'est pas l'acquisition du savoir. La lecture est une porte, l'effort est le chemin."</p>
      </div>
    </div>
  );
};

export default Library;


import React from 'react';
import { SOCRATIC_PROMPTS } from '../constants';
import { Terminal, MessageSquare, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';

const SocraticMode: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4">L'Art du Prompt Socratique</h2>
        
        {/* Contextual Box */}
        <div className="max-w-3xl mx-auto mt-8 mb-12 p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-left">
           <div className="flex items-center gap-2 mb-3 text-amber-500">
             <HelpCircle size={18} />
             <span className="text-xs font-bold uppercase tracking-widest">Pourquoi cette approche ?</span>
           </div>
           <p className="text-slate-400 text-sm leading-relaxed">
             Socrate ne donnait jamais de réponses, il posait des questions pour faire accoucher les esprits de leurs propres vérités (la Maïeutique). En informatique, l'IA doit être votre <strong>partenaire de dialogue</strong>, pas votre esclave rédacteur. Si l'IA fait tout le travail conceptuel, votre esprit s'endort. En mode socratique, vous gardez la main sur la <strong>charge de travail cognitive</strong>.
           </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {SOCRATIC_PROMPTS.map((prompt, index) => (
          <div key={index} className={`rounded-[2rem] border p-8 flex flex-col h-full transition-all hover:shadow-2xl ${prompt.color}`}>
            <div className="flex items-center gap-3 mb-6">
              {index === 0 ? <AlertTriangle className="text-red-500" size={24} /> : <CheckCircle className="text-emerald-500" size={24} />}
              <span className="font-black uppercase tracking-widest text-sm">{prompt.type}</span>
            </div>

            <div className="bg-slate-950/80 rounded-2xl p-6 font-mono text-sm mb-6 border border-white/5 shadow-inner flex-grow">
              <div className="flex gap-2 text-slate-500 mb-2">
                <Terminal size={14} /> <span>Prompt :</span>
              </div>
              <p className="text-slate-300 italic">"{prompt.text}"</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${index === 0 ? 'bg-red-500/20 text-red-500' : 'bg-emerald-500/20 text-emerald-500'}`}>
                   <MessageSquare size={16} />
                </div>
                <div className="text-sm">
                   <p className="font-bold mb-1">Impact Cognitif :</p>
                   <p className="text-slate-400 leading-relaxed">{prompt.result}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocraticMode;

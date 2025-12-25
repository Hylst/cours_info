
import React from 'react';
import { SUCCESS_STORIES } from '../constants';
import { Quote, Star } from 'lucide-react';
import AIImage from './AIImage';

const SuccessStories: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase mb-4 tracking-widest">
          Impact Réel
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-6">Success Stories</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Découvrez comment d'autres développeurs ont repris le contrôle de leur apprentissage grâce au protocole A.C.T.E.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SUCCESS_STORIES.map((story, index) => (
          <div 
            key={index} 
            className="glass-card p-8 rounded-[3rem] relative flex flex-col h-full border border-white/5 hover:border-emerald-500/20 transition-all group"
          >
            <div className="absolute top-8 right-8 text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors">
              <Quote size={40} />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-emerald-500/40 transition-all shadow-lg">
                <AIImage 
                  prompt={story.avatarPrompt} 
                  alt={story.name} 
                  className="w-full h-full"
                  aspectRatio="1:1"
                />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">{story.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{story.role}</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6 flex-grow">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-4">
                {story.tag}
              </span>
              <p className="text-slate-400 italic leading-relaxed group-hover:text-slate-200 transition-colors">
                "{story.testimonial}"
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Protocole A.C.T.E Appliqué</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;

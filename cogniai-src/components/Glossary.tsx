
import React from 'react';
import { COGNITIVE_BIASES } from '../constants';

const Glossary: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black mb-4">Le Bestiaire des Biais</h2>
        <p className="text-slate-400">Identifiez les ennemis invisibles de votre apprentissage.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {COGNITIVE_BIASES.map((bias, index) => (
          <div key={index} className="glass-card p-8 rounded-3xl border border-white/5 hover:bg-white/10 transition-all group">
            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
              {bias.icon}
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">{bias.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {bias.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glossary;

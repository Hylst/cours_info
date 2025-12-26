
import React from 'react';
import { COMPARISON_DATA } from '../constants';
import { CheckCircle2, AlertTriangle, Scale } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Le Bilan des Forces</h2>
        <p className="text-slate-400">Pesez le pour et le contre de l'assistance automatisée.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8 mb-16">
        <div className="lg:col-span-1 flex flex-col justify-center bg-slate-900/50 p-8 rounded-3xl border border-white/5">
          <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500 mb-6">
            <Scale size={24} />
          </div>
          <h3 className="text-xl font-bold mb-4">Le Dilemme du Pro</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            L'IA crée un paradoxe : elle augmente la <strong>vitesse de livraison</strong> mais réduit la <strong>vitesse d'acquisition</strong> des compétences. Pour un senior, c'est un gain pur. Pour un junior, c'est un prêt à taux usuraire sur son avenir.
          </p>
        </div>

        <div className="lg:col-span-3 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 px-4 text-left font-bold text-xl">Dimension</th>
                <th className="py-6 px-4 text-left font-bold text-xl text-cyan-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={20} /> Avantages
                  </div>
                </th>
                <th className="py-6 px-4 text-left font-bold text-xl text-amber-500">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={20} /> Risques
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((item, index) => (
                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 px-4 font-semibold text-slate-200">{item.feature}</td>
                  <td className="py-6 px-4 text-slate-400 leading-relaxed text-sm">{item.pro}</td>
                  <td className="py-6 px-4 text-slate-400 leading-relaxed text-sm">{item.con}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Comparison;

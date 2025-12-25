
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'diagnostic', label: 'Risques' },
    { id: 'protocol', label: 'A.C.T.E' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'test', label: 'Test' },
    { id: 'success', label: 'Success' },
    { id: 'library', label: 'Bibliothèque' },
    { id: 'solutions', label: 'Guide' },
    { id: 'manifesto', label: 'Manifeste' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-amber-500/20">
            C
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline">Cogni<span className="text-cyan-400">AI</span></span>
        </div>

        <div className="hidden xl:flex gap-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-[8px] uppercase tracking-[0.2em] font-black transition-all hover:text-white ${
                activeSection === item.id ? 'text-amber-400 border-b border-amber-400' : 'text-slate-500'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#quiz"
            className="bg-white/5 hover:bg-white/10 text-white px-3 py-2 rounded-full text-[8px] font-bold transition-all border border-white/10 uppercase tracking-widest hidden lg:block"
          >
            Quiz
          </a>
          <a
            href="#solutions"
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-[9px] font-bold transition-all transform hover:scale-105 shadow-lg shadow-amber-600/20 uppercase tracking-widest"
          >
            Le Guide
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

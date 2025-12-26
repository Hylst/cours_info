
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'diagnostic', label: 'Risques' },
    { id: 'protocol', label: 'A.C.T.E' },
    { id: 'socratic', label: 'Socratique' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'test', label: 'Test' },
    { id: 'library', label: 'Bibliothèque' },
    { id: 'solutions', label: 'Guide' },
    { id: 'manifesto', label: 'Manifeste' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10" role="navigation" aria-label="Navigation principale">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-amber-500/20" aria-hidden="true">
              C
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:inline">Cogni<span className="text-cyan-400">AI</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-[8px] uppercase tracking-[0.2em] font-black transition-all hover:text-white ${activeSection === item.id ? 'text-amber-400 border-b border-amber-400' : 'text-slate-500'
                  }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#quiz"
              className="bg-white/5 hover:bg-white/10 text-white px-3 py-2 rounded-full text-[8px] font-bold transition-all border border-white/10 uppercase tracking-widest hidden lg:block"
              aria-label="Accéder au Quiz d'auto-évaluation"
            >
              Quiz
            </a>
            <a
              href="#solutions"
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-[9px] font-bold transition-all transform hover:scale-105 shadow-lg shadow-amber-600/20 uppercase tracking-widest hidden sm:block"
              aria-label="Accéder au Guide de survie"
            >
              Le Guide
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-slate-950/90 backdrop-blur-md z-40 xl:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        className={`fixed top-16 right-0 w-72 h-[calc(100vh-4rem)] bg-slate-950/95 backdrop-blur-xl border-l border-white/10 z-50 xl:hidden transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile"
      >
        <div className="p-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick}
              className={`block py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${activeSection === item.id
                ? 'bg-amber-500/20 text-amber-400 border-l-4 border-amber-500'
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}

          <div className="pt-6 border-t border-white/10 mt-6">
            <a
              href="#solutions"
              onClick={handleNavClick}
              className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-2xl font-bold uppercase tracking-widest transition-all"
            >
              Le Guide Complet
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

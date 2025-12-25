
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Diagnostic from './components/Diagnostic';
import Neurology from './components/Neurology';
import Methodology from './components/Methodology';
import MethodologyProtocol from './components/MethodologyProtocol';
import Glossary from './components/Glossary';
import Comparison from './components/Comparison';
import HabitQuiz from './components/HabitQuiz';
import CaseStudies from './components/CaseStudies';
import SocraticMode from './components/SocraticMode';
import InteractiveTest from './components/InteractiveTest';
import Library from './components/Library';
import SmartCollaboration from './components/SmartCollaboration';
import Solutions from './components/Solutions';
import SuccessStories from './components/SuccessStories';
import Manifesto from './components/Manifesto';
import Footer from './components/Footer';
import DetailPage from './components/DetailPage';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentDetailPage, setCurrentDetailPage] = useState<string | null>(null);

  useEffect(() => {
    if (currentDetailPage) {
      window.scrollTo(0, 0);
      return;
    }

    const handleScroll = () => {
      const sections = ['hero', 'diagnostic', 'neurology', 'methodology', 'protocol', 'biases', 'comparison', 'quiz', 'cases', 'socratic', 'test', 'library', 'smart', 'solutions', 'success', 'manifesto'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentDetailPage]);

  if (currentDetailPage) {
    return <DetailPage id={currentDetailPage} onBack={() => setCurrentDetailPage(null)} />;
  }

  return (
    <div className="min-h-screen text-slate-200 selection:bg-amber-500/30">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="hero">
          <Hero onDetail={(id) => setCurrentDetailPage(id)} />
        </section>

        <section id="diagnostic" className="py-24 px-4">
          <Diagnostic onDetail={(id) => setCurrentDetailPage(id)} />
        </section>

        <section id="neurology" className="py-24 px-4 bg-slate-900/50">
          <Neurology onDetail={(id) => setCurrentDetailPage(id)} />
        </section>

        <section id="methodology" className="py-24 px-4">
          <Methodology />
        </section>

        <section id="protocol" className="py-24 px-4 bg-slate-900/50">
          <MethodologyProtocol onDetail={(id) => setCurrentDetailPage(id)} />
        </section>

        <section id="biases" className="py-24 px-4">
          <Glossary />
        </section>

        <section id="comparison" className="py-24 px-4 bg-slate-900/50">
          <Comparison />
        </section>

        <section id="quiz" className="py-24 px-4">
          <HabitQuiz />
        </section>

        <section id="cases" className="py-24 px-4 bg-slate-900/50">
          <CaseStudies />
        </section>

        <section id="socratic" className="py-24 px-4">
          <SocraticMode />
        </section>

        <section id="test" className="py-24 px-4 bg-slate-900/50">
          <InteractiveTest />
        </section>

        <section id="library" className="py-24 px-4">
          <Library />
        </section>

        <section id="smart" className="py-24 px-4 bg-slate-900/50">
          <SmartCollaboration />
        </section>

        <section id="solutions" className="py-24 px-4">
          <Solutions onDetail={(id) => setCurrentDetailPage(id)} />
        </section>

        <section id="success" className="py-24 px-4 bg-slate-900/50">
          <SuccessStories />
        </section>

        <section id="manifesto" className="py-24 px-4 bg-slate-950">
          <Manifesto />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;

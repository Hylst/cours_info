
import React, { useState, useEffect } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface AIImageProps {
  prompt: string;
  alt: string;
  className?: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
}

/**
 * Composant optimisé pour l'hébergement statique.
 * Utilise des SVG locaux thématiques au lieu d'URLs externes.
 */
const AIImage: React.FC<AIImageProps> = ({ prompt, alt, className = "", aspectRatio = "1:1" }) => {
  const [loaded, setLoaded] = useState(false);

  // Mapping des mots-clés vers les SVGs locaux
  const getImagePath = (text: string): string => {
    const lowerPrompt = text.toLowerCase();

    // Mapping basé sur le contenu du prompt
    if (lowerPrompt.includes('phantom') || lowerPrompt.includes('ghost') || lowerPrompt.includes('illusion') || lowerPrompt.includes('brain') || lowerPrompt.includes('knowledge')) {
      return '/images/phantom-brain.svg';
    }
    if (lowerPrompt.includes('blind') || lowerPrompt.includes('algorithmic') || lowerPrompt.includes('eye') || lowerPrompt.includes('scanner')) {
      return '/images/algorithmic-blindness.svg';
    }
    if (lowerPrompt.includes('atrophy') || lowerPrompt.includes('decay') || lowerPrompt.includes('wither') || lowerPrompt.includes('creative')) {
      return '/images/creative-atrophy.svg';
    }
    if (lowerPrompt.includes('neural') || lowerPrompt.includes('neuron') || lowerPrompt.includes('effort') || lowerPrompt.includes('synapse') || lowerPrompt.includes('spark')) {
      return '/images/neural-effort.svg';
    }
    if (lowerPrompt.includes('collabor') || lowerPrompt.includes('handshake') || lowerPrompt.includes('human') && lowerPrompt.includes('robot') || lowerPrompt.includes('symbiosis')) {
      return '/images/human-ai-collab.svg';
    }
    if (lowerPrompt.includes('book') || lowerPrompt.includes('library') || lowerPrompt.includes('reading') || lowerPrompt.includes('document')) {
      return '/images/library.svg';
    }

    // Fallback par défaut
    return '/images/phantom-brain.svg';
  };

  const imagePath = getImagePath(prompt);

  useEffect(() => {
    // Simuler un petit délai pour l'animation
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative group overflow-hidden bg-slate-900 border border-white/5 rounded-3xl ${className} flex items-center justify-center`}
      role="img"
      aria-label={alt}
    >
      <img
        src={imagePath}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${loaded ? 'opacity-70 group-hover:opacity-90' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" aria-hidden="true"></div>

      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/5 text-[8px] font-black text-white/50 uppercase tracking-widest" aria-hidden="true">
        <ImageIcon size={10} />
        Illustration
      </div>
    </div>
  );
};

export default AIImage;

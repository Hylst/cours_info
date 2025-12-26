
/**
 * AIImage.tsx
 * Composant optimisé pour l'hébergement statique avec Vite.
 * Utilise des images locales (PNG artistiques ou SVG thématiques) avec gestion automatique du chemin de base.
 */
import React, { useState, useEffect } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface AIImageProps {
  prompt: string;
  alt: string;
  className?: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
}

const AIImage: React.FC<AIImageProps> = ({ prompt, alt, className = "", aspectRatio = "1:1" }) => {
  const [loaded, setLoaded] = useState(false);

  // Mapping des mots-clés vers les assets locaux
  // Utilisation de import.meta.env.BASE_URL pour gérer le préfixe '/cogniai/' en production
  const getImagePath = (text: string): string => {
    const lowerPrompt = text.toLowerCase();
    const baseUrl = import.meta.env.BASE_URL;

    // Fonction helper pour construire le chemin complet sans double slash
    // Vite BASE_URL inclut généralement le slash final, mais on s'assure que c'est propre
    const resolve = (path: string) => `${baseUrl}${path}`.replace('//', '/');

    // MAPPING V2 - Images artistiques générées (PNG haute qualité)
    if (lowerPrompt.includes('phantom') || lowerPrompt.includes('ghost') || lowerPrompt.includes('illusion') || lowerPrompt.includes('brain') && lowerPrompt.includes('knowledge')) {
      return resolve('images/phantom-knowledge-art.png');
    }
    if (lowerPrompt.includes('blind') || lowerPrompt.includes('algorithmic') || lowerPrompt.includes('eye') || lowerPrompt.includes('scanner')) {
      return resolve('images/algorithmic-blindness-art.png');
    }
    if (lowerPrompt.includes('atrophy') || lowerPrompt.includes('decay') || lowerPrompt.includes('wither') || lowerPrompt.includes('creative')) {
      return resolve('images/creative-atrophy-art.png');
    }

    // MAPPING V1 - Fallback sur les SVG thématiques pour le reste
    if (lowerPrompt.includes('neural') || lowerPrompt.includes('neuron') || lowerPrompt.includes('effort') || lowerPrompt.includes('synapse') || lowerPrompt.includes('spark')) {
      return resolve('images/neural-effort.svg');
    }
    if (lowerPrompt.includes('collabor') || lowerPrompt.includes('handshake') || lowerPrompt.includes('human') && lowerPrompt.includes('robot') || lowerPrompt.includes('symbiosis')) {
      return resolve('images/human-ai-collab.svg');
    }
    if (lowerPrompt.includes('book') || lowerPrompt.includes('library') || lowerPrompt.includes('reading') || lowerPrompt.includes('document')) {
      return resolve('images/library.svg');
    }

    // Default fallback
    return resolve('images/phantom-knowledge-art.png');
  };

  const imagePath = getImagePath(prompt);

  useEffect(() => {
    // Simuler un petit délai pour l'animation d'apparition
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
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${loaded ? 'opacity-80 group-hover:opacity-100' : 'opacity-0'}`}
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

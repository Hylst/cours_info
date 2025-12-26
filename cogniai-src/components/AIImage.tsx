/**
 * AIImage.tsx
 * Composant optimisé pour l'hébergement statique avec Vite.
 * Utilise des images locales importées statiquement (Vite gère le chemin et le hash).
 */
import React, { useState, useEffect } from 'react';
import { Image as ImageIcon } from 'lucide-react';

// Import statique des assets (Garanti que Vite trouve le bon chemin en prod)
import imgPhantom from '../assets/phantom-knowledge-art.webp';
import imgBlindness from '../assets/algorithmic-blindness-art.webp';
import imgAtrophy from '../assets/creative-atrophy-art.webp';
import imgNeural from '../assets/neural-effort-art.webp';
import imgCollab from '../assets/human-ai-collab-art.webp';
import imgLibrary from '../assets/library-art.webp';

interface AIImageProps {
  prompt: string;
  alt: string;
  className?: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
}

const AIImage: React.FC<AIImageProps> = ({ prompt, alt, className = "", aspectRatio = "1:1" }) => {
  const [loaded, setLoaded] = useState(false);

  // Mapping des mots-clés vers les imports d'images
  const getImagePath = (text: string): string => {
    const lowerPrompt = text.toLowerCase();

    // 1. Phantom Knowledge
    if (lowerPrompt.includes('phantom') || lowerPrompt.includes('ghost') || lowerPrompt.includes('illusion') || lowerPrompt.includes('brain') && lowerPrompt.includes('knowledge')) {
      return imgPhantom;
    }
    // 2. Algorithmic Blindness
    if (lowerPrompt.includes('blind') || lowerPrompt.includes('algorithmic') || lowerPrompt.includes('eye') || lowerPrompt.includes('scanner')) {
      return imgBlindness;
    }
    // 3. Creative Atrophy
    if (lowerPrompt.includes('atrophy') || lowerPrompt.includes('decay') || lowerPrompt.includes('wither') || lowerPrompt.includes('creative')) {
      return imgAtrophy;
    }

    // 4. Neural Effort
    if (lowerPrompt.includes('neural') || lowerPrompt.includes('neuron') || lowerPrompt.includes('effort') || lowerPrompt.includes('synapse') || lowerPrompt.includes('spark')) {
      return imgNeural;
    }
    // 5. Human-AI Symbiosis
    if (lowerPrompt.includes('collabor') || lowerPrompt.includes('handshake') || lowerPrompt.includes('human') && lowerPrompt.includes('robot') || lowerPrompt.includes('symbiosis')) {
      return imgCollab;
    }
    // 6. Library / Knowledge
    if (lowerPrompt.includes('book') || lowerPrompt.includes('library') || lowerPrompt.includes('reading') || lowerPrompt.includes('document')) {
      return imgLibrary;
    }

    // Default fallback
    return imgPhantom;
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

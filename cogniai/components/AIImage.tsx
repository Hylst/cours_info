
import React, { useState } from 'react';
import { Image as ImageIcon, Loader2 } from 'lucide-react';

interface AIImageProps {
  prompt: string;
  alt: string;
  className?: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
}

/**
 * Composant optimisé pour l'hébergement statique sans clé API.
 * Utilise Unsplash Source pour simuler des visuels thématiques.
 */
const AIImage: React.FC<AIImageProps> = ({ prompt, alt, className = "", aspectRatio = "1:1" }) => {
  const [loading, setLoading] = useState(true);

  // Transformation du prompt en mots-clés pour Unsplash
  const getKeywords = (text: string) => {
    const keywords = text.toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
      .split(' ')
      .filter(w => w.length > 3 && !['with', 'from', 'high', 'quality', 'digital', 'style', 'dark'].includes(w))
      .slice(0, 3)
      .join(',');
    return keywords || "technology,abstract";
  };

  const keywords = getKeywords(prompt);
  const ratioMap = {
    "1:1": "800x800",
    "3:4": "600x800",
    "4:3": "800x600",
    "9:16": "450x800",
    "16:9": "800x450"
  };

  const size = ratioMap[aspectRatio];
  const imageUrl = `https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=800&sig=${encodeURIComponent(keywords)}`;
  // Note: On utilise une image de base technologique élégante filtrée par thème pour la cohérence visuelle du site.
  // Pour un vrai site statique, vous pourriez aussi mettre vos propres assets dans un dossier /public.

  return (
    <div className={`relative group overflow-hidden bg-slate-900 border border-white/5 rounded-3xl ${className} flex items-center justify-center`} role="img" aria-label={alt}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950 z-10" aria-live="polite" aria-busy="true">
          <Loader2 className="w-8 h-8 text-amber-500 animate-spin" aria-label="Chargement de l'image" />
        </div>
      )}

      <img
        src={imageUrl}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${loading ? 'opacity-0' : 'opacity-60 group-hover:opacity-80'}`}
        onLoad={() => setLoading(false)}
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" aria-hidden="true"></div>

      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/40 backdrop-blur-md border border-white/5 text-[8px] font-black text-white/50 uppercase tracking-widest" aria-hidden="true">
        <ImageIcon size={10} />
        Visual Reference
      </div>
    </div>
  );
};

export default AIImage;

# 🧠 CogniAI - Maîtrisez l'Apprentissage face à l'IA

> "Évitez l'illusion de compétence. Reprenez le contrôle de votre cerveau face aux outils génératifs."

**CogniAI** est une application web interactive conçue pour sensibiliser et former aux pièges de la "connaissance facile" apportée par l'Intelligence Artificielle. Elle explore le concept d'**Apprentissage Fantôme** et propose des méthodes concrètes pour transformer l'IA en un levier cognitif plutôt qu'en une béquille.

## 🚀 Caractéristiques

- **Diagnostic Interactif** : Évaluez votre niveau de dépendance aux outils d'IA.
- **Protocoles Pédagogiques** : Apprenez la méthode **A.C.T.E** (Ancrage, Critique, Test, Évolution).
- **Mode Socratique** : Définissez des prompts qui forcent la réflexion plutôt que de donner la réponse.
- **Test de Restitution** : Vérifiez si vous avez réellement encodé l'information ou si elle n'est que "fluide".
- **Design Premium** : Interface immersive, sombre et réactive, construite avec React et Tailwind CSS.

## 🛠️ Stack Technique

- **Frontend** : React 19 + TypeScript
- **Styling** : Tailwind CSS (Glassmorphism, Animations)
- **Icons** : Lucide React
- **Build Tool** : Vite 6
- **Architecture** : 100% Statique (SPA), sans backend ni base de données.

## 📦 Hébergement (Coolify / Nginx)

Ce projet est une **Single Page Application (SPA)** statique. Il peut être hébergé sur n'importe quel serveur web statique (Nginx, Apache, Vercel, Netlify).

### Configuration Nginx recommandée (pour SPA)
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /app/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 👨‍💻 Installation

1. Clonez le dépôt
2. Installez les dépendances : `npm install`
3. Lancez le serveur de dev : `npm run dev`
4. Build pour la prod : `npm run build`

---
Copyright © 2025 - Créé par **Geoffroy**

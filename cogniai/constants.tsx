
import React from 'react';
import { Brain, Cpu, Zap, Search, PenTool, MessageSquare, Lightbulb, ShieldAlert, BookOpen, Target, Repeat, Layers, Code, Glasses, Anchor, Compass, UserCheck, UserX, AlertCircle, HelpCircle, Terminal, StepForward, ClipboardCheck, Microscope, ExternalLink, Bookmark, ShieldCheck, ZapOff, Users, Star, Quote } from 'lucide-react';
import { ComparisonItem, SolutionItem, DetailContent } from './types';

export const DEEP_DIVE_CONTENT: Record<string, any> = {
  "phantom-knowledge": {
    title: "La Connaissance Fantôme",
    fullContent: {
      analogy: "Imaginez que vous visitez une ville étrangère en suivant aveuglément un GPS. Vous arrivez à destination sans encombre, mais si votre téléphone s'éteint, vous êtes incapable de retrouver votre chemin. Vous avez utilisé la ville, mais vous ne l'avez pas apprise. L'IA est votre GPS mental.",
      scientificExplanation: "C'est l'effet 'Google' ou l'Amnésie Numérique. Notre cerveau traite les informations facilement accessibles comme étant 'déjà connues' et ne prend pas la peine de les encoder en mémoire à long terme. La fluidité du texte généré par l'IA crée un faux sentiment de compréhension.",
      scenario: "Un développeur génère une fonction de tri complexe avec Cursor. Il l'exécute, ça fonctionne. Deux jours plus tard, lors d'un audit de sécurité, il doit expliquer pourquoi cette logique a été choisie. Il bégaie, incapable de justifier la complexité algorithmique car il n'a jamais traité l'information.",
      actionableTip: "Désactivez votre copilote IA pendant les 20 premières minutes de codage d'une nouvelle feature. Forcez votre cerveau à ramer un peu.",
      imagePrompt: "A spectral figure lost in a digital labyrinth, transparent neural paths glowing faintly, dark futuristic aesthetic."
    }
  },
  "neural-effort": {
    title: "La Science de l'Effort",
    fullContent: {
      analogy: "Le cerveau est une jungle. Pour apprendre, vous devez tracer un sentier à la machette. Plus vous passez (effort), plus le chemin devient clair. L'IA, c'est comme être héliporté directement au sommet : vous y êtes, mais aucun sentier n'a été créé. Le sommet est inaccessible si l'hélicoptère tombe en panne.",
      scientificExplanation: "La Potentiation à Long Terme (LTP) nécessite un stress cognitif pour renforcer les synapses. L'effort physique ou mental libère de l'adrénaline et de l'acétylcholine, des neurotransmetteurs qui agissent comme une 'colle' pour la mémoire.",
      scenario: "Une étude a montré que les étudiants qui prenaient des notes à la main (effort de synthèse) retenaient 40% de plus que ceux qui tapaient tout sur clavier (rapidité). Avec l'IA, le taux de rétention chute encore plus car il n'y a même plus de synthèse.",
      actionableTip: "Pratiquez la récupération active : après avoir utilisé l'IA, fermez votre ordinateur et écrivez sur un papier ce que vous venez de coder sans aide.",
      imagePrompt: "Close up of neurons firing intense golden sparks, interconnected forest of synapses, cinematic lighting."
    }
  },
  "acte-analysis": {
    title: "A.C.T.E : Analyse Solo",
    fullContent: {
      analogy: "C'est le préchauffage d'un moteur. Si vous demandez à l'IA avant d'avoir réfléchi, vous éteignez le moteur avant même qu'il ne démarre. L'Analyse Solo, c'est préparer les 'crochets' dans votre cerveau pour que la réponse de l'IA ait quelque chose à quoi s'accrocher.",
      scientificExplanation: "Cela s'appelle l'activation du réseau du mode par défaut (DMN). En cherchant seul, vous activez les zones de votre cerveau liées aux souvenirs passés. Même si vous échouez, vous créez un 'vide cognitif' que la réponse de l'IA viendra combler durablement.",
      scenario: "Au lieu de prompter 'Comment faire un slider en React ?', vous passez 10 minutes à dessiner les composants, à réfléchir au state. Quand vous demandez enfin à l'IA, vous comprenez instantanément pourquoi elle utilise un useEffect au lieu d'une simple variable.",
      actionableTip: "Utilisez un minuteur physique. 10 minutes de silence complet face à votre éditeur de code avant de solliciter l'IA.",
      imagePrompt: "A developer in deep focus, silhouette in a dark room with a single glowing screen showing a blank architecture diagram."
    }
  },
  "friction": {
    title: "L'Ingénierie de la Friction",
    fullContent: {
      analogy: "Imaginez apprendre la guitare en regardant un robot jouer les notes à votre place. Vos yeux voient, mais vos doigts ne savent rien. Taper le code, c'est donner de la texture à la pensée.",
      scientificExplanation: "La mémoire procédurale (mémoire du geste) est distincte de la mémoire déclarative. En tapant, vous créez une double trace neuronale : conceptuelle et motrice. C'est l'effet Haptic Learning.",
      scenario: "Vous apprenez une nouvelle bibliothèque de CSS-in-JS. L'IA génère les styles. Si vous copiez-collez, vous ne saurez jamais les refaire. Si vous les retapez manuellement, votre cerveau mémorise les mots-clés par le mouvement.",
      actionableTip: "Désinstallez temporairement les extensions 'Auto-complete' quand vous apprenez un nouveau framework. Réactivez-les seulement quand vous maîtrisez la syntaxe de base.",
      imagePrompt: "Human hands glowing with golden light typing on a futuristic glass keyboard, data particles flying around."
    }
  },
  "reverse-prompt": {
    title: "Le Prompt Inversé",
    fullContent: {
      analogy: "Ne demandez pas au professeur de faire le calcul. Faites le calcul, et demandez-lui où vous avez fait une erreur. L'IA devient votre auditeur, pas votre auteur.",
      scientificExplanation: "C'est la méthode de l'enseignement réciproque. Cela force le cerveau à l'auto-explication, une des techniques d'apprentissage les plus puissantes connue sous le nom de Métacognition.",
      scenario: "Vous avez un bug. Au lieu de copier l'erreur, décrivez à l'IA ce que vous pensez qu'il se passe. Si elle vous corrige, vous apprenez. Si elle confirme, vous renforcez votre confiance et votre modèle mental.",
      actionableTip: "Commencez vos prompts par : 'Voici mon approche : [VOTRE CODE]. Critique-la sévèrement avant de proposer quoi que ce soit.'",
      imagePrompt: "A digital mirror reflecting a human figure, but the reflection is a network of connections and code, surreal aesthetic."
    }
  },
  "ten-minute-rule": {
    title: "La Règle des 10 Minutes",
    fullContent: {
      analogy: "Un GPS vous empêche de découvrir la ville. 10 minutes de déambulation avant de l'allumer vous forcent à observer les repères, à construire une carte mentale.",
      scientificExplanation: "La Potentiation à Long Terme (LTP) nécessite un effort cognitif préalable. Ce pré-traitement prépare les synapses à 'accrocher' la solution quand elle arrive.",
      scenario: "Avant de prompter 'Comment implémenter un système de cache ?', vous dessinez un diagramme de flux sur papier. Quand l'IA répond, vous comprenez instantanément où placer chaque composant.",
      actionableTip: "Mettez un minuteur visible sur votre bureau. Quand il sonne, vous avez le DROIT d'utiliser l'IA. Pas avant.",
      imagePrompt: "A minimalist hourglass filled with golden sand, digital clock numbers floating around, dark tech aesthetic."
    }
  },
  "feynman-test": {
    title: "Le Test de Feynman",
    fullContent: {
      analogy: "Richard Feynman disait : 'Si vous ne pouvez pas expliquer quelque chose simplement, vous ne le comprenez pas assez bien.' L'IA sait générer ; vous devez savoir enseigner.",
      scientificExplanation: "L'auto-explication force le cerveau à combler les lacunes dans son modèle mental. C'est une des techniques d'apprentissage les plus efficaces, validée par des décennies de recherche.",
      scenario: "L'IA vous génère un hook React complexe. Fermez l'écran, prenez un papier, et expliquez-le à haute voix. Si vous dites 'et ça fait quelque chose', vous n'avez pas encodé.",
      actionableTip: "Tenez un 'cahier d'enseignement' où vous réécrivez les concepts appris avec VOS mots, sans regarder le code.",
      imagePrompt: "A teacher writing on a glowing chalkboard, simple diagrams and arrows, warm academic lighting."
    }
  },
  "doc-first": {
    title: "Documentation First",
    fullContent: {
      analogy: "La documentation est une carte topographique. L'IA est un guide touristique qui vous montre les points d'intérêt. La carte reste, le guide s'en va.",
      scientificExplanation: "Naviguer dans une documentation complexe renforce les circuits de résolution de problèmes et l'autonomie cognitive. C'est un exercice de 'Deep Work'.",
      scenario: "Au lieu de demander 'Comment utiliser useContext ?', vous ouvrez la doc React, lisez les exemples, et essayez. L'IA devient votre recours APRÈS l'effort, pour les détails subtils.",
      actionableTip: "Ouvrez deux onglets : la doc officielle ET votre éditeur. L'IA reste fermée pour les 15 premières minutes.",
      imagePrompt: "An open ancient book with glowing modern code emerging from the pages, mystical and technological fusion."
    }
  },
  "weekly-detox": {
    title: "La Détox Hebdomadaire",
    fullContent: {
      analogy: "Un athlète ne s'entraîne pas que sur tapis roulant. Il court dehors, sur terrain irrégulier, pour développer une vraie endurance. Votre cerveau a besoin de terrain irrégulier.",
      scientificExplanation: "La dépendance cognitive s'installe progressivement. Des périodes de 'jeûne' technologique forcent le cerveau à réactiver les circuits sous-utilisés.",
      scenario: "Chaque vendredi après-midi, vous fermez tous vos assistants. Vous déboguez à l'ancienne : printf, logs, réflexion. Vous redécouvrez votre propre capacité à résoudre.",
      actionableTip: "Bloquez le créneau dans votre agenda comme un RDV médical. C'est un investissement dans votre santé cognitive.",
      imagePrompt: "A brain doing weightlifting with glowing dumbbells, gym setting with neon lights, motivational poster style."
    }
  }
};

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "friction",
    title: "L'Ingénierie de la Friction",
    description: "Désactivez l'autocomplétion sur les nouveaux concepts. Forcez vos doigts à taper chaque ligne pour ancrer la mémoire procédurale.",
    icon: "edit",
    fullContent: {
      analogy: "Imaginez apprendre la guitare en regardant un robot jouer les notes à votre place. Vos yeux voient, mais vos doigts ne savent rien. Taper le code, c'est donner de la texture à la pensée.",
      scientificExplanation: "La mémoire procédurale (mémoire du geste) est distincte de la mémoire déclarative. En tapant, vous créez une double trace neuronale : conceptuelle et motrice.",
      scenario: "Vous apprenez une nouvelle bibliothèque de CSS-in-JS. L'IA génère les styles. Si vous copiez-collez, vous ne saurez jamais les refaire. Si vous les retapez manuellement, votre cerveau mémorise les mots-clés par le mouvement.",
      actionableTip: "Désinstallez temporairement les extensions 'Auto-complete' quand vous apprenez un nouveau framework.",
      imagePrompt: "Human hands glowing with golden light typing on a futuristic glass keyboard, data particles flying."
    }
  },
  {
    id: "reverse-prompt",
    title: "Le Prompt Inversé",
    description: "Donnez votre solution à l'IA et demandez-lui : 'Quelles sont les failles de mon raisonnement ?' au lieu de lui demander la solution directe.",
    icon: "message",
    fullContent: {
      analogy: "Ne demandez pas au professeur de faire le calcul. Faites le calcul, et demandez-lui où vous avez fait une erreur. L'IA devient votre auditeur, pas votre auteur.",
      scientificExplanation: "C'est la méthode de l'enseignement réciproque. Cela force le cerveau à l'auto-explication, une des techniques d'apprentissage les plus puissantes (Métacognition).",
      scenario: "Vous avez un bug. Au lieu de copier l'erreur, décrivez à l'IA ce que vous pensez qu'il se passe. Si elle vous corrige, vous apprenez. Si elle confirme, vous renforcez votre confiance.",
      actionableTip: "Commencez vos prompts par 'Voici mon approche : [CODE]. Critique-la sévèrement avant de proposer quoi que ce soit.'",
      imagePrompt: "A digital mirror reflecting a human figure, but the reflection is a network of connections and code."
    }
  },
  {
    id: "ten-minute-rule",
    title: "La Règle des 10 Minutes",
    description: "Avant toute requête à l'IA, offrez-vous 10 minutes de réflexion pure : documentation, schémas, faux départs. C'est le prix de l'autonomie.",
    icon: "clock",
    fullContent: {
      analogy: "Un GPS vous empêche de découvrir la ville. 10 minutes de déambulation avant de l'allumer vous forcent à observer les repères, à construire une carte mentale.",
      scientificExplanation: "La Potentiation à Long Terme (LTP) nécessite un effort cognitif préalable. Ce pré-traitement prépare les synapses à 'accrocher' la solution quand elle arrive.",
      scenario: "Avant de prompter 'Comment implémenter un système de cache ?', vous dessinez un diagramme de flux sur papier. Quand l'IA répond, vous comprenez instantanément où placer chaque composant.",
      actionableTip: "Mettez un minuteur visible sur votre bureau. Quand il sonne, vous avez le DROIT d'utiliser l'IA. Pas avant.",
      imagePrompt: "A minimalist hourglass filled with golden sand, digital clock numbers floating around, dark tech aesthetic."
    }
  },
  {
    id: "feynman-test",
    title: "Le Test de Feynman",
    description: "Après chaque session avec l'IA, expliquez le concept à voix haute comme si vous l'enseigniez à un enfant. Si vous bloquez, vous n'avez pas compris.",
    icon: "book",
    fullContent: {
      analogy: "Richard Feynman disait : 'Si vous ne pouvez pas expliquer quelque chose simplement, vous ne le comprenez pas assez bien.' L'IA sait générer ; vous devez savoir enseigner.",
      scientificExplanation: "L'auto-explication force le cerveau à combler les lacunes dans son modèle mental. C'est une des techniques d'apprentissage les plus efficaces, validée par des décennies de recherche.",
      scenario: "L'IA vous génère un hook React complexe. Fermez l'écran, prenez un papier, et expliquez-le à haute voix. Si vous dites 'et ça fait quelque chose', vous n'avez pas encodé.",
      actionableTip: "Tenez un 'cahier d'enseignement' où vous réécrivez les concepts appris avec VOS mots, sans regarder le code.",
      imagePrompt: "A teacher writing on a glowing chalkboard, simple diagrams and arrows, warm academic lighting."
    }
  },
  {
    id: "doc-first",
    title: "Documentation First",
    description: "Privilégiez la documentation officielle avant l'IA. C'est plus lent, mais ça construit une compréhension plus robuste et moins biaisée.",
    icon: "search",
    fullContent: {
      analogy: "La documentation est une carte topographique. L'IA est un guide touristique qui vous montre les points d'intérêt. La carte reste, le guide s'en va.",
      scientificExplanation: "Naviguer dans une documentation complexe renforce les circuits de résolution de problèmes et l'autonomie cognitive. C'est un exercice de 'Deep Work'.",
      scenario: "Au lieu de demander 'Comment utiliser useContext ?', vous ouvrez la doc React, lisez les exemples, et essayez. L'IA devient votre recours APRÈS l'effort, pour les détails subtils.",
      actionableTip: "Ouvrez deux onglets : la doc officielle ET votre éditeur. L'IA reste fermée pour les 15 premières minutes.",
      imagePrompt: "An open ancient book with glowing modern code emerging from the pages, mystical and technological fusion."
    }
  },
  {
    id: "weekly-detox",
    title: "La Détox Hebdomadaire",
    description: "Bloquez une demi-journée par semaine sans aucun outil IA. C'est l'exercice de musculation de votre cerveau.",
    icon: "lightbulb",
    fullContent: {
      analogy: "Un athlète ne s'entraîne pas que sur tapis roulant. Il court dehors, sur terrain irrégulier, pour développer une vraie endurance. Votre cerveau a besoin de terrain irrégulier.",
      scientificExplanation: "La dépendance cognitive s'installe progressivement. Des périodes de 'jeûne' technologique forcent le cerveau à réactiver les circuits sous-utilisés.",
      scenario: "Chaque vendredi après-midi, vous fermez tous vos assistants. Vous déboguez à l'ancienne : printf, logs, réflexion. Vous redécouvrez votre propre capacité à résoudre.",
      actionableTip: "Bloquez le créneau dans votre agenda comme un RDV médical. C'est un investissement dans votre santé cognitive.",
      imagePrompt: "A brain doing weightlifting with glowing dumbbells, gym setting with neon lights, motivational poster style."
    }
  }
];

export const SUCCESS_STORIES = [
  {
    name: "Clara D.",
    role: "Développeuse Fullstack Junior",
    tag: "Entretien Réussi",
    testimonial: "Je tombais dans le piège du copier-coller permanent. En appliquant la règle des 10 minutes d'A.C.T.E, j'ai enfin compris comment fonctionnaient les hooks React. J'ai décroché mon premier CDI en expliquant l'architecture que j'avais conçue sans aide.",
    avatarPrompt: "Portrait of a confident young woman developer, soft cinematic lighting, tech office background, high quality digital photography."
  },
  {
    name: "Marc L.",
    role: "Freelance Senior",
    tag: "Productivité Réelle",
    testimonial: "L'IA me rendait paresseux. Je ne savais plus déboguer sans elle. Le protocole m'a forcé à reprendre le contrôle. Aujourd'hui, je produis moins de lignes, mais elles sont 10x plus robustes et je sais exactement pourquoi chaque point-virgule est là.",
    avatarPrompt: "Portrait of a mature man with glasses, professional developer look, warm lighting, minimalist workspace background, realistic digital art."
  },
  {
    name: "Sofia K.",
    role: "Étudiante en Informatique",
    tag: "Maîtrise Conceptuelle",
    testimonial: "Le mode socratique a changé ma façon d'étudier. Au lieu de demander 'fais mes devoirs', je demande 'explique-moi ce concept comme si j'avais 5 ans'. Mon taux de rétention aux examens a explosé car je ne reconnais plus la solution, je la génère.",
    avatarPrompt: "Portrait of a creative young student, neon ambient lighting, futuristic aesthetic, high resolution digital painting."
  }
];

export const SMART_AI_TIPS = [
  {
    title: "Le Mode 'Debug Only'",
    desc: "Utilisez l'IA pour expliquer une erreur de compilation, jamais pour écrire la logique initiale. Votre cerveau doit être l'architecte, l'IA est l'inspecteur.",
    icon: <Search className="text-cyan-400" />
  },
  {
    title: "La Validation Croisée",
    desc: "Doutez par défaut. Pour chaque bloc généré, cherchez la documentation officielle pour vérifier si l'IA n'utilise pas une syntaxe obsolète ou inefficace.",
    icon: <ShieldCheck className="text-amber-500" />
  },
  {
    title: "Le Contre-Interrogatoire",
    desc: "Demandez à l'IA : 'Quelles sont les failles de sécurité potentielles dans ce code ?'. Forcez l'agent à critiquer sa propre production.",
    icon: <MessageSquare className="text-cyan-400" />
  },
  {
    title: "La Règle des 10 Minutes",
    desc: "Avant d'ouvrir un chat IA, donnez-vous 10 minutes de recherche pure (documentation, schémas). C'est le prix de votre indépendance intellectuelle.",
    icon: <Zap className="text-amber-500" />
  }
];

export const COMPARISON_DATA: ComparisonItem[] = [
  {
    feature: "Recherche",
    pro: "Trouve n'importe quelle syntaxe ou documentation instantanément.",
    con: "Perte de la capacité à naviguer dans une structure complexe par soi-même."
  },
  {
    feature: "Résolution",
    pro: "Propose des solutions optimales et propres immédiatement.",
    con: "Sauter l'étape du 'bug' empêche de comprendre le 'pourquoi' profond."
  },
  {
    feature: "Architecture",
    pro: "Aide à structurer de grands projets rapidement.",
    con: "Risque de créer des architectures que l'on ne sait pas déboguer seul."
  },
  {
    feature: "Pensée Critique",
    pro: "Sert de partenaire de 'Rubber Ducking' (canard en plastique).",
    con: "Biais d'autorité : on accepte la réponse car elle 'paraît' experte."
  },
  {
    feature: "Adaptabilité",
    pro: "Permet de changer de langage ou de domaine sans friction.",
    con: "Fragilité : sans l'outil, l'apprenant redevient un débutant complet."
  }
];

export const ACTE_PROTOCOL = [
  {
    id: "acte-analysis",
    step: "01",
    title: "Analyse Solo (10 min)",
    action: "Interdiction d'ouvrir l'IA.",
    desc: "Lisez la doc, faites des schémas, échouez. C'est ici que votre cerveau prépare les 'ancres' pour la future information.",
    icon: <Search className="text-amber-500" />,
    science: "Active le réseau du mode par défaut et prépare l'encodage."
  },
  {
    id: "acte-socratic",
    step: "02",
    title: "Confrontation Socratique",
    action: "Interrogez, ne demandez pas.",
    desc: "Demandez à l'IA les concepts sous-jacents, pas le code. Forcez-la à vous expliquer les 'Pourquoi' plutôt que les 'Comment'.",
    icon: <MessageSquare className="text-cyan-400" />,
    science: "Transforme l'IA en tuteur, favorisant l'élaboration sémantique."
  },
  {
    id: "acte-texture",
    step: "03",
    title: "Texture (Saisie Manuelle)",
    action: "Zéro Copier-Coller.",
    desc: "Réécrivez chaque ligne de code généré par l'IA de vos propres mains. Si vous ne pouvez pas le taper, vous ne le comprenez pas.",
    icon: <PenTool className="text-amber-500" />,
    science: "Mémoire procédurale : l'engagement moteur renforce la trace neuronale."
  },
  {
    id: "acte-feynman",
    step: "04",
    title: "Explication (Feynman)",
    action: "Expliquez à voix haute.",
    desc: "Refermez l'IA et expliquez le fonctionnement du bloc à un collègue imaginaire. Si vous bloquez, vous n'avez pas fini d'apprendre.",
    icon: <ClipboardCheck className="text-cyan-400" />,
    science: "Vérifie l'intégrité du modèle mental construit."
  }
];

export const SCIENTIFIC_RESOURCES = [
  {
    title: "La Méthode Feynman",
    author: "Richard Feynman",
    type: "Technique",
    desc: "Apprendre en expliquant un concept complexe avec des mots simples.",
    icon: <BookOpen className="text-amber-500" />
  },
  {
    title: "The Dunning-Kruger Effect",
    author: "Kruger & Dunning",
    type: "Psychologie",
    desc: "Comment l'incompétence empêche de reconnaître sa propre incompétence.",
    icon: <ShieldAlert className="text-cyan-400" />
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    type: "Productivité",
    desc: "Règles pour une concentration absolue dans un monde distrait.",
    icon: <Zap className="text-amber-500" />
  },
  {
    title: "Make It Stick",
    author: "Peter C. Brown",
    type: "Neuroscience",
    desc: "La science de l'apprentissage réussi par la difficulté désirable.",
    icon: <Repeat className="text-cyan-400" />
  }
];

export const COGNITIVE_BIASES = [
  {
    title: "Biais d'Automatisation",
    description: "La tendance à favoriser les suggestions des systèmes automatisés, même lorsqu'elles sont erronées ou moins pertinentes que le jugement humain.",
    icon: <AlertCircle size={20} className="text-red-400" />
  },
  {
    title: "Heuristique de Fluidité",
    description: "Confondre la facilité avec laquelle une information est traitée (vitesse de l'IA) avec la profondeur de sa propre compréhension.",
    icon: <Zap size={20} className="text-cyan-400" />
  },
  {
    title: "Effet Dunning-Kruger 2.0",
    description: "Surestimer massivement ses capacités techniques car on sait piloter une IA capable de produire des résultats de haut niveau.",
    icon: <Target size={20} className="text-amber-500" />
  }
];

export const SOCRATIC_PROMPTS = [
  {
    type: "Passif (Nocif)",
    text: "Écris-moi une fonction Python qui trie une liste d'objets par date et retire les doublons.",
    result: "L'IA donne le code. Le cerveau ne traite que le copier-coller.",
    color: "bg-red-500/10 border-red-500/20"
  },
  {
    type: "Socratique (Actif)",
    text: "Je veux trier une liste d'objets par date en Python. Ne me donne pas le code, guide-moi sur les fonctions natives et comment gérer l'égalité des dates.",
    result: "L'IA explique les concepts. Le cerveau doit synthétiser la solution.",
    color: "bg-emerald-500/10 border-emerald-500/20"
  }
];

export const METHODOLOGY_PILLARS = [
  {
    title: "La Charge Cognitive Utile",
    description: "L'effort n'est pas un obstacle, c'est le signal que le cerveau crée de nouvelles connexions. Sans friction, l'information glisse sans laisser de trace.",
    icon: <Zap size={24} className="text-amber-500" />
  },
  {
    title: "L'Effet de Génération",
    description: "Le cerveau retient 10x mieux une information qu'il a produite lui-même plutôt qu'une information qu'il a simplement lue ou validée passivement.",
    icon: <PenTool size={24} className="text-cyan-400" />
  },
  {
    title: "L'Auto-Explication",
    description: "Le test ultime : si vous ne pouvez pas expliquer le code généré à un enfant, vous n'avez rien appris. C'est la méthode Feynman appliquée à l'IA.",
    icon: <MessageSquare size={24} className="text-amber-500" />
  }
];

export const CASE_STUDIES = [
  {
    profile: "Le Développeur Passif",
    behavior: "Utilise l'IA pour générer 80% de son code. Valide sans lire si les tests passent. Ne cherche plus dans la documentation.",
    outcome: "Productivité x3 les 3 premiers mois. Stagnation totale ensuite. Incapable de résoudre un bug architectural complexe sans assistance.",
    icon: <UserX className="text-red-500" />,
    color: "border-red-500/30"
  },
  {
    profile: "L'Apprenant Actif",
    behavior: "Utilise l'IA pour expliquer les concepts. Réécrit le code à la main. Pratique la recherche solo avant de solliciter l'agent.",
    outcome: "Productivité stable. Expertise profonde. Capacité à auditer et corriger l'IA. Devient un leader technique capable de former les autres.",
    icon: <UserCheck className="text-emerald-500" />,
    color: "border-emerald-500/30"
  }
];

export const AI_TEXT_SNIPPETS = [
  "La neuroplasticité dépend de la répétition d'efforts intentionnels. Déléguer la logique à un agent autonome réduit la densité dendritique dans les zones associées à la résolution de problèmes.",
  "Le paradigme 'Human-in-the-loop' devient une illusion quand l'humain se contente de valider sans auditer. Ce biais de confirmation technologique masque une érosion systémique.",
  "L'accès permanent à une connaissance synthétique crée une dépendance métacognitive : le sujet ne sait plus 'comment savoir', il sait seulement 'comment demander'.",
  "L'entropie de l'apprentissage est proportionnelle à la facilité d'accès à la vérité. Un système sans erreur est un système où l'intelligence biologique stagne et s'atrophie par manque de stress.",
  "Le 'Deep Work' est le seul état permettant la synthèse créative. L'interruption constante par des suggestions d'IA fragmente l'attention et empêche la formation de souvenirs épisodiques stables."
];

export const MANIFESTO_POINTS = [
  {
    title: "Privilégier le 'Faire' sur le 'Savoir'",
    description: "La connaissance est une accumulation de cicatrices laissées par des erreurs résolues.",
    icon: <Target className="text-amber-500" />
  },
  {
    title: "L'IA est une Lunette, pas un Oeil",
    description: "Elle augmente votre vision, mais elle ne voit rien à votre place.",
    icon: <Glasses className="text-cyan-400" />
  },
  {
    title: "Résister à l'Efficacité Factice",
    description: "Aller vite vers une mauvaise compréhension est plus lent que de prendre son temps pour maîtriser.",
    icon: <Anchor className="text-amber-500" />
  }
];

export const QUIZ_QUESTIONS = [
  {
    question: "Face à une erreur mystérieuse dans votre code, quel est votre premier réflexe ?",
    options: [
      { text: "Analyser la stacktrace et poser des hypothèses seul", score: 0 },
      { text: "Chercher sur une documentation officielle", score: 1 },
      { text: "Copier l'erreur dans l'IA pour avoir la réponse", score: 2 },
      { text: "Demander à l'IA de corriger tout le fichier d'un coup", score: 3 }
    ]
  },
  {
    question: "Comment décririez-vous votre compréhension du code généré par l'IA ?",
    options: [
      { text: "Je pourrais le réécrire de zéro sans aide", score: 0 },
      { text: "Je comprends les grandes lignes mais pas chaque détail", score: 1 },
      { text: "Je vois que ça marche, c'est le principal", score: 2 },
      { text: "C'est un peu de la magie noire pour moi", score: 3 }
    ]
  },
  {
    question: "Utilisez-vous l'IA pour apprendre de nouveaux langages/frameworks ?",
    options: [
      { text: "Seulement pour clarifier des concepts précis", score: 0 },
      { text: "Comme un complément aux tutoriels classiques", score: 1 },
      { text: "Comme ma source principale d'apprentissage", score: 2 },
      { text: "Je ne lis plus de docs, je demande à l'IA", score: 3 }
    ]
  },
  {
    question: "Quelle part de votre travail quotidien est générée par l'IA ?",
    options: [
      { text: "Moins de 10%, principalement du boilerplate", score: 0 },
      { text: "Environ 30%, pour accélérer les tâches connues", score: 1 },
      { text: "Plus de 60%, je pilote l'IA", score: 2 },
      { text: "Quasiment tout, je suis un 'AI Orchestrator'", score: 3 }
    ]
  },
  {
    question: "Comment vous sentez-vous quand l'IA est indisponible (panne de serveur) ?",
    options: [
      { text: "Serein, je travaille normalement", score: 0 },
      { text: "Un peu ralenti sur la syntaxe mais efficace", score: 1 },
      { text: "Frustré, je perds beaucoup de temps", score: 2 },
      { text: "Incapable de produire quoi que ce soit de complexe", score: 3 }
    ]
  }
];

export const QUIZ_RESULTS = [
  {
    maxScore: 3,
    title: "Maître Artisan",
    message: "L'IA est pour vous un scalpel de précision. Vous gardez le contrôle total et votre cerveau reste le moteur principal de votre expertise.",
    color: "text-emerald-400"
  },
  {
    maxScore: 7,
    title: "Compagnon Hybride",
    message: "Vous profitez des gains de productivité, mais attention à ne pas laisser l'outil endormir votre curiosité naturelle pour les détails techniques.",
    color: "text-sky-400"
  },
  {
    maxScore: 11,
    title: "Expert de Surface",
    message: "Danger : vous commencez à surfer sur la connaissance des autres. Votre capacité de 'Deep Work' s'étiole au profit de la satisfaction immédiate.",
    color: "text-amber-500"
  },
  {
    maxScore: 15,
    title: "Le Passager Clandestin",
    message: "Urgence absolue : vous ne développez plus de compétences, vous gérez des outputs. Si l'IA s'arrête, votre expertise s'effondre avec elle.",
    color: "text-red-500"
  }
];

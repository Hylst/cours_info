const tabs = Array.from(document.querySelectorAll(".tab"));
const panels = Array.from(document.querySelectorAll(".tab-panel"));

const stepDetail = document.getElementById("step-detail");
const steps = Array.from(document.querySelectorAll(".step"));
const stepText = {
  start:
    "Le tableau de bord centralisé offre une vision immédiate sur l'activité du jour : séances à venir, nouveaux inscrits, et alertes urgentes concernant les adhérents (paiements ou certificats expirés).",
  create:
    "La base de votre organisation : définissez vos types d'activités (Durée, Intensité, Matériel requis) et vos lieux de pratique habituels pour les réutiliser instantanément lors du planning.",
  plan:
    "Planifiez vos séances de façon granulaire : fixez la capacité maximale (bloquante ou illustrative), l'heure précise, le coach référent, et publiez-la pour la rendre visible aux adhérents.",
  follow:
    "Suivez l'engagement de vos membres : consultez la liste des participants, gérez les absences et accédez à l'historique de présence pour chaque séance passée.",
};

const schemaButtons = Array.from(document.querySelectorAll(".schema-btn"));
const schemaNodes = Array.from(document.querySelectorAll(".node"));
const schemaLines = Array.from(document.querySelectorAll(".line"));
const schemaDetail = document.getElementById("schema-detail");

// Ajout Interaction Modules
const moduleDetail = document.getElementById("module-detail");
const moduleButtons = Array.from(document.querySelectorAll(".module-btn"));
const moduleText = {
  planning: "Séances & Planning : Créez et gérez votre planning de séances, paramétrez la récurrence, limitez le nombre de participants, et suivez les inscriptions en temps réel.",
  communications: "Ciblage & Communications : Rédigez des messages importants ciblés pour un groupe entier, pour un adhérent précis, ou de façon globale. Gère aussi les emails automatiques in-app.",
  health: "Suivi Santé & Certifs : Gardez un œil sur la date d'expiration des certificats médicaux, recevez des alertes automatiques à J-30 et suivez les précisions de santé pour adapter vos conseils.",
  finance: "Suivi Financier : Fini les relances manuelles ! Visualisez en un clin d'œil le statut des règlements de chaque profil. Un bandeau d'alerte s'affiche chez les utilisateurs en défaut.",
  templates: "Modèles d'Activités : Créez des templates réutilisables d'activités (Pilates, Yoga...) avec des descriptions types et des équipements requis ou optionnels.",
  locations: "Gestion Lieux : Référencez toutes vos salles, parcs, ou studios afin de planifier plus vite vos séances sans avoir à retaper l'adresse.",
  history: "Historique & Logs : Accédez à l'historique complet des séances passées et d'un journal des connexions/actions.",
  groups: "Ciblage & Groupes : Classez vos adhérents par niveaux ou centres d'intérêts pour les cibler facilement lors de l'envoi d'informations.",
  preferences: "Profil & Préférences : Chaque utilisateur gère de façon autonome ses notifications (urgences, expiration paiements, certificats) et son consentement RGPD."
};

moduleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    moduleButtons.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    const key = btn.dataset.module;
    if (moduleDetail && key && moduleText[key]) {
      moduleDetail.innerHTML = `<strong>${btn.textContent} :</strong> ${moduleText[key].split(" : ")[1]}`;
    }
  });
});
const schemaFlows = {
  login: {
    text: "Sécurité : Vos identifiants sont transmis via un canal sécurisé à l’API. Celle-ci vérifie le hash du mot de passe en base et génère un jeton de session (JWT/Cookies) pour maintenir votre connexion.",
    nodes: ["frontend", "backend", "database"],
    lines: ["front-back", "back-db"],
  },
  plan: {
    text: "Synchronisation : Lors de la création d'une séance, l'API valide les règles métier (matériel, disponibilité du lieu) avant de persister les données. Le frontend rafraîchit alors instantanément le calendrier.",
    nodes: ["frontend", "backend", "database"],
    lines: ["front-back", "back-db"],
  },
  register: {
    text: "Transactionnel : L'inscription vérifie en temps réel le quota de places. Si la séance est pleine, l'inscription est refusée. En cas de succès, la base de données décompte une place et notifie le coach.",
    nodes: ["frontend", "backend", "database"],
    lines: ["front-back", "back-db"],
  },
  info: {
    text: "Omnicanal : Un message rédigé par un coach est enregistré en base. L'API déclenche alors le MailerService pour les notifications externes et marque le message pour affichage prioritaire sur le dashboard des cibles.",
    nodes: ["frontend", "backend", "database", "notifications"],
    lines: ["front-back", "back-db", "back-mail"],
  },
};

const searchInput = document.getElementById("db-search");
const dbCards = Array.from(document.querySelectorAll(".table-card"));
const accordions = Array.from(document.querySelectorAll(".accordion"));

const setActiveTab = (tabId) => {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === tabId;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === `tab-${tabId}`);
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => setActiveTab(tab.dataset.tab));
});

const setSchemaFlow = (flowId) => {
  const flow = schemaFlows[flowId];
  if (!flow) return;
  schemaButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.flow === flowId);
  });
  schemaNodes.forEach((node) => {
    node.classList.toggle("active", flow.nodes.includes(node.dataset.node));
  });
  schemaLines.forEach((line) => {
    line.classList.toggle("active", flow.lines.includes(line.dataset.line));
  });
  if (schemaDetail) {
    schemaDetail.textContent = flow.text;
  }
};

schemaButtons.forEach((btn) => {
  btn.addEventListener("click", () => setSchemaFlow(btn.dataset.flow));
});

if (schemaButtons.length > 0) {
  setSchemaFlow("login");
}

steps.forEach((step) => {
  step.addEventListener("click", () => {
    steps.forEach((item) => item.classList.remove("active"));
    step.classList.add("active");
    const key = step.dataset.step;
    if (stepDetail && key && stepText[key]) {
      stepDetail.textContent = stepText[key];
    }
  });
});

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase().trim();
    dbCards.forEach((card) => {
      const tags = card.dataset.tags || "";
      const text = card.textContent.toLowerCase();
      const matches = tags.includes(query) || text.includes(query);
      card.style.display = matches ? "block" : "none";
    });
  });
}

accordions.forEach((accordion) => {
  const trigger = accordion.querySelector(".accordion-trigger");
  if (!trigger) return;
  trigger.addEventListener("click", () => {
    const isOpen = accordion.classList.toggle("open");
    trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});

const tabs = Array.from(document.querySelectorAll(".tab"));
const panels = Array.from(document.querySelectorAll(".tab-panel"));

const stepDetail = document.getElementById("step-detail");
const steps = Array.from(document.querySelectorAll(".step"));
const stepText = {
  start:
    "Le tableau de bord affiche les accès rapides : séances, clients, groupes, activités, lieux et historique.",
  create:
    "Crée les activités et les lieux pour gagner du temps lors de la planification.",
  plan:
    "Choisis le type d’activité, la date, les horaires et la capacité, puis publie la séance.",
  follow:
    "Ouvre une séance pour voir les inscrits, les places restantes et l’historique.",
};

const schemaButtons = Array.from(document.querySelectorAll(".schema-btn"));
const schemaNodes = Array.from(document.querySelectorAll(".node"));
const schemaLines = Array.from(document.querySelectorAll(".line"));
const schemaDetail = document.getElementById("schema-detail");
const schemaFlows = {
  login: {
    text: "Connexion : le frontend envoie les identifiants à l’API, qui valide en base et renvoie la session.",
    nodes: ["frontend", "backend", "database"],
    lines: ["front-back", "back-db"],
  },
  plan: {
    text: "Planification : le coach crée une séance, l’API l’enregistre en base et la renvoie pour affichage.",
    nodes: ["frontend", "backend", "database"],
    lines: ["front-back", "back-db"],
  },
  register: {
    text: "Inscription : l’adhérent s’inscrit, l’API vérifie la capacité et enregistre l’inscription.",
    nodes: ["frontend", "backend", "database"],
    lines: ["front-back", "back-db"],
  },
  info: {
    text: "Communications : le coach/admin rédige un message ciblé (urgent, groupe, individuel), l’API l’enregistre et notifie au besoin.",
    nodes: ["frontend", "backend", "database"],
    lines: ["front-back", "back-db"],
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

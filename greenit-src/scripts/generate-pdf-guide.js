const { jsPDF } = require("jspdf");
const { default: autoTable } = require("jspdf-autotable");
const fs = require("fs");
const path = require("path");

const doc = new jsPDF();
const timestamp = new Date().toLocaleDateString("fr-FR");

// --- Design Tokens ---
const COLORS = {
    emerald: [5, 150, 105],
    emeraldLight: [209, 250, 229],
    slate: [30, 41, 59],
    slateLight: [100, 116, 139],
    white: [255, 255, 255],
    danger: [220, 38, 38]
};

// --- Helper: Section Header ---
let currentY = 0;
const addSectionHeader = (title, y) => {
    doc.setFillColor(...COLORS.emeraldLight);
    doc.rect(20, y - 6, 170, 10, "F");
    doc.setTextColor(...COLORS.emerald);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(title.toUpperCase(), 25, y + 1);
    return y + 15;
};

// --- Page 1: Introduction & Why ---
// Background Pattern (Subtle)
doc.setFillColor(250, 252, 250);
doc.rect(0, 0, 210, 297, "F");

// Header Banner
doc.setFillColor(...COLORS.emerald);
doc.rect(0, 0, 210, 50, "F");
doc.setTextColor(...COLORS.white);
doc.setFont("helvetica", "bold");
doc.setFontSize(28);
doc.text("GUIDE DU RECYCLAGE", 20, 30);
doc.setFont("helvetica", "normal");
doc.setFontSize(14);
doc.text("Donnez une seconde vie à votre matériel informatique", 20, 40);

currentY = 65;

// Section 1: L'Enjeu
currentY = addSectionHeader("1. Pourquoi recycler est-il vital ?", currentY);
doc.setTextColor(...COLORS.slate);
doc.setFontSize(11);
doc.setFont("helvetica", "normal");

const enjeuText = [
    "L'industrie numérique représente 4% des émissions mondiales de CO2, un chiffre qui double tous les 10 ans. Le recyclage est le levier n°1 pour réduire cet impact.",
    "• ÉCONOMIE CIRCULAIRE : Un smartphone contient plus de 50 métaux différents. Le recyclage permet de récupérer jusqu'à 80% de ces ressources précieuses.",
    "• PRÉSERVATION : L'extraction d'1kg de cuivre nécessite de déplacer 500kg de roche. Recycler évite de creuser de nouvelles mines polluantes.",
    "• SANTÉ PUBLIQUE : Les e-déchets contiennent du plomb et du brome. Sans recyclage certifié, ces toxines finissent dans nos nappes phréatiques."
];
enjeuText.forEach(line => {
    const lines = doc.splitTextToSize(line, 160);
    doc.text(lines, 25, currentY);
    currentY += (lines.length * 6) + 4;
});

currentY += 10;

// Section 2: Préparation
currentY = addSectionHeader("2. Avant de vous en séparer", currentY);
doc.setTextColor(...COLORS.slate);

const prepSteps = [
    ["1. SAUVEGARDE", "Transférez vos photos, documents et contacts sur un disque externe ou un cloud sécurisé."],
    ["2. DÉCONNEXION", "Déconnectez vos comptes iCloud, Google ou Microsoft. Désactivez 'Localiser mon appareil'."],
    ["3. EFFACEMENT", "Réinitialisez l'appareil aux paramètres d'usine. Pour les PC, utilisez un logiciel d'effacement sécurisé."],
    ["4. ACCESSOIRES", "Retirez les cartes SIM et cartes SD. Conservez les câbles fonctionnels pour vos futurs besoins."]
];

prepSteps.forEach(([title, desc]) => {
    doc.setFont("helvetica", "bold");
    doc.text(title, 25, currentY);
    doc.setFont("helvetica", "normal");
    const lines = doc.splitTextToSize(desc, 120);
    doc.text(lines, 65, currentY);
    currentY += (lines.length * 6) + 5;
});

currentY += 10;

// Page 2
doc.addPage();
currentY = 25;

// Section 3: Où recycler ?
currentY = addSectionHeader("3. Les filières de confiance", currentY);

const filieres = [
    { name: "RECONDITIONNEMENT", site: "BackMarket, YesYes", desc: "Si l'appareil est fonctionnel et a moins de 5 ans." },
    { name: "ASSOCIATIONS", site: "Emmaüs, Envie", desc: "Pour une seconde vie solidaire au profit de publics précaires." },
    { name: "POINTS DE COLLECTE", site: "Ecosystem.eco", desc: "Bornes en libre-service dans les supermarchés pour le petit matériel." },
    { name: "DÉCHETTERIES", site: "Mairies", desc: "Pour les gros volumes (écrans, imprimantes, unités centrales)." }
];

autoTable(doc, {
    startY: currentY,
    theme: 'grid',
    head: [['Canal', 'Exemples / Sites', 'Usage recommandé']],
    body: filieres.map(f => [f.name, f.site, f.desc]),
    headStyles: { fillColor: COLORS.emerald },
    margin: { left: 25, right: 25 }
});

currentY = doc.lastAutoTable.finalY + 20;

// Section 4: Chiffres Clés
currentY = addSectionHeader("4. L'impact de votre geste", currentY);

doc.setFillColor(245, 247, 245);
doc.roundedRect(25, currentY, 160, 40, 3, 3, "F");

doc.setTextColor(...COLORS.emerald);
doc.setFontSize(22);
doc.text("2 kg", 45, currentY + 18);
doc.text("2000 km", 110, currentY + 18);

doc.setTextColor(...COLORS.slate);
doc.setFontSize(10);
doc.text("De CO2 évité par", 38, currentY + 28);
doc.text("smartphone recyclé", 38, currentY + 33);

doc.text("En voiture : l'équivalent", 105, currentY + 28);
doc.text("d'un Paris - Istanbul", 105, currentY + 33);

currentY += 60;

// Call to Action
doc.setFillColor(...COLORS.emerald);
doc.roundedRect(40, currentY, 130, 20, 5, 5, "F");
doc.setTextColor(...COLORS.white);
doc.setFontSize(14);
doc.setFont("helvetica", "bold");
doc.text("REJOIGNEZ LE MOUVEMENT", 105, currentY + 12, { align: "center" });

// Footer
doc.setTextColor(...COLORS.slateLight);
doc.setFontSize(8);
doc.setFont("helvetica", "normal");
doc.text("Le Green IT en clair | hylst.fr/greenit | Document éco-conçu", 105, 285, { align: "center" });

// Save
const outputPath = path.join(__dirname, "../public/guide-recyclage-green-it.pdf");
const buffer = doc.output("arraybuffer");
fs.writeFileSync(outputPath, Buffer.from(buffer));

console.log("✅ Guide PDF Premium généré avec succès.");

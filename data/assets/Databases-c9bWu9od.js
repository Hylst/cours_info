import{c as R,j as e,r as v,C as i,a,b as l,e as n,B as j,T as g}from"./index-jatdNhFh.js";import{C as M}from"./ContentLayout-Ck_M1CCv.js";import{c as q}from"./StandardSidebar-DKV3QlHJ.js";import{B as s}from"./badge-D3N1h19b.js";import{T as y,a as S,b as h,c as u}from"./tabs-DyU7YeQV.js";import{D as L}from"./database-CGZHNfon.js";import{L as N}from"./lightbulb-D5sQnwCc.js";import{C as b}from"./circle-check-big-DcUkgBGn.js";import{C as f}from"./chart-column-D8DiT-jd.js";import{B as T}from"./brain-e1e4SMeD.js";import{C}from"./circle-alert-Bf4zJKID.js";import{S as D}from"./server-SJnxidSW.js";import{B as I}from"./book-open-BGQhZmI6.js";import{C as O}from"./code-B5o97cHw.js";import{P as B}from"./play-Cls-8Szh.js";import{C as _}from"./cloud-B8aBKm7m.js";import{Z as E}from"./zap-Df3zai_1.js";import{F as U}from"./file-text-BG24LxDj.js";import{N as A}from"./network-xMSqk6VX.js";import{S as w}from"./shield-1LxtYfpT.js";import{L as H}from"./lock-C-hkMS0V.js";import{T as P}from"./trending-up-gTw2Lzr0.js";import"./Layout-CR8zGZt_.js";import"./input-B_RYv3vb.js";import"./separator-1VTeyrJY.js";import"./chevron-left-HiyNMpmN.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=R("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=R("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]),G=({title:r,description:o,children:t})=>e.jsxs("div",{className:"mb-6",children:[e.jsx("h1",{className:"text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-ds-purple-600 bg-clip-text text-transparent",children:r}),e.jsx("p",{className:"text-xl text-muted-foreground max-w-3xl",children:o}),t]}),V=()=>{const[r,o]=v.useState("library"),t={library:{title:"📚 La Bibliothèque",description:"Une base de données, c'est comme une bibliothèque géante et ultra-organisée",details:["Les tables = les rayonnages thématiques","Les lignes = les livres individuels","Les colonnes = les caractéristiques (titre, auteur, année...)","L'index = le catalogue pour trouver rapidement","Le bibliothécaire = le SGBD qui gère tout"]},city:{title:"🏙️ La Ville",description:"Pensez à une base de données comme une ville bien planifiée",details:["Les quartiers = les schémas/bases de données","Les bâtiments = les tables","Les appartements = les enregistrements","Les adresses = les clés primaires","Les routes = les relations entre tables"]},excel:{title:"📊 Excel... mais en mieux !",description:"Si vous connaissez Excel, vous comprenez déjà les bases",details:["Feuille Excel = Table de base de données","Ligne Excel = Enregistrement (row)","Colonne Excel = Champ (field/column)","Mais avec des MILLIONS de lignes","Et des relations complexes entre feuilles"]}};return e.jsxs("section",{id:"databases-intro",className:"scroll-mt-24 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(L,{className:"h-8 w-8 text-blue-600"}),e.jsx("h2",{className:"text-3xl font-bold",children:"Introduction aux Bases de Données"})]}),e.jsxs(i,{className:"border-l-4 border-l-blue-500",children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(N,{className:"h-5 w-5 text-yellow-500"}),"Qu'est-ce qu'une base de données ? (Avec analogies)"]})}),e.jsx(n,{children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"text-lg mb-4",children:["Une ",e.jsx("strong",{children:"base de données"})," est un système organisé pour stocker, gérer et récupérer des informations de manière efficace et sécurisée."]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg mb-4",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"💡 Définition simple"}),e.jsx("p",{className:"text-sm",children:"C'est comme un classeur géant, mais digital, qui peut contenir des millions d'informations organisées de façon à les retrouver en quelques millisecondes !"})]}),e.jsx("div",{className:"flex gap-2 mb-4",children:Object.entries(t).map(([c,d])=>e.jsx(j,{variant:r===c?"default":"outline",size:"sm",onClick:()=>o(c),children:d.title.split(" ")[0]},c))})]}),e.jsx("div",{children:e.jsxs("div",{className:"bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:t[r].title}),e.jsx("p",{className:"text-sm mb-3",children:t[r].description}),e.jsx("ul",{className:"text-sm space-y-1",children:t[r].details.map((c,d)=>e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(b,{className:"h-4 w-4 text-green-500 mt-0.5 flex-shrink-0"}),c]},d))})]})})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(i,{className:"border-l-4 border-l-green-500",children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(f,{className:"h-5 w-5 text-green-600"}),"Pourquoi crucial en Data Science ?"]})}),e.jsx(n,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-green-50 p-3 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"🎯 Les données sont partout"}),e.jsx("p",{className:"text-sm",children:"90% du travail d'un Data Scientist consiste à collecter, nettoyer et préparer les données. Sans base de données, impossible !"})]}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-600 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Volume :"})," Gestion de téraoctets de données"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-600 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Vitesse :"})," Accès en temps réel aux informations"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-600 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Variété :"})," Différents types de données (texte, images, etc.)"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-600 font-bold",children:"•"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Véracité :"})," Qualité et fiabilité des données"]})]})]})]})})]}),e.jsxs(i,{className:"border-l-4 border-l-orange-500",children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(T,{className:"h-5 w-5 text-orange-600"}),"Pipeline Data Science"]})}),e.jsx(n,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3 p-2 bg-gray-50 rounded",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold",children:"1"}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Collecte"}),e.jsx("p",{className:"text-xs text-gray-600",children:"Ingestion des données sources"})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-2 bg-yellow-50 rounded",children:[e.jsx("div",{className:"w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold",children:"2"}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Stockage"}),e.jsx("p",{className:"text-xs text-gray-600",children:"Base de données structurée"})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-2 bg-orange-50 rounded",children:[e.jsx("div",{className:"w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold",children:"3"}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Préparation"}),e.jsx("p",{className:"text-xs text-gray-600",children:"Nettoyage et transformation"})]})]}),e.jsxs("div",{className:"flex items-center gap-3 p-2 bg-green-50 rounded",children:[e.jsx("div",{className:"w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold",children:"4"}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold",children:"Analyse"}),e.jsx("p",{className:"text-xs text-gray-600",children:"Machine Learning et insights"})]})]})]})})]})]}),e.jsxs(i,{className:"bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200",children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(C,{className:"h-5 w-5 text-cyan-600"}),"💡 Le saviez-vous ?"]})}),e.jsx(n,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"🌍 Données mondiales"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"2.5 quintillions"})," d'octets de données créés chaque jour"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"90%"})," des données mondiales ont été créées ces 2 dernières années"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Google"})," traite plus de 40 000 recherches par seconde"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Facebook"})," stocke plus de 300 pétaoctets de données"]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"🏢 Impact business"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsxs("li",{children:["• Les entreprises ",e.jsx("strong",{children:"data-driven"})," sont 23x plus susceptibles d'acquérir des clients"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Netflix"})," économise 1 milliard $ par an grâce à ses algorithmes"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Amazon"})," génère 35% de ses revenus via ses recommendations"]}),e.jsxs("li",{children:["• Les mauvaises données coûtent ",e.jsx("strong",{children:"3.1 trillions $"})," par an aux USA"]})]})]})]})})]}),e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(l,{children:"🗂️ Types de données à gérer"})}),e.jsx(n,{children:e.jsxs(y,{defaultValue:"structured",className:"w-full",children:[e.jsxs(S,{className:"grid w-full grid-cols-3",children:[e.jsx(h,{value:"structured",children:"Structurées"}),e.jsx(h,{value:"semi-structured",children:"Semi-structurées"}),e.jsx(h,{value:"unstructured",children:"Non-structurées"})]}),e.jsx(u,{value:"structured",className:"space-y-4",children:e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"📊 Données Structurées (20%)"}),e.jsx("p",{className:"text-sm mb-3",children:"Données organisées en tables avec des colonnes et des types définis"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-sm mb-1",children:"Exemples :"}),e.jsxs("ul",{className:"text-xs space-y-1",children:[e.jsx("li",{children:"• Tables SQL"}),e.jsx("li",{children:"• Fichiers CSV"}),e.jsx("li",{children:"• Feuilles Excel"}),e.jsx("li",{children:"• Données transactionnelles"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-sm mb-1",children:"Technologies :"}),e.jsxs("div",{className:"flex flex-wrap gap-1",children:[e.jsx(s,{variant:"secondary",children:"MySQL"}),e.jsx(s,{variant:"secondary",children:"PostgreSQL"}),e.jsx(s,{variant:"secondary",children:"Oracle"})]})]})]})]})}),e.jsx(u,{value:"semi-structured",className:"space-y-4",children:e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"🔗 Données Semi-structurées (10%)"}),e.jsx("p",{className:"text-sm mb-3",children:"Données avec une structure flexible, souvent avec des métadonnées"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-sm mb-1",children:"Exemples :"}),e.jsxs("ul",{className:"text-xs space-y-1",children:[e.jsx("li",{children:"• Fichiers JSON"}),e.jsx("li",{children:"• Documents XML"}),e.jsx("li",{children:"• APIs REST"}),e.jsx("li",{children:"• Logs d'applications"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-sm mb-1",children:"Technologies :"}),e.jsxs("div",{className:"flex flex-wrap gap-1",children:[e.jsx(s,{variant:"secondary",children:"MongoDB"}),e.jsx(s,{variant:"secondary",children:"Elasticsearch"}),e.jsx(s,{variant:"secondary",children:"CouchDB"})]})]})]})]})}),e.jsx(u,{value:"unstructured",className:"space-y-4",children:e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"📝 Données Non-structurées (70%)"}),e.jsx("p",{className:"text-sm mb-3",children:"Données sans format prédéfini, nécessitant un traitement spécialisé"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-sm mb-1",children:"Exemples :"}),e.jsxs("ul",{className:"text-xs space-y-1",children:[e.jsx("li",{children:"• Textes et documents"}),e.jsx("li",{children:"• Images et vidéos"}),e.jsx("li",{children:"• Emails et réseaux sociaux"}),e.jsx("li",{children:"• Audio et capteurs IoT"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-sm mb-1",children:"Technologies :"}),e.jsxs("div",{className:"flex flex-wrap gap-1",children:[e.jsx(s,{variant:"secondary",children:"Hadoop"}),e.jsx(s,{variant:"secondary",children:"Spark"}),e.jsx(s,{variant:"secondary",children:"S3"})]})]})]})]})})]})})]})]})},z=()=>{const[r,o]=v.useState("select"),t={select:{title:"SELECT - Lire les données",description:"La base de tout : récupérer des informations",code:`-- Exemple simple
SELECT nom, age, salaire 
FROM employes 
WHERE departement = 'IT' 
  AND age > 25
ORDER BY salaire DESC
LIMIT 10;

-- Avec agrégations
SELECT 
    departement,
    COUNT(*) as nb_employes,
    AVG(salaire) as salaire_moyen,
    MAX(salaire) as salaire_max
FROM employes 
GROUP BY departement
HAVING AVG(salaire) > 50000;`,explanation:"Cette requête trouve les 10 employés IT les mieux payés, puis calcule des statistiques par département."},insert:{title:"INSERT - Ajouter des données",description:"Créer de nouveaux enregistrements",code:`-- Insertion simple
INSERT INTO employes (nom, age, departement, salaire)
VALUES ('Alice Dupont', 28, 'IT', 55000);

-- Insertion multiple
INSERT INTO employes (nom, age, departement, salaire)
VALUES 
    ('Bob Martin', 32, 'Marketing', 48000),
    ('Claire Petit', 29, 'IT', 62000),
    ('David Moreau', 35, 'Finance', 71000);

-- Insertion depuis une autre table
INSERT INTO employes_archives
SELECT * FROM employes 
WHERE date_embauche < '2020-01-01';`,explanation:"INSERT permet d'ajouter de nouvelles données, soit manuellement soit depuis d'autres sources."},update:{title:"UPDATE - Modifier les données",description:"Mettre à jour des enregistrements existants",code:`-- Mise à jour simple
UPDATE employes 
SET salaire = salaire * 1.05 
WHERE departement = 'IT';

-- Mise à jour conditionnelle
UPDATE employes 
SET 
    salaire = CASE 
        WHEN anciennete > 5 THEN salaire * 1.1
        WHEN anciennete > 2 THEN salaire * 1.05
        ELSE salaire * 1.02
    END,
    date_maj = NOW()
WHERE status = 'actif';`,explanation:"UPDATE modifie les données existantes. Attention au WHERE pour éviter de tout modifier !"},join:{title:"JOIN - Relier les tables",description:"Combiner des données de plusieurs tables",code:`-- INNER JOIN (intersection)
SELECT 
    e.nom,
    e.salaire,
    d.nom_departement,
    p.nom_projet
FROM employes e
INNER JOIN departements d ON e.dept_id = d.id
INNER JOIN projets p ON e.projet_id = p.id;

-- LEFT JOIN (tous les employés, même sans projet)
SELECT 
    e.nom,
    COALESCE(p.nom_projet, 'Aucun projet') as projet
FROM employes e
LEFT JOIN projets p ON e.projet_id = p.id;

-- Agrégation avec JOIN
SELECT 
    d.nom_departement,
    COUNT(e.id) as nb_employes,
    SUM(e.salaire) as masse_salariale
FROM departements d
LEFT JOIN employes e ON d.id = e.dept_id
GROUP BY d.id, d.nom_departement;`,explanation:"Les JOINs relient les tables. INNER = intersection, LEFT = tous les éléments de gauche."}};return e.jsxs("section",{id:"sql-fundamentals",className:"scroll-mt-24 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(D,{className:"h-8 w-8 text-green-600"}),e.jsx("h2",{className:"text-3xl font-bold",children:"Fondamentaux SQL"})]}),e.jsxs(i,{className:"border-l-4 border-l-green-500",children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(I,{className:"h-5 w-5"}),"SQL : Le langage universel des données"]})}),e.jsx(n,{children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"SQL (Structured Query Language)"})," est LE langage pour communiquer avec les bases de données relationnelles. Créé en 1974, il reste incontournable !"]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg mb-4",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"🎯 Pourquoi SQL ?"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Standard :"})," Fonctionne sur 90% des bases de données"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Puissant :"})," Requêtes complexes en quelques lignes"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Optimisé :"})," Performances exceptionnelles"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Déclaratif :"})," On dit QUOI, pas COMMENT"]})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-3",children:"🏗️ Anatomie d'une requête SQL"}),e.jsxs("div",{className:"space-y-2 font-mono text-sm",children:[e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"text-blue-600 font-bold w-16",children:"SELECT"}),e.jsx("span",{className:"text-gray-600",children:"quelles colonnes"})]}),e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"text-purple-600 font-bold w-16",children:"FROM"}),e.jsx("span",{className:"text-gray-600",children:"quelle table"})]}),e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"text-orange-600 font-bold w-16",children:"WHERE"}),e.jsx("span",{className:"text-gray-600",children:"quelles conditions"})]}),e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"text-green-600 font-bold w-16",children:"GROUP BY"}),e.jsx("span",{className:"text-gray-600",children:"regrouper par"})]}),e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"text-red-600 font-bold w-16",children:"ORDER BY"}),e.jsx("span",{className:"text-gray-600",children:"trier par"})]})]})]})]})})]}),e.jsxs(i,{children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(O,{className:"h-5 w-5"}),"Exemples SQL interactifs"]})}),e.jsxs(n,{children:[e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 mb-6",children:Object.entries(t).map(([c,d])=>e.jsx(j,{variant:r===c?"default":"outline",size:"sm",onClick:()=>o(c),className:"text-xs",children:d.title.split(" ")[0]},c))}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(B,{className:"h-4 w-4 text-green-600"}),e.jsx("h4",{className:"font-semibold",children:t[r].title})]}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:t[r].description}),e.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:e.jsx("pre",{className:"text-sm",children:e.jsx("code",{children:t[r].code})})}),e.jsx("div",{className:"bg-blue-50 p-4 rounded-lg",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(N,{className:"h-4 w-4 text-blue-600 mt-0.5"}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-blue-800 mb-1",children:"💡 Explication"}),e.jsx("p",{className:"text-sm text-blue-700",children:t[r].explanation})]})]})})]})]})]}),e.jsxs(i,{className:"border-l-4 border-l-purple-500",children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(L,{className:"h-5 w-5 text-purple-600"}),"🔒 Propriétés ACID : La fiabilité des données"]})}),e.jsxs(n,{children:[e.jsx("p",{className:"mb-6",children:"Les bases de données relationnelles garantissent 4 propriétés essentielles pour la fiabilité des transactions :"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-red-800 mb-2",children:"🔹 Atomicité"}),e.jsx("p",{className:"text-sm mb-2",children:"Tout ou rien : une transaction réussit complètement ou échoue complètement."}),e.jsxs("div",{className:"bg-white p-2 rounded text-xs font-mono",children:["BEGIN TRANSACTION;",e.jsx("br",{}),"UPDATE compte SET solde = solde - 100 WHERE id = 1;",e.jsx("br",{}),"UPDATE compte SET solde = solde + 100 WHERE id = 2;",e.jsx("br",{}),"COMMIT; -- Ou ROLLBACK si erreur"]})]}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"🔹 Cohérence"}),e.jsx("p",{className:"text-sm mb-2",children:"Les données respectent toujours les règles métier et contraintes."}),e.jsx("div",{className:"bg-white p-2 rounded text-xs",children:"Contraintes : clés étrangères, CHECK, NOT NULL, UNIQUE..."})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"🔹 Isolation"}),e.jsx("p",{className:"text-sm mb-2",children:"Les transactions simultanées ne s'interfèrent pas."}),e.jsx("div",{className:"bg-white p-2 rounded text-xs",children:"Niveaux : READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE"})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"🔹 Durabilité"}),e.jsx("p",{className:"text-sm mb-2",children:"Une fois validée, une transaction est permanente même en cas de panne."}),e.jsx("div",{className:"bg-white p-2 rounded text-xs",children:"Logs de transactions, checkpoints, recovery automatique"})]})]})]})]})]}),e.jsxs(i,{children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(b,{className:"h-5 w-5 text-green-600"}),"✅ Bonnes pratiques SQL"]})}),e.jsx(n,{children:e.jsxs(y,{defaultValue:"performance",className:"w-full",children:[e.jsxs(S,{className:"grid w-full grid-cols-3",children:[e.jsx(h,{value:"performance",children:"Performance"}),e.jsx(h,{value:"security",children:"Sécurité"}),e.jsx(h,{value:"maintenance",children:"Maintenance"})]}),e.jsx(u,{value:"performance",className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"✅ À faire"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"• Utiliser des index sur les colonnes WHERE"}),e.jsx("li",{children:"• Éviter SELECT * (spécifier les colonnes)"}),e.jsx("li",{children:"• Utiliser LIMIT pour les gros résultats"}),e.jsx("li",{children:"• Préférer EXISTS à IN pour les sous-requêtes"}),e.jsx("li",{children:"• Analyser les plans d'exécution"})]})]}),e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-red-800 mb-2",children:"❌ À éviter"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"• Fonctions dans les clauses WHERE"}),e.jsx("li",{children:"• Jointures sans conditions appropriées"}),e.jsx("li",{children:"• N+1 queries (requêtes en boucle)"}),e.jsx("li",{children:"• Index inutiles (ralentissent les écritures)"}),e.jsx("li",{children:"• Requêtes non préparées"})]})]})]})}),e.jsx(u,{value:"security",className:"space-y-4",children:e.jsx("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(g,{className:"h-5 w-5 text-red-600 mt-0.5"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-red-800 mb-2",children:"🚨 Injections SQL"}),e.jsx("p",{className:"text-sm mb-3",children:"L'erreur #1 en sécurité web ! Toujours utiliser des requêtes préparées."}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-red-600 font-semibold text-xs",children:"❌ DANGER :"}),e.jsx("code",{className:"bg-white p-1 rounded text-xs ml-2",children:'"SELECT * FROM users WHERE id = " + userId'})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-green-600 font-semibold text-xs",children:"✅ SÉCURISÉ :"}),e.jsx("code",{className:"bg-white p-1 rounded text-xs ml-2",children:'"SELECT * FROM users WHERE id = ?"'})]})]})]})]})})}),e.jsx(u,{value:"maintenance",className:"space-y-4",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-blue-800 mb-1",children:"📝 Conventions de nommage"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsxs("li",{children:["• Tables en minuscules, pluriel : ",e.jsx("code",{children:"employes"}),", ",e.jsx("code",{children:"commandes"})]}),e.jsxs("li",{children:["• Colonnes descriptives : ",e.jsx("code",{children:"date_creation"}),", ",e.jsx("code",{children:"prix_unitaire"})]}),e.jsxs("li",{children:["• Clés étrangères explicites : ",e.jsx("code",{children:"client_id"}),", ",e.jsx("code",{children:"produit_id"})]})]})]}),e.jsxs("div",{className:"bg-yellow-50 p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-yellow-800 mb-1",children:"📚 Documentation"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"• Commenter les requêtes complexes"}),e.jsx("li",{children:"• Documenter les procédures stockées"}),e.jsx("li",{children:"• Maintenir un schéma de base de données à jour"})]})]})]})})]})})]})]})},k=()=>{const[r,o]=v.useState("document"),t={document:{icon:e.jsx(U,{className:"h-5 w-5"}),title:"Document Stores",description:"Stockage de documents JSON/BSON flexibles",examples:["MongoDB","CouchDB","Amazon DocumentDB"],useCases:["Applications web modernes","Catalogues de produits","Gestion de contenu","Profils utilisateurs"],structure:`{
  "_id": "507f1f77bcf86cd799439011",
  "nom": "Alice Dupont",
  "age": 28,
  "competences": ["Python", "SQL", "Machine Learning"],
  "projets": [
    {
      "nom": "Analyse sentiment",
      "statut": "terminé",
      "technologies": ["NLP", "TensorFlow"]
    }
  ],
  "adresse": {
    "rue": "123 rue de la Data",
    "ville": "Paris",
    "cp": "75001"
  }
}`,advantages:["Schema flexible et évolutif","Requêtes riches et expressives","Scaling horizontal naturel","Performance sur lectures"],disadvantages:["Pas de transactions ACID complètes","Risque de duplication des données","Courbe d'apprentissage"]},keyvalue:{icon:e.jsx(W,{className:"h-5 w-5"}),title:"Key-Value Stores",description:"Stockage simple clé-valeur ultra-rapide",examples:["Redis","Amazon DynamoDB","Riak"],useCases:["Cache et sessions","Compteurs en temps réel","Configuration d'applications","Queues de messages"],structure:`# Cache utilisateur
user:1234 -> {"nom": "Alice", "derniere_connexion": "2024-01-15"}

# Compteurs temps réel  
page_views:accueil -> 156789
active_users:now -> 1547

# Session web
session:abc123 -> {"user_id": 1234, "panier": [1, 5, 12]}

# Configuration
app:maintenance_mode -> false
app:max_upload_size -> 10485760`,advantages:["Performance exceptionnelle","Simplicité extrême","Scaling linéaire","Faible latence"],disadvantages:["Modèle de données très simple","Pas de requêtes complexes","Pas de relations entre entités"]},columnar:{icon:e.jsx(A,{className:"h-5 w-5"}),title:"Column Family",description:"Stockage orienté colonnes pour Big Data",examples:["Cassandra","HBase","Amazon SimpleDB"],useCases:["Analytics et reporting","Logs et métriques","IoT et capteurs","Time series data"],structure:`# Famille de colonnes : user_activity
Row Key: user_1234_2024-01-15

Column Family: actions
  login:09:30:00 -> "success"
  page_view:09:31:15 -> "/dashboard" 
  click:09:32:45 -> "button_analytics"
  logout:10:45:20 -> "manual"

Column Family: metrics  
  session_duration -> 4500
  pages_visited -> 12
  actions_count -> 27`,advantages:["Très performant sur gros volumes","Compression excellente","Distribution automatique","Écriture ultra-rapide"],disadvantages:["Complexité de modélisation","Requêtes limitées","Courbe d'apprentissage élevée"]},graph:{icon:e.jsx(A,{className:"h-5 w-5"}),title:"Graph Databases",description:"Gestion des relations et réseaux complexes",examples:["Neo4j","Amazon Neptune","ArangoDB"],useCases:["Réseaux sociaux","Détection de fraude","Moteurs de recommandation","Analyse de dépendances"],structure:`// Cypher Query (Neo4j)
CREATE (alice:User {nom: "Alice", age: 28})
CREATE (bob:User {nom: "Bob", age: 32})
CREATE (python:Skill {nom: "Python"})
CREATE (ml:Skill {nom: "Machine Learning"})

CREATE (alice)-[:KNOWS {since: 2020}]->(bob)
CREATE (alice)-[:HAS_SKILL {level: "expert"}]->(python)
CREATE (alice)-[:HAS_SKILL {level: "intermediate"}]->(ml)

// Recommandation : amis des amis avec compétences similaires
MATCH (user:User {nom: "Alice"})
      -[:KNOWS]->()-[:KNOWS]->(recommendation:User)
WHERE NOT (user)-[:KNOWS]->(recommendation)
  AND (user)-[:HAS_SKILL]->()<-[:HAS_SKILL]-(recommendation)
RETURN recommendation`,advantages:["Requêtes de traversée naturelles","Performance sur relations complexes","Modélisation intuitive","ACID complet"],disadvantages:["Courbe d'apprentissage spécifique","Pas optimal pour données tabulaires","Écosystème plus restreint"]}};return e.jsxs("section",{id:"nosql",className:"scroll-mt-24 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(_,{className:"h-8 w-8 text-purple-600"}),e.jsx("h2",{className:"text-3xl font-bold",children:"Bases NoSQL - Au-delà du relationnel"})]}),e.jsxs(i,{className:"border-l-4 border-l-purple-500",children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(N,{className:"h-5 w-5 text-yellow-500"}),"Pourquoi NoSQL ? L'évolution nécessaire"]})}),e.jsx(n,{children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{children:"NoSQL"})," (Not Only SQL) répond aux limites du relationnel face aux défis modernes : volumes massifs, variété des données, scaling horizontal."]}),e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"🚀 Les 3V du Big Data"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Volume :"})," Téraoctets → Pétaoctets"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Vitesse :"})," Temps réel, millions de requêtes/sec"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Variété :"})," JSON, XML, images, logs, graphes..."]})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-red-50 p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-red-800 mb-1",children:"❌ Limites SQL classique"}),e.jsxs("ul",{className:"text-xs space-y-1",children:[e.jsx("li",{children:"• Schema rigide difficile à faire évoluer"}),e.jsx("li",{children:"• Scaling vertical limité et coûteux"}),e.jsx("li",{children:"• Jointures complexes sur gros volumes"}),e.jsx("li",{children:"• Inadapté aux données semi-structurées"})]})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-green-800 mb-1",children:"✅ Avantages NoSQL"}),e.jsxs("ul",{className:"text-xs space-y-1",children:[e.jsx("li",{children:"• Flexibilité du schema"}),e.jsx("li",{children:"• Scaling horizontal natif"}),e.jsx("li",{children:"• Performance sur gros volumes"}),e.jsx("li",{children:"• Adapté aux données modernes"})]})]})]})]})})]}),e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(l,{children:"🗂️ Les 4 familles NoSQL"})}),e.jsxs(n,{children:[e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mb-6",children:Object.entries(t).map(([c,d])=>e.jsxs(j,{variant:r===c?"default":"outline",onClick:()=>o(c),className:"h-auto py-3 flex flex-col items-center gap-2",children:[d.icon,e.jsx("span",{className:"text-xs font-medium",children:d.title})]},c))}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t[r].icon,e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold",children:t[r].title}),e.jsx("p",{className:"text-gray-600",children:t[r].description})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(l,{className:"text-lg",children:"🎯 Cas d'usage typiques"})}),e.jsx(n,{children:e.jsx("ul",{className:"space-y-2",children:t[r].useCases.map((c,d)=>e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(E,{className:"h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0"}),e.jsx("span",{className:"text-sm",children:c})]},d))})})]}),e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(l,{className:"text-lg",children:"🏢 Technologies populaires"})}),e.jsx(n,{children:e.jsx("div",{className:"flex flex-wrap gap-2",children:t[r].examples.map((c,d)=>e.jsx(s,{variant:"secondary",className:"text-sm",children:c},d))})})]})]}),e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(l,{className:"text-lg",children:"📋 Structure des données"})}),e.jsx(n,{children:e.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:e.jsx("pre",{className:"text-xs",children:e.jsx("code",{children:t[r].structure})})})})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(i,{className:"border-l-4 border-l-green-500",children:[e.jsx(a,{children:e.jsx(l,{className:"text-lg text-green-700",children:"✅ Avantages"})}),e.jsx(n,{children:e.jsx("ul",{className:"space-y-2",children:t[r].advantages.map((c,d)=>e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-600 font-bold",children:"•"}),e.jsx("span",{className:"text-sm",children:c})]},d))})})]}),e.jsxs(i,{className:"border-l-4 border-l-red-500",children:[e.jsx(a,{children:e.jsx(l,{className:"text-lg text-red-700",children:"⚠️ Limitations"})}),e.jsx(n,{children:e.jsx("ul",{className:"space-y-2",children:t[r].disadvantages.map((c,d)=>e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-600 font-bold",children:"•"}),e.jsx("span",{className:"text-sm",children:c})]},d))})})]})]})]})]})]}),e.jsxs(i,{className:"border-l-4 border-l-orange-500",children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(C,{className:"h-5 w-5 text-orange-600"}),"📐 Théorème CAP : Choisir ses compromis"]})}),e.jsxs(n,{children:[e.jsx("p",{className:"mb-6",children:"Le théorème CAP stipule qu'un système distribué ne peut garantir simultanément que 2 des 3 propriétés suivantes :"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg text-center",children:[e.jsx("h4",{className:"font-bold text-blue-800 mb-2",children:"🔒 Consistency"}),e.jsx("p",{className:"text-sm",children:"Tous les nœuds voient les mêmes données au même moment"})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg text-center",children:[e.jsx("h4",{className:"font-bold text-green-800 mb-2",children:"🌐 Availability"}),e.jsx("p",{className:"text-sm",children:"Le système reste opérationnel même en cas de panne"})]}),e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg text-center",children:[e.jsx("h4",{className:"font-bold text-purple-800 mb-2",children:"📡 Partition tolerance"}),e.jsx("p",{className:"text-sm",children:"Le système continue de fonctionner malgré les coupures réseau"})]})]}),e.jsxs(y,{defaultValue:"cp",className:"w-full",children:[e.jsxs(S,{className:"grid w-full grid-cols-3",children:[e.jsx(h,{value:"cp",children:"CP (Consistency + Partition)"}),e.jsx(h,{value:"ap",children:"AP (Availability + Partition)"}),e.jsx(h,{value:"ca",children:"CA (Consistency + Availability)"})]}),e.jsx(u,{value:"cp",className:"space-y-4",children:e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"🔒 Systèmes CP"}),e.jsx("p",{className:"text-sm mb-3",children:"Privilégient la cohérence : en cas de partition réseau, certains nœuds deviennent indisponibles pour maintenir la cohérence."}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-sm",children:"Exemples :"}),e.jsxs("div",{className:"flex flex-wrap gap-1 mt-1",children:[e.jsx(s,{variant:"secondary",children:"MongoDB"}),e.jsx(s,{variant:"secondary",children:"Redis"}),e.jsx(s,{variant:"secondary",children:"HBase"})]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-sm",children:"Cas d'usage :"}),e.jsx("span",{className:"text-sm",children:" Systèmes financiers, inventaires"})]})]})]})}),e.jsx(u,{value:"ap",className:"space-y-4",children:e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"🌐 Systèmes AP"}),e.jsx("p",{className:"text-sm mb-3",children:"Privilégient la disponibilité : le système reste accessible même si les données peuvent être temporairement incohérentes."}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-sm",children:"Exemples :"}),e.jsxs("div",{className:"flex flex-wrap gap-1 mt-1",children:[e.jsx(s,{variant:"secondary",children:"Cassandra"}),e.jsx(s,{variant:"secondary",children:"DynamoDB"}),e.jsx(s,{variant:"secondary",children:"CouchDB"})]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-sm",children:"Cas d'usage :"}),e.jsx("span",{className:"text-sm",children:" Réseaux sociaux, catalogues produits"})]})]})]})}),e.jsx(u,{value:"ca",className:"space-y-4",children:e.jsxs("div",{className:"bg-purple-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-purple-800 mb-2",children:"🏢 Systèmes CA"}),e.jsx("p",{className:"text-sm mb-3",children:"Garantissent cohérence et disponibilité mais ne tolèrent pas les partitions. Principalement les SGBD relationnels traditionnels."}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-sm",children:"Exemples :"}),e.jsxs("div",{className:"flex flex-wrap gap-1 mt-1",children:[e.jsx(s,{variant:"secondary",children:"PostgreSQL"}),e.jsx(s,{variant:"secondary",children:"MySQL"}),e.jsx(s,{variant:"secondary",children:"Oracle"})]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-sm",children:"Limitation :"}),e.jsx("span",{className:"text-sm",children:" Ne sont pas vraiment distribués"})]})]})]})})]})]})]})]})},J=()=>e.jsxs("section",{id:"data-modeling",className:"scroll-mt-24 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(T,{className:"h-8 w-8 text-purple-600"}),e.jsx("h2",{className:"text-3xl font-bold",children:"Modélisation des Données"})]}),e.jsxs(i,{className:"border-l-4 border-l-purple-500",children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(N,{className:"h-5 w-5 text-yellow-500"}),"Design de schéma : l'art de structurer"]})}),e.jsx(n,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-3",children:"🎯 Principes de normalisation"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-blue-800",children:"1NF - Première forme normale"}),e.jsx("p",{className:"text-sm",children:"Éliminer les groupes répétitifs"})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-green-800",children:"2NF - Deuxième forme normale"}),e.jsx("p",{className:"text-sm",children:"Éliminer les dépendances partielles"})]}),e.jsxs("div",{className:"bg-orange-50 p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-orange-800",children:"3NF - Troisième forme normale"}),e.jsx("p",{className:"text-sm",children:"Éliminer les dépendances transitives"})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-3",children:"⚡ Dénormalisation stratégique"}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("p",{className:"text-sm mb-2",children:"En Data Science, on dénormalise parfois pour la performance :"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"• Tables de faits pour l'analytique"}),e.jsx("li",{children:"• Vues matérialisées"}),e.jsx("li",{children:"• Agrégations précalculées"}),e.jsx("li",{children:"• Index dénormalisés"})]})]})]})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(l,{children:"🏗️ Modélisation dimensionnelle"})}),e.jsxs(n,{children:[e.jsx("p",{className:"mb-4",children:"Pour l'analytique et le Data Warehousing :"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold",children:"Star Schema ⭐"}),e.jsx("p",{className:"text-xs",children:"Table de faits centrale + dimensions"})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold",children:"Snowflake Schema ❄️"}),e.jsx("p",{className:"text-xs",children:"Dimensions normalisées"})]}),e.jsxs("div",{className:"bg-purple-50 p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold",children:"Galaxy Schema 🌌"}),e.jsx("p",{className:"text-xs",children:"Multiples tables de faits"})]})]})]})]}),e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(l,{children:"🔗 Gestion des relations"})}),e.jsx(n,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"border-l-4 border-l-green-500 pl-3",children:[e.jsx("h5",{className:"font-semibold",children:"1:N (Un à plusieurs)"}),e.jsx("p",{className:"text-xs",children:"Client → Commandes"})]}),e.jsxs("div",{className:"border-l-4 border-l-blue-500 pl-3",children:[e.jsx("h5",{className:"font-semibold",children:"N:M (Plusieurs à plusieurs)"}),e.jsx("p",{className:"text-xs",children:"Produits ↔ Commandes (via table pivot)"})]}),e.jsxs("div",{className:"border-l-4 border-l-purple-500 pl-3",children:[e.jsx("h5",{className:"font-semibold",children:"1:1 (Un à un)"}),e.jsx("p",{className:"text-xs",children:"User → Profil_Détaillé"})]})]})})]})]})]}),Y=()=>e.jsxs("section",{id:"performance",className:"scroll-mt-24 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(E,{className:"h-8 w-8 text-yellow-600"}),e.jsx("h2",{className:"text-3xl font-bold",children:"Optimisation et Performance"})]}),e.jsxs(i,{className:"border-l-4 border-l-yellow-500",children:[e.jsx(a,{children:e.jsx(l,{children:"⚡ Index : La clé de la performance"})}),e.jsx(n,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-3 text-green-700",children:"✅ Bonnes pratiques"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(b,{className:"h-4 w-4 text-green-500 mt-0.5"}),"Index sur colonnes WHERE fréquentes"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(b,{className:"h-4 w-4 text-green-500 mt-0.5"}),"Index composés pour requêtes multi-colonnes"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(b,{className:"h-4 w-4 text-green-500 mt-0.5"}),"Analyser les plans d'exécution"]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-3 text-red-700",children:"❌ Pièges à éviter"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(g,{className:"h-4 w-4 text-red-500 mt-0.5"}),"Trop d'index (ralentit les écritures)"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(g,{className:"h-4 w-4 text-red-500 mt-0.5"}),"Index sur colonnes très sélectives"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(g,{className:"h-4 w-4 text-red-500 mt-0.5"}),"Fonctions dans WHERE (casse l'index)"]})]})]})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(l,{className:"text-lg",children:"🎯 Optimisation requêtes"})}),e.jsx(n,{children:e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsx("li",{children:"• Utiliser EXPLAIN PLAN"}),e.jsx("li",{children:"• Éviter SELECT *"}),e.jsx("li",{children:"• Optimiser les JOIN"}),e.jsx("li",{children:"• Utiliser LIMIT approprié"}),e.jsx("li",{children:"• Requêtes préparées"})]})})]}),e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(l,{className:"text-lg",children:"🔄 Partitionnement"})}),e.jsx(n,{children:e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsx("li",{children:"• Par plage (dates, IDs)"}),e.jsx("li",{children:"• Par hash (distribution)"}),e.jsx("li",{children:"• Par liste (catégories)"}),e.jsx("li",{children:"• Sharding horizontal"}),e.jsx("li",{children:"• Archivage automatique"})]})})]}),e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(l,{className:"text-lg",children:"💾 Mise en cache"})}),e.jsx(n,{children:e.jsxs("ul",{className:"text-sm space-y-2",children:[e.jsx("li",{children:"• Query cache"}),e.jsx("li",{children:"• Result set cache"}),e.jsx("li",{children:"• Redis/Memcached"}),e.jsx("li",{children:"• Vues matérialisées"}),e.jsx("li",{children:"• CDN pour assets"})]})})]})]})]}),Q=()=>e.jsxs("section",{id:"security",className:"scroll-mt-24 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(w,{className:"h-8 w-8 text-red-600"}),e.jsx("h2",{className:"text-3xl font-bold",children:"Sécurité et Gouvernance"})]}),e.jsxs(i,{className:"border-l-4 border-l-red-500",children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(g,{className:"h-5 w-5 text-red-600"}),"🚨 Injections SQL : Le danger n°1"]})}),e.jsx(n,{children:e.jsxs("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[e.jsxs("p",{className:"text-sm mb-3",children:[e.jsx("strong",{children:"Toujours utiliser des requêtes préparées !"}),"Jamais de concaténation directe avec les inputs utilisateur."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-red-800 mb-2",children:"❌ DANGER"}),e.jsx("code",{className:"bg-white p-2 rounded block text-xs",children:'query = "SELECT * FROM users WHERE id = " + userId'})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-green-800 mb-2",children:"✅ SÉCURISÉ"}),e.jsx("code",{className:"bg-white p-2 rounded block text-xs",children:'query = "SELECT * FROM users WHERE id = ?"'})]})]})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(i,{children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(H,{className:"h-5 w-5"}),"🔐 Contrôle d'accès"]})}),e.jsx(n,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-blue-50 p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold",children:"Principe du moindre privilège"}),e.jsx("p",{className:"text-xs",children:"Accorder uniquement les droits nécessaires"})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold",children:"Authentification forte"}),e.jsx("p",{className:"text-xs",children:"2FA, certificats, tokens JWT"})]}),e.jsxs("div",{className:"bg-purple-50 p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold",children:"Audit et logs"}),e.jsx("p",{className:"text-xs",children:"Traçabilité de tous les accès"})]})]})})]}),e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(l,{children:"🔒 Protection des données"})}),e.jsx(n,{children:e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Chiffrement :"})," TLS en transit, AES au repos"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Anonymisation :"})," Masquage des PII"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Sauvegarde :"})," Chiffrée et testée"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"RGPD :"})," Right to be forgotten"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Monitoring :"})," Détection d'anomalies"]})]})})]})]})]}),K=()=>{const[r,o]=v.useState(0),[t,c]=v.useState(!1),d=[{title:"E-commerce : Analyse des ventes",level:"Débutant",description:"Analysez les données de vente d'une boutique en ligne",context:`Vous travaillez pour une boutique en ligne qui vend des produits tech. 
                La base contient des commandes, produits, clients et avis.`,tables:["clients (id, nom, email, ville, date_inscription)","produits (id, nom, prix, categorie, stock)","commandes (id, client_id, date_commande, total)","details_commande (commande_id, produit_id, quantite, prix_unitaire)"],questions:["Trouvez le chiffre d'affaires total par mois","Identifiez les 5 produits les plus vendus","Calculez le panier moyen par client","Trouvez les clients qui n'ont pas commandé depuis 6 mois"],solution:`-- 1. Chiffre d'affaires par mois
SELECT 
    YEAR(date_commande) as annee,
    MONTH(date_commande) as mois,
    SUM(total) as ca_mensuel
FROM commandes 
GROUP BY YEAR(date_commande), MONTH(date_commande)
ORDER BY annee DESC, mois DESC;

-- 2. Top 5 produits les plus vendus
SELECT 
    p.nom,
    SUM(dc.quantite) as total_vendu,
    SUM(dc.quantite * dc.prix_unitaire) as revenus
FROM details_commande dc
JOIN produits p ON dc.produit_id = p.id
GROUP BY p.id, p.nom
ORDER BY total_vendu DESC
LIMIT 5;

-- 3. Panier moyen par client  
SELECT 
    c.nom,
    COUNT(co.id) as nb_commandes,
    AVG(co.total) as panier_moyen,
    SUM(co.total) as total_depense
FROM clients c
LEFT JOIN commandes co ON c.id = co.client_id
GROUP BY c.id, c.nom
HAVING COUNT(co.id) > 0
ORDER BY panier_moyen DESC;

-- 4. Clients inactifs (6+ mois)
SELECT 
    c.nom, 
    c.email,
    MAX(co.date_commande) as derniere_commande,
    DATEDIFF(NOW(), MAX(co.date_commande)) as jours_inactivite
FROM clients c
JOIN commandes co ON c.id = co.client_id
GROUP BY c.id, c.nom, c.email
HAVING MAX(co.date_commande) < DATE_SUB(NOW(), INTERVAL 6 MONTH)
ORDER BY derniere_commande ASC;`,explanation:`Ces requêtes combinent plusieurs concepts clés :
                   - Agrégations (SUM, COUNT, AVG) pour les métriques business
                   - Jointures pour relier les données entre tables
                   - Fonctions de date pour analyser les tendances temporelles
                   - Conditions HAVING pour filtrer les groupes`},{title:"Réseau social : Recommandations d'amis",level:"Intermédiaire",description:"Implémentez un système de recommandation d'amis",context:`Vous développez la fonctionnalité "Amis suggérés" d'un réseau social. 
                L'objectif est de suggérer de nouveaux contacts basés sur les amis communs.`,tables:["utilisateurs (id, nom, email, ville, age, profession)","amities (user1_id, user2_id, date_amitie, statut)","posts (id, user_id, contenu, date_post, likes)","centres_interet (user_id, interet, niveau)"],questions:["Trouvez les amis communs entre deux utilisateurs","Suggérez 5 amis potentiels basés sur les amis communs","Identifiez les utilisateurs avec des centres d'intérêt similaires","Calculez le score de compatibilité entre utilisateurs"],solution:`-- 1. Amis communs entre Alice (id=1) et Bob (id=2)
SELECT 
    u.nom as ami_commun,
    u.ville,
    COUNT(*) as interactions
FROM amities a1
JOIN amities a2 ON a1.user2_id = a2.user2_id
JOIN utilisateurs u ON a1.user2_id = u.id
LEFT JOIN posts p ON u.id = p.user_id AND p.date_post > DATE_SUB(NOW(), INTERVAL 30 DAY)
WHERE a1.user1_id = 1 AND a2.user1_id = 2
  AND a1.statut = 'accepte' AND a2.statut = 'accepte'
GROUP BY u.id, u.nom, u.ville
ORDER BY interactions DESC;

-- 2. Recommandations d'amis (amis d'amis)
WITH amis_alice AS (
    SELECT user2_id as ami_id 
    FROM amities 
    WHERE user1_id = 1 AND statut = 'accepte'
),
candidats AS (
    SELECT 
        a.user2_id as candidat_id,
        COUNT(DISTINCT a.user1_id) as amis_communs,
        u.nom, u.ville
    FROM amities a
    JOIN amis_alice aa ON a.user1_id = aa.ami_id
    JOIN utilisateurs u ON a.user2_id = u.id
    WHERE a.user2_id != 1 
      AND a.user2_id NOT IN (SELECT ami_id FROM amis_alice)
      AND a.statut = 'accepte'
    GROUP BY a.user2_id, u.nom, u.ville
)
SELECT * FROM candidats 
ORDER BY amis_communs DESC
LIMIT 5;

-- 3. Utilisateurs avec centres d'intérêt similaires
SELECT 
    u2.nom,
    COUNT(DISTINCT ci1.interet) as interets_communs,
    GROUP_CONCAT(ci1.interet) as interets_partages
FROM centres_interet ci1
JOIN centres_interet ci2 ON ci1.interet = ci2.interet
JOIN utilisateurs u2 ON ci2.user_id = u2.id
WHERE ci1.user_id = 1 AND ci2.user_id != 1
GROUP BY u2.id, u2.nom
HAVING interets_communs >= 2
ORDER BY interets_communs DESC;

-- 4. Score de compatibilité composite
SELECT 
    u.nom,
    (amis_communs * 0.4 + interets_communs * 0.3 + proximite_geo * 0.3) as score_compatibilite
FROM (
    SELECT 
        candidat_id,
        nom,
        amis_communs,
        COALESCE(interets.nb_interets, 0) as interets_communs,
        CASE 
            WHEN ville = (SELECT ville FROM utilisateurs WHERE id = 1) THEN 10
            ELSE 0 
        END as proximite_geo
    FROM candidats
    LEFT JOIN (
        SELECT ci2.user_id, COUNT(*) as nb_interets
        FROM centres_interet ci1
        JOIN centres_interet ci2 ON ci1.interet = ci2.interet
        WHERE ci1.user_id = 1
        GROUP BY ci2.user_id
    ) interets ON candidats.candidat_id = interets.user_id
) scores
JOIN utilisateurs u ON scores.candidat_id = u.id
ORDER BY score_compatibilite DESC;`,explanation:`Cet exercice avancé utilise :
                   - WITH clauses (CTE) pour structurer les requêtes complexes
                   - Jointures multiples pour croiser différentes sources
                   - Fonctions d'agrégation avec GROUP_CONCAT
                   - Calculs de scores pondérés avec CASE`},{title:"IoT Industriel : Monitoring en temps réel",level:"Avancé",description:"Analysez les données de capteurs industriels",context:`Une usine surveille ses machines via des capteurs IoT. Vous devez détecter 
                les anomalies, prédire les pannes et optimiser la maintenance.`,tables:["machines (id, nom, type, zone, date_installation)","capteurs (id, machine_id, type_capteur, seuil_alerte)","mesures (id, capteur_id, valeur, timestamp, qualite)","maintenances (id, machine_id, type, date_debut, date_fin, cout)"],questions:["Détectez les machines en surchauffe (température > seuil)","Calculez la tendance de dégradation par machine","Identifiez les patterns de pannes récurrentes","Optimisez la planification de maintenance prédictive"],solution:`-- 1. Détection des surchauffes en temps réel
SELECT 
    m.nom as machine,
    m.zone,
    c.type_capteur,
    mes.valeur as temperature_actuelle,
    c.seuil_alerte,
    mes.valeur - c.seuil_alerte as depassement,
    mes.timestamp
FROM mesures mes
JOIN capteurs c ON mes.capteur_id = c.id
JOIN machines m ON c.machine_id = m.id
WHERE c.type_capteur = 'temperature'
  AND mes.valeur > c.seuil_alerte
  AND mes.timestamp > DATE_SUB(NOW(), INTERVAL 1 HOUR)
  AND mes.qualite = 'good'
ORDER BY depassement DESC, mes.timestamp DESC;

-- 2. Tendance de dégradation (moyenne mobile)
SELECT 
    m.nom,
    DATE(mes.timestamp) as jour,
    AVG(mes.valeur) as moyenne_quotidienne,
    AVG(AVG(mes.valeur)) OVER (
        PARTITION BY m.id 
        ORDER BY DATE(mes.timestamp) 
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) as moyenne_mobile_7j,
    CASE 
        WHEN AVG(mes.valeur) > LAG(AVG(mes.valeur), 7) OVER (
            PARTITION BY m.id ORDER BY DATE(mes.timestamp)
        ) THEN 'DEGRADATION'
        ELSE 'STABLE'
    END as tendance
FROM mesures mes
JOIN capteurs c ON mes.capteur_id = c.id
JOIN machines m ON c.machine_id = m.id
WHERE c.type_capteur = 'vibration'
  AND mes.timestamp > DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY m.id, m.nom, DATE(mes.timestamp)
ORDER BY m.nom, jour DESC;

-- 3. Patterns de pannes récurrentes  
WITH pannes AS (
    SELECT 
        m.id as machine_id,
        m.nom,
        mt.date_debut,
        mt.type as type_panne,
        DAYOFWEEK(mt.date_debut) as jour_semaine,
        HOUR(mt.date_debut) as heure,
        LAG(mt.date_debut) OVER (
            PARTITION BY m.id 
            ORDER BY mt.date_debut
        ) as panne_precedente
    FROM maintenances mt
    JOIN machines m ON mt.machine_id = m.id
    WHERE mt.type IN ('panne', 'arret_urgence')
)
SELECT 
    nom as machine,
    type_panne,
    COUNT(*) as nb_occurrences,
    AVG(TIMESTAMPDIFF(HOUR, panne_precedente, date_debut)) as intervalle_moyen_h,
    CASE jour_semaine
        WHEN 1 THEN 'Dimanche'
        WHEN 2 THEN 'Lundi' 
        WHEN 3 THEN 'Mardi'
        WHEN 4 THEN 'Mercredi'
        WHEN 5 THEN 'Jeudi'
        WHEN 6 THEN 'Vendredi'
        WHEN 7 THEN 'Samedi'
    END as jour_frequent,
    ROUND(AVG(heure), 0) as heure_frequente
FROM pannes
WHERE panne_precedente IS NOT NULL
GROUP BY machine_id, nom, type_panne, jour_semaine
HAVING nb_occurrences >= 3
ORDER BY nb_occurrences DESC;

-- 4. Score de maintenance prédictive
SELECT 
    m.nom as machine,
    -- Facteur âge (plus vieille = plus risquée)
    ROUND(DATEDIFF(NOW(), m.date_installation) / 365.0, 1) as age_annees,
    -- Facteur utilisation récente
    COUNT(mes.id) / 24.0 as utilisation_quotidienne,
    -- Facteur dérive des mesures
    STDDEV(mes.valeur) as variabilite_mesures,
    -- Score de maintenance composite (0-100)
    LEAST(100, 
        (DATEDIFF(NOW(), m.date_installation) / 365.0 * 10) +
        (COUNT(mes.id) / 24.0 * 5) +
        (STDDEV(mes.valeur) * 2) +
        (COALESCE(pannes_recentes.nb_pannes, 0) * 15)
    ) as score_maintenance,
    CASE 
        WHEN score_maintenance > 80 THEN 'URGENT'
        WHEN score_maintenance > 60 THEN 'PLANIFIER'
        WHEN score_maintenance > 40 THEN 'SURVEILLER'
        ELSE 'NORMAL'
    END as priorite
FROM machines m
LEFT JOIN capteurs c ON m.id = c.machine_id
LEFT JOIN mesures mes ON c.id = mes.capteur_id 
    AND mes.timestamp > DATE_SUB(NOW(), INTERVAL 24 HOUR)
LEFT JOIN (
    SELECT 
        machine_id, 
        COUNT(*) as nb_pannes
    FROM maintenances 
    WHERE date_debut > DATE_SUB(NOW(), INTERVAL 90 DAY)
      AND type = 'panne'
    GROUP BY machine_id
) pannes_recentes ON m.id = pannes_recentes.machine_id
GROUP BY m.id, m.nom, m.date_installation
ORDER BY score_maintenance DESC;`,explanation:`Cet exercice expert utilise des techniques avancées :
                   - Fonctions de fenêtrage (OVER, LAG) pour l'analyse temporelle
                   - CTEs complexes pour structurer l'analyse
                   - Calculs statistiques (STDDEV, moyennes mobiles)
                   - Scoring prédictif avec facteurs pondérés`}],m=d[r];return e.jsxs("section",{id:"exercises",className:"scroll-mt-24 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(O,{className:"h-8 w-8 text-green-600"}),e.jsx("h2",{className:"text-3xl font-bold",children:"Exercices Pratiques Corrigés"})]}),e.jsxs(i,{children:[e.jsx(a,{children:e.jsx(l,{children:"🎯 Choisissez votre défi"})}),e.jsx(n,{children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:d.map((x,p)=>e.jsxs(j,{variant:r===p?"default":"outline",onClick:()=>{o(p),c(!1)},className:"h-auto py-4 flex flex-col items-start gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2 w-full",children:[e.jsx("span",{className:"font-semibold",children:x.title}),e.jsx(s,{variant:x.level==="Débutant"?"secondary":x.level==="Intermédiaire"?"default":"destructive",children:x.level})]}),e.jsx("p",{className:"text-xs text-left",children:x.description})]},p))})})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs(i,{className:"border-l-4 border-l-blue-500",children:[e.jsx(a,{children:e.jsx("div",{className:"flex justify-between items-start",children:e.jsxs("div",{children:[e.jsx(l,{className:"text-xl",children:m.title}),e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsx(s,{variant:m.level==="Débutant"?"secondary":m.level==="Intermédiaire"?"default":"destructive",children:m.level}),e.jsx("span",{className:"text-sm text-gray-600",children:m.description})]})]})})}),e.jsx(n,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:"📖 Contexte"}),e.jsx("p",{className:"text-sm",children:m.context})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"🗄️ Schéma de base de données"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:m.tables.map((x,p)=>e.jsx("div",{className:"bg-white p-2 rounded border font-mono text-xs",children:x},p))})]}),e.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-semibold text-yellow-800 mb-2",children:"❓ Questions à résoudre"}),e.jsx("ol",{className:"list-decimal list-inside space-y-1 text-sm",children:m.questions.map((x,p)=>e.jsx("li",{children:x},p))})]})]})})]}),e.jsxs(i,{children:[e.jsx(a,{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(F,{className:"h-5 w-5"}),"Solution complète"]}),e.jsxs(j,{onClick:()=>c(!t),variant:t?"secondary":"default",children:[t?"Masquer":"Révéler"," la solution"]})]})}),e.jsx(n,{children:t?e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto",children:e.jsx("pre",{className:"text-sm",children:e.jsx("code",{children:m.solution})})}),e.jsx("div",{className:"bg-green-50 p-4 rounded-lg",children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(N,{className:"h-4 w-4 text-green-600 mt-0.5"}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold text-green-800 mb-1",children:"💡 Explication détaillée"}),e.jsx("p",{className:"text-sm text-green-700 whitespace-pre-line",children:m.explanation})]})]})}),e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-blue-800 mb-2",children:"🚀 Pour aller plus loin"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsx("li",{children:"• Testez les requêtes avec différents jeux de données"}),e.jsx("li",{children:"• Analysez les plans d'exécution avec EXPLAIN"}),e.jsx("li",{children:"• Optimisez avec des index appropriés"}),e.jsx("li",{children:"• Adaptez les requêtes à votre SGBD (MySQL, PostgreSQL, etc.)"})]})]})]}):e.jsxs("div",{className:"text-center py-8",children:[e.jsx(C,{className:"h-12 w-12 text-gray-400 mx-auto mb-2"}),e.jsx("p",{className:"text-gray-600",children:`Essayez d'abord de résoudre l'exercice par vous-même, puis cliquez sur "Révéler la solution" pour voir la correction détaillée.`})]})})]})]}),e.jsxs("div",{className:"flex justify-between items-center pt-6 border-t",children:[e.jsx(j,{variant:"outline",onClick:()=>{o(Math.max(0,r-1)),c(!1)},disabled:r===0,children:"← Exercice précédent"}),e.jsxs("span",{className:"text-sm text-gray-600",children:["Exercice ",r+1," sur ",d.length]}),e.jsx(j,{variant:"outline",onClick:()=>{o(Math.min(d.length-1,r+1)),c(!1)},disabled:r===d.length-1,children:"Exercice suivant →"})]})]})},X=()=>e.jsxs("section",{id:"trends",className:"scroll-mt-24 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(P,{className:"h-8 w-8 text-green-600"}),e.jsx("h2",{className:"text-3xl font-bold",children:"Tendances et Évolutions"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(i,{className:"border-l-4 border-l-blue-500",children:[e.jsx(a,{children:e.jsx(l,{children:"🚀 Technologies émergentes"})}),e.jsx(n,{children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold",children:"Bases vectorielles"}),e.jsx("p",{className:"text-xs text-gray-600",children:"Pour l'IA et la recherche sémantique"}),e.jsxs("div",{className:"flex gap-1 mt-1",children:[e.jsx(s,{variant:"outline",children:"Pinecone"}),e.jsx(s,{variant:"outline",children:"Weaviate"}),e.jsx(s,{variant:"outline",children:"Chroma"})]})]}),e.jsxs("div",{children:[e.jsx("h5",{className:"font-semibold",children:"Serverless"}),e.jsx("p",{className:"text-xs text-gray-600",children:"Auto-scaling sans gestion serveur"}),e.jsxs("div",{className:"flex gap-1 mt-1",children:[e.jsx(s,{variant:"outline",children:"Aurora Serverless"}),e.jsx(s,{variant:"outline",children:"Cosmos DB"})]})]})]})})]}),e.jsxs(i,{className:"border-l-4 border-l-green-500",children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(N,{className:"h-5 w-5"}),"💡 Le saviez-vous ?"]})}),e.jsx(n,{children:e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsx("li",{children:"• Les bases vectorielles alimentent ChatGPT et les LLMs"}),e.jsx("li",{children:"• Edge computing rapproche les données des utilisateurs"}),e.jsx("li",{children:"• Quantum databases pour calculs exponentiels"}),e.jsx("li",{children:"• Green IT : optimisation énergétique des datacenters"})]})})]})]})]}),Z=()=>e.jsxs("section",{id:"big-data",className:"scroll-mt-24 space-y-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx(f,{className:"h-8 w-8 text-orange-600"}),e.jsx("h2",{className:"text-3xl font-bold",children:"Big Data et Écosystème Moderne"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs(i,{children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(_,{className:"h-5 w-5"}),"Data Lakes"]})}),e.jsxs(n,{children:[e.jsx("p",{className:"text-sm mb-3",children:"Stockage de données brutes multi-formats"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{variant:"secondary",children:"Amazon S3"}),e.jsx(s,{variant:"secondary",children:"Azure Data Lake"}),e.jsx(s,{variant:"secondary",children:"Google Cloud Storage"})]})]})]}),e.jsxs(i,{children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(E,{className:"h-5 w-5"}),"Processing"]})}),e.jsxs(n,{children:[e.jsx("p",{className:"text-sm mb-3",children:"Traitement distribué temps réel"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{variant:"secondary",children:"Apache Spark"}),e.jsx(s,{variant:"secondary",children:"Kafka"}),e.jsx(s,{variant:"secondary",children:"Hadoop"})]})]})]}),e.jsxs(i,{children:[e.jsx(a,{children:e.jsxs(l,{className:"flex items-center gap-2",children:[e.jsx(f,{className:"h-5 w-5"}),"Analytics"]})}),e.jsxs(n,{children:[e.jsx("p",{className:"text-sm mb-3",children:"Analyse et requêtes sur pétaoctets"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{variant:"secondary",children:"Snowflake"}),e.jsx(s,{variant:"secondary",children:"BigQuery"}),e.jsx(s,{variant:"secondary",children:"Redshift"})]})]})]})]})]}),$=()=>{const r=q({currentPage:"databases",sections:[{title:"Introduction aux bases de données",href:"#databases-intro",icon:e.jsx(I,{className:"h-4 w-4"})},{title:"Fondamentaux SQL",href:"#sql-fundamentals",icon:e.jsx(D,{className:"h-4 w-4"})},{title:"Bases NoSQL",href:"#nosql",icon:e.jsx(_,{className:"h-4 w-4"})},{title:"Modélisation des données",href:"#data-modeling",icon:e.jsx(T,{className:"h-4 w-4"})},{title:"Optimisation et performance",href:"#performance",icon:e.jsx(E,{className:"h-4 w-4"})},{title:"Sécurité et gouvernance",href:"#security",icon:e.jsx(w,{className:"h-4 w-4"})},{title:"Big Data et écosystème",href:"#big-data",icon:e.jsx(f,{className:"h-4 w-4"})},{title:"Exercices pratiques",href:"#exercises",icon:e.jsx(O,{className:"h-4 w-4"})},{title:"Tendances et évolutions",href:"#trends",icon:e.jsx(P,{className:"h-4 w-4"})}]});return e.jsx(M,{title:"Bases de Données",backLink:{href:"/fundamentals",label:"Retour aux fondamentaux"},sidebar:r,children:e.jsxs("section",{className:"py-8 space-y-16",children:[e.jsx(G,{title:"Bases de Données en Data Science",description:"Maîtrisez l'art de stocker, gérer et exploiter les données. Des concepts fondamentaux aux architectures distribuées modernes, découvrez tout l'écosystème des bases de données."}),e.jsx(V,{}),e.jsx(z,{}),e.jsx(k,{}),e.jsx(J,{}),e.jsx(Y,{}),e.jsx(Q,{}),e.jsx(Z,{}),e.jsx(K,{}),e.jsx(X,{})]})})},Ce=()=>e.jsx($,{});export{Ce as default};

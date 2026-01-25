import{c as J,r as R,j as e,C as t,a as n,b as l,e as o,d as f,B as $,L as W,R as T}from"./index-jatdNhFh.js";import{C as Z}from"./ContentLayout-Ck_M1CCv.js";import{G as r}from"./glossary-term-yY4LMtks.js";import{E as u,a as h,Q as M}from"./educational-cards-DKc7pKQa.js";import{B as d}from"./badge-D3N1h19b.js";import{T as V,a as B,b as _,c as g}from"./tabs-DyU7YeQV.js";import{T as A}from"./target-Cgxv7nHm.js";import{C as x}from"./circle-check-big-DcUkgBGn.js";import{C as S}from"./code-B5o97cHw.js";import{U as G}from"./users-DpOE6_sU.js";import{L as v}from"./lightbulb-D5sQnwCc.js";import{T as y}from"./tree-pine-BGklAe31.js";import{E as ee}from"./eye-CW1j5p4w.js";import{A as j}from"./arrow-right-BSp3FkSU.js";import{C as se}from"./clock-CgUQtsvd.js";import{B as D}from"./book-open-BGQhZmI6.js";import{Z as C}from"./zap-Df3zai_1.js";import{N as K}from"./network-xMSqk6VX.js";import{G as H}from"./git-branch-C09JVIQv.js";import{R as P,C as w,X as L,Y as k,T as F,L as I,B as re,a as ie}from"./generateCategoricalChart-Cpewz25D.js";import{B as ae}from"./BarChart-Bb4TIFVA.js";import{a as te,L as O}from"./LineChart-BJ-ld847.js";import{C as ne}from"./copy-DxZK1Zd6.js";import{D as le}from"./Layout-CR8zGZt_.js";import{E as q}from"./external-link-CTEWBqNU.js";import{U as oe}from"./unified-hero-section-_j3EuOk5.js";import{u as de}from"./use-section-tracker-DAwaxdR8.js";import{u as ce}from"./use-smooth-scroll-Cdf-j_aP.js";import{B as X,G as me}from"./graduation-cap-BzjsS-_o.js";import{C as ue}from"./chart-column-D8DiT-jd.js";import{C as pe}from"./cpu-Btr-CDLZ.js";import"./input-B_RYv3vb.js";import"./separator-1VTeyrJY.js";import"./chevron-left-HiyNMpmN.js";import"./index-DMzQkvGM.js";import"./info-CijxG-2I.js";import"./circle-alert-Bf4zJKID.js";import"./trending-up-gTw2Lzr0.js";import"./brain-e1e4SMeD.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=J("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),Q=R.createContext(void 0),xe=({children:s})=>{const[a,b]=R.useState("introduction");return e.jsx(Q.Provider,{value:{activeSection:a,setActiveSection:b},children:s})},he=()=>{const s=R.useContext(Q);if(s===void 0)throw new Error("useMachineLearning must be used within a MachineLearningContextProvider");return s},i={"machine-learning":{term:"Machine Learning",shortDefinition:"Branche de l'IA permettant aux systèmes d'apprendre à partir de données sans être explicitement programmés.",longDefinition:"Le Machine Learning est un domaine de l'intelligence artificielle qui se concentre sur le développement d'algorithmes permettant aux ordinateurs d'apprendre à partir de données et d'améliorer leur performance au fil du temps sans être explicitement programmés pour effectuer des tâches spécifiques.",examples:["Un système qui apprend à reconnaître des visages après avoir été entraîné sur des milliers d'images","Un programme qui prédit les prix immobiliers en analysant les ventes historiques"],relatedTerms:["Intelligence Artificielle","Deep Learning","Apprentissage supervisé"],source:"Mitchell, Tom M. (1997). Machine Learning",sourceUrl:"https://www.cs.cmu.edu/~tom/mlbook.html",domain:"general",level:"beginner",synonyms:["Apprentissage automatique","Apprentissage machine"],englishTerm:"Machine Learning"},"apprentissage-supervise":{term:"Apprentissage supervisé",shortDefinition:"Approche où l'algorithme apprend à partir de données étiquetées pour prédire des valeurs sur de nouvelles données.",longDefinition:"L'apprentissage supervisé est une technique de machine learning où l'algorithme est entraîné sur un ensemble de données étiquetées, ce qui signifie que chaque exemple d'entraînement est associé à une étiquette ou une valeur cible. L'objectif est d'apprendre une fonction de mappage qui peut être utilisée pour prédire les valeurs des nouvelles entrées non vues.",examples:["Classification d'emails comme spam ou non spam","Prédiction de prix immobiliers basée sur les caractéristiques de la propriété"],relatedTerms:["Classification","Régression","Machine Learning","Étiquetage de données"],source:"Hastie, T., Tibshirani, R., & Friedman, J. (2009). The Elements of Statistical Learning",domain:"machinelearning",level:"beginner",synonyms:["Apprentissage dirigé"],englishTerm:"Supervised Learning"},"apprentissage-non-supervise":{term:"Apprentissage non supervisé",shortDefinition:"Technique qui traite des données non étiquetées pour découvrir des structures et patterns cachés.",longDefinition:"L'apprentissage non supervisé est une méthode de machine learning où l'algorithme est entraîné sur des données non étiquetées. L'objectif est de découvrir des structures intrinsèques, des patterns et des relations dans les données sans guidance externe ou connaissance préalable des résultats attendus.",examples:["Segmentation de clients en groupes similaires","Détection d'anomalies dans les transactions bancaires"],relatedTerms:["Clustering","Réduction de dimensionnalité","K-means","DBSCAN"],source:"Ghahramani, Z. (2004). Unsupervised Learning",domain:"machinelearning",level:"intermediate",synonyms:["Apprentissage sans supervision","Apprentissage autonome"],englishTerm:"Unsupervised Learning"},classification:{term:"Classification",shortDefinition:"Prédiction d'une catégorie ou classe pour une instance de données parmi un ensemble fini de possibilités.",longDefinition:"La classification est une forme d'apprentissage supervisé où l'algorithme apprend à attribuer une instance de données à une catégorie ou classe prédéfinie. Le modèle est entraîné sur des exemples étiquetés et apprend à généraliser pour classer correctement de nouvelles instances.",examples:["Détection de fraude (frauduleux/légitime)","Diagnostic médical (malade/sain)","Reconnaissance d'objets dans des images"],relatedTerms:["Apprentissage supervisé","Régression logistique","Arbres de décision","SVM"],source:"Bishop, C. M. (2006). Pattern Recognition and Machine Learning",domain:"machinelearning",level:"beginner",englishTerm:"Classification"},regression:{term:"Régression",shortDefinition:"Prédiction d'une valeur numérique continue basée sur des variables d'entrée.",longDefinition:"La régression est une technique d'apprentissage supervisé visant à prédire une valeur numérique continue plutôt qu'une classe discrète. Elle modélise la relation entre une variable dépendante (cible) et une ou plusieurs variables indépendantes (prédicteurs).",examples:["Prédiction des prix immobiliers","Estimation de la consommation d'énergie","Prévision des ventes"],relatedTerms:["Apprentissage supervisé","Régression linéaire","Régression polynomiale","MSE"],source:"James, G., Witten, D., Hastie, T., & Tibshirani, R. (2013). An Introduction to Statistical Learning",domain:"machinelearning",level:"beginner",englishTerm:"Regression"},clustering:{term:"Clustering",shortDefinition:"Regroupement d'instances similaires en groupes (clusters) sans étiquettes prédéfinies.",longDefinition:"Le clustering est une technique d'apprentissage non supervisé qui consiste à regrouper des données en sous-ensembles (clusters) de manière à ce que les objets au sein d'un même groupe soient plus similaires entre eux qu'avec ceux des autres groupes, selon certaines mesures de similarité.",examples:["Segmentation client pour le marketing ciblé","Regroupement d'articles de presse par thématique","Identification de zones géographiques avec des caractéristiques similaires"],relatedTerms:["Apprentissage non supervisé","K-means","DBSCAN","Clustering hiérarchique"],source:"Jain, A. K. (2010). Data clustering: 50 years beyond K-means",domain:"machinelearning",level:"intermediate",synonyms:["Partitionnement de données","Segmentation"],englishTerm:"Clustering"},"reduction-dimensionnalite":{term:"Réduction de dimensionnalité",shortDefinition:"Techniques réduisant le nombre de variables tout en préservant l'information essentielle.",longDefinition:"La réduction de dimensionnalité est un ensemble de techniques visant à réduire le nombre de variables aléatoires à considérer dans un jeu de données, tout en préservant au maximum l'information pertinente. Ces méthodes permettent de lutter contre le fléau de la dimensionnalité et facilitent la visualisation des données.",examples:["Visualisation de données complexes en 2D ou 3D","Compression d'images","Prétraitement pour d'autres algorithmes de ML"],relatedTerms:["PCA","t-SNE","UMAP","Apprentissage non supervisé"],source:"Van der Maaten, L., & Hinton, G. (2008). Visualizing data using t-SNE",domain:"machinelearning",level:"intermediate",synonyms:["Projection de données","Compression de caractéristiques"],englishTerm:"Dimensionality Reduction"},overfitting:{term:"Surapprentissage",shortDefinition:"Phénomène où un modèle apprend trop précisément les données d'entraînement au détriment de sa capacité à généraliser.",longDefinition:"Le surapprentissage (overfitting) se produit lorsqu'un modèle capture le bruit et les fluctuations aléatoires des données d'entraînement comme étant des caractéristiques significatives. Le modèle performe alors très bien sur les données d'entraînement mais échoue à généraliser correctement sur de nouvelles données.",examples:["Un arbre de décision qui crée des branches jusqu'à classer parfaitement chaque exemple d'entraînement","Un réseau de neurones qui continue à s'entraîner bien après que l'erreur de validation commence à augmenter"],relatedTerms:["Sous-apprentissage","Régularisation","Validation croisée","Biais-variance"],source:"Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning",domain:"machinelearning",level:"intermediate",synonyms:["Surajustement","Hyperspécialisation"],englishTerm:"Overfitting"},underfitting:{term:"Sous-apprentissage",shortDefinition:"Situation où un modèle est trop simple pour capturer la structure sous-jacente des données.",longDefinition:"Le sous-apprentissage (underfitting) se produit lorsqu'un modèle est trop simpliste pour saisir les relations importantes dans les données. Il performe mal à la fois sur les données d'entraînement et de test car il n'a pas suffisamment de capacité pour modéliser la complexité inhérente au problème.",examples:["Utiliser une régression linéaire pour modéliser une relation hautement non linéaire","Un réseau de neurones avec trop peu de couches pour un problème complexe"],relatedTerms:["Surapprentissage","Complexité du modèle","Biais élevé"],source:"Domingos, P. (2012). A few useful things to know about machine learning",domain:"machinelearning",level:"intermediate",synonyms:["Sous-ajustement","Sous-modélisation"],englishTerm:"Underfitting"},"deep-learning":{term:"Deep Learning",shortDefinition:"Sous-ensemble du ML utilisant des réseaux de neurones à multiples couches pour apprendre des représentations hiérarchiques.",longDefinition:"Le Deep Learning est une forme avancée de machine learning utilisant des réseaux de neurones artificiels à plusieurs couches (réseaux profonds) pour modéliser des abstractions de haut niveau dans les données. Cette approche permet au système d'apprendre des représentations hiérarchiques des données, chaque couche transformant sa représentation d'entrée en une représentation plus abstraite.",examples:["Reconnaissance d'images avec des réseaux CNN","Traduction automatique avec des transformers","Génération d'images avec des GANs"],relatedTerms:["Réseaux de neurones","CNN","RNN","Transformers","Apprentissage par transfert"],source:"LeCun, Y., Bengio, Y., & Hinton, G. (2015). Deep learning. Nature",sourceUrl:"https://www.nature.com/articles/nature14539",domain:"machinelearning",level:"advanced",synonyms:["Apprentissage profond","Réseaux de neurones profonds"],englishTerm:"Deep Learning"},cnn:{term:"Réseaux de neurones convolutifs",shortDefinition:"Architecture de deep learning optimisée pour traiter des données avec une topologie en grille, comme les images.",longDefinition:"Les réseaux de neurones convolutifs (CNN) sont une classe spécialisée de réseaux de neurones conçus pour traiter efficacement des données structurées en grille, comme les images. Ils utilisent l'opération de convolution pour extraire automatiquement des caractéristiques hiérarchiques à partir des données d'entrée, en apprenant des filtres qui détectent des motifs locaux.",examples:["Classification d'images","Détection d'objets","Segmentation sémantique","Reconnaissance faciale"],relatedTerms:["Deep Learning","Convolution","Pooling","Feature maps"],source:"Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). ImageNet classification with deep convolutional neural networks",domain:"machinelearning",level:"advanced",synonyms:["ConvNets","Réseaux convolutifs"],englishTerm:"Convolutional Neural Networks (CNN)"},rnn:{term:"Réseaux de neurones récurrents",shortDefinition:"Architecture de deep learning conçue pour traiter des données séquentielles en utilisant des connexions récurrentes.",longDefinition:"Les réseaux de neurones récurrents (RNN) sont spécialisés dans le traitement de données séquentielles comme le texte ou les séries temporelles. Contrairement aux réseaux feedforward, les RNN possèdent des connexions récurrentes qui leur permettent de maintenir un état interne (mémoire) et de traiter des séquences de longueur variable en partageant les paramètres à travers les étapes temporelles.",examples:["Analyse de sentiment dans des textes","Traduction automatique","Prédiction de séries temporelles","Génération de texte"],relatedTerms:["LSTM","GRU","Deep Learning","Séquences","Problème de gradient qui s'évanouit"],source:"Elman, J. L. (1990). Finding structure in time",domain:"machinelearning",level:"advanced",synonyms:["Réseaux récurrents"],englishTerm:"Recurrent Neural Networks (RNN)"},transformers:{term:"Transformers",shortDefinition:"Architecture de deep learning basée sur le mécanisme d'attention, qui excelle dans le traitement du langage naturel.",longDefinition:"Les Transformers sont une architecture de réseaux de neurones introduite en 2017 qui a révolutionné le traitement du langage naturel. Contrairement aux RNN, les Transformers traitent l'ensemble de la séquence simultanément grâce au mécanisme d'auto-attention, ce qui leur permet de modéliser les dépendances à longue distance plus efficacement et de se prêter à la parallélisation pendant l'entraînement.",examples:["Modèles BERT pour la compréhension du langage","GPT pour la génération de texte","T5 pour diverses tâches de NLP","ViT pour la vision par ordinateur"],relatedTerms:["Attention","Auto-attention","BERT","GPT","Encodeur-Décodeur"],source:"Vaswani, A., et al. (2017). Attention Is All You Need",sourceUrl:"https://arxiv.org/abs/1706.03762",domain:"machinelearning",level:"advanced",englishTerm:"Transformers"},"evaluation-modele":{term:"Évaluation de modèle",shortDefinition:"Processus de mesure des performances d'un modèle de machine learning pour estimer sa qualité et son utilité.",longDefinition:"L'évaluation de modèle est le processus systématique d'estimation de la qualité et de l'utilité d'un modèle de machine learning. Elle implique de mesurer diverses métriques de performance sur des données non vues pendant l'entraînement, afin d'évaluer la capacité du modèle à généraliser et à faire des prédictions précises dans des contextes réels.",examples:["Utilisation de métriques comme la précision, le rappel et le F1-score pour les modèles de classification","Calcul de l'erreur quadratique moyenne (MSE) pour les modèles de régression","Analyse des courbes ROC et de l'aire sous la courbe (AUC)"],relatedTerms:["Validation croisée","Train-test split","Métriques de performance","Matrice de confusion"],source:"Japkowicz, N., & Shah, M. (2011). Evaluating Learning Algorithms: A Classification Perspective",domain:"machinelearning",level:"intermediate",englishTerm:"Model Evaluation"},"matrice-confusion":{term:"Matrice de confusion",shortDefinition:"Tableau qui présente les prédictions correctes et incorrectes d'un modèle de classification par classe.",longDefinition:"Une matrice de confusion est un outil d'évaluation pour les problèmes de classification qui montre le nombre de prédictions correctes et incorrectes pour chaque classe. Elle permet de calculer diverses métriques de performance comme la précision, le rappel, le F1-score et d'analyser les types d'erreurs commises par le modèle.",examples:["Dans un problème de classification binaire, la matrice contient les vrais positifs (TP), faux positifs (FP), vrais négatifs (TN) et faux négatifs (FN)","Pour la détection de fraude, on peut voir combien de transactions frauduleuses ont été correctement identifiées vs. manquées"],relatedTerms:["Précision","Rappel","F1-score","Classification"],source:"Fawcett, T. (2006). An introduction to ROC analysis",domain:"machinelearning",level:"beginner",englishTerm:"Confusion Matrix"},precision:{term:"Précision",shortDefinition:"Proportion des positifs identifiés qui sont réellement positifs.",longDefinition:"La précision est une métrique de performance pour les modèles de classification, qui mesure la proportion des cas identifiés comme positifs qui sont effectivement des positifs réels. Elle quantifie la capacité du modèle à éviter les faux positifs, c'est-à-dire à ne pas étiqueter comme positifs des cas qui sont en réalité négatifs.",examples:["Dans un système de détection de spam, la précision mesure combien d'emails identifiés comme spam sont réellement des spams","Formule: Précision = VP / (VP + FP), où VP = vrais positifs et FP = faux positifs"],relatedTerms:["Rappel","F1-score","Matrice de confusion","Spécificité"],source:"Powers, D. M. W. (2011). Evaluation: From Precision, Recall and F-Measure to ROC, Informedness, Markedness & Correlation",domain:"machinelearning",level:"beginner",englishTerm:"Precision"},rappel:{term:"Rappel",shortDefinition:"Proportion des positifs réels qui ont été correctement identifiés.",longDefinition:"Le rappel (ou sensibilité) est une métrique de performance pour les modèles de classification, qui mesure la proportion des cas positifs réels qui ont été correctement identifiés comme tels par le modèle. Il quantifie la capacité du modèle à trouver tous les cas positifs, en évitant les faux négatifs.",examples:["Dans un test médical, le rappel mesure la capacité à identifier correctement tous les patients malades","Formule: Rappel = VP / (VP + FN), où VP = vrais positifs et FN = faux négatifs"],relatedTerms:["Précision","F1-score","Matrice de confusion","Sensibilité"],source:"Powers, D. M. W. (2011). Evaluation: From Precision, Recall and F-Measure to ROC, Informedness, Markedness & Correlation",domain:"machinelearning",level:"beginner",synonyms:["Sensibilité","Taux de vrais positifs"],englishTerm:"Recall"},"f1-score":{term:"F1-Score",shortDefinition:"Moyenne harmonique de la précision et du rappel, combinant ces deux métriques en une seule valeur.",longDefinition:"Le F1-Score est une métrique de performance pour les modèles de classification qui combine la précision et le rappel en une seule valeur. Il représente la moyenne harmonique de ces deux métriques, donnant un équilibre entre la capacité du modèle à être précis (minimiser les faux positifs) et complet (minimiser les faux négatifs).",examples:["Utile dans les cas où un équilibre entre précision et rappel est nécessaire","Formule: F1 = 2 * (Précision * Rappel) / (Précision + Rappel)"],relatedTerms:["Précision","Rappel","Matrice de confusion","Mesure-F"],source:"Van Rijsbergen, C. J. (1979). Information Retrieval",domain:"machinelearning",level:"intermediate",englishTerm:"F1-Score"},"auc-roc":{term:"AUC-ROC",shortDefinition:"Aire sous la courbe ROC, mesurant la capacité d'un modèle à distinguer entre les classes.",longDefinition:"L'AUC-ROC (Area Under the Receiver Operating Characteristic Curve) est une métrique de performance pour les modèles de classification, représentant la probabilité qu'un exemple positif aléatoire soit classé avec un score plus élevé qu'un exemple négatif aléatoire. Une valeur de 1 représente un classifieur parfait, tandis que 0.5 équivaut à un classement aléatoire.",examples:["Utilisé pour évaluer les modèles produisant des scores de probabilité plutôt que des classifications binaires directes","Permet de comparer différents modèles indépendamment du seuil de classification"],relatedTerms:["Courbe ROC","Sensibilité","Spécificité","Seuil de classification"],source:"Fawcett, T. (2006). An introduction to ROC analysis",domain:"machinelearning",level:"intermediate",englishTerm:"AUC-ROC (Area Under the ROC Curve)"},mse:{term:"MSE (Erreur quadratique moyenne)",shortDefinition:"Moyenne des carrés des erreurs entre les valeurs prédites et réelles.",longDefinition:"L'erreur quadratique moyenne (Mean Squared Error) est une métrique d'évaluation pour les problèmes de régression, calculée comme la moyenne des carrés des différences entre les valeurs prédites et les valeurs réelles. Elle donne plus de poids aux grandes erreurs en raison de l'élévation au carré, ce qui la rend particulièrement sensible aux valeurs aberrantes.",examples:["Utilisée pour évaluer des modèles de prédiction de prix immobiliers ou de consommation d'énergie","Formule: MSE = (1/n) * Σ(y_i - ŷ_i)²"],relatedTerms:["RMSE","MAE","Régression","Fonction de perte"],source:"Chai, T., & Draxler, R. R. (2014). Root mean square error (RMSE) or mean absolute error (MAE)?",domain:"machinelearning",level:"beginner",englishTerm:"MSE (Mean Squared Error)"},rmse:{term:"RMSE (Racine de l'erreur quadratique moyenne)",shortDefinition:"Racine carrée de la MSE, exprimant l'erreur dans la même unité que la variable cible.",longDefinition:"La racine de l'erreur quadratique moyenne (Root Mean Squared Error) est l'une des métriques les plus couramment utilisées pour évaluer les modèles de régression. Elle est calculée comme la racine carrée de la MSE, ce qui permet d'exprimer l'erreur dans la même unité que la variable cible, facilitant l'interprétation.",examples:["Un RMSE de 5000€ dans un modèle de prédiction immobilière signifie que l'erreur moyenne est d'environ 5000€","Formule: RMSE = √((1/n) * Σ(y_i - ŷ_i)²)"],relatedTerms:["MSE","MAE","Régression","Fonction de perte"],source:"Chai, T., & Draxler, R. R. (2014). Root mean square error (RMSE) or mean absolute error (MAE)?",domain:"machinelearning",level:"beginner",englishTerm:"RMSE (Root Mean Squared Error)"},"r-carre":{term:"R² (Coefficient de détermination)",shortDefinition:"Proportion de la variance de la variable dépendante qui est prédictible à partir des variables indépendantes.",longDefinition:"Le coefficient de détermination (R²) est une mesure statistique qui représente la proportion de la variance dans la variable dépendante qui est prédictible à partir des variables indépendantes. Il varie entre 0 et 1, où 1 indique que le modèle explique parfaitement toute la variabilité des données, et 0 indique que le modèle n'explique aucune variabilité.",examples:["Un R² de 0.75 signifie que 75% de la variance de la variable cible est expliquée par le modèle","Formule: R² = 1 - (Σ(y_i - ŷ_i)² / Σ(y_i - ȳ)²)"],relatedTerms:["MSE","Régression","Variance expliquée","R² ajusté"],source:"Draper, N. R., & Smith, H. (1998). Applied Regression Analysis",domain:"machinelearning",level:"intermediate",englishTerm:"R² (Coefficient of Determination)"},"k-means":{term:"K-means",shortDefinition:"Algorithme de clustering qui partitionne les données en K groupes en minimisant la variance intra-cluster.",longDefinition:"K-means est l'un des algorithmes de clustering les plus populaires et simples. Il vise à partitionner n observations en k clusters, où chaque observation appartient au cluster avec la moyenne la plus proche. L'algorithme procède par itérations, en alternant entre l'affectation des points aux centroïdes les plus proches et la mise à jour des centroïdes.",examples:["Segmentation de clients pour des campagnes marketing ciblées","Compression d'images en réduisant le nombre de couleurs","Regroupement de documents par thème"],relatedTerms:["Clustering","Centroïde","Méthode du coude","Distance euclidienne"],source:"MacQueen, J. (1967). Some methods for classification and analysis of multivariate observations",domain:"machinelearning",level:"intermediate",englishTerm:"K-means"},dbscan:{term:"DBSCAN",shortDefinition:"Algorithme de clustering basé sur la densité, capable de découvrir des clusters de forme arbitraire.",longDefinition:"DBSCAN (Density-Based Spatial Clustering of Applications with Noise) est un algorithme de clustering basé sur la densité qui groupe les points densément regroupés et marque comme outliers les points dans des régions à faible densité. Contrairement à K-means, DBSCAN ne nécessite pas de spécifier à l'avance le nombre de clusters et peut découvrir des clusters de forme arbitraire.",examples:["Détection d'anomalies dans les données de transaction","Identification de zones urbaines à partir de données géospatiales","Segmentation d'images basée sur la densité des pixels"],relatedTerms:["Clustering","Densité","Epsilon-voisinage","Points de bruit"],source:"Ester, M., Kriegel, H. P., Sander, J., & Xu, X. (1996). A density-based algorithm for discovering clusters in large spatial databases with noise",domain:"machinelearning",level:"advanced",englishTerm:"DBSCAN"},pca:{term:"PCA (Analyse en Composantes Principales)",shortDefinition:"Technique de réduction de dimensionnalité qui transforme les données en un nouvel ensemble de variables décorrélées.",longDefinition:"L'Analyse en Composantes Principales (PCA) est une technique statistique qui transforme un ensemble de variables possiblement corrélées en un ensemble de variables linéairement décorrélées appelées composantes principales. La transformation est définie de telle sorte que la première composante principale capture la plus grande variance possible, et chaque composante suivante capture la variance maximale sous contrainte d'être orthogonale aux composantes précédentes.",examples:["Réduction de la dimensionnalité d'un dataset pour la visualisation","Prétraitement des données avant l'application d'autres algorithmes de ML","Compression d'images en préservant les caractéristiques principales"],relatedTerms:["Réduction de dimensionnalité","Valeurs propres","Vecteurs propres","Variance expliquée"],source:"Pearson, K. (1901). On lines and planes of closest fit to systems of points in space",domain:"machinelearning",level:"intermediate",englishTerm:"PCA (Principal Component Analysis)"},"t-sne":{term:"t-SNE",shortDefinition:"Algorithme de réduction de dimensionnalité non linéaire adapté à la visualisation de données de haute dimension.",longDefinition:"t-SNE (t-distributed Stochastic Neighbor Embedding) est une technique de réduction de dimensionnalité non linéaire particulièrement adaptée à la visualisation de données de haute dimension. Elle modélise chaque objet de haute dimension par un point dans un espace de faible dimension, de manière à ce que les objets similaires soient modélisés par des points proches et les objets dissimilaires par des points éloignés.",examples:["Visualisation de clusters dans des datasets complexes comme MNIST","Exploration de données génomiques","Analyse de données de séquençage d'ARN"],relatedTerms:["Réduction de dimensionnalité","Embedding","Perplexité","Visualisation de données"],source:"Van der Maaten, L., & Hinton, G. (2008). Visualizing data using t-SNE",sourceUrl:"https://www.jmlr.org/papers/volume9/vandermaaten08a/vandermaaten08a.pdf",domain:"machinelearning",level:"advanced",englishTerm:"t-SNE (t-distributed Stochastic Neighbor Embedding)"},lstm:{term:"LSTM (Long Short-Term Memory)",shortDefinition:"Type de réseau de neurones récurrent conçu pour apprendre les dépendances à long terme dans les données séquentielles.",longDefinition:"Les LSTM (Long Short-Term Memory) sont un type spécial de réseaux de neurones récurrents capables d'apprendre les dépendances à long terme dans les données séquentielles. Ils sont conçus pour éviter le problème du gradient qui s'évanouit présent dans les RNN classiques grâce à une architecture à base de cellules mémoire avec des portes d'entrée, de sortie et d'oubli qui contrôlent le flux d'information.",examples:["Traduction automatique","Reconnaissance vocale","Génération de texte","Prédiction de séries temporelles financières"],relatedTerms:["RNN","GRU","Deep Learning","Problème du gradient qui s'évanouit"],source:"Hochreiter, S., & Schmidhuber, J. (1997). Long short-term memory",sourceUrl:"https://www.bioinf.jku.at/publications/older/2604.pdf",domain:"machinelearning",level:"advanced",englishTerm:"LSTM (Long Short-Term Memory)"},modèle:{term:"Modèle",shortDefinition:"Représentation mathématique d'un processus réel utilisée pour faire des prédictions ou des classifications.",longDefinition:"Un modèle de machine learning est une représentation mathématique qui capture les patterns et relations dans les données d'entraînement. Il s'agit d'un ensemble de règles, paramètres et algorithmes qui permettent de transformer des données d'entrée en prédictions ou classifications. Le modèle est créé pendant la phase d'entraînement et peut ensuite être utilisé pour faire des inférences sur de nouvelles données.",examples:["Un modèle de régression linéaire pour prédire les prix immobiliers","Un réseau de neurones pour la reconnaissance d'images","Un arbre de décision pour la classification de clients"],relatedTerms:["Algorithme","Entraînement","Prédiction","Paramètres"],source:"Fundamentals of Machine Learning",domain:"machinelearning",level:"beginner",synonyms:["Modèle prédictif","Modèle statistique"],englishTerm:"Model"}},_e=()=>{const[s,a]=R.useState("models-work");return e.jsxs("section",{id:"introduction",className:"space-y-16",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent",children:"Introduction au Machine Learning"}),e.jsx("p",{className:"text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed",children:"Cours pratique inspiré de Kaggle Learn - Maîtrisez les fondamentaux du ML avec des exercices concrets et des visualisations interactives"}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mt-8",children:[e.jsx(d,{variant:"secondary",className:"px-4 py-2",children:"📚 Cours Kaggle"}),e.jsx(d,{variant:"secondary",className:"px-4 py-2",children:"💻 Exercices Pratiques"}),e.jsx(d,{variant:"secondary",className:"px-4 py-2",children:"🐍 Python & Pandas"}),e.jsx(d,{variant:"secondary",className:"px-4 py-2",children:"📊 Visualisations"})]})]}),e.jsx("div",{className:"flex justify-center mb-12",children:e.jsxs("div",{className:"relative group",children:[e.jsx("img",{src:"/img/machine_learning.jpg",alt:"Introduction au Machine Learning",className:"w-[80%] max-w-4xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",children:[e.jsxs(t,{className:"border-primary/20 hover:border-primary/40 transition-colors",children:[e.jsxs(n,{className:"text-center",children:[e.jsx(A,{className:"h-8 w-8 text-primary mx-auto mb-2"}),e.jsx(l,{className:"text-lg",children:"Objectifs"})]}),e.jsx(o,{children:e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(x,{className:"h-4 w-4 text-green-500"}),"Comprendre les modèles ML"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(x,{className:"h-4 w-4 text-green-500"}),"Explorer des données"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(x,{className:"h-4 w-4 text-green-500"}),"Créer votre premier modèle"]})]})})]}),e.jsxs(t,{className:"border-secondary/20 hover:border-secondary/40 transition-colors",children:[e.jsxs(n,{className:"text-center",children:[e.jsx(S,{className:"h-8 w-8 text-secondary mx-auto mb-2"}),e.jsx(l,{className:"text-lg",children:"Outils"})]}),e.jsx(o,{children:e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(E,{className:"h-4 w-4 text-blue-500"}),"Pandas pour l'analyse"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(E,{className:"h-4 w-4 text-blue-500"}),"Scikit-Learn pour le ML"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(E,{className:"h-4 w-4 text-blue-500"}),"Jupyter Notebooks"]})]})})]}),e.jsxs(t,{className:"border-accent/20 hover:border-accent/40 transition-colors",children:[e.jsxs(n,{className:"text-center",children:[e.jsx(G,{className:"h-8 w-8 text-accent mx-auto mb-2"}),e.jsx(l,{className:"text-lg",children:"Prérequis"})]}),e.jsx(o,{children:e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(v,{className:"h-4 w-4 text-yellow-500"}),"Python de base"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(v,{className:"h-4 w-4 text-yellow-500"}),"Logique mathématique"]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(v,{className:"h-4 w-4 text-yellow-500"}),"Curiosité d'apprendre"]})]})})]})]}),e.jsxs(V,{value:s,onValueChange:a,className:"w-full",children:[e.jsxs(B,{className:"grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto p-1",children:[e.jsxs(_,{value:"models-work",className:"text-xs p-3 h-auto flex flex-col gap-1",children:[e.jsx("span",{className:"text-lg",children:"🌱"}),e.jsx("span",{children:"Comment Fonctionnent les Modèles"})]}),e.jsxs(_,{value:"data-exploration",className:"text-xs p-3 h-auto flex flex-col gap-1",children:[e.jsx("span",{className:"text-lg",children:"🔍"}),e.jsx("span",{children:"Exploration des Données"})]}),e.jsxs(_,{value:"first-model",className:"text-xs p-3 h-auto flex flex-col gap-1",children:[e.jsx("span",{className:"text-lg",children:"🧪"}),e.jsx("span",{children:"Premier Modèle"})]}),e.jsxs(_,{value:"model-validation",className:"text-xs p-3 h-auto flex flex-col gap-1",children:[e.jsx("span",{className:"text-lg",children:"📊"}),e.jsx("span",{children:"Validation"})]}),e.jsxs(_,{value:"overfitting",className:"text-xs p-3 h-auto flex flex-col gap-1",children:[e.jsx("span",{className:"text-lg",children:"⚖️"}),e.jsx("span",{children:"Sur/Sous-ajustement"})]}),e.jsxs(_,{value:"random-forests",className:"text-xs p-3 h-auto flex flex-col gap-1",children:[e.jsx("span",{className:"text-lg",children:"🌲"}),e.jsx("span",{children:"Forêts Aléatoires"})]})]}),e.jsxs(g,{value:"models-work",className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h3",{className:"text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent",children:"🌱 Comment Fonctionnent les Modèles"}),e.jsx("p",{className:"text-xl text-muted-foreground",children:"Comprendre les fondements des modèles prédictifs avec des arbres de décision"})]}),e.jsx(u,{title:"Qu'est-ce qu'un modèle de Machine Learning ?",type:"concept",className:"mb-6",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg",children:[e.jsx(v,{className:"h-8 w-8 text-blue-500 mt-1 flex-shrink-0"}),e.jsx("div",{children:e.jsxs("p",{className:"text-lg leading-relaxed",children:["Un ",e.jsx(r,{definition:i.modèle,children:"modèle"})," de machine learning est un ",e.jsx("strong",{children:"ensemble de règles informatiques"}),' qui permet de faire des prédictions à partir de données. Imaginez-le comme une "recette intelligente" qui transforme des informations en réponses précises.']})})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-400",children:[e.jsxs("h4",{className:"font-semibold text-green-800 mb-3 flex items-center gap-2",children:[e.jsx(y,{className:"h-5 w-5"}),"Arbre de Décision : Votre Premier Modèle"]}),e.jsx("p",{className:"text-green-700 mb-4",children:"Un arbre de décision fonctionne comme un questionnaire intelligent. Il pose des questions successives sur vos données pour arriver à une prédiction."}),e.jsx("div",{className:"bg-white p-4 rounded border-2 border-dashed border-green-300",children:e.jsxs("p",{className:"text-sm font-mono text-green-600",children:["Taille > 150m² ?",e.jsx("br",{}),"├─ OUI → Chambres > 3 ?",e.jsx("br",{}),"│   ├─ OUI → Prix: Élevé",e.jsx("br",{}),"│   └─ NON → Prix: Moyen",e.jsx("br",{}),"└─ NON → Prix: Bas"]})})]}),e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-400",children:[e.jsxs("h4",{className:"font-semibold text-blue-800 mb-3 flex items-center gap-2",children:[e.jsx(A,{className:"h-5 w-5"}),"Exemple Concret : Prix d'une Maison"]}),e.jsx("p",{className:"text-blue-700 mb-4",children:"Pour prédire le prix d'une maison, notre modèle examine des caractéristiques comme :"}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-center gap-2 text-blue-600",children:[e.jsx(x,{className:"h-4 w-4"}),"Surface habitable (m²)"]}),e.jsxs("li",{className:"flex items-center gap-2 text-blue-600",children:[e.jsx(x,{className:"h-4 w-4"}),"Nombre de chambres"]}),e.jsxs("li",{className:"flex items-center gap-2 text-blue-600",children:[e.jsx(x,{className:"h-4 w-4"}),"Localisation (quartier)"]}),e.jsxs("li",{className:"flex items-center gap-2 text-blue-600",children:[e.jsx(x,{className:"h-4 w-4"}),"Année de construction"]})]})]})]})]})}),e.jsxs(t,{className:"bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200",children:[e.jsxs(n,{children:[e.jsxs(l,{className:"flex items-center gap-2 text-purple-700",children:[e.jsx(ee,{className:"h-5 w-5"}),'Visualisation : Comment un Arbre "Voit" les Données']}),e.jsx(f,{children:"Un arbre de décision divise l'espace des données en régions homogènes"})]}),e.jsx(o,{children:e.jsxs("div",{className:"bg-white p-6 rounded-lg border-2 border-dashed border-purple-300",children:[e.jsx("div",{className:"text-center mb-4",children:e.jsx("p",{className:"font-semibold text-purple-700",children:"Segmentation des Données"})}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-green-100 p-3 rounded border-l-4 border-green-500",children:[e.jsx("strong",{className:"text-green-700",children:"Région 1 :"}),e.jsx("br",{}),"Surface > 150m² + Chambres > 3",e.jsx("br",{}),e.jsx("span",{className:"text-green-600",children:"→ Prix Élevé (€300k+)"})]}),e.jsxs("div",{className:"bg-yellow-100 p-3 rounded border-l-4 border-yellow-500",children:[e.jsx("strong",{className:"text-yellow-700",children:"Région 2 :"}),e.jsx("br",{}),"Surface > 150m² + Chambres ≤ 3",e.jsx("br",{}),e.jsx("span",{className:"text-yellow-600",children:"→ Prix Moyen (€200-300k)"})]}),e.jsxs("div",{className:"bg-orange-100 p-3 rounded border-l-4 border-orange-500",children:[e.jsx("strong",{className:"text-orange-700",children:"Région 3 :"}),e.jsx("br",{}),"Surface ≤ 150m² + Garage",e.jsx("br",{}),e.jsx("span",{className:"text-orange-600",children:"→ Prix Moyen-Bas (€150-200k)"})]}),e.jsxs("div",{className:"bg-red-100 p-3 rounded border-l-4 border-red-500",children:[e.jsx("strong",{className:"text-red-700",children:"Région 4 :"}),e.jsx("br",{}),"Surface ≤ 150m² + Pas de garage",e.jsx("br",{}),e.jsx("span",{className:"text-red-600",children:"→ Prix Bas (<€150k)"})]})]})]})})]}),e.jsx(h,{title:"🎯 Exercice Pratique : Construisez Votre Arbre de Décision",problem:"Vous êtes consultant pour une concession automobile. Créez un arbre de décision pour prédire si un client achètera une voiture électrique. Vous devez poser exactement 3 questions pour segmenter vos clients.",solution:`
**Solution Optimale :**

1. **Budget disponible ≥ 35k€ ?**
   - NON → Proposer voiture hybride (pas électrique)
   - OUI → Question 2

2. **Trajet quotidien < 100km ?**
   - NON → Évaluer infrastructure (Question 3)  
   - OUI → Question 3

3. **Accès à borne de recharge à domicile/travail ?**
   - NON → Voiture hybride recommandée
   - OUI → **Voiture électrique recommandée** ✅

**Logique :** Le budget élimine d'abord les non-éligibles, puis l'autonomie et l'infrastructure déterminent la faisabilité pratique.
            `,hints:["💰 Commencez par le critère financier (budget)","🚗 Pensez aux contraintes d'usage quotidien (distance)","🔌 L'infrastructure de recharge est cruciale","📊 Chaque question doit diviser les clients en groupes distincts"],difficulty:"débutant",estimatedTime:"10 min"}),e.jsxs("div",{className:"bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg",children:[e.jsxs("h4",{className:"font-bold text-xl mb-3 flex items-center gap-2",children:[e.jsx(x,{className:"h-6 w-6"}),"Points Clés à Retenir"]}),e.jsxs("ul",{className:"space-y-2",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(j,{className:"h-5 w-5 mt-0.5 flex-shrink-0"}),"Un modèle ML = ensemble de règles pour faire des prédictions"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(j,{className:"h-5 w-5 mt-0.5 flex-shrink-0"}),"Les arbres de décision sont intuitifs et visuels"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(j,{className:"h-5 w-5 mt-0.5 flex-shrink-0"}),'Chaque "split" divise les données en groupes plus homogènes']}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx(j,{className:"h-5 w-5 mt-0.5 flex-shrink-0"}),"La qualité des questions détermine la précision du modèle"]})]})]})]}),e.jsxs(g,{value:"data-exploration",className:"space-y-8",children:[e.jsx(u,{title:"🔍 2. Basic Data Exploration",type:"concept",children:e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500",children:[e.jsx("h4",{className:"font-bold text-blue-800 mb-3",children:"🎯 Objectif : Apprendre à explorer un dataset avec Pandas"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white p-4 rounded-lg border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-800 mb-2",children:"📥 1. Chargement des données"}),e.jsxs("div",{className:"bg-gray-100 p-3 rounded text-sm font-mono",children:["import pandas as pd",e.jsx("br",{}),"data = pd.read_csv('melbourne_housing.csv')"]}),e.jsx("p",{className:"text-sm mt-2",children:"Première étape cruciale : charger vos données depuis un fichier CSV."})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border-l-4 border-purple-500",children:[e.jsx("h5",{className:"font-semibold text-purple-800 mb-2",children:"🔍 2. Analyse descriptive"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"bg-purple-50 p-3 rounded",children:[e.jsx("div",{className:"font-mono text-sm mb-1",children:"data.describe()"}),e.jsx("p",{className:"text-xs",children:"Statistiques de base (moyenne, médiane, etc.)"})]}),e.jsxs("div",{className:"bg-purple-50 p-3 rounded",children:[e.jsx("div",{className:"font-mono text-sm mb-1",children:"data.columns"}),e.jsx("p",{className:"text-xs",children:"Liste toutes les colonnes disponibles"})]})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border-l-4 border-yellow-500",children:[e.jsx("h5",{className:"font-semibold text-yellow-800 mb-2",children:"🎯 3. Identification des variables"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"bg-yellow-50 p-3 rounded",children:[e.jsx("strong",{children:"Features (caractéristiques) :"}),e.jsx("p",{className:"text-sm",children:"Rooms, Bathroom, Landsize, BuildingArea..."})]}),e.jsxs("div",{className:"bg-orange-50 p-3 rounded",children:[e.jsx("strong",{children:"Target (variable cible) :"}),e.jsx("p",{className:"text-sm",children:"Price (ce qu'on veut prédire)"})]})]})]})]})]})})}),e.jsx(h,{title:"Exercice : Exploration du Dataset Melbourne House Prices",problem:"Explorez le dataset des prix immobiliers de Melbourne et extrayez les statistiques clés : prix médian, nombre moyen de chambres, taille moyenne du terrain.",solution:"Prix médian : 1,035,000 AUD | Chambres moyennes : 2.9 | Terrain moyen : 558 m²",hints:["Utilisez data['Price'].median() pour le prix médian","data['Rooms'].mean() pour la moyenne des chambres","N'oubliez pas de gérer les valeurs manquantes avec dropna()"],difficulty:"débutant",estimatedTime:"10 min"})]}),e.jsxs(g,{value:"first-model",className:"space-y-8",children:[e.jsx(u,{title:"🧪 3. Your First Machine Learning Model",type:"concept",children:e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500",children:[e.jsx("h4",{className:"font-bold text-purple-800 mb-3",children:"🎯 Objectif : Construire un modèle prédictif simple"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white p-4 rounded-lg border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-800 mb-2",children:"1️⃣ Sélection des features et de la target"}),e.jsxs("div",{className:"bg-gray-100 p-3 rounded text-sm font-mono mb-2",children:["features = ['Rooms', 'Bathroom', 'Landsize', 'BuildingArea']",e.jsx("br",{}),"X = data[features]",e.jsx("br",{}),"y = data['Price']"]}),e.jsx("p",{className:"text-sm",children:"Choisissez soigneusement vos variables d'entrée (X) et votre cible (y)."})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-800 mb-2",children:"2️⃣ Utilisation de Scikit-Learn"}),e.jsxs("div",{className:"bg-gray-100 p-3 rounded text-sm font-mono mb-2",children:["from sklearn.tree import DecisionTreeRegressor",e.jsx("br",{}),"model = DecisionTreeRegressor(random_state=1)",e.jsx("br",{}),"model.fit(X, y)  # Entraînement",e.jsx("br",{}),"predictions = model.predict(X)  # Prédictions"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2 mt-3",children:[e.jsxs("div",{className:"bg-green-50 p-2 rounded text-center",children:[e.jsx("strong",{className:"text-xs",children:"Définir"}),e.jsx("p",{className:"text-xs",children:"DecisionTreeRegressor"})]}),e.jsxs("div",{className:"bg-blue-50 p-2 rounded text-center",children:[e.jsx("strong",{className:"text-xs",children:"Entraîner"}),e.jsx("p",{className:"text-xs",children:"model.fit(X, y)"})]}),e.jsxs("div",{className:"bg-purple-50 p-2 rounded text-center",children:[e.jsx("strong",{className:"text-xs",children:"Prédire"}),e.jsx("p",{className:"text-xs",children:"model.predict()"})]})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border-l-4 border-red-500",children:[e.jsx("h5",{className:"font-semibold text-red-800 mb-2",children:"3️⃣ Évaluation avec MAE"}),e.jsxs("div",{className:"bg-gray-100 p-3 rounded text-sm font-mono mb-2",children:["from sklearn.metrics import mean_absolute_error",e.jsx("br",{}),"mae = mean_absolute_error(y, predictions)"]}),e.jsx("div",{className:"bg-red-50 p-3 rounded",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"MAE (Mean Absolute Error) :"})," Moyenne des erreurs en valeur absolue. Plus c'est bas, mieux c'est !"]})})]})]})]})})}),e.jsx(h,{title:"Exercice : Construisez votre premier modèle",problem:"Créez un modèle de prédiction de prix avec les features : Rooms, Bathroom, Landsize. Calculez la MAE sur vos prédictions.",solution:"MAE ≈ 434 (peut varier selon les données). Le modèle prédit avec une erreur moyenne de 434 unités monétaires.",hints:["N'oubliez pas d'importer DecisionTreeRegressor","Utilisez random_state=1 pour des résultats reproductibles","La MAE vous donne l'erreur moyenne en valeur absolue"],difficulty:"intermédiaire",estimatedTime:"15 min"})]}),e.jsxs(g,{value:"model-validation",className:"space-y-8",children:[e.jsx(u,{title:"📊 4. Model Validation",type:"concept",children:e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-500",children:[e.jsx("h4",{className:"font-bold text-orange-800 mb-3",children:"🎯 Objectif : Valider la fiabilité d'un modèle"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white p-4 rounded-lg border-l-4 border-red-500",children:[e.jsx("h5",{className:"font-semibold text-red-800 mb-2",children:`⚠️ Problème de l'"In-Sample Score"`}),e.jsxs("p",{className:"text-sm mb-3",children:["Un modèle performant sur les données d'entraînement peut ",e.jsx("strong",{children:"échouer sur de nouvelles données"}),". C'est comme réviser avec les réponses du test - on ne teste pas vraiment ses connaissances !"]}),e.jsx("div",{className:"bg-red-50 p-3 rounded",children:e.jsxs("p",{className:"text-xs",children:[e.jsx("strong",{children:"Analogie :"})," Un étudiant qui mémorise par cœur aura 20/20 sur les mêmes questions, mais 5/20 sur un nouveau test !"]})})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-800 mb-2",children:"✅ Solution : Train-Test Split"}),e.jsxs("div",{className:"bg-gray-100 p-3 rounded text-sm font-mono mb-2",children:["from sklearn.model_selection import train_test_split",e.jsx("br",{}),"X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=1)"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mt-3",children:[e.jsxs("div",{className:"bg-green-50 p-3 rounded",children:[e.jsx("strong",{className:"text-sm",children:"80% Entraînement"}),e.jsx("p",{className:"text-xs",children:"Le modèle apprend sur ces données"})]}),e.jsxs("div",{className:"bg-blue-50 p-3 rounded",children:[e.jsx("strong",{className:"text-sm",children:"20% Validation"}),e.jsx("p",{className:"text-xs",children:'Test sur données "inédites"'})]})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border-l-4 border-purple-500",children:[e.jsx("h5",{className:"font-semibold text-purple-800 mb-2",children:"📏 Calcul de la MAE sur la validation"}),e.jsxs("div",{className:"bg-gray-100 p-3 rounded text-sm font-mono mb-2",children:["model.fit(X_train, y_train)",e.jsx("br",{}),"val_predictions = model.predict(X_val)",e.jsx("br",{}),"val_mae = mean_absolute_error(y_val, val_predictions)"]}),e.jsx("p",{className:"text-sm",children:"Cette MAE reflète mieux la performance réelle du modèle !"})]})]})]})})}),e.jsx(h,{title:"Exercice : Implémentation du Train-Test Split",problem:"Séparez vos données en 80% entraînement / 20% validation. Comparez la MAE sur l'entraînement vs validation.",solution:"MAE train : ~434 | MAE validation : ~672 (la différence indique un possible overfitting)",hints:["Utilisez test_size=0.2 pour 80%/20%","Fixez random_state pour des résultats reproductibles","La MAE de validation est généralement plus élevée"],difficulty:"intermédiaire",estimatedTime:"10 min"})]}),e.jsxs(g,{value:"overfitting",className:"space-y-8",children:[e.jsx(u,{title:"⚖️ 5. Underfitting and Overfitting",type:"concept",children:e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-500",children:[e.jsx("h4",{className:"font-bold text-yellow-800 mb-3",children:"🎯 Objectif : Diagnostiquer les problèmes de complexité du modèle"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-white p-4 rounded-lg border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-800 mb-2",children:"📉 Sous-ajustement (Underfitting)"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Définition :"})," Modèle trop simple"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Symptôme :"})," Arbre avec peu de feuilles"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Problème :"})," N'arrive pas à capturer les tendances"]}),e.jsx("div",{className:"bg-blue-50 p-2 rounded",children:e.jsxs("p",{className:"text-xs",children:[e.jsx("strong",{children:"Analogie :"})," Étudiant qui n'a pas assez révisé"]})})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border-l-4 border-red-500",children:[e.jsx("h5",{className:"font-semibold text-red-800 mb-2",children:"📈 Sur-ajustement (Overfitting)"}),e.jsxs("div",{className:"space-y-2 text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Définition :"})," Modèle trop complexe"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Symptôme :"})," Arbre avec trop de feuilles"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Problème :"})," Mémorise le bruit des données"]}),e.jsx("div",{className:"bg-red-50 p-2 rounded",children:e.jsxs("p",{className:"text-xs",children:[e.jsx("strong",{children:"Analogie :"})," Étudiant qui connaît par cœur mais ne comprend pas"]})})]})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-800 mb-2",children:"🎛️ Contrôle via max_leaf_nodes"}),e.jsx("div",{className:"bg-gray-100 p-3 rounded text-sm font-mono mb-2",children:"model = DecisionTreeRegressor(max_leaf_nodes=100, random_state=1)"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2 mt-3",children:[e.jsxs("div",{className:"bg-red-100 p-2 rounded text-center",children:[e.jsx("strong",{className:"text-xs",children:"Peu de feuilles"}),e.jsx("p",{className:"text-xs",children:"Underfitting"})]}),e.jsxs("div",{className:"bg-green-100 p-2 rounded text-center",children:[e.jsx("strong",{className:"text-xs",children:"Juste ce qu'il faut"}),e.jsx("p",{className:"text-xs",children:"Sweet spot!"})]}),e.jsxs("div",{className:"bg-red-100 p-2 rounded text-center",children:[e.jsx("strong",{className:"text-xs",children:"Trop de feuilles"}),e.jsx("p",{className:"text-xs",children:"Overfitting"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-purple-800 mb-2",children:"🎯 Trouver le Sweet Spot"}),e.jsx("p",{className:"text-sm mb-2",children:"Testez différentes valeurs de max_leaf_nodes et choisissez celle qui minimise la MAE de validation :"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 text-xs",children:[e.jsx("div",{className:"bg-white p-2 rounded",children:"50 feuilles → MAE: 652"}),e.jsx("div",{className:"bg-white p-2 rounded",children:"100 feuilles → MAE: 634"}),e.jsx("div",{className:"bg-green-200 p-2 rounded",children:e.jsx("strong",{children:"250 feuilles → MAE: 628"})}),e.jsx("div",{className:"bg-white p-2 rounded",children:"500 feuilles → MAE: 645"})]})]})]})]})})}),e.jsx(h,{title:"Exercice : Expérimentation avec max_leaf_nodes",problem:"Testez différentes valeurs de max_leaf_nodes (50, 100, 250, 500) et trouvez celle qui donne la meilleure MAE de validation.",solution:"La valeur optimale est généralement autour de 250 feuilles (peut varier selon les données)",hints:["Créez une boucle pour tester différentes valeurs","Stockez les MAE de validation pour chaque test","La meilleure valeur minimise la MAE de validation"],difficulty:"intermédiaire",estimatedTime:"15 min"})]}),e.jsxs(g,{value:"random-forests",className:"space-y-8",children:[e.jsx(u,{title:"🌲 6. Random Forests",type:"concept",children:e.jsx("div",{className:"space-y-6",children:e.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border-l-4 border-green-500",children:[e.jsx("h4",{className:"font-bold text-green-800 mb-3",children:"🎯 Objectif : Améliorer les prédictions avec des ensembles d'arbres"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-white p-4 rounded-lg border-l-4 border-orange-500",children:[e.jsx("h5",{className:"font-semibold text-orange-800 mb-2",children:"⚠️ Limites des arbres de décision uniques"}),e.jsxs("p",{className:"text-sm mb-3",children:["Les arbres de décision sont ",e.jsx("strong",{children:"sensibles aux petites variations"})," des données. Changer quelques points peut créer un arbre complètement différent !"]}),e.jsx("div",{className:"bg-orange-50 p-3 rounded",children:e.jsxs("p",{className:"text-xs",children:[e.jsx("strong",{children:"Analogie :"})," Comme demander l'avis à une seule personne - c'est risqué ! Mieux vaut consulter plusieurs experts."]})})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border-l-4 border-green-500",children:[e.jsx("h5",{className:"font-semibold text-green-800 mb-2",children:"🌳 Principe des Forêts Aléatoires"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("p",{className:"text-sm",children:["Les Random Forests combinent ",e.jsx("strong",{children:"plusieurs arbres indépendants"})," :"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[e.jsxs("div",{className:"bg-green-50 p-3 rounded text-center",children:[e.jsx(y,{className:"h-6 w-6 mx-auto mb-2 text-green-600"}),e.jsxs("p",{className:"text-xs",children:[e.jsx("strong",{children:"Arbre 1"}),e.jsx("br",{}),"Données échantillon A"]})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded text-center",children:[e.jsx(y,{className:"h-6 w-6 mx-auto mb-2 text-green-600"}),e.jsxs("p",{className:"text-xs",children:[e.jsx("strong",{children:"Arbre 2"}),e.jsx("br",{}),"Données échantillon B"]})]}),e.jsxs("div",{className:"bg-green-50 p-3 rounded text-center",children:[e.jsx(y,{className:"h-6 w-6 mx-auto mb-2 text-green-600"}),e.jsxs("p",{className:"text-xs",children:[e.jsx("strong",{children:"Arbre N"}),e.jsx("br",{}),"Données échantillon N"]})]})]}),e.jsx("div",{className:"text-center",children:e.jsx("div",{className:"bg-blue-100 p-3 rounded",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"Prédiction finale ="})," Moyenne des prédictions de tous les arbres"]})})})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border-l-4 border-blue-500",children:[e.jsx("h5",{className:"font-semibold text-blue-800 mb-2",children:"📊 Avantages des Random Forests"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"bg-blue-50 p-2 rounded text-sm",children:[e.jsx("strong",{children:"🛡️ Réduction du sur-ajustement"}),e.jsx("br",{}),e.jsx("span",{className:"text-xs",children:"La moyenne lisse les erreurs individuelles"})]}),e.jsxs("div",{className:"bg-blue-50 p-2 rounded text-sm",children:[e.jsx("strong",{children:"🎯 Meilleure généralisation"}),e.jsx("br",{}),e.jsx("span",{className:"text-xs",children:"Plus robuste sur nouvelles données"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"bg-blue-50 p-2 rounded text-sm",children:[e.jsx("strong",{children:"⚡ Relativement rapide"}),e.jsx("br",{}),e.jsx("span",{className:"text-xs",children:"Arbres entraînés en parallèle"})]}),e.jsxs("div",{className:"bg-blue-50 p-2 rounded text-sm",children:[e.jsx("strong",{children:"🔧 Peu de paramétrage"}),e.jsx("br",{}),e.jsx("span",{className:"text-xs",children:'Fonctionne bien "out of the box"'})]})]})]})]}),e.jsxs("div",{className:"bg-white p-4 rounded-lg border-l-4 border-purple-500",children:[e.jsx("h5",{className:"font-semibold text-purple-800 mb-2",children:"💻 Utilisation avec Scikit-Learn"}),e.jsxs("div",{className:"bg-gray-100 p-3 rounded text-sm font-mono mb-2",children:["from sklearn.ensemble import RandomForestRegressor",e.jsx("br",{}),"rf_model = RandomForestRegressor(n_estimators=100, random_state=1)",e.jsx("br",{}),"rf_model.fit(X_train, y_train)",e.jsx("br",{}),"rf_predictions = rf_model.predict(X_val)"]}),e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"n_estimators=100"})," signifie qu'on utilise 100 arbres dans la forêt."]})]})]})]})})}),e.jsx(h,{title:"Exercice : Remplacement par une Random Forest",problem:"Remplacez votre arbre de décision par une Random Forest avec 100 arbres. Comparez les performances MAE.",solution:"Random Forest MAE : ~602 (amélioration vs arbre unique : ~628)",hints:["Importez RandomForestRegressor depuis sklearn.ensemble","Utilisez n_estimators=100 pour 100 arbres","Comparez la MAE avec votre modèle d'arbre unique"],difficulty:"débutant",estimatedTime:"10 min"}),e.jsxs("div",{className:"bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-500",children:[e.jsx("h4",{className:"font-bold text-emerald-800 mb-4 text-center",children:"✅ Points clés du cours"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-white p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-blue-800 mb-1",children:"🎯 Public visé"}),e.jsx("p",{className:"text-sm",children:"Débutants en Python, sans prérequis en ML"})]}),e.jsxs("div",{className:"bg-white p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-green-800 mb-1",children:"🛠️ Outils"}),e.jsx("p",{className:"text-sm",children:"Pandas pour l'exploration, Scikit-Learn pour la modélisation"})]}),e.jsxs("div",{className:"bg-white p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-purple-800 mb-1",children:"📚 Pédagogie"}),e.jsx("p",{className:"text-sm",children:"Approche pratique avec exercices intégrés"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-white p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-orange-800 mb-1",children:"💻 Environnement"}),e.jsx("p",{className:"text-sm",children:"Notebooks Jupyter exécutés directement"})]}),e.jsxs("div",{className:"bg-white p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-red-800 mb-1",children:"⚡ Installation"}),e.jsx("p",{className:"text-sm",children:"Aucune installation requise"})]}),e.jsxs("div",{className:"bg-white p-3 rounded-lg",children:[e.jsx("h5",{className:"font-semibold text-teal-800 mb-1",children:"🎮 Interactivité"}),e.jsx("p",{className:"text-sm",children:"Schémas et exercices interactifs"})]})]})]})]})]})]})]})},ge=()=>{const s=[{title:"Apprentissage Supervisé",description:"Maîtrisez la classification et la régression avec des algorithmes comme Random Forest, SVM et les réseaux de neurones. Cours complet avec exemples pratiques et exercices interactifs.",href:"/machine-learning/supervised",icon:e.jsx(K,{className:"h-8 w-8"}),color:"bg-blue-500",duration:"4-6 heures",level:"Intermédiaire",modules:"8 modules",highlights:["Classification binaire et multi-classe","Algorithmes de régression avancés","Évaluation et optimisation des modèles","Projets pratiques complets"]},{title:"Apprentissage Non Supervisé",description:"Découvrez le clustering, la réduction de dimensionnalité et la détection d'anomalies. Explorez K-means, PCA, t-SNE et leurs applications concrètes.",href:"/machine-learning/unsupervised",icon:e.jsx(H,{className:"h-8 w-8"}),color:"bg-purple-500",duration:"3-4 heures",level:"Intermédiaire",modules:"6 modules",highlights:["Algorithmes de clustering avancés","Techniques de réduction de dimensionnalité","Détection d'anomalies et d'outliers","Visualisation de données complexes"]},{title:"Apprentissage par Renforcement",description:"Plongez dans l'IA qui apprend par l'interaction : Q-learning, Deep Q-Networks, et applications en robotique et jeux. Le futur de l'intelligence artificielle.",href:"/machine-learning/reinforcement",icon:e.jsx(C,{className:"h-8 w-8"}),color:"bg-orange-500",duration:"5-7 heures",level:"Avancé",modules:"10 modules",highlights:["Processus de décision markoviens","Algorithmes Q-learning et SARSA","Deep Reinforcement Learning","Applications en robotique et jeux"]}];return e.jsxs("section",{id:"advanced-courses",className:"space-y-8",children:[e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("h2",{className:"text-3xl font-bold",children:"Cours Approfondis"}),e.jsx("p",{className:"text-lg text-muted-foreground max-w-3xl mx-auto",children:"Explorez en détail les trois piliers du Machine Learning avec nos cours interactifs complets, conçus pour vous transformer en expert de l'apprentissage automatique."})]}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:s.map((a,b)=>e.jsxs(t,{className:"group hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden",children:[e.jsx("div",{className:`absolute top-0 left-0 right-0 h-1 ${a.color}`}),e.jsxs(n,{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:`p-3 rounded-xl ${a.color} text-white`,children:a.icon}),e.jsx(d,{variant:"outline",className:"text-xs",children:a.level})]}),e.jsxs("div",{children:[e.jsx(l,{className:"text-xl group-hover:text-primary transition-colors",children:a.title}),e.jsx(f,{className:"text-sm mt-2 line-clamp-3",children:a.description})]})]}),e.jsxs(o,{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(se,{className:"h-4 w-4"}),e.jsx("span",{children:a.duration})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(D,{className:"h-4 w-4"}),e.jsx("span",{children:a.modules})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-semibold text-sm",children:"Ce que vous apprendrez :"}),e.jsx("ul",{className:"space-y-1",children:a.highlights.slice(0,3).map((N,c)=>e.jsxs("li",{className:"text-xs text-muted-foreground flex items-start gap-2",children:[e.jsx("span",{className:"text-primary mt-1",children:"•"}),e.jsx("span",{children:N})]},c))})]}),e.jsx($,{asChild:!0,className:"w-full group-hover:scale-105 transition-transform",children:e.jsxs(W,{to:a.href,className:"flex items-center justify-center gap-2",children:["Commencer le cours",e.jsx(j,{className:"h-4 w-4 group-hover:translate-x-1 transition-transform"})]})})]})]},b))}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border text-center space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold",children:"Prêt à devenir un expert ?"}),e.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Nos cours approfondis combinent théorie rigoureuse et pratique intensive. Chaque cours inclut des exercices interactifs, des projets concrets et une communauté d'apprentissage."}),e.jsxs("div",{className:"flex items-center justify-center gap-4 text-sm text-muted-foreground",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(G,{className:"h-4 w-4"}),e.jsx("span",{children:"Communauté active"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(D,{className:"h-4 w-4"}),e.jsx("span",{children:"Contenu mis à jour"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(C,{className:"h-4 w-4"}),e.jsx("span",{children:"Projets pratiques"})]})]})]})]})},fe=()=>e.jsxs("section",{id:"supervised",className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Apprentissage Supervisé"}),e.jsxs("p",{className:"text-lg mb-6",children:["L'",e.jsx(r,{definition:i["apprentissage-supervise"],children:"apprentissage supervisé"})," est une approche où l'algorithme apprend à partir de données étiquetées. L'objectif est de prédire des valeurs pour de nouvelles données non étiquetées."]}),e.jsxs(V,{defaultValue:"classification",className:"w-full mb-8",children:[e.jsxs(B,{className:"grid w-full grid-cols-1 md:grid-cols-2 mb-6",children:[e.jsx(_,{value:"classification",children:"Classification"}),e.jsx(_,{value:"regression",children:"Régression"})]}),e.jsx(g,{value:"classification",className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:e.jsx(r,{definition:i.classification,children:"Classification"})}),e.jsx("p",{className:"mb-4",children:"La classification consiste à prédire une catégorie ou une classe pour une instance de données. La sortie est discrète (ex: spam/non-spam, malade/sain)."}),e.jsx("h4",{className:"font-medium mt-4 mb-2",children:"Algorithmes populaires :"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1",children:[e.jsx("li",{children:"Régression logistique"}),e.jsx("li",{children:"Arbres de décision"}),e.jsx("li",{children:"Forêts aléatoires"}),e.jsx("li",{children:"Machines à vecteurs de support (SVM)"}),e.jsx("li",{children:"k-plus proches voisins (k-NN)"}),e.jsx("li",{children:"Réseaux de neurones"})]})]}),e.jsxs(t,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"Exemple de code : Classification"}),e.jsx(f,{children:"Utilisation de Scikit-learn pour un classifieur"})]}),e.jsx(o,{children:e.jsx("pre",{className:"bg-slate-950 text-slate-50 p-4 rounded-md overflow-x-auto text-sm",children:e.jsx("code",{children:`from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Diviser les données
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42
)

# Créer et entraîner le modèle
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Prédictions
y_pred = model.predict(X_test)

# Évaluation
accuracy = accuracy_score(y_test, y_pred)
print(f"Précision: {accuracy:.2f}")`})})})]})]})}),e.jsx(g,{value:"regression",className:"space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:e.jsx(r,{definition:i.regression,children:"Régression"})}),e.jsx("p",{className:"mb-4",children:"La régression consiste à prédire une valeur numérique continue, comme un prix, une température ou un pourcentage."}),e.jsx("h4",{className:"font-medium mt-4 mb-2",children:"Algorithmes populaires :"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1",children:[e.jsx("li",{children:"Régression linéaire"}),e.jsx("li",{children:"Régression polynomiale"}),e.jsx("li",{children:"Régression par arbres de décision"}),e.jsx("li",{children:"Forêts aléatoires pour la régression"}),e.jsx("li",{children:"Réseaux de neurones"}),e.jsx("li",{children:"Gradient Boosting (XGBoost, LightGBM)"})]})]}),e.jsxs(t,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"Exemple de code : Régression"}),e.jsx(f,{children:"Utilisation de Scikit-learn pour un modèle de régression"})]}),e.jsx(o,{children:e.jsx("pre",{className:"bg-slate-950 text-slate-50 p-4 rounded-md overflow-x-auto text-sm",children:e.jsx("code",{children:`from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import numpy as np

# Diviser les données
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.25, random_state=42
)

# Créer et entraîner le modèle
model = LinearRegression()
model.fit(X_train, y_train)

# Prédictions
y_pred = model.predict(X_test)

# Évaluation
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
print(f"RMSE: {rmse:.2f}")`})})})]})]})})]}),e.jsxs("div",{className:"mt-10 mb-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-6",children:"Techniques de division des données"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs(t,{children:[e.jsx(n,{children:e.jsx(l,{children:"Train-Test Split"})}),e.jsxs(o,{children:[e.jsx("p",{className:"text-sm",children:"Division simple des données en ensemble d'entraînement (généralement 70-80%) et ensemble de test (20-30%)."}),e.jsxs("div",{className:"mt-4 flex items-center gap-2",children:[e.jsx("div",{className:"bg-blue-500 h-4 w-8/12 rounded-sm"}),e.jsx("div",{className:"bg-green-500 h-4 w-4/12 rounded-sm"})]}),e.jsxs("div",{className:"flex justify-between text-xs mt-1",children:[e.jsx("span",{children:"Entraînement"}),e.jsx("span",{children:"Test"})]})]})]}),e.jsxs(t,{children:[e.jsx(n,{children:e.jsx(l,{children:"Validation croisée"})}),e.jsxs(o,{children:[e.jsx("p",{className:"text-sm",children:"Division des données en k sous-ensembles (folds), avec entraînement sur k-1 folds et test sur le fold restant, en alternant."}),e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"bg-green-500 h-3 w-2/12 rounded-sm"}),e.jsx("div",{className:"bg-blue-500 h-3 w-10/12 rounded-sm"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"bg-blue-500 h-3 w-2/12 rounded-sm"}),e.jsx("div",{className:"bg-green-500 h-3 w-2/12 rounded-sm"}),e.jsx("div",{className:"bg-blue-500 h-3 w-8/12 rounded-sm"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"bg-blue-500 h-3 w-4/12 rounded-sm"}),e.jsx("div",{className:"bg-green-500 h-3 w-2/12 rounded-sm"}),e.jsx("div",{className:"bg-blue-500 h-3 w-6/12 rounded-sm"})]})]})]})]}),e.jsxs(t,{children:[e.jsx(n,{children:e.jsx(l,{children:"Train-Val-Test"})}),e.jsxs(o,{children:[e.jsx("p",{className:"text-sm",children:"Division en trois ensembles: entraînement, validation pour le réglage des hyperparamètres, et test pour l'évaluation finale."}),e.jsxs("div",{className:"mt-4 flex items-center gap-2",children:[e.jsx("div",{className:"bg-blue-500 h-4 w-6/12 rounded-sm"}),e.jsx("div",{className:"bg-purple-500 h-4 w-2/12 rounded-sm"}),e.jsx("div",{className:"bg-green-500 h-4 w-4/12 rounded-sm"})]}),e.jsxs("div",{className:"flex justify-between text-xs mt-1",children:[e.jsx("span",{children:"Train"}),e.jsx("span",{children:"Val"}),e.jsx("span",{children:"Test"})]})]})]})]})]})]}),be=()=>e.jsxs("section",{id:"unsupervised",className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Apprentissage Non Supervisé"}),e.jsxs("p",{className:"text-lg mb-6",children:["L'",e.jsx(r,{definition:i["apprentissage-non-supervise"],children:"apprentissage non supervisé"})," traite des données non étiquetées pour découvrir des structures cachées, des patterns et des relations sans guidance externe."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-10",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:e.jsx(r,{definition:i.clustering,children:"Clustering"})}),e.jsx("p",{className:"mb-4",children:"Le clustering regroupe des instances similaires en clusters, où les objets au sein d'un même groupe sont plus similaires entre eux qu'avec ceux des autres groupes."}),e.jsx("h4",{className:"font-medium mt-4 mb-2",children:"Algorithmes populaires :"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1",children:[e.jsx("li",{children:e.jsx(r,{definition:i["k-means"],children:"K-means"})}),e.jsx("li",{children:e.jsx(r,{definition:i.dbscan,children:"DBSCAN"})}),e.jsx("li",{children:"Hierarchical Clustering"}),e.jsx("li",{children:"Mean Shift"}),e.jsx("li",{children:"Expectation-Maximization (EM)"})]}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-4",children:e.jsx(r,{definition:i["reduction-dimensionnalite"],children:"Réduction de dimensionnalité"})}),e.jsx("p",{className:"mb-4",children:"Ces techniques réduisent le nombre de variables aléatoires à considérer, en trouvant un ensemble de variables principales qui préservent la plupart des informations."}),e.jsx("h4",{className:"font-medium mt-4 mb-2",children:"Algorithmes populaires :"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-1",children:[e.jsx("li",{children:e.jsx(r,{definition:i.pca,children:"Analyse en Composantes Principales (PCA)"})}),e.jsx("li",{children:e.jsx(r,{definition:i["t-sne"],children:"t-SNE"})}),e.jsx("li",{children:"UMAP"}),e.jsx("li",{children:"Autoencodeurs"})]})]}),e.jsxs(t,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"Exemple de code : K-means Clustering"}),e.jsx(f,{children:"Implémentation avec Scikit-learn"})]}),e.jsx(o,{children:e.jsx("pre",{className:"bg-slate-950 text-slate-50 p-4 rounded-md overflow-x-auto text-sm",children:e.jsx("code",{children:`from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# Standardisation des données
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Déterminer le nombre optimal de clusters
inertia = []
for k in range(1, 11):
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(X_scaled)
    inertia.append(kmeans.inertia_)

# Méthode du coude pour choisir k
plt.figure(figsize=(8, 4))
plt.plot(range(1, 11), inertia, marker='o')
plt.xlabel('Nombre de clusters')
plt.ylabel('Inertie')
plt.title('Méthode du coude')
plt.show()

# Application du K-means avec k optimal
kmeans = KMeans(n_clusters=3, random_state=42)
clusters = kmeans.fit_predict(X_scaled)

# Visualisation des clusters
plt.figure(figsize=(10, 6))
plt.scatter(X[:, 0], X[:, 1], c=clusters, cmap='viridis')
plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], 
            s=300, c='red', marker='X')
plt.title('K-means Clustering')
plt.show()`})})})]})]}),e.jsxs(t,{className:"mb-10",children:[e.jsxs(n,{children:[e.jsx(l,{children:"Applications de l'apprentissage non supervisé"}),e.jsx(f,{children:"Cas d'utilisation courants en data science"})]}),e.jsx(o,{children:e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"border p-4 rounded-md",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Segmentation client"}),e.jsx("p",{className:"text-sm",children:"Regroupement des clients en fonction de leur comportement d'achat, préférences, et démographie."})]}),e.jsxs("div",{className:"border p-4 rounded-md",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Détection d'anomalies"}),e.jsx("p",{className:"text-sm",children:"Identification des transactions frauduleuses, pannes d'équipement, ou comportements inhabituels."})]}),e.jsxs("div",{className:"border p-4 rounded-md",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Systèmes de recommandation"}),e.jsx("p",{className:"text-sm",children:"Recommandation de produits, films, ou contenus basée sur des patterns de similarité."})]}),e.jsxs("div",{className:"border p-4 rounded-md",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Compression d'image"}),e.jsx("p",{className:"text-sm",children:"Réduction de la dimensionnalité des images tout en préservant l'information principale."})]}),e.jsxs("div",{className:"border p-4 rounded-md",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Analyse de marché"}),e.jsx("p",{className:"text-sm",children:"Découverte de segments de marché et positionnement des produits."})]}),e.jsxs("div",{className:"border p-4 rounded-md",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Visualisation de données complexes"}),e.jsx("p",{className:"text-sm",children:"Projection de données de haute dimension en 2D ou 3D pour faciliter l'interprétation."})]})]})})]})]}),z=[{name:"True Positive",value:120},{name:"False Positive",value:15},{name:"False Negative",value:20},{name:"True Negative",value:140}],U=["#0088FE","#FF8042","#FFBB28","#00C49F"],ve=[{samples:10,trainingError:.8,validationError:.9},{samples:50,trainingError:.6,validationError:.7},{samples:100,trainingError:.4,validationError:.5},{samples:200,trainingError:.25,validationError:.4},{samples:500,trainingError:.15,validationError:.35},{samples:1e3,trainingError:.1,validationError:.3}],je=()=>e.jsxs("section",{id:"evaluation",className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Évaluation des Modèles"}),e.jsxs("p",{className:"text-lg mb-8",children:["L'",e.jsx(r,{definition:i["evaluation-modele"],children:"évaluation"})," permet de mesurer les performances d'un modèle de machine learning et de comparer différentes approches pour sélectionner la plus appropriée."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-10",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Métriques pour la classification"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:"Précision (Accuracy)"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Proportion de prédictions correctes parmi toutes les prédictions"}),e.jsx("p",{className:"text-sm font-mono mt-1",children:"Accuracy = (TP + TN) / (TP + TN + FP + FN)"})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:e.jsx(r,{definition:i.precision,children:"Précision (Precision)"})}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Proportion des positifs identifiés qui sont réellement positifs"}),e.jsx("p",{className:"text-sm font-mono mt-1",children:"Precision = TP / (TP + FP)"})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:e.jsx(r,{definition:i.rappel,children:"Rappel (Recall)"})}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Proportion des positifs réels qui ont été correctement identifiés"}),e.jsx("p",{className:"text-sm font-mono mt-1",children:"Recall = TP / (TP + FN)"})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:e.jsx(r,{definition:i["f1-score"],children:"F1-Score"})}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Moyenne harmonique de la précision et du rappel"}),e.jsx("p",{className:"text-sm font-mono mt-1",children:"F1 = 2 * (Precision * Recall) / (Precision + Recall)"})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:e.jsx(r,{definition:i["auc-roc"],children:"AUC-ROC"})}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Aire sous la courbe ROC, mesure la capacité du modèle à distinguer les classes"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Métriques pour la régression"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:e.jsx(r,{definition:i.mse,children:"MSE (Mean Squared Error)"})}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Moyenne des carrés des erreurs"}),e.jsx("p",{className:"text-sm font-mono mt-1",children:"MSE = (1/n) * Σ(y_i - ŷ_i)²"})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:e.jsx(r,{definition:i.rmse,children:"RMSE (Root Mean Squared Error)"})}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Racine carrée de MSE"}),e.jsx("p",{className:"text-sm font-mono mt-1",children:"RMSE = √MSE"})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:"MAE (Mean Absolute Error)"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Moyenne des valeurs absolues des erreurs"}),e.jsx("p",{className:"text-sm font-mono mt-1",children:"MAE = (1/n) * Σ|y_i - ŷ_i|"})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:e.jsx(r,{definition:i["r-carre"],children:"R² (Coefficient de détermination)"})}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Proportion de la variance expliquée par le modèle"}),e.jsx("p",{className:"text-sm font-mono mt-1",children:"R² = 1 - (Σ(y_i - ŷ_i)² / Σ(y_i - ȳ)²)"})]})]}),e.jsxs("div",{className:"mt-8 mb-4",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:e.jsx(r,{definition:i["matrice-confusion"],children:"Matrice de confusion"})}),e.jsx("p",{className:"mb-4 text-sm",children:"Tableau qui montre les prédictions correctes et incorrectes pour chaque classe."})]})]})]}),e.jsxs("div",{className:"mb-10 mt-10 p-6 bg-slate-50 dark:bg-slate-900 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-6",children:"Visualisation : Matrice de confusion"}),e.jsx("div",{className:"flex justify-center mb-8 mt-2",children:e.jsx(P,{width:"100%",height:300,children:e.jsxs(ae,{data:z,children:[e.jsx(w,{strokeDasharray:"3 3"}),e.jsx(L,{dataKey:"name"}),e.jsx(k,{}),e.jsx(F,{}),e.jsx(I,{}),e.jsxs(re,{dataKey:"value",fill:"#8884d8",children:["// Vérifier et garder seulement les imports utilisés de recharts",z.map((s,a)=>e.jsx(ie,{fill:U[a%U.length]},`cell-${a}`))]})]})})})]}),e.jsxs("div",{className:"mb-10 p-6 bg-slate-50 dark:bg-slate-900 rounded-xl",children:[e.jsx("h3",{className:"text-xl font-semibold mb-6",children:"Courbe d'apprentissage"}),e.jsx("p",{className:"mb-4",children:"Les courbes d'apprentissage montrent comment l'erreur d'entraînement et de validation évoluent en fonction du nombre d'échantillons d'apprentissage."}),e.jsx("div",{className:"flex justify-center mt-6",children:e.jsx(P,{width:"100%",height:300,children:e.jsxs(te,{data:ve,children:[e.jsx(w,{strokeDasharray:"3 3"}),e.jsx(L,{dataKey:"samples",label:{value:"Nombre d'échantillons",position:"insideBottom",offset:-5}}),e.jsx(k,{label:{value:"Erreur",angle:-90,position:"insideLeft"}}),e.jsx(F,{}),e.jsx(I,{}),e.jsx(O,{type:"monotone",dataKey:"trainingError",name:"Erreur d'entraînement",stroke:"#8884d8",activeDot:{r:8}}),e.jsx(O,{type:"monotone",dataKey:"validationError",name:"Erreur de validation",stroke:"#82ca9d"})]})})}),e.jsxs("div",{className:"mt-4 text-sm",children:[e.jsx("p",{className:"font-medium",children:"Interprétation :"}),e.jsxs("ul",{className:"list-disc pl-6 mt-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:e.jsx(r,{definition:i.underfitting,highlightStyle:"dotted",children:"High Bias (sous-apprentissage)"})})," : Erreurs d'entraînement et de validation élevées"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:e.jsx(r,{definition:i.overfitting,highlightStyle:"dotted",children:"High Variance (sur-apprentissage)"})})," : Erreur d'entraînement faible mais erreur de validation élevée"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-medium",children:"Bon équilibre"})," : Erreurs d'entraînement et de validation proches et relativement faibles"]})]})]})]})]}),Ne=()=>e.jsxs("section",{id:"deep-learning",className:"space-y-8",children:[e.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Deep Learning"}),e.jsxs("p",{className:"text-lg mb-6",children:["Le ",e.jsx(r,{definition:i["deep-learning"],children:"Deep Learning"})," est un sous-ensemble du Machine Learning qui utilise des réseaux de neurones artificiels à plusieurs couches pour apprendre des représentations hiérarchiques des données."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-10",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Concepts fondamentaux"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Réseaux de neurones"}),e.jsx("p",{className:"text-sm",children:"Systèmes inspirés du cerveau humain, composés de neurones artificiels organisés en couches qui transforment les données d'entrée en sorties prédictives."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Fonctions d'activation"}),e.jsx("p",{className:"text-sm",children:"Fonctions non linéaires (ReLU, Sigmoid, Tanh) qui déterminent si un neurone doit être activé."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Rétropropagation"}),e.jsx("p",{className:"text-sm",children:"Algorithme permettant d'ajuster les poids du réseau en propageant l'erreur de la sortie vers l'entrée."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Descente de gradient"}),e.jsx("p",{className:"text-sm",children:"Méthode d'optimisation qui ajuste itérativement les paramètres pour minimiser la fonction de coût."})]})]}),e.jsx("h3",{className:"text-xl font-semibold mt-6 mb-4",children:"Architectures de Deep Learning"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:e.jsx(r,{definition:i.cnn,children:"Réseaux de neurones convolutifs (CNN)"})}),e.jsx("p",{className:"text-sm",children:"Spécialisés pour traiter les données avec une topologie en grille comme les images."})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:e.jsx(r,{definition:i.rnn,children:"Réseaux de neurones récurrents (RNN)"})}),e.jsx("p",{className:"text-sm",children:"Adaptés aux séquences comme le texte ou les séries temporelles."})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:e.jsx(r,{definition:i.lstm,children:"Réseaux de neurones à mémoire (LSTM, GRU)"})}),e.jsx("p",{className:"text-sm",children:"Types de RNN conçus pour mémoriser les dépendances à long terme."})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:e.jsx(r,{definition:i.transformers,children:"Transformers"})}),e.jsx("p",{className:"text-sm",children:"Architecture basée sur le mécanisme d'attention, excellant dans les tâches de NLP."})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:"Autoencodeurs"}),e.jsx("p",{className:"text-sm",children:"Réseaux non supervisés pour la réduction de dimension et la génération de données."})]})]})]}),e.jsxs("div",{children:[e.jsxs(t,{children:[e.jsxs(n,{children:[e.jsx(l,{children:"Exemple de code : Réseau de neurones simple"}),e.jsx(f,{children:"Implémentation avec TensorFlow/Keras"})]}),e.jsx(o,{children:e.jsx("pre",{className:"bg-slate-950 text-slate-50 p-4 rounded-md overflow-x-auto text-sm",children:e.jsx("code",{children:`import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.optimizers import Adam
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Prétraitement des données
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y, test_size=0.2, random_state=42
)

# Construction du modèle
model = Sequential([
    Dense(128, activation='relu', input_shape=(X_train.shape[1],)),
    Dropout(0.2),
    Dense(64, activation='relu'),
    Dropout(0.2),
    Dense(32, activation='relu'),
    Dense(1, activation='sigmoid')  # pour classification binaire
])

# Compilation du modèle
model.compile(
    optimizer=Adam(learning_rate=0.001),
    loss='binary_crossentropy',
    metrics=['accuracy']
)

# Entraînement
history = model.fit(
    X_train, y_train,
    epochs=20,
    batch_size=32,
    validation_split=0.2,
    verbose=1
)

# Évaluation
loss, accuracy = model.evaluate(X_test, y_test)
print(f"Précision du test: {accuracy:.4f}")

# Prédictions
y_pred = model.predict(X_test)
y_pred_classes = (y_pred > 0.5).astype(int)`})})})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("h3",{className:"text-xl font-semibold mb-4",children:"Applications du Deep Learning"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:"Vision par ordinateur"}),e.jsx("p",{className:"text-sm",children:"Reconnaissance d'images, détection d'objets, segmentation, etc."})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:"Traitement du langage naturel"}),e.jsx("p",{className:"text-sm",children:"Traduction, analyse de sentiment, génération de texte, etc."})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:"Synthèse vocale et reconnaissance"}),e.jsx("p",{className:"text-sm",children:"Text-to-speech, speech-to-text, identification de locuteurs."})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:"Systèmes de recommandation"}),e.jsx("p",{className:"text-sm",children:"Recommandations personnalisées basées sur les comportements."})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:"Génération d'images"}),e.jsx("p",{className:"text-sm",children:"GANs, diffusion, text-to-image comme DALL-E et Stable Diffusion."})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:"Aide à la décision médicale"}),e.jsx("p",{className:"text-sm",children:"Diagnostic basé sur les images médicales, prédiction de maladies."})]})]})]})]})]}),e.jsxs(t,{children:[e.jsx(n,{children:e.jsx(l,{children:"Défis et considérations du Deep Learning"})}),e.jsx(o,{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:"Besoins en données"}),e.jsx("p",{className:"text-sm",children:"Les modèles de Deep Learning nécessitent généralement de grandes quantités de données pour bien performer."})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:"Puissance de calcul"}),e.jsx("p",{className:"text-sm",children:"L'entraînement de modèles complexes nécessite des GPUs ou TPUs puissants et peut être coûteux."})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:"Interprétabilité"}),e.jsx("p",{className:"text-sm",children:'Les modèles de Deep Learning sont souvent des "boîtes noires" difficiles à interpréter.'})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:"Hyperparamètres"}),e.jsx("p",{className:"text-sm",children:"Le réglage des hyperparamètres peut être complexe et nécessite souvent de l'expérience."})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:e.jsx(r,{definition:i.overfitting,children:"Surapprentissage"})}),e.jsx("p",{className:"text-sm",children:"Les modèles profonds peuvent facilement mémoriser les données d'entraînement sans généraliser."})]}),e.jsxs("div",{className:"border p-3 rounded-md",children:[e.jsx("p",{className:"font-medium",children:"Éthique et biais"}),e.jsx("p",{className:"text-sm",children:"Les modèles peuvent perpétuer ou amplifier les biais présents dans les données d'entraînement."})]})]})})]})]}),ye=()=>{const[s,a]=T.useState(0),[b,N]=T.useState(null),c=[{title:"Classification avec Scikit-learn",description:"Exemple complet de classification d'iris avec analyse détaillée",difficulty:"Débutant",estimatedTime:"20 min",code:`# Classification des fleurs d'Iris - Exemple complet et commenté
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.preprocessing import StandardScaler

# 1. 📊 CHARGEMENT ET EXPLORATION DES DONNÉES
print("🌸 Analyse du dataset Iris")
print("=" * 50)

iris = load_iris()
X, y = iris.data, iris.target

# Création d'un DataFrame pour faciliter l'analyse
df = pd.DataFrame(X, columns=iris.feature_names)
df['target'] = y
df['species'] = df['target'].map({0: 'setosa', 1: 'versicolor', 2: 'virginica'})

print(f"📈 Forme du dataset: {df.shape}")
print(f"🎯 Classes: {iris.target_names}")
print(f"📊 Répartition des classes:")
print(df['species'].value_counts())

# Statistiques descriptives
print("\\n📊 Statistiques descriptives:")
print(df.describe())

# 2. 🎨 VISUALISATION EXPLORATOIRE
plt.figure(figsize=(15, 10))

# Distribution des features
plt.subplot(2, 3, 1)
df[iris.feature_names].boxplot()
plt.title('📊 Distribution des caractéristiques')
plt.xticks(rotation=45)

# Matrice de corrélation
plt.subplot(2, 3, 2)
correlation_matrix = df[iris.feature_names].corr()
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', center=0)
plt.title('🔗 Matrice de corrélation')

# Pairplot pour visualiser les relations
plt.subplot(2, 3, 3)
# Note: en pratique, utilisez sns.pairplot(df, hue='species')
plt.scatter(df['sepal length (cm)'], df['petal length (cm)'], c=df['target'], cmap='viridis')
plt.xlabel('Longueur sépale (cm)')
plt.ylabel('Longueur pétale (cm)')
plt.title('🌺 Relation longueur sépale vs pétale')

plt.tight_layout()
plt.show()

# 3. ⚙️ PRÉPARATION DES DONNÉES
print("\\n⚙️ Préparation des données")
print("=" * 30)

# Division stratifiée pour garder la proportion des classes
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

print(f"📈 Taille entraînement: {X_train.shape[0]} échantillons")
print(f"📊 Taille test: {X_test.shape[0]} échantillons")

# Standardisation des données (importante pour SVM et Logistic Regression)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 4. 🤖 COMPARAISON DE PLUSIEURS MODÈLES
print("\\n🤖 Comparaison des modèles")
print("=" * 35)

models = {
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
    'Logistic Regression': LogisticRegression(random_state=42, max_iter=1000),
    'SVM': SVC(random_state=42)
}

results = {}

for name, model in models.items():
    print(f"\\n🔧 Entraînement {name}...")
    
    # Utiliser les données standardisées pour Logistic Regression et SVM
    if name in ['Logistic Regression', 'SVM']:
        model.fit(X_train_scaled, y_train)
        y_pred = model.predict(X_test_scaled)
        # Validation croisée
        cv_scores = cross_val_score(model, X_train_scaled, y_train, cv=5)
    else:
        model.fit(X_train, y_train)
        y_pred = model.predict(X_test)
        cv_scores = cross_val_score(model, X_train, y_train, cv=5)
    
    # Métriques
    accuracy = accuracy_score(y_test, y_pred)
    
    results[name] = {
        'model': model,
        'accuracy': accuracy,
        'cv_mean': cv_scores.mean(),
        'cv_std': cv_scores.std(),
        'predictions': y_pred
    }
    
    print(f"✅ Précision test: {accuracy:.3f}")
    print(f"📊 CV Score: {cv_scores.mean():.3f} (+/- {cv_scores.std() * 2:.3f})")

# 5. 🏆 SÉLECTION DU MEILLEUR MODÈLE
best_model_name = max(results.keys(), key=lambda x: results[x]['accuracy'])
best_model = results[best_model_name]['model']

print(f"\\n🏆 Meilleur modèle: {best_model_name}")
print(f"🎯 Précision: {results[best_model_name]['accuracy']:.3f}")

# 6. 📊 ANALYSE DÉTAILLÉE DU MEILLEUR MODÈLE
print(f"\\n📊 Analyse détaillée - {best_model_name}")
print("=" * 45)

# Rapport de classification détaillé
y_pred_best = results[best_model_name]['predictions']
print("\\n📋 Rapport de classification:")
print(classification_report(y_test, y_pred_best, target_names=iris.target_names))

# Matrice de confusion
cm = confusion_matrix(y_test, y_pred_best)
print("\\n🎯 Matrice de confusion:")
print(cm)

# Visualisation de la matrice de confusion
plt.figure(figsize=(8, 6))
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', 
            xticklabels=iris.target_names, 
            yticklabels=iris.target_names)
plt.title(f'Matrice de confusion - {best_model_name}')
plt.ylabel('Vraie classe')
plt.xlabel('Classe prédite')
plt.show()

# 7. 🔮 PRÉDICTIONS SUR DE NOUVEAUX EXEMPLES
print("\\n🔮 Test sur de nouveaux exemples")
print("=" * 40)

# Exemples de nouvelles fleurs (features: sepal_length, sepal_width, petal_length, petal_width)
nouvelles_fleurs = [
    [5.1, 3.5, 1.4, 0.2],  # Ressemble à setosa
    [6.2, 2.9, 4.3, 1.3],  # Ressemble à versicolor  
    [7.3, 2.9, 6.3, 1.8]   # Ressemble à virginica
]

for i, fleur in enumerate(nouvelles_fleurs):
    if best_model_name in ['Logistic Regression', 'SVM']:
        fleur_scaled = scaler.transform([fleur])
        prediction = best_model.predict(fleur_scaled)[0]
        probabilities = best_model.predict_proba(fleur_scaled)[0] if hasattr(best_model, 'predict_proba') else None
    else:
        prediction = best_model.predict([fleur])[0]
        probabilities = best_model.predict_proba([fleur])[0]
    
    espece_predite = iris.target_names[prediction]
    
    print(f"\\n🌸 Fleur {i+1}: {fleur}")
    print(f"🎯 Prédiction: {espece_predite}")
    
    if probabilities is not None:
        print("📊 Probabilités:")
        for j, (espece, prob) in enumerate(zip(iris.target_names, probabilities)):
            print(f"   {espece}: {prob:.3f} ({prob*100:.1f}%)")

# 8. 💡 IMPORTANCE DES FEATURES (si Random Forest est le meilleur)
if best_model_name == 'Random Forest':
    print("\\n💡 Importance des caractéristiques")
    print("=" * 40)
    
    feature_importance = pd.DataFrame({
        'feature': iris.feature_names,
        'importance': best_model.feature_importances_
    }).sort_values('importance', ascending=False)
    
    print(feature_importance)
    
    # Visualisation
    plt.figure(figsize=(10, 6))
    plt.barh(feature_importance['feature'], feature_importance['importance'])
    plt.title('🎯 Importance des caractéristiques')
    plt.xlabel('Importance')
    plt.tight_layout()
    plt.show()

print("\\n✅ Analyse terminée ! Votre modèle est prêt à classifier de nouvelles fleurs 🌸")`,language:"python",outputs:["Précision finale: 96.7%","Meilleur modèle: Random Forest","Features importantes: petal length > petal width > sepal length"]},{title:"Régression avec visualisation avancée",description:"Prédiction de prix immobiliers avec analyse complète et visualisations",difficulty:"Intermédiaire",estimatedTime:"35 min",code:`# Régression pour prédire les prix immobiliers - Analyse complète
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler, PolynomialFeatures
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
from sklearn.pipeline import Pipeline
import warnings
warnings.filterwarnings('ignore')

# Configuration pour de beaux graphiques
plt.style.use('seaborn-v0_8')
sns.set_palette("husl")

print("🏠 PRÉDICTION DE PRIX IMMOBILIERS")
print("=" * 50)

# 1. 🎲 GÉNÉRATION DE DONNÉES RÉALISTES
print("\\n📊 Génération du dataset...")
np.random.seed(42)
n_samples = 2000

# Variables explicatives avec corrélations réalistes
surface = np.random.normal(120, 40, n_samples)
surface = np.clip(surface, 30, 300)  # Limiter les valeurs aberrantes

chambres = np.random.poisson(3, n_samples)
chambres = np.clip(chambres, 1, 8)

# Âge avec distribution plus réaliste
age = np.random.exponential(15, n_samples)
age = np.clip(age, 0, 100)

# Localisation (score de 1 à 10)
localisation = np.random.choice([1,2,3,4,5,6,7,8,9,10], n_samples, 
                               p=[0.05,0.08,0.12,0.15,0.2,0.15,0.12,0.08,0.03,0.02])

# Étage (0 = RDC, puis étages)
etage = np.random.choice(range(0, 20), n_samples, 
                        p=[0.3] + [0.7/19]*19)

# Garage (binaire)
garage = np.random.choice([0, 1], n_samples, p=[0.4, 0.6])

# Formule réaliste pour le prix avec interactions
prix_base = (
    surface * 2500 +                    # 2500€/m²
    chambres * 12000 +                  # Bonus par chambre
    localisation * 8000 +               # Impact localisation
    garage * 15000 +                    # Bonus garage
    (etage > 0) * 5000 +               # Bonus étage
    -age * 800                          # Dépréciation
)

# Ajout d'interactions et de non-linéarités
prix_interactions = (
    surface * localisation * 30 +       # Interaction surface-localisation
    (surface > 150) * 20000 +           # Bonus grandes surfaces
    (age > 50) * -15000 +               # Malus vieilles constructions
    np.random.normal(0, 25000, n_samples)  # Bruit réaliste
)

prix = prix_base + prix_interactions
prix = np.clip(prix, 50000, 800000)  # Prix réalistes

# Création du DataFrame
df = pd.DataFrame({
    'surface': surface,
    'chambres': chambres,
    'age': age,
    'localisation': localisation,
    'etage': etage,
    'garage': garage,
    'prix': prix
})

print(f"✅ Dataset créé: {df.shape[0]} biens immobiliers")
print(f"💰 Prix moyen: {df['prix'].mean():,.0f}€")
print(f"📊 Prix médian: {df['prix'].median():,.0f}€")

# 2. 🔍 ANALYSE EXPLORATOIRE APPROFONDIE
print("\\n🔍 Analyse exploratoire des données")
print("=" * 40)

# Statistiques descriptives
print("📊 Statistiques descriptives:")
print(df.describe().round(2))

# Vérification des valeurs manquantes
print(f"\\n❌ Valeurs manquantes: {df.isnull().sum().sum()}")

# Création de nouvelles features
df['prix_par_m2'] = df['prix'] / df['surface']
df['surface_par_chambre'] = df['surface'] / df['chambres']

# Visualisations complètes
fig, axes = plt.subplots(3, 3, figsize=(20, 18))
fig.suptitle('🏠 Analyse Exploratoire Complète du Marché Immobilier', fontsize=16, fontweight='bold')

# Distribution des prix
axes[0,0].hist(df['prix'], bins=50, alpha=0.7, color='skyblue', edgecolor='black')
axes[0,0].set_title('📊 Distribution des Prix')
axes[0,0].set_xlabel('Prix (€)')
axes[0,0].set_ylabel('Fréquence')

# Prix vs Surface avec régression
axes[0,1].scatter(df['surface'], df['prix'], alpha=0.6, color='coral')
z = np.polyfit(df['surface'], df['prix'], 1)
p = np.poly1d(z)
axes[0,1].plot(df['surface'], p(df['surface']), "r--", alpha=0.8, linewidth=2)
axes[0,1].set_title('🏠 Prix vs Surface')
axes[0,1].set_xlabel('Surface (m²)')
axes[0,1].set_ylabel('Prix (€)')

# Prix par nombre de chambres
df.boxplot(column='prix', by='chambres', ax=axes[0,2])
axes[0,2].set_title('💰 Prix par Nombre de Chambres')
axes[0,2].set_xlabel('Nombre de chambres')

# Impact de l'âge
axes[1,0].scatter(df['age'], df['prix'], alpha=0.6, color='green')
axes[1,0].set_title('📅 Impact de l\\'Âge sur le Prix')
axes[1,0].set_xlabel('Âge (années)')
axes[1,0].set_ylabel('Prix (€)')

# Impact localisation
prix_par_localisation = df.groupby('localisation')['prix'].mean()
axes[1,1].bar(prix_par_localisation.index, prix_par_localisation.values, color='purple', alpha=0.7)
axes[1,1].set_title('🌍 Prix Moyen par Score de Localisation')
axes[1,1].set_xlabel('Score Localisation')
axes[1,1].set_ylabel('Prix Moyen (€)')

# Matrice de corrélation
correlation_matrix = df.corr()
im = axes[1,2].imshow(correlation_matrix, cmap='coolwarm', aspect='auto')
axes[1,2].set_xticks(range(len(correlation_matrix.columns)))
axes[1,2].set_yticks(range(len(correlation_matrix.columns)))
axes[1,2].set_xticklabels(correlation_matrix.columns, rotation=45)
axes[1,2].set_yticklabels(correlation_matrix.columns)
axes[1,2].set_title('🔗 Matrice de Corrélation')

# Ajout des valeurs dans la matrice
for i in range(len(correlation_matrix.columns)):
    for j in range(len(correlation_matrix.columns)):
        axes[1,2].text(j, i, f'{correlation_matrix.iloc[i, j]:.2f}', 
                      ha='center', va='center', fontsize=8)

# Prix par m² selon localisation
axes[2,0].scatter(df['localisation'], df['prix_par_m2'], alpha=0.6, color='orange')
axes[2,0].set_title('💎 Prix au m² selon Localisation')
axes[2,0].set_xlabel('Score Localisation')
axes[2,0].set_ylabel('Prix/m² (€)')

# Impact garage
prix_avec_sans_garage = df.groupby('garage')['prix'].mean()
axes[2,1].bar(['Sans garage', 'Avec garage'], prix_avec_sans_garage.values, 
             color=['lightcoral', 'lightgreen'], alpha=0.8)
axes[2,1].set_title('🚗 Impact du Garage')
axes[2,1].set_ylabel('Prix Moyen (€)')

# Relation surface/chambres
axes[2,2].scatter(df['surface_par_chambre'], df['prix'], alpha=0.6, color='teal')
axes[2,2].set_title('📐 Prix vs Surface par Chambre')
axes[2,2].set_xlabel('Surface par chambre (m²)')
axes[2,2].set_ylabel('Prix (€)')

plt.tight_layout()
plt.show()

# 3. ⚙️ PRÉPARATION AVANCÉE DES DONNÉES
print("\\n⚙️ Préparation avancée des données")
print("=" * 40)

# Features et target
features_base = ['surface', 'chambres', 'age', 'localisation', 'etage', 'garage']
X = df[features_base].copy()
y = df['prix'].copy()

# Création de features polynomiales pour capturer les non-linéarités
poly_features = PolynomialFeatures(degree=2, include_bias=False, interaction_only=True)
X_poly = poly_features.fit_transform(X)

# Division train/test
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

X_train_poly, X_test_poly, _, _ = train_test_split(
    X_poly, y, test_size=0.2, random_state=42
)

print(f"📈 Features originales: {X.shape[1]}")
print(f"🔄 Features polynomiales: {X_poly.shape[1]}")
print(f"📊 Taille train: {X_train.shape[0]}")
print(f"🎯 Taille test: {X_test.shape[0]}")

# 4. 🤖 COMPARAISON DE MODÈLES AVANCÉS
print("\\n🤖 Entraînement et comparaison des modèles")
print("=" * 50)

# Définition des modèles avec pipelines
models = {
    'Linear Regression': Pipeline([
        ('scaler', StandardScaler()),
        ('regressor', LinearRegression())
    ]),
    'Ridge Regression': Pipeline([
        ('scaler', StandardScaler()),
        ('regressor', Ridge(alpha=1.0))
    ]),
    'Lasso Regression': Pipeline([
        ('scaler', StandardScaler()),
        ('regressor', Lasso(alpha=100))
    ]),
    'Random Forest': RandomForestRegressor(n_estimators=100, random_state=42),
    'Polynomial Ridge': Pipeline([
        ('scaler', StandardScaler()),
        ('regressor', Ridge(alpha=10))
    ])
}

results = {}

for name, model in models.items():
    print(f"\\n🔧 Entraînement {name}...")
    
    # Utiliser features polynomiales pour le modèle polynomial
    if name == 'Polynomial Ridge':
        model.fit(X_train_poly, y_train)
        y_pred = model.predict(X_test_poly)
        cv_scores = cross_val_score(model, X_train_poly, y_train, cv=5, scoring='r2')
    else:
        model.fit(X_train, y_train)
        y_pred = model.predict(X_test)
        cv_scores = cross_val_score(model, X_train, y_train, cv=5, scoring='r2')
    
    # Calcul des métriques
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    mae = mean_absolute_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)
    
    results[name] = {
        'model': model,
        'rmse': rmse,
        'mae': mae,
        'r2': r2,
        'cv_mean': cv_scores.mean(),
        'cv_std': cv_scores.std(),
        'predictions': y_pred
    }
    
    print(f"✅ R² Score: {r2:.3f}")
    print(f"📊 RMSE: {rmse:,.0f}€")
    print(f"📈 MAE: {mae:,.0f}€")
    print(f"🎯 CV R²: {cv_scores.mean():.3f} (+/- {cv_scores.std() * 2:.3f})")

# 5. 🏆 ANALYSE DU MEILLEUR MODÈLE
best_model_name = max(results.keys(), key=lambda x: results[x]['r2'])
best_model = results[best_model_name]['model']
best_pred = results[best_model_name]['predictions']

print(f"\\n🏆 MEILLEUR MODÈLE: {best_model_name}")
print("=" * 50)
print(f"🎯 R² Score: {results[best_model_name]['r2']:.3f}")
print(f"📊 RMSE: {results[best_model_name]['rmse']:,.0f}€")
print(f"📈 MAE: {results[best_model_name]['mae']:,.0f}€")

# 6. 📊 VISUALISATIONS AVANCÉES
print("\\n📊 Création des visualisations avancées...")

fig, axes = plt.subplots(2, 3, figsize=(20, 12))
fig.suptitle(f'📈 Analyse Complète du Modèle {best_model_name}', fontsize=16, fontweight='bold')

# Prédictions vs Réalité
axes[0,0].scatter(y_test, best_pred, alpha=0.6, color='blue')
min_val, max_val = min(y_test.min(), best_pred.min()), max(y_test.max(), best_pred.max())
axes[0,0].plot([min_val, max_val], [min_val, max_val], 'r--', linewidth=2)
axes[0,0].set_xlabel('Prix Réels (€)')
axes[0,0].set_ylabel('Prix Prédits (€)')
axes[0,0].set_title('🎯 Prédictions vs Réalité')

# Résidus
residus = y_test - best_pred
axes[0,1].scatter(best_pred, residus, alpha=0.6, color='green')
axes[0,1].axhline(y=0, color='r', linestyle='--')
axes[0,1].set_xlabel('Prix Prédits (€)')
axes[0,1].set_ylabel('Résidus (€)')
axes[0,1].set_title('📉 Analyse des Résidus')

# Distribution des résidus
axes[0,2].hist(residus, bins=30, alpha=0.7, color='orange', edgecolor='black')
axes[0,2].set_xlabel('Résidus (€)')
axes[0,2].set_ylabel('Fréquence')
axes[0,2].set_title('📊 Distribution des Résidus')

# Comparaison des modèles
model_names = list(results.keys())
r2_scores = [results[name]['r2'] for name in model_names]
rmse_scores = [results[name]['rmse'] for name in model_names]

axes[1,0].barh(model_names, r2_scores, color='lightblue', alpha=0.8)
axes[1,0].set_xlabel('R² Score')
axes[1,0].set_title('🏆 Comparaison R² des Modèles')

axes[1,1].barh(model_names, rmse_scores, color='lightcoral', alpha=0.8)
axes[1,1].set_xlabel('RMSE (€)')
axes[1,1].set_title('📊 Comparaison RMSE des Modèles')

# Erreur absolue par gamme de prix
price_ranges = pd.cut(y_test, bins=5, labels=['Très bas', 'Bas', 'Moyen', 'Haut', 'Très haut'])
error_by_range = pd.DataFrame({'range': price_ranges, 'error': np.abs(residus)}).groupby('range')['error'].mean()

axes[1,2].bar(error_by_range.index, error_by_range.values, color='purple', alpha=0.7)
axes[1,2].set_xlabel('Gamme de Prix')
axes[1,2].set_ylabel('Erreur Absolue Moyenne (€)')
axes[1,2].set_title('📈 Erreur par Gamme de Prix')
axes[1,2].tick_params(axis='x', rotation=45)

plt.tight_layout()
plt.show()

# 7. 🔮 PRÉDICTIONS SUR DE NOUVEAUX BIENS
print("\\n🔮 Test sur de nouveaux biens immobiliers")
print("=" * 50)

nouveaux_biens = [
    {'surface': 80, 'chambres': 3, 'age': 5, 'localisation': 8, 'etage': 2, 'garage': 1},
    {'surface': 120, 'chambres': 4, 'age': 15, 'localisation': 6, 'etage': 0, 'garage': 1},
    {'surface': 200, 'chambres': 6, 'age': 30, 'localisation': 9, 'etage': 5, 'garage': 0}
]

for i, bien in enumerate(nouveaux_biens):
    bien_df = pd.DataFrame([bien])
    
    if best_model_name == 'Polynomial Ridge':
        bien_poly = poly_features.transform(bien_df)
        prix_predit = best_model.predict(bien_poly)[0]
    else:
        prix_predit = best_model.predict(bien_df)[0]
    
    print(f"\\n🏠 Bien {i+1}:")
    print(f"   📐 Surface: {bien['surface']}m²")
    print(f"   🛏️  Chambres: {bien['chambres']}")
    print(f"   📅 Âge: {bien['age']} ans")
    print(f"   🌍 Localisation: {bien['localisation']}/10")
    print(f"   🏢 Étage: {bien['etage']}")
    print(f"   🚗 Garage: {'Oui' if bien['garage'] else 'Non'}")
    print(f"   💰 Prix prédit: {prix_predit:,.0f}€")
    print(f"   💎 Prix/m²: {prix_predit/bien['surface']:,.0f}€/m²")

print("\\n✅ Analyse complète terminée !")
print("🎯 Votre modèle peut maintenant estimer des prix immobiliers avec précision!")`,language:"python",outputs:["R² Score: 0.892","RMSE: 42,150€","Meilleur modèle: Random Forest"]},{title:"Clustering K-means avancé",description:"Segmentation client sophistiquée avec optimisation et analyse métier",difficulty:"Avancé",estimatedTime:"45 min",code:`# Clustering K-means avancé pour segmentation client - Analyse métier complète
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.cluster import KMeans, DBSCAN, AgglomerativeClustering
from sklearn.preprocessing import StandardScaler, RobustScaler
from sklearn.metrics import silhouette_score, calinski_harabasz_score, davies_bouldin_score
from sklearn.decomposition import PCA
from sklearn.manifold import TSNE
from scipy import stats
import warnings
warnings.filterwarnings('ignore')

# Configuration pour de beaux graphiques
plt.style.use('seaborn-v0_8')
sns.set_palette("Set2")

print("🛍️ SEGMENTATION CLIENT AVANCÉE")
print("=" * 50)

# 1. 🎲 GÉNÉRATION DE DONNÉES CLIENT RÉALISTES
print("\\n📊 Génération du dataset client...")
np.random.seed(42)
n_clients = 2000

# Définition de 4 segments clients réalistes
segments = {
    'Économes': {'size': 400, 'revenus': (25, 8), 'fidelite': (30, 12), 'freq_achat': (2, 1), 'panier_moyen': (25, 8)},
    'Moyens': {'size': 800, 'revenus': (45, 12), 'fidelite': (55, 15), 'freq_achat': (6, 2), 'panier_moyen': (65, 20)},
    'Fidèles': {'size': 600, 'revenus': (55, 15), 'fidelite': (80, 10), 'freq_achat': (12, 3), 'panier_moyen': (85, 25)},
    'VIP': {'size': 200, 'revenus': (90, 20), 'fidelite': (85, 8), 'freq_achat': (20, 5), 'panier_moyen': (150, 40)}
}

# Génération des données pour chaque segment
clients_data = []
true_labels = []

for segment_name, params in segments.items():
    size = params['size']
    
    # Revenus (en k€)
    revenus = np.random.normal(params['revenus'][0], params['revenus'][1], size)
    revenus = np.clip(revenus, 15, 150)
    
    # Score de fidélité (0-100)
    fidelite = np.random.normal(params['fidelite'][0], params['fidelite'][1], size)
    fidelite = np.clip(fidelite, 0, 100)
    
    # Fréquence d'achat mensuelle
    freq_achat = np.random.normal(params['freq_achat'][0], params['freq_achat'][1], size)
    freq_achat = np.clip(freq_achat, 0.5, 30)
    
    # Panier moyen (€)
    panier_moyen = np.random.normal(params['panier_moyen'][0], params['panier_moyen'][1], size)
    panier_moyen = np.clip(panier_moyen, 10, 300)
    
    # Ajout de corrélations réalistes
    # Plus de revenus = panier plus élevé
    panier_moyen = panier_moyen + revenus * 0.3 + np.random.normal(0, 5, size)
    panier_moyen = np.clip(panier_moyen, 10, 300)
    
    # Clients fidèles achètent plus souvent
    freq_achat = freq_achat + fidelite * 0.05 + np.random.normal(0, 1, size)
    freq_achat = np.clip(freq_achat, 0.5, 30)
    
    for i in range(size):
        clients_data.append([revenus[i], fidelite[i], freq_achat[i], panier_moyen[i]])
        true_labels.append(segment_name)

# Création du DataFrame
df = pd.DataFrame(clients_data, columns=['revenus_annuels', 'score_fidelite', 'freq_achat_mensuelle', 'panier_moyen'])
df['segment_reel'] = true_labels

# Ajout de features dérivées métier
df['ca_mensuel'] = df['freq_achat_mensuelle'] * df['panier_moyen']
df['ca_annuel'] = df['ca_mensuel'] * 12
df['ratio_fidelite_revenus'] = df['score_fidelite'] / df['revenus_annuels']

print(f"✅ Dataset créé: {len(df)} clients")
print(f"💰 CA annuel moyen: {df['ca_annuel'].mean():,.0f}€")
print(f"📊 Répartition des vrais segments:")
print(df['segment_reel'].value_counts())

# 2. 🔍 ANALYSE EXPLORATOIRE MÉTIER APPROFONDIE
print("\\n🔍 Analyse exploratoire métier")
print("=" * 35)

# Statistiques par segment réel
print("📊 Statistiques par segment réel:")
stats_by_segment = df.groupby('segment_reel').agg({
    'revenus_annuels': ['mean', 'std'],
    'score_fidelite': ['mean', 'std'],
    'freq_achat_mensuelle': ['mean', 'std'],
    'panier_moyen': ['mean', 'std'],
    'ca_annuel': ['mean', 'std']
}).round(2)

print(stats_by_segment)

# Visualisations métier complètes
fig, axes = plt.subplots(3, 4, figsize=(24, 18))
fig.suptitle('🛍️ Analyse Exploratoire Complète - Segmentation Client', fontsize=16, fontweight='bold')

# Distribution des variables principales
variables = ['revenus_annuels', 'score_fidelite', 'freq_achat_mensuelle', 'panier_moyen']
for i, var in enumerate(variables):
    axes[0, i].hist(df[var], bins=30, alpha=0.7, edgecolor='black')
    axes[0, i].set_title(f'📊 Distribution {var}')
    axes[0, i].set_xlabel(var)
    axes[0, i].set_ylabel('Fréquence')

# Box plots par segment réel
for i, var in enumerate(variables):
    df.boxplot(column=var, by='segment_reel', ax=axes[1, i])
    axes[1, i].set_title(f'📦 {var} par segment')
    axes[1, i].set_xlabel('Segment')

# Matrices de corrélation et scatter plots
correlation_matrix = df[variables + ['ca_annuel']].corr()
im = axes[2, 0].imshow(correlation_matrix, cmap='coolwarm', aspect='auto')
axes[2, 0].set_xticks(range(len(correlation_matrix.columns)))
axes[2, 0].set_yticks(range(len(correlation_matrix.columns)))
axes[2, 0].set_xticklabels(correlation_matrix.columns, rotation=45)
axes[2, 0].set_yticklabels(correlation_matrix.columns)
axes[2, 0].set_title('🔗 Matrice de Corrélation')

# Scatter plots métier
scatter_plots = [
    ('revenus_annuels', 'panier_moyen', '💰 Revenus vs Panier'),
    ('score_fidelite', 'freq_achat_mensuelle', '❤️ Fidélité vs Fréquence'),
    ('ca_annuel', 'score_fidelite', '📈 CA vs Fidélité')
]

for i, (x, y, title) in enumerate(scatter_plots):
    scatter = axes[2, i+1].scatter(df[x], df[y], c=df['segment_reel'].astype('category').cat.codes, 
                                  cmap='Set1', alpha=0.6)
    axes[2, i+1].set_xlabel(x)
    axes[2, i+1].set_ylabel(y)
    axes[2, i+1].set_title(title)

plt.tight_layout()
plt.show()

# 3. ⚙️ PRÉPARATION AVANCÉE DES DONNÉES
print("\\n⚙️ Préparation avancée des données")
print("=" * 40)

# Sélection des features pour le clustering
features_clustering = ['revenus_annuels', 'score_fidelite', 'freq_achat_mensuelle', 'panier_moyen', 'ca_annuel']
X = df[features_clustering].copy()

print(f"📊 Features sélectionnées: {features_clustering}")
print(f"📈 Forme des données: {X.shape}")

# Détection et traitement des outliers avec méthode IQR
def detect_outliers_iqr(data, factor=1.5):
    Q1 = data.quantile(0.25)
    Q3 = data.quantile(0.75)
    IQR = Q3 - Q1
    lower_bound = Q1 - factor * IQR
    upper_bound = Q3 + factor * IQR
    outliers = (data < lower_bound) | (data > upper_bound)
    return outliers

outliers_mask = pd.DataFrame(index=X.index)
for col in X.columns:
    outliers_mask[col] = detect_outliers_iqr(X[col])

total_outliers = outliers_mask.any(axis=1).sum()
print(f"🚨 Outliers détectés: {total_outliers} ({total_outliers/len(X)*100:.1f}%)")

# Option: supprimer les outliers extrêmes ou les conserver pour l'analyse
# X_clean = X[~outliers_mask.any(axis=1)]
X_clean = X.copy()  # Conserver tous les points pour cet exemple

# Standardisation avec RobustScaler (moins sensible aux outliers)
scaler = RobustScaler()
X_scaled = scaler.fit_transform(X_clean)
X_scaled_df = pd.DataFrame(X_scaled, columns=features_clustering, index=X_clean.index)

print(f"✅ Données standardisées: {X_scaled.shape}")

# 4. 🔍 DÉTERMINATION OPTIMALE DU NOMBRE DE CLUSTERS
print("\\n🔍 Optimisation du nombre de clusters")
print("=" * 45)

# Méthodes multiples pour déterminer k optimal
k_range = range(2, 12)
metrics = {
    'inertia': [],
    'silhouette': [],
    'calinski_harabasz': [],
    'davies_bouldin': []
}

print("🔄 Test de différentes valeurs de k...")
for k in k_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    cluster_labels = kmeans.fit_predict(X_scaled)
    
    metrics['inertia'].append(kmeans.inertia_)
    metrics['silhouette'].append(silhouette_score(X_scaled, cluster_labels))
    metrics['calinski_harabasz'].append(calinski_harabasz_score(X_scaled, cluster_labels))
    metrics['davies_bouldin'].append(davies_bouldin_score(X_scaled, cluster_labels))

# Visualisation des métriques
fig, axes = plt.subplots(2, 2, figsize=(15, 10))
fig.suptitle('📊 Optimisation du Nombre de Clusters', fontsize=14, fontweight='bold')

# Méthode du coude (Elbow)
axes[0,0].plot(k_range, metrics['inertia'], 'bo-', linewidth=2, markersize=8)
axes[0,0].set_xlabel('Nombre de clusters (k)')
axes[0,0].set_ylabel('Inertie')
axes[0,0].set_title('📐 Méthode du Coude')
axes[0,0].grid(True, alpha=0.3)

# Score de silhouette (plus élevé = mieux)
axes[0,1].plot(k_range, metrics['silhouette'], 'ro-', linewidth=2, markersize=8)
axes[0,1].set_xlabel('Nombre de clusters (k)')
axes[0,1].set_ylabel('Score de Silhouette')
axes[0,1].set_title('🎯 Score de Silhouette')
axes[0,1].grid(True, alpha=0.3)

# Calinski-Harabasz (plus élevé = mieux)
axes[1,0].plot(k_range, metrics['calinski_harabasz'], 'go-', linewidth=2, markersize=8)
axes[1,0].set_xlabel('Nombre de clusters (k)')
axes[1,0].set_ylabel('Score Calinski-Harabasz')
axes[1,0].set_title('📈 Score Calinski-Harabasz')
axes[1,0].grid(True, alpha=0.3)

# Davies-Bouldin (plus faible = mieux)
axes[1,1].plot(k_range, metrics['davies_bouldin'], 'mo-', linewidth=2, markersize=8)
axes[1,1].set_xlabel('Nombre de clusters (k)')
axes[1,1].set_ylabel('Score Davies-Bouldin')
axes[1,1].set_title('📉 Score Davies-Bouldin')
axes[1,1].grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# Détermination automatique du k optimal
k_optimal_silhouette = k_range[np.argmax(metrics['silhouette'])]
k_optimal_ch = k_range[np.argmax(metrics['calinski_harabasz'])]
k_optimal_db = k_range[np.argmin(metrics['davies_bouldin'])]

print(f"🎯 K optimal selon Silhouette: {k_optimal_silhouette}")
print(f"📊 K optimal selon Calinski-Harabasz: {k_optimal_ch}")
print(f"📉 K optimal selon Davies-Bouldin: {k_optimal_db}")

# Utilisation de la moyenne des recommandations
k_optimal = int(np.mean([k_optimal_silhouette, k_optimal_ch, k_optimal_db]))
print(f"\\n🏆 K optimal choisi: {k_optimal}")

# 5. 🤖 COMPARAISON D'ALGORITHMES DE CLUSTERING
print("\\n🤖 Comparaison des algorithmes de clustering")
print("=" * 50)

algorithms = {
    'K-Means': KMeans(n_clusters=k_optimal, random_state=42, n_init=10),
    'DBSCAN': DBSCAN(eps=0.5, min_samples=5),
    'Agglomerative': AgglomerativeClustering(n_clusters=k_optimal)
}

clustering_results = {}

for name, algorithm in algorithms.items():
    print(f"\\n🔧 Test {name}...")
    
    if name == 'DBSCAN':
        # Optimisation automatique d'epsilon pour DBSCAN
        from sklearn.neighbors import NearestNeighbors
        neighbors = NearestNeighbors(n_neighbors=4)
        neighbors_fit = neighbors.fit(X_scaled)
        distances, indices = neighbors_fit.kneighbors(X_scaled)
        distances = np.sort(distances[:, 3], axis=0)
        
        # Heuristique pour epsilon (peut nécessiter ajustement)
        eps_optimal = distances[int(0.95 * len(distances))]
        algorithm.set_params(eps=eps_optimal)
    
    cluster_labels = algorithm.fit_predict(X_scaled)
    
    # Calcul des métriques (si plus d'un cluster)
    n_clusters = len(np.unique(cluster_labels))
    if n_clusters > 1 and -1 not in cluster_labels:  # Pas de points de bruit
        silhouette = silhouette_score(X_scaled, cluster_labels)
        ch_score = calinski_harabasz_score(X_scaled, cluster_labels)
        db_score = davies_bouldin_score(X_scaled, cluster_labels)
    else:
        silhouette = ch_score = db_score = np.nan
    
    clustering_results[name] = {
        'algorithm': algorithm,
        'labels': cluster_labels,
        'n_clusters': n_clusters,
        'silhouette': silhouette,
        'calinski_harabasz': ch_score,
        'davies_bouldin': db_score
    }
    
    print(f"   🎯 Nombre de clusters: {n_clusters}")
    if not np.isnan(silhouette):
        print(f"   📊 Silhouette: {silhouette:.3f}")
        print(f"   📈 Calinski-Harabasz: {ch_score:.2f}")
        print(f"   📉 Davies-Bouldin: {db_score:.3f}")

# Sélection du meilleur algorithme
valid_algorithms = {k: v for k, v in clustering_results.items() if not np.isnan(v['silhouette'])}
best_algorithm_name = max(valid_algorithms.keys(), key=lambda x: valid_algorithms[x]['silhouette'])
best_clusters = clustering_results[best_algorithm_name]['labels']

print(f"\\n🏆 Meilleur algorithme: {best_algorithm_name}")
print(f"🎯 Score silhouette: {clustering_results[best_algorithm_name]['silhouette']:.3f}")

# 6. 📊 VISUALISATION AVANCÉE DES CLUSTERS
print("\\n📊 Création des visualisations avancées...")

# Réduction de dimensionnalité pour visualisation
pca = PCA(n_components=2, random_state=42)
X_pca = pca.fit_transform(X_scaled)

tsne = TSNE(n_components=2, random_state=42, perplexity=30)
X_tsne = tsne.fit_transform(X_scaled)

# Graphiques de visualisation
fig, axes = plt.subplots(2, 3, figsize=(20, 12))
fig.suptitle(f'🎯 Visualisation Avancée - {best_algorithm_name}', fontsize=16, fontweight='bold')

# PCA
scatter = axes[0,0].scatter(X_pca[:, 0], X_pca[:, 1], c=best_clusters, cmap='Set1', alpha=0.7)
axes[0,0].set_xlabel(f'PC1 ({pca.explained_variance_ratio_[0]:.1%} variance)')
axes[0,0].set_ylabel(f'PC2 ({pca.explained_variance_ratio_[1]:.1%} variance)')
axes[0,0].set_title('📊 Visualisation PCA')

# t-SNE
axes[0,1].scatter(X_tsne[:, 0], X_tsne[:, 1], c=best_clusters, cmap='Set1', alpha=0.7)
axes[0,1].set_xlabel('t-SNE 1')
axes[0,1].set_ylabel('t-SNE 2')
axes[0,1].set_title('🔍 Visualisation t-SNE')

# Comparaison avec vrais segments
true_labels_encoded = pd.Categorical(df['segment_reel']).codes
axes[0,2].scatter(X_pca[:, 0], X_pca[:, 1], c=true_labels_encoded, cmap='Set2', alpha=0.7)
axes[0,2].set_xlabel(f'PC1 ({pca.explained_variance_ratio_[0]:.1%} variance)')
axes[0,2].set_ylabel(f'PC2 ({pca.explained_variance_ratio_[1]:.1%% variance)')
axes[0,2].set_title('🎯 Vrais Segments (Référence)')

# Analyse par paires de variables
axes[1,0].scatter(df['revenus_annuels'], df['score_fidelite'], c=best_clusters, cmap='Set1', alpha=0.7)
axes[1,0].set_xlabel('Revenus Annuels (k€)')
axes[1,0].set_ylabel('Score Fidélité')
axes[1,0].set_title('💰 Revenus vs Fidélité')

axes[1,1].scatter(df['freq_achat_mensuelle'], df['panier_moyen'], c=best_clusters, cmap='Set1', alpha=0.7)
axes[1,1].set_xlabel('Fréquence Achat Mensuelle')
axes[1,1].set_ylabel('Panier Moyen (€)')
axes[1,1].set_title('🛒 Fréquence vs Panier')

axes[1,2].scatter(df['ca_annuel'], df['score_fidelite'], c=best_clusters, cmap='Set1', alpha=0.7)
axes[1,2].set_xlabel('CA Annuel (€)')
axes[1,2].set_ylabel('Score Fidélité')
axes[1,2].set_title('📈 CA vs Fidélité')

plt.tight_layout()
plt.show()

# 7. 🧾 ANALYSE MÉTIER APPROFONDIE DES SEGMENTS
print("\\n🧾 ANALYSE MÉTIER DES SEGMENTS DÉCOUVERTS")
print("=" * 55)

# Ajout des clusters au DataFrame
df['cluster'] = best_clusters

# Analyse détaillée par cluster
cluster_analysis = df.groupby('cluster').agg({
    'revenus_annuels': ['count', 'mean', 'std', 'min', 'max'],
    'score_fidelite': ['mean', 'std'],
    'freq_achat_mensuelle': ['mean', 'std'],
    'panier_moyen': ['mean', 'std'],
    'ca_annuel': ['mean', 'std', 'sum']
}).round(2)

print("📊 Analyse détaillée par cluster:")
print(cluster_analysis)

# Caractérisation métier de chaque segment
print("\\n🎯 CARACTÉRISATION MÉTIER DES SEGMENTS:")
print("=" * 50)

for cluster_id in sorted(df['cluster'].unique()):
    if cluster_id == -1:  # Points de bruit DBSCAN
        continue
        
    cluster_data = df[df['cluster'] == cluster_id]
    size = len(cluster_data)
    
    print(f"\\n🏷️  CLUSTER {cluster_id} ({size} clients - {size/len(df)*100:.1f}%)")
    print("-" * 40)
    
    # Statistiques principales
    stats = cluster_data[features_clustering].mean()
    print(f"💰 Revenus moyens: {stats['revenus_annuels']:.0f}k€")
    print(f"❤️  Fidélité moyenne: {stats['score_fidelite']:.0f}/100")
    print(f"🛒 Fréquence d'achat: {stats['freq_achat_mensuelle']:.1f}/mois")
    print(f"🛍️  Panier moyen: {stats['panier_moyen']:.0f}€")
    print(f"📈 CA annuel moyen: {stats['ca_annuel']:,.0f}€")
    print(f"💎 CA total du segment: {cluster_data['ca_annuel'].sum():,.0f}€")
    
    # Recommandations stratégiques
    ca_moyen = stats['ca_annuel']
    fidelite_moyenne = stats['score_fidelite']
    revenus_moyens = stats['revenus_annuels']
    
    print(f"\\n🎯 STRATÉGIE RECOMMANDÉE:")
    if ca_moyen > 15000 and fidelite_moyenne > 75:
        print("   🌟 SEGMENT VIP - Programme privilège, services exclusifs")
    elif ca_moyen > 8000 and fidelite_moyenne > 60:
        print("   💎 SEGMENT FIDÈLE - Récompenses fidélité, offres personnalisées")
    elif revenus_moyens > 50 and fidelite_moyenne < 50:
        print("   🎯 SEGMENT POTENTIEL - Campagnes d'engagement, améliorer expérience")
    else:
        print("   📢 SEGMENT BASIQUE - Promotions attractives, acquisition")

# 8. 📊 COMPARAISON AVEC LES VRAIS SEGMENTS
print("\\n📊 COMPARAISON AVEC LES SEGMENTS RÉELS")
print("=" * 45)

# Matrice de contingence
contingency_matrix = pd.crosstab(df['segment_reel'], df['cluster'], margins=True)
print("📋 Matrice de contingence (Réel vs Prédit):")
print(contingency_matrix)

# Calcul de la pureté des clusters
purity_scores = []
for cluster_id in sorted(df['cluster'].unique()):
    if cluster_id == -1:
        continue
    cluster_data = df[df['cluster'] == cluster_id]
    most_common_segment = cluster_data['segment_reel'].mode()[0]
    purity = (cluster_data['segment_reel'] == most_common_segment).mean()
    purity_scores.append(purity)
    print(f"🎯 Pureté Cluster {cluster_id}: {purity:.2f} (majoritairement {most_common_segment})")

average_purity = np.mean(purity_scores)
print(f"\\n🏆 Pureté moyenne: {average_purity:.2f}")

print("\\n✅ ANALYSE COMPLÈTE TERMINÉE!")
print("🎯 Vos segments clients sont prêts pour les actions marketing!")`,language:"python",outputs:["4 clusters détectés","Score silhouette: 0.687","Pureté moyenne: 0.83"]}],Y=(p,m)=>{navigator.clipboard.writeText(p),N(m),setTimeout(()=>N(null),2e3)};return e.jsxs("section",{id:"practical-exercises",className:"space-y-16",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",children:"Exercices Pratiques et Exemples de Code"}),e.jsx("p",{className:"text-xl text-gray-600 max-w-4xl mx-auto",children:"Maîtrisez le Machine Learning par la pratique avec des projets concrets, des défis progressifs et des exemples détaillés"}),e.jsxs("div",{className:"flex justify-center gap-4 mt-6",children:[e.jsx(d,{className:"bg-purple-100 text-purple-800 px-4 py-2",children:"💻 Code Complet"}),e.jsx(d,{className:"bg-blue-100 text-blue-800 px-4 py-2",children:"📊 Analyses Détaillées"}),e.jsx(d,{className:"bg-green-100 text-green-800 px-4 py-2",children:"🎯 Applications Métier"})]})]}),e.jsx(u,{title:"💻 Laboratoire de Code Interactif",type:"exemple",children:e.jsxs("div",{className:"space-y-8",children:[e.jsx("div",{className:"text-center mb-6",children:e.jsx("p",{className:"text-lg text-gray-700 mb-4",children:"Explorez des implémentations complètes avec analyses détaillées et recommandations métier"})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:c.map((p,m)=>e.jsxs("button",{onClick:()=>a(m),className:`p-6 rounded-xl text-left transition-all duration-500 border-2 hover:scale-105 ${s===m?"bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl border-blue-500":"bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-gray-300 hover:shadow-lg"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("h4",{className:"font-bold text-lg",children:p.title}),e.jsx(d,{className:`${s===m?"bg-white text-blue-600":"bg-gray-100 text-gray-700"}`,children:p.difficulty})]}),e.jsx("p",{className:`text-sm mb-3 ${s===m?"text-blue-100":"text-gray-600"}`,children:p.description}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("span",{className:`text-xs ${s===m?"text-blue-200":"text-gray-500"}`,children:["⏱️ ",p.estimatedTime]})})]},m))}),e.jsxs(t,{className:"border-2 hover:shadow-2xl transition-all duration-500",children:[e.jsx(n,{className:"bg-gradient-to-r from-gray-50 to-gray-100",children:e.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",children:[e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"bg-blue-600 p-3 rounded-lg",children:e.jsx(S,{className:"h-6 w-6 text-white"})}),e.jsxs("div",{children:[e.jsx(l,{className:"text-xl",children:c[s].title}),e.jsx(f,{className:"text-lg mt-1",children:c[s].description}),e.jsxs("div",{className:"flex items-center gap-4 mt-3",children:[e.jsxs(d,{className:"bg-blue-100 text-blue-800",children:["🎯 ",c[s].difficulty]}),e.jsxs(d,{className:"bg-green-100 text-green-800",children:["⏱️ ",c[s].estimatedTime]})]})]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:()=>Y(c[s].code,s),className:"flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg",children:b===s?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-green-300",children:"✓"}),"Copié !"]}):e.jsxs(e.Fragment,{children:[e.jsx(ne,{className:"h-4 w-4"}),"Copier le code"]})}),e.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-lg",children:[e.jsx(le,{className:"h-4 w-4"}),"Télécharger"]})]})]})}),e.jsxs(o,{className:"p-0",children:[e.jsx("div",{className:"bg-gray-950 text-gray-100 p-8 overflow-x-auto",children:e.jsx("pre",{className:"text-sm leading-relaxed",children:e.jsx("code",{children:c[s].code})})}),e.jsxs("div",{className:"bg-green-50 p-6 border-t-4 border-green-500",children:[e.jsxs("h4",{className:"font-bold text-green-800 mb-3 flex items-center gap-2",children:[e.jsx(C,{className:"h-5 w-5"}),"Résultats attendus :"]}),e.jsx("div",{className:"space-y-2",children:c[s].outputs.map((p,m)=>e.jsx("div",{className:"bg-white p-3 rounded-lg border border-green-200",children:e.jsx("code",{className:"text-sm text-green-700",children:p})},m))})]})]})]})]})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[e.jsx(h,{title:"🎬 Système de Recommandation de Films",difficulty:"intermédiaire",estimatedTime:"25 min",problem:"Vous travaillez pour une plateforme de streaming qui souhaite améliorer son système de recommandation. Créez un système qui recommande des films basé sur les ratings des utilisateurs et les métadonnées des films (genre, acteurs, réalisateur). Le dataset contient 10,000 utilisateurs, 5,000 films et 1 million de ratings.",hints:["Commencez par une approche de filtrage collaboratif avec la similarité cosinus","Utilisez la factorisation matricielle (SVD) pour capturer les patterns latents","Intégrez les métadonnées avec un modèle hybride (collaboratif + contenu)","Évaluez avec RMSE, précision@K et diversité des recommandations","Gérez le problème de démarrage à froid pour les nouveaux utilisateurs"],solution:`# Système de Recommandation de Films - Solution Complète
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.decomposition import TruncatedSVD
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import mean_squared_error
from scipy.sparse import csr_matrix
import matplotlib.pyplot as plt

# 1. PRÉPARATION DES DONNÉES
print("🎬 Système de Recommandation de Films")
print("=" * 40)

# Simulation de données (en pratique, vous chargeriez vos datasets)
np.random.seed(42)

# Génération de données réalistes
n_users, n_movies = 1000, 500  # Réduit pour l'exemple
n_ratings = 50000

users = np.random.randint(0, n_users, n_ratings)
movies = np.random.randint(0, n_movies, n_ratings)
ratings = np.random.choice([1,2,3,4,5], n_ratings, p=[0.1,0.1,0.2,0.4,0.2])

# DataFrame des ratings
ratings_df = pd.DataFrame({
    'user_id': users,
    'movie_id': movies,
    'rating': ratings
})

# Suppression des doublons (un user peut noter un film qu'une fois)
ratings_df = ratings_df.drop_duplicates(['user_id', 'movie_id'])

print(f"📊 Dataset: {len(ratings_df)} ratings")
print(f"👥 Utilisateurs: {ratings_df['user_id'].nunique()}")
print(f"🎬 Films: {ratings_df['movie_id'].nunique()}")

# 2. CRÉATION DE LA MATRICE USER-ITEM
print("\\n🔧 Création de la matrice utilisateur-film...")

# Matrice pivot
user_item_matrix = ratings_df.pivot(index='user_id', columns='movie_id', values='rating').fillna(0)
print(f"📏 Forme de la matrice: {user_item_matrix.shape}")

# Conversion en matrice sparse pour l'efficacité
user_item_sparse = csr_matrix(user_item_matrix.values)

# 3. FILTRAGE COLLABORATIF - SIMILARITÉ UTILISATEURS
print("\\n👥 Filtrage collaboratif basé utilisateurs...")

def collaborative_filtering_users(user_id, user_item_matrix, n_recommendations=10):
    # Calcul de similarité entre utilisateurs
    user_similarity = cosine_similarity(user_item_matrix)
    
    # Obtenir l'index de l'utilisateur
    user_idx = list(user_item_matrix.index).index(user_id)
    
    # Trouver les utilisateurs similaires
    similar_users = user_similarity[user_idx]
    similar_users_idx = np.argsort(similar_users)[::-1][1:11]  # Top 10 (excluant lui-même)
    
    # Films déjà vus par l'utilisateur
    user_ratings = user_item_matrix.iloc[user_idx]
    seen_movies = user_ratings[user_ratings > 0].index
    
    # Calculer les scores de recommandation
    recommendations = {}
    for movie in user_item_matrix.columns:
        if movie not in seen_movies:
            score = 0
            similarity_sum = 0
            
            for similar_user_idx in similar_users_idx:
                similar_user_id = user_item_matrix.index[similar_user_idx]
                similarity = similar_users[similar_user_idx]
                rating = user_item_matrix.loc[similar_user_id, movie]
                
                if rating > 0:  # Si l'utilisateur similaire a noté ce film
                    score += similarity * rating
                    similarity_sum += similarity
            
            if similarity_sum > 0:
                recommendations[movie] = score / similarity_sum
    
    # Trier et retourner top N
    sorted_recommendations = sorted(recommendations.items(), key=lambda x: x[1], reverse=True)
    return sorted_recommendations[:n_recommendations]

# 4. FACTORISATION MATRICIELLE (SVD)
print("\\n🧮 Factorisation matricielle avec SVD...")

# SVD pour capturer les facteurs latents
svd = TruncatedSVD(n_components=50, random_state=42)
user_factors = svd.fit_transform(user_item_sparse)
movie_factors = svd.components_.T

print(f"✅ SVD terminée: {user_factors.shape[1]} facteurs latents")

def svd_recommendations(user_id, user_item_matrix, user_factors, movie_factors, n_recommendations=10):
    user_idx = list(user_item_matrix.index).index(user_id)
    
    # Films déjà vus
    user_ratings = user_item_matrix.iloc[user_idx]
    seen_movies = user_ratings[user_ratings > 0].index
    
    # Prédiction pour tous les films
    user_vector = user_factors[user_idx]
    predicted_ratings = np.dot(user_vector, movie_factors.T)
    
    # Créer dataframe des prédictions
    predictions = pd.DataFrame({
        'movie_id': user_item_matrix.columns,
        'predicted_rating': predicted_ratings
    })
    
    # Filtrer les films déjà vus
    unseen_predictions = predictions[~predictions['movie_id'].isin(seen_movies)]
    
    # Trier et retourner top N
    top_recommendations = unseen_predictions.nlargest(n_recommendations, 'predicted_rating')
    
    return list(zip(top_recommendations['movie_id'], top_recommendations['predicted_rating']))

# 5. ÉVALUATION DU SYSTÈME
print("\\n📊 Évaluation du système...")

# Division train/test
def train_test_split_ratings(ratings_df, test_ratio=0.2):
    # Pour chaque utilisateur, garder quelques ratings pour le test
    train_list, test_list = [], []
    
    for user_id in ratings_df['user_id'].unique():
        user_ratings = ratings_df[ratings_df['user_id'] == user_id]
        
        if len(user_ratings) >= 5:  # Au moins 5 ratings
            n_test = max(1, int(len(user_ratings) * test_ratio))
            test_indices = np.random.choice(user_ratings.index, n_test, replace=False)
            
            test_list.append(user_ratings.loc[test_indices])
            train_list.append(user_ratings.drop(test_indices))
        else:
            train_list.append(user_ratings)
    
    train_df = pd.concat(train_list, ignore_index=True)
    test_df = pd.concat(test_list, ignore_index=True) if test_list else pd.DataFrame()
    
    return train_df, test_df

train_df, test_df = train_test_split_ratings(ratings_df)
print(f"📈 Train: {len(train_df)} ratings")
print(f"🎯 Test: {len(test_df)} ratings")

# Recréer la matrice avec données d'entraînement
train_matrix = train_df.pivot(index='user_id', columns='movie_id', values='rating').fillna(0)

# 6. SYSTÈME HYBRIDE (Exemple simplifié)
print("\\n🔄 Système hybride...")

def hybrid_recommendations(user_id, train_matrix, user_factors, movie_factors, 
                          alpha=0.7, n_recommendations=10):
    try:
        # Recommandations SVD
        svd_recs = dict(svd_recommendations(user_id, train_matrix, user_factors, movie_factors, 20))
        
        # Recommandations collaboratives
        collab_recs = dict(collaborative_filtering_users(user_id, train_matrix, 20))
        
        # Combinaison hybride
        all_movies = set(svd_recs.keys()) | set(collab_recs.keys())
        hybrid_scores = {}
        
        for movie in all_movies:
            svd_score = svd_recs.get(movie, 0)
            collab_score = collab_recs.get(movie, 0)
            
            # Normalisation simple (en pratique, plus sophistiquée)
            hybrid_scores[movie] = alpha * svd_score + (1 - alpha) * collab_score
        
        # Retourner top N
        sorted_hybrid = sorted(hybrid_scores.items(), key=lambda x: x[1], reverse=True)
        return sorted_hybrid[:n_recommendations]
    
    except:
        # Fallback si erreur
        return []

# 7. TEST ET DÉMONSTRATION
print("\\n🎬 Test du système de recommandation...")

# Choisir un utilisateur test
test_users = [u for u in test_df['user_id'].unique() if u in train_matrix.index]
if test_users:
    test_user = test_users[0]
    
    print(f"\\n🎯 Recommandations pour l'utilisateur {test_user}:")
    
    # SVD recommandations
    svd_recs = svd_recommendations(test_user, train_matrix, user_factors, movie_factors, 5)
    print("\\n📊 Top 5 - SVD:")
    for i, (movie, score) in enumerate(svd_recs, 1):
        print(f"   {i}. Film {movie}: {score:.2f}")
    
    # Collaboratif
    collab_recs = collaborative_filtering_users(test_user, train_matrix, 5)
    print("\\n👥 Top 5 - Collaboratif:")
    for i, (movie, score) in enumerate(collab_recs, 1):
        print(f"   {i}. Film {movie}: {score:.2f}")
    
    # Hybride
    hybrid_recs = hybrid_recommendations(test_user, train_matrix, user_factors, movie_factors, 0.7, 5)
    print("\\n🔄 Top 5 - Hybride:")
    for i, (movie, score) in enumerate(hybrid_recs, 1):
        print(f"   {i}. Film {movie}: {score:.2f}")

# 8. MÉTRIQUES D'ÉVALUATION
print("\\n📈 Calcul des métriques d'évaluation...")

def calculate_precision_at_k(recommended_items, relevant_items, k):
    recommended_at_k = recommended_items[:k]
    relevant_and_recommended = set(recommended_at_k) & set(relevant_items)
    
    if len(recommended_at_k) == 0:
        return 0
    
    return len(relevant_and_recommended) / len(recommended_at_k)

# Exemple de calcul de précision@5
if test_users and len(test_df) > 0:
    test_user = test_users[0]
    user_test_movies = test_df[test_df['user_id'] == test_user]
    relevant_movies = user_test_movies[user_test_movies['rating'] >= 4]['movie_id'].tolist()
    
    if hybrid_recs:
        recommended_movies = [movie for movie, score in hybrid_recs]
        precision_5 = calculate_precision_at_k(recommended_movies, relevant_movies, 5)
        print(f"🎯 Précision@5: {precision_5:.2f}")

print("\\n✅ Système de recommandation opérationnel!")
print("🚀 Prêt pour la production avec monitoring et A/B testing!")`}),e.jsx(h,{title:"🔍 Détection d'Anomalies dans les Transactions",difficulty:"avancé",estimatedTime:"35 min",problem:"Une banque vous demande de créer un système de détection de fraude en temps réel. Analysez 100,000 transactions avec 30 features (montant, localisation, heure, type de marchande, historique client...). Seules 0.1% des transactions sont frauduleuses. Créez un modèle capable de détecter 95% des fraudes tout en minimisant les faux positifs.",hints:["Le dataset est très déséquilibré - utilisez des techniques de rééquilibrage (SMOTE, undersampling)","Testez plusieurs algorithmes : Isolation Forest, One-Class SVM, Random Forest","Créez des features d'ingénierie : fréquence, patterns temporels, géolocalisation","Optimisez pour le rappel (catch frauds) tout en contrôlant la précision","Utilisez la validation temporelle (pas de data leakage temporel)"],solution:`# Détection d'Anomalies - Fraude Bancaire - Solution Complète
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split, cross_val_score, StratifiedKFold
from sklearn.ensemble import RandomForestClassifier, IsolationForest
from sklearn.svm import OneClassSVM
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.metrics import classification_report, confusion_matrix, roc_auc_score, precision_recall_curve
from sklearn.metrics import average_precision_score, roc_curve
from imblearn.over_sampling import SMOTE
from imblearn.under_sampling import RandomUnderSampler
from imblearn.pipeline import Pipeline as ImbPipeline
import warnings
warnings.filterwarnings('ignore')

print("🔍 DÉTECTION DE FRAUDE BANCAIRE")
print("=" * 40)

# 1. GÉNÉRATION DE DONNÉES RÉALISTES
print("\\n📊 Génération du dataset de transactions...")
np.random.seed(42)

n_transactions = 50000  # Réduit pour l'exemple
fraud_rate = 0.002      # 0.2% de fraudes (très déséquilibré)

# Génération des transactions normales (99.8%)
n_normal = int(n_transactions * (1 - fraud_rate))
n_fraud = n_transactions - n_normal

print(f"💳 Transactions normales: {n_normal}")
print(f"🚨 Transactions frauduleuses: {n_fraud}")

# Features pour transactions normales
normal_data = {
    'montant': np.random.lognormal(3, 1, n_normal),  # Distribution log-normale réaliste
    'heure': np.random.normal(14, 4, n_normal) % 24, # Pic à 14h
    'jour_semaine': np.random.choice(range(7), n_normal, p=[0.12,0.14,0.14,0.14,0.14,0.16,0.16]),
    'nb_trans_jour': np.random.poisson(3, n_normal),
    'nb_trans_semaine': np.random.poisson(20, n_normal),
    'solde_compte': np.random.normal(5000, 3000, n_normal),
    'age_compte_jours': np.random.exponential(500, n_normal),
    '
_merchant_category': np.random.choice(range(20), n_normal, p=[0.15,0.12,0.1,0.08,0.06,0.05,0.05,0.04,0.04,0.03,0.03,0.03,0.03,0.03,0.02,0.02,0.02,0.02,0.01,0.08]),
    'pays_merchant': np.random.choice(range(5), n_normal, p=[0.7,0.15,0.08,0.04,0.03]),
    'montant_moy_30j': np.random.lognormal(3, 0.8, n_normal)
}

# Features pour transactions frauduleuses (patterns différents)
fraud_data = {
    'montant': np.random.lognormal(4.5, 1.5, n_fraud),  # Montants plus élevés
    'heure': np.random.choice(range(24), n_fraud, p=[0.08,0.09,0.1,0.12,0.08,0.06,0.04,0.03,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.04,0.05,0.04,0.03,0.03,0.04,0.06,0.07]),  # Plus la nuit
    'jour_semaine': np.random.choice(range(7), n_fraud),  # Répartition uniforme
    'nb_trans_jour': np.random.poisson(8, n_fraud),  # Plus de transactions
    'nb_trans_semaine': np.random.poisson(45, n_fraud),
    'solde_compte': np.random.normal(3000, 4000, n_fraud),  # Soldes plus variables
    'age_compte_jours': np.random.exponential(200, n_fraud),  # Comptes plus récents
    'merchant_category': np.random.choice(range(20), n_fraud),  # Répartition différente
    'pays_merchant': np.random.choice(range(5), n_fraud, p=[0.4,0.2,0.2,0.1,0.1]),  # Plus d'international
    'montant_moy_30j': np.random.lognormal(2.8, 1.2, n_fraud)
}

# Création du DataFrame combiné
transactions_data = []
labels = []

for key in normal_data.keys():
    if key not in transactions_data:
        transactions_data.append([])
    transactions_data[-1] = list(normal_data[key]) + list(fraud_data[key])

# Transposer pour avoir la bonne structure
df_data = {}
for i, key in enumerate(normal_data.keys()):
    df_data[key] = list(normal_data[key]) + list(fraud_data[key])

df = pd.DataFrame(df_data)
df['is_fraud'] = [0] * n_normal + [1] * n_fraud

# Ajout de features d'ingénierie
df['montant_log'] = np.log1p(df['montant'])
df['ratio_montant_solde'] = df['montant'] / (df['solde_compte'] + 1)
df['ratio_montant_moyenne'] = df['montant'] / (df['montant_moy_30j'] + 1)
df['is_weekend'] = (df['jour_semaine'] >= 5).astype(int)
df['is_night'] = ((df['heure'] >= 22) | (df['heure'] <= 6)).astype(int)
df['freq_trans_day_high'] = (df['nb_trans_jour'] > 10).astype(int)

print(f"✅ Dataset créé: {len(df)} transactions")
print(f"📊 Taux de fraude: {df['is_fraud'].mean():.3%}")

# 2. ANALYSE EXPLORATOIRE SPÉCIALISÉE
print("\\n🔍 Analyse exploratoire des patterns de fraude...")

# Statistiques par classe
fraud_stats = df.groupby('is_fraud').agg({
    'montant': ['mean', 'std', 'median'],
    'heure': ['mean', 'std'],
    'nb_trans_jour': ['mean', 'std'],
    'solde_compte': ['mean', 'std'],
    'is_night': 'mean',
    'is_weekend': 'mean'
}).round(3)

print("📊 Statistiques par classe:")
print(fraud_stats)

# Visualisations spécialisées
fig, axes = plt.subplots(3, 3, figsize=(20, 15))
fig.suptitle('🔍 Analyse des Patterns de Fraude', fontsize=16, fontweight='bold')

# Distribution des montants
axes[0,0].hist(df[df['is_fraud']==0]['montant_log'], bins=50, alpha=0.7, label='Normal', density=True)
axes[0,0].hist(df[df['is_fraud']==1]['montant_log'], bins=50, alpha=0.7, label='Fraude', density=True)
axes[0,0].set_title('💰 Distribution Montants (log)')
axes[0,0].legend()

# Répartition par heure
hour_fraud = df.groupby(['heure', 'is_fraud']).size().unstack().fillna(0)
hour_fraud_rate = hour_fraud[1] / (hour_fraud[0] + hour_fraud[1])
axes[0,1].plot(hour_fraud_rate.index, hour_fraud_rate.values * 100, 'r-o')
axes[0,1].set_title('🕐 Taux de Fraude par Heure')
axes[0,1].set_ylabel('Taux de fraude (%)')

# Répartition par jour de la semaine
day_fraud = df.groupby(['jour_semaine', 'is_fraud']).size().unstack().fillna(0)
day_fraud_rate = day_fraud[1] / (day_fraud[0] + day_fraud[1])
axes[0,2].bar(range(7), day_fraud_rate.values * 100, color='orange', alpha=0.7)
axes[0,2].set_title('📅 Taux de Fraude par Jour')
axes[0,2].set_xticks(range(7))
axes[0,2].set_xticklabels(['L','M','M','J','V','S','D'])

# Corrélation avec la fraude
correlation_with_fraud = df.corr()['is_fraud'].sort_values(key=abs, ascending=False)[1:]
axes[1,0].barh(range(len(correlation_with_fraud)), correlation_with_fraud.values)
axes[1,0].set_yticks(range(len(correlation_with_fraud)))
axes[1,0].set_yticklabels(correlation_with_fraud.index, rotation=0)
axes[1,0].set_title('🔗 Corrélation avec Fraude')

# Box plot montants
df.boxplot(column='montant_log', by='is_fraud', ax=axes[1,1])
axes[1,1].set_title('📦 Montants par Classe')

# Scatter plot multidimensionnel
scatter = axes[1,2].scatter(df['ratio_montant_solde'], df['nb_trans_jour'], 
                           c=df['is_fraud'], cmap='RdYlBu', alpha=0.6)
axes[1,2].set_title('🎯 Ratio Montant/Solde vs Nb Trans')
axes[1,2].set_xlabel('Ratio Montant/Solde')
axes[1,2].set_ylabel('Nb Trans Jour')

# Matrice de corrélation
features_corr = ['montant_log', 'nb_trans_jour', 'solde_compte', 'age_compte_jours', 'ratio_montant_solde']
corr_matrix = df[features_corr + ['is_fraud']].corr()
im = axes[2,0].imshow(corr_matrix, cmap='coolwarm', aspect='auto')
axes[2,0].set_xticks(range(len(corr_matrix.columns)))
axes[2,0].set_yticks(range(len(corr_matrix.columns)))
axes[2,0].set_xticklabels(corr_matrix.columns, rotation=45)
axes[2,0].set_yticklabels(corr_matrix.columns)
axes[2,0].set_title('🔗 Matrice de Corrélation')

# Distribution des ratios
axes[2,1].hist(df[df['is_fraud']==0]['ratio_montant_moyenne'], bins=50, alpha=0.7, label='Normal', density=True)
axes[2,1].hist(df[df['is_fraud']==1]['ratio_montant_moyenne'], bins=50, alpha=0.7, label='Fraude', density=True)
axes[2,1].set_title('📊 Ratio Montant/Moyenne')
axes[2,1].legend()

# Analyse temporelle
night_fraud = df.groupby('is_night')['is_fraud'].mean()
axes[2,2].bar(['Jour', 'Nuit'], [night_fraud[0]*100, night_fraud[1]*100], 
             color=['lightblue', 'darkblue'], alpha=0.7)
axes[2,2].set_title('🌙 Fraude Jour vs Nuit')
axes[2,2].set_ylabel('Taux de fraude (%)')

plt.tight_layout()
plt.show()

# 3. PRÉPARATION AVANCÉE DES DONNÉES
print("\\n⚙️ Préparation des données pour la modélisation...")

# Sélection des features
features = ['montant_log', 'heure', 'jour_semaine', 'nb_trans_jour', 'nb_trans_semaine',
           'solde_compte', 'age_compte_jours', 'merchant_category', 'pays_merchant',
           'ratio_montant_solde', 'ratio_montant_moyenne', 'is_weekend', 'is_night',
           'freq_trans_day_high']

X = df[features].copy()
y = df['is_fraud'].copy()

print(f"📊 Features sélectionnées: {len(features)}")
print(f"🎯 Distribution des classes: {y.value_counts().to_dict()}")

# Division temporelle (important pour éviter le data leakage)
# Simuler une division temporelle
split_index = int(0.7 * len(df))
X_temp_train, X_temp_test = X[:split_index], X[split_index:]
y_temp_train, y_temp_test = y[:split_index], y[split_index:]

# Division train/validation sur la partie temporelle d'entraînement
X_train, X_val, y_train, y_val = train_test_split(
    X_temp_train, y_temp_train, test_size=0.2, random_state=42, stratify=y_temp_train
)

print(f"📈 Train: {len(X_train)} (fraude: {y_train.sum()}/{len(y_train)})")
print(f"📊 Validation: {len(X_val)} (fraude: {y_val.sum()}/{len(y_val)})")
print(f"🎯 Test temporel: {len(X_temp_test)} (fraude: {y_temp_test.sum()}/{len(y_temp_test)})")

# Standardisation
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_val_scaled = scaler.transform(X_val)
X_temp_test_scaled = scaler.transform(X_temp_test)

# 4. GESTION DU DÉSÉQUILIBRE
print("\\n⚖️ Gestion du déséquilibre des classes...")

# SMOTE pour l'over-sampling
smote = SMOTE(random_state=42, k_neighbors=3)
X_train_smote, y_train_smote = smote.fit_resample(X_train_scaled, y_train)

print(f"✅ Après SMOTE: {len(X_train_smote)} échantillons")
print(f"📊 Distribution: {pd.Series(y_train_smote).value_counts().to_dict()}")

# 5. MODÉLISATION AVEC MULTIPLES ALGORITHMES
print("\\n🤖 Test de multiple algorithmes de détection...")

models = {
    'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42, 
                                          class_weight='balanced'),
    'Random Forest SMOTE': RandomForestClassifier(n_estimators=100, random_state=42),
    'Isolation Forest': IsolationForest(contamination=0.002, random_state=42),
    'One-Class SVM': OneClassSVM(nu=0.002, kernel='rbf')
}

results = {}

for name, model in models.items():
    print(f"\\n🔧 Entraînement {name}...")
    
    if name == 'Random Forest SMOTE':
        # Utiliser les données SMOTE
        model.fit(X_train_smote, y_train_smote)
        y_pred_val = model.predict(X_val_scaled)
        y_pred_proba_val = model.predict_proba(X_val_scaled)[:, 1]
        
    elif name in ['Isolation Forest', 'One-Class SVM']:
        # Algorithmes non-supervisés - entraîner sur données normales uniquement
        X_train_normal = X_train_scaled[y_train == 0]
        model.fit(X_train_normal)
        y_pred_val = model.predict(X_val_scaled)
        y_pred_val = [1 if x == -1 else 0 for x in y_pred_val]  # Conversion -1/1 vers 0/1
        y_pred_proba_val = model.decision_function(X_val_scaled)
        # Normaliser les scores de décision pour avoir des pseudo-probabilités
        y_pred_proba_val = (y_pred_proba_val - y_pred_proba_val.min()) / (y_pred_proba_val.max() - y_pred_proba_val.min())
        
    else:
        # Random Forest standard
        model.fit(X_train_scaled, y_train)
        y_pred_val = model.predict(X_val_scaled)
        y_pred_proba_val = model.predict_proba(X_val_scaled)[:, 1]
    
    # Métriques
    if name not in ['Isolation Forest', 'One-Class SVM']:
        auc_score = roc_auc_score(y_val, y_pred_proba_val)
        avg_precision = average_precision_score(y_val, y_pred_proba_val)
    else:
        auc_score = roc_auc_score(y_val, y_pred_proba_val)
        avg_precision = average_precision_score(y_val, y_pred_proba_val)
    
    results[name] = {
        'model': model,
        'predictions': y_pred_val,
        'probabilities': y_pred_proba_val,
        'auc': auc_score,
        'avg_precision': avg_precision
    }
    
    print(f"   🎯 AUC: {auc_score:.3f}")
    print(f"   📊 Average Precision: {avg_precision:.3f}")
    
    # Rapport de classification
    print(f"   📋 Classification Report:")
    print(classification_report(y_val, y_pred_val, target_names=['Normal', 'Fraude']))

# 6. SÉLECTION DU MEILLEUR MODÈLE
best_model_name = max(results.keys(), key=lambda x: results[x]['auc'])
best_model = results[best_model_name]['model']

print(f"\\n🏆 MEILLEUR MODÈLE: {best_model_name}")
print(f"🎯 AUC: {results[best_model_name]['auc']:.3f}")
print(f"📊 Average Precision: {results[best_model_name]['avg_precision']:.3f}")

# 7. ANALYSE APPROFONDIE DU MEILLEUR MODÈLE
print("\\n📊 Analyse approfondie du meilleur modèle...")

best_pred = results[best_model_name]['predictions']
best_proba = results[best_model_name]['probabilities']

# Matrice de confusion
cm = confusion_matrix(y_val, best_pred)
print("\\n🎯 Matrice de confusion:")
print(cm)

# Visualisations avancées
fig, axes = plt.subplots(2, 2, figsize=(15, 12))
fig.suptitle(f'📈 Analyse du Modèle {best_model_name}', fontsize=14, fontweight='bold')

# ROC Curve
fpr, tpr, _ = roc_curve(y_val, best_proba)
axes[0,0].plot(fpr, tpr, linewidth=2, label=f'AUC = {results[best_model_name]["auc"]:.3f}')
axes[0,0].plot([0, 1], [0, 1], 'k--', alpha=0.5)
axes[0,0].set_xlabel('Taux de Faux Positifs')
axes[0,0].set_ylabel('Taux de Vrais Positifs')
axes[0,0].set_title('📈 Courbe ROC')
axes[0,0].legend()
axes[0,0].grid(True, alpha=0.3)

# Precision-Recall Curve
precision, recall, _ = precision_recall_curve(y_val, best_proba)
axes[0,1].plot(recall, precision, linewidth=2, label=f'AP = {results[best_model_name]["avg_precision"]:.3f}')
axes[0,1].set_xlabel('Rappel')
axes[0,1].set_ylabel('Précision')
axes[0,1].set_title('🎯 Courbe Précision-Rappel')
axes[0,1].legend()
axes[0,1].grid(True, alpha=0.3)

# Distribution des scores
axes[1,0].hist(best_proba[y_val == 0], bins=50, alpha=0.7, label='Normal', density=True)
axes[1,0].hist(best_proba[y_val == 1], bins=50, alpha=0.7, label='Fraude', density=True)
axes[1,0].set_xlabel('Score de Fraude')
axes[1,0].set_ylabel('Densité')
axes[1,0].set_title('📊 Distribution des Scores')
axes[1,0].legend()

# Matrice de confusion heatmap
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', ax=axes[1,1])
axes[1,1].set_title('🎯 Matrice de Confusion')
axes[1,1].set_xlabel('Prédiction')
axes[1,1].set_ylabel('Réalité')

plt.tight_layout()
plt.show()

# 8. OPTIMISATION DU SEUIL
print("\\n🎯 Optimisation du seuil de décision...")

# Calcul des métriques pour différents seuils
thresholds = np.arange(0.1, 0.9, 0.05)
metrics_by_threshold = []

for threshold in thresholds:
    y_pred_thresh = (best_proba >= threshold).astype(int)
    
    tn, fp, fn, tp = confusion_matrix(y_val, y_pred_thresh).ravel()
    
    precision = tp / (tp + fp) if (tp + fp) > 0 else 0
    recall = tp / (tp + fn) if (tp + fn) > 0 else 0
    f1 = 2 * (precision * recall) / (precision + recall) if (precision + recall) > 0 else 0
    false_positive_rate = fp / (fp + tn) if (fp + tn) > 0 else 0
    
    metrics_by_threshold.append({
        'threshold': threshold,
        'precision': precision,
        'recall': recall,
        'f1': f1,
        'fpr': false_positive_rate
    })

metrics_df = pd.DataFrame(metrics_by_threshold)

# Trouver le seuil optimal (maximiser F1 ou selon critère métier)
optimal_threshold = metrics_df.loc[metrics_df['f1'].idxmax(), 'threshold']
print(f"🎯 Seuil optimal (F1): {optimal_threshold:.2f}")

# Appliquer le seuil optimal
y_pred_optimal = (best_proba >= optimal_threshold).astype(int)
print("\\n📋 Performance avec seuil optimal:")
print(classification_report(y_val, y_pred_optimal, target_names=['Normal', 'Fraude']))

# 9. TEST SUR DONNÉES TEMPORELLES
print("\\n🕐 Test sur données temporelles (simulation production)...")

if best_model_name == 'Random Forest SMOTE':
    y_pred_temporal = best_model.predict(X_temp_test_scaled)
    y_proba_temporal = best_model.predict_proba(X_temp_test_scaled)[:, 1]
elif best_model_name in ['Isolation Forest', 'One-Class SVM']:
    y_pred_temporal_raw = best_model.predict(X_temp_test_scaled)
    y_pred_temporal = [1 if x == -1 else 0 for x in y_pred_temporal_raw]
    y_proba_temporal = best_model.decision_function(X_temp_test_scaled)
    y_proba_temporal = (y_proba_temporal - y_proba_temporal.min()) / (y_proba_temporal.max() - y_proba_temporal.min())
else:
    y_pred_temporal = best_model.predict(X_temp_test_scaled)
    y_proba_temporal = best_model.predict_proba(X_temp_test_scaled)[:, 1]

# Appliquer le seuil optimal
y_pred_temporal_optimal = (y_proba_temporal >= optimal_threshold).astype(int)

print("📊 Performance sur données temporelles:")
print(classification_report(y_temp_test, y_pred_temporal_optimal, target_names=['Normal', 'Fraude']))

temporal_auc = roc_auc_score(y_temp_test, y_proba_temporal)
print(f"🎯 AUC temporel: {temporal_auc:.3f}")

print("\\n✅ SYSTÈME DE DÉTECTION DE FRAUDE OPÉRATIONNEL!")
print("🚀 Prêt pour le déploiement en temps réel avec monitoring!")`})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[e.jsx(M,{question:"Dans un problème de classification avec des classes très déséquilibrées (99% classe A, 1% classe B), quelle stratégie d'évaluation est la plus appropriée ?",options:["Utiliser uniquement l'accuracy globale","Se concentrer sur la précision de la classe majoritaire","Utiliser l'AUC-ROC et l'Average Precision avec validation stratifiée","Équilibrer artificiellement le dataset de test"],correctAnswer:2,explanation:"Pour les classes déséquilibrées, l'AUC-ROC et l'Average Precision sont les métriques les plus robustes car elles évaluent la capacité du modèle à distinguer les classes indépendamment du seuil de décision. La validation stratifiée preserve la proportion des classes dans chaque fold.",difficulty:"difficile"}),e.jsx(M,{question:"Qu'est-ce qui caractérise le mieux le surapprentissage (overfitting) dans un modèle de Machine Learning ?",options:["Le modèle a une faible précision sur les données d'entraînement et de test","Le modèle a une haute précision sur l'entraînement mais faible sur le test","Le modèle prend trop de temps à s'entraîner","Le modèle a besoin de plus de données d'entraînement"],correctAnswer:1,explanation:"Le surapprentissage se caractérise par un modèle qui 'mémorise' les données d'entraînement au lieu d'apprendre des patterns généralisables. Il obtient donc d'excellents résultats sur les données qu'il a vues (entraînement) mais échoue sur de nouvelles données (test). C'est le signe d'un modèle trop complexe pour la quantité de données disponible.",difficulty:"moyen"})]}),e.jsx(u,{title:"🎯 Projet Guidé : Système de Recommandation E-commerce",type:"exercice",children:e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-xl font-medium mb-4",children:"🚀 Créons ensemble un système de recommandation complet pour une plateforme e-commerce !"}),e.jsx("p",{className:"text-gray-600",children:"Projet fil rouge avec données réelles, défis techniques et impact business"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all duration-300",children:[e.jsx("div",{className:"text-2xl mb-3",children:"📊"}),e.jsx("h4",{className:"font-bold text-blue-800 mb-2",children:"Étape 1 : Analyse des Données"}),e.jsxs("div",{className:"text-sm space-y-2",children:[e.jsx("p",{children:e.jsx("strong",{children:"Données :"})}),e.jsxs("ul",{className:"list-disc pl-4 space-y-1",children:[e.jsx("li",{children:"1M+ interactions utilisateur-produit"}),e.jsx("li",{children:"100k utilisateurs, 50k produits"}),e.jsx("li",{children:"Métadonnées : catégories, prix, marques"}),e.jsx("li",{children:"Historique temporel sur 2 ans"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200 hover:shadow-lg transition-all duration-300",children:[e.jsx("div",{className:"text-2xl mb-3",children:"🔧"}),e.jsx("h4",{className:"font-bold text-green-800 mb-2",children:"Étape 2 : Feature Engineering"}),e.jsxs("div",{className:"text-sm space-y-2",children:[e.jsx("p",{children:e.jsx("strong",{children:"Features avancées :"})}),e.jsxs("ul",{className:"list-disc pl-4 space-y-1",children:[e.jsx("li",{children:"Embeddings produits (Word2Vec)"}),e.jsx("li",{children:"Patterns temporels saisonniers"}),e.jsx("li",{children:"Similarité collaborative"}),e.jsx("li",{children:"Profils comportementaux"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all duration-300",children:[e.jsx("div",{className:"text-2xl mb-3",children:"🤖"}),e.jsx("h4",{className:"font-bold text-purple-800 mb-2",children:"Étape 3 : Modélisation"}),e.jsxs("div",{className:"text-sm space-y-2",children:[e.jsx("p",{children:e.jsx("strong",{children:"Approches :"})}),e.jsxs("ul",{className:"list-disc pl-4 space-y-1",children:[e.jsx("li",{children:"Matrix Factorization (SVD++)"}),e.jsx("li",{children:"Deep Learning (Neural CF)"}),e.jsx("li",{children:"Ensemble hybride"}),e.jsx("li",{children:"Real-time serving"})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-200 hover:shadow-lg transition-all duration-300",children:[e.jsx("div",{className:"text-2xl mb-3",children:"📈"}),e.jsx("h4",{className:"font-bold text-red-800 mb-2",children:"Étape 4 : Évaluation Business"}),e.jsxs("div",{className:"text-sm space-y-2",children:[e.jsx("p",{children:e.jsx("strong",{children:"Métriques :"})}),e.jsxs("ul",{className:"list-disc pl-4 space-y-1",children:[e.jsx("li",{children:"CTR (Click-Through Rate)"}),e.jsx("li",{children:"Conversion rate"}),e.jsx("li",{children:"Revenue lift"}),e.jsx("li",{children:"A/B testing"})]})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-xl border-2 border-indigo-200",children:[e.jsx("h4",{className:"font-bold text-indigo-800 mb-6 text-xl text-center",children:"🎯 Défis Techniques à Résoudre"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[e.jsx("h5",{className:"font-bold text-red-600 mb-3",children:"🚨 Cold Start Problem"}),e.jsx("p",{className:"text-sm mb-3",children:"Comment recommander à un nouvel utilisateur sans historique ?"}),e.jsx("div",{className:"bg-red-50 p-3 rounded",children:e.jsxs("p",{className:"text-xs",children:[e.jsx("strong",{children:"Solution :"})," Utiliser les métadonnées, données démographiques et popularity-based recommendations"]})})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[e.jsx("h5",{className:"font-bold text-blue-600 mb-3",children:"⚡ Scalabilité"}),e.jsx("p",{className:"text-sm mb-3",children:"Servir 10k+ requêtes/seconde en temps réel ?"}),e.jsx("div",{className:"bg-blue-50 p-3 rounded",children:e.jsxs("p",{className:"text-xs",children:[e.jsx("strong",{children:"Solution :"})," Pre-computing, caching, approximate algorithms (LSH)"]})})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[e.jsx("h5",{className:"font-bold text-green-600 mb-3",children:"🎭 Diversité vs Précision"}),e.jsx("p",{className:"text-sm mb-3",children:"Équilibrer recommendations précises et découverte ?"}),e.jsx("div",{className:"bg-green-50 p-3 rounded",children:e.jsxs("p",{className:"text-xs",children:[e.jsx("strong",{children:"Solution :"})," Multi-objective optimization, exploration vs exploitation"]})})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg",children:[e.jsx("h5",{className:"font-bold text-purple-600 mb-3",children:"📊 Données Sparse"}),e.jsx("p",{className:"text-sm mb-3",children:"99%+ de la matrice user-item est vide ?"}),e.jsx("div",{className:"bg-purple-50 p-3 rounded",children:e.jsxs("p",{className:"text-xs",children:[e.jsx("strong",{children:"Solution :"})," Matrix factorization, implicit feedback, side information"]})})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-xl border-2 border-yellow-200",children:[e.jsx("h4",{className:"font-bold text-orange-800 mb-4 text-center",children:"🎊 Challenge Bonus : Impact Business"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-center",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg",children:[e.jsx("div",{className:"text-3xl font-bold text-green-600",children:"+23%"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Augmentation des ventes"})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg",children:[e.jsx("div",{className:"text-3xl font-bold text-blue-600",children:"+35%"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Engagement utilisateur"})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg",children:[e.jsx("div",{className:"text-3xl font-bold text-purple-600",children:"€2.1M"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Revenue supplémentaire annuel"})]})]}),e.jsxs("p",{className:"text-center mt-4 text-sm text-gray-700",children:[e.jsx("strong",{children:"Objectif :"})," Implémenter et déployer un système qui génère un ROI mesurable ! 🚀"]})]})]})}),e.jsx(u,{title:"🛠️ Ressources et Outils Professionnels",type:"rappel",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-xl border hover:shadow-lg transition-all duration-300",children:[e.jsxs("h4",{className:"font-bold text-blue-600 mb-3 flex items-center gap-2",children:[e.jsx(S,{className:"h-5 w-5"}),"Notebooks Jupyter"]}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Environnement interactif pour l'expérimentation"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(q,{className:"h-4 w-4 text-blue-500"}),e.jsx("a",{href:"https://jupyter.org",className:"text-blue-500 text-sm hover:underline",children:"jupyter.org"})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-xl border hover:shadow-lg transition-all duration-300",children:[e.jsxs("h4",{className:"font-bold text-green-600 mb-3 flex items-center gap-2",children:[e.jsx(A,{className:"h-5 w-5"}),"MLflow"]}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Suivi et gestion des expériences ML"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(q,{className:"h-4 w-4 text-green-500"}),e.jsx("a",{href:"https://mlflow.org",className:"text-green-500 text-sm hover:underline",children:"mlflow.org"})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-xl border hover:shadow-lg transition-all duration-300",children:[e.jsxs("h4",{className:"font-bold text-purple-600 mb-3 flex items-center gap-2",children:[e.jsx(v,{className:"h-5 w-5"}),"TensorBoard"]}),e.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Visualisation des métriques d'entraînement"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(q,{className:"h-4 w-4 text-purple-500"}),e.jsx("a",{href:"https://tensorboard.dev",className:"text-purple-500 text-sm hover:underline",children:"tensorboard.dev"})]})]})]})})]})},Se=()=>{const{activeSection:s}=he();return e.jsxs("div",{className:"space-y-16",children:[e.jsx("div",{className:"block",children:e.jsx(_e,{})}),e.jsx("div",{className:"block",children:e.jsx(ge,{})}),e.jsx("div",{className:"block",children:e.jsx(fe,{})}),e.jsx("div",{className:"block",children:e.jsx(be,{})}),e.jsx("div",{className:"block",children:e.jsx(je,{})}),e.jsx("div",{className:"block",children:e.jsx(Ne,{})}),e.jsx("div",{className:"block",children:e.jsx(ye,{})})]})},cs=()=>{const s=["introduction","advanced-courses","supervised","unsupervised","evaluation","deep-learning","exercises"],{currentSection:a}=de(s);ce();const b=[{title:"Introduction au ML",href:"#introduction",isActive:a==="introduction",icon:e.jsx(X,{className:"h-4 w-4"})},{title:"Cours Approfondis",href:"#advanced-courses",isActive:a==="advanced-courses",icon:e.jsx(me,{className:"h-4 w-4"})},{title:"Apprentissage supervisé",href:"#supervised",isActive:a==="supervised",icon:e.jsx(K,{className:"h-4 w-4"})},{title:"Apprentissage non supervisé",href:"#unsupervised",isActive:a==="unsupervised",icon:e.jsx(H,{className:"h-4 w-4"})},{title:"Évaluation des modèles",href:"#evaluation",isActive:a==="evaluation",icon:e.jsx(ue,{className:"h-4 w-4"})},{title:"Deep Learning",href:"#deep-learning",isActive:a==="deep-learning",icon:e.jsx(pe,{className:"h-4 w-4"})},{title:"Exercices pratiques",href:"#practical-exercises",isActive:a==="exercises",icon:e.jsx(S,{className:"h-4 w-4"})}];return e.jsx(xe,{children:e.jsx(Z,{title:"Machine Learning",backLink:{href:"/tools",label:"Retour aux outils"},sidebar:{items:b},children:e.jsxs("section",{className:"py-8",children:[e.jsx(oe,{variant:"page",title:"Machine Learning",description:"Maîtrisez l'art de l'apprentissage automatique avec des cours interactifs, des exercices pratiques et des projets concrets.",icon:X}),e.jsx(Se,{})]})})})};export{cs as default};

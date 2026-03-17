---
title: Sleeping IA
category:
  - university
  - opensource
path_id: sleeping-ia
date: 2025-03-17T10:00:00.000Z
image: /images/projects/SleepingIA/sleepingia.png
description: "Comment l'intelligence artificielle peut-elle nous aider à mieux comprendre notre sommeil ? Ce projet combine Machine Learning prédictif et IA générative pour analyser le profil des utilisateurs, détecter d'éventuels troubles et fournir des conseils personnalisés."
technologies:
  - Python (Scikit-Learn)
  - LLM / IA Générative
team:
  - Alexandre VILLANI
  - Cédric COLIN
  - Marvyn LEVIN
project_categories:
  - Data Science & ML
  - Développement Web
links:
  github: https://github.com/marvynlevin/sleepDeprivation
---

> Réalisé à la croisée de la data science et du développement web, ce projet avait pour ambition de transformer des données de santé complexes en un outil de diagnostic préventif et de conseil accessible à tous, grâce à la puissance combinée du Machine Learning et de l'IA générative.

# Sleeping IA : Prédire et accompagner les troubles du sommeil

**Plus qu'un simple algorithme de classification, SleepingIA est un véritable assistant de santé préventive.** Notre mission était de concevoir un pipeline complet allant de l'analyse exploratoire de données médicales jusqu'à la restitution d'un bilan de santé compréhensible par l'utilisateur final.

L’objectif était double : identifier avec précision la présence de troubles du sommeil majeurs (**Insomnie** ou **Apnée du sommeil**) face à un profil sain, et fournir des **recommandations d'hygiène de vie sur-mesure** générées dynamiquement en fonction du métier et des habitudes de l'utilisateur.

---

<Tondeuse image="/images/projects/SleepingIA/clusters.png" ratio="1/3">

## Exploration et Identification des Profils

Avant de pouvoir diagnostiquer, il fallait comprendre la structure cachée de nos données de santé. Nous avons commencé par une phase d'apprentissage non supervisé en appliquant un algorithme de **clustering K-Means (k=3)**. 

Pour rendre ces regroupements observables, nous avons utilisé une **Analyse en Composantes Principales (PCA)**. Cette réduction de dimensionnalité nous a permis de visualiser distinctement trois grands groupes de patients sur un plan en 2D, confirmant ainsi que des profils physiologiques clairs se détachaient naturellement du jeu de données.

</Tondeuse>

<br>

---

<Tondeuse image="/images/projects/SleepingIA/cluster.png" :inverse="true" ratio="1/3">

## L'interprétation clinique des Clusters

Une fois les groupes isolés, il fallait leur donner du sens. Nous avons généré une **Heatmap des caractéristiques moyennes** pour profiler chaque cluster. Les résultats furent très parlants :

Le **Cluster 1**, par exemple, met en évidence des indicateurs critiques : un niveau de stress élevé (5.5), une pression artérielle systolique alarmante (139.6) et un rythme cardiaque supérieur à la moyenne. À l'inverse, le **Cluster 0** représente un profil beaucoup plus sain avec une excellente qualité de sommeil et une activité physique modérée. Cette étape a été cruciale pour valider nos hypothèses médicales avant de passer à la prédiction.

</Tondeuse>

<br>

---

<Tondeuse image="/images/projects/SleepingIA/matrice.png" ratio="1/3">

## De la donnée brute à la prédiction médicale

Le cœur analytique du projet repose sur un modèle d'apprentissage automatique robuste. Avant de prédire, nous avons mené une étude approfondie via un **clustering K-Means (k=3)** visualisé par une réduction de dimensionnalité (PCA). Cela nous a permis d'isoler des profils de patients types en analysant les corrélations entre l'âge, la pression artérielle (Systolique/Diastolique), le rythme cardiaque et le niveau de stress.

Nous avons ensuite entraîné un modèle de classification supervisée. Comme en témoigne notre matrice de confusion, le modèle excelle dans la discrimination des trois classes cibles : *Healthy* (990 prédictions correctes), *Insomnia* (959) et *Sleep Apnea* (947), avec un taux de faux positifs extrêmement faible.

</Tondeuse>

<br>

---

<Tondeuse image="/images/projects/SleepingIA/interface.png" :inverse="true" ratio="1/3">

## Interface clinique et IA Générative

Pour rendre cette puissance de calcul accessible, nous avons développé une **interface utilisateur moderne et réactive**. L'utilisateur (ou le praticien) y saisit ses biométriques journalières : qualité du sommeil, activité physique, profession ou encore IMC.

Une fois la prédiction établie (ex: profil *SAIN* pour un ingénieur logiciel dormant 9h), la véritable innovation entre en jeu : l'**IA Générative**. Le système rédige instantanément un compte-rendu médical vulgarisé. Il ne se contente pas de donner un résultat brut, mais croise les données (métier sédentaire, exposition aux écrans) pour formuler des conseils préventifs concrets, comme la déconnexion numérique avant le coucher ou l'augmentation progressive du nombre de pas journaliers.

</Tondeuse>

---

## Le défi de l'interprétabilité et de l'intégration

Au-delà de la performance brute des modèles, la complexité de ce projet résidait dans le **"Prompt Engineering"** et la sécurité algorithmique. L'IA générative devait impérativement rester dans son rôle de conseiller d'hygiène de vie sans franchir la ligne de la prescription médicale stricte. Nous avons dû concevoir des garde-fous stricts dans la génération du texte.

Sur le plan technique, le défi majeur a été de créer un pont fluide entre notre environnement de Data Science (Python) et notre interface utilisateur (JavaScript). La création d'une API robuste a été la clé pour orchestrer la classification instantanée et la requête vers le LLM sans impacter l'expérience utilisateur.

## Stack Technique Détaillée

Pour supporter ce double système (Prédiction ML + Génération de texte), nous avons mis en place l'architecture suivante :

| Domaine | Technologie | Usage |
| :--- | :--- | :--- |
| **Machine Learning** | Python, Scikit-Learn | Clustering (K-Means), Modèle de classification prédictif |
| **Analyse de Données** | Pandas, Seaborn | Nettoyage, normalisation et visualisation (Heatmap, PCA) |
| **IA Générative** | API LLM (OpenAI/Gemini) | Génération du compte-rendu et des recommandations personnalisées |
| **Backend / API** | Python (FastAPI ou Flask) | Exposition des modèles ML en API REST |
| **Frontend** | Vue.js 3 | Interface interactive (formulaires dynamiques, sliders) |
| **Styling** | TailwindCSS | Design sombre, moderne et ergonomie des tableaux de bord |
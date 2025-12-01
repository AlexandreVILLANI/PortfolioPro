---
title: Firewatch
category:
  - university
  - opensource
path_id: firewatch
date: 2025-11-15T12:56:10.000Z
image: /images/projects/firewatch/iut_firewatch.jpg
description: "Avec le dérèglement climatique, les forêts ont de plus en plus chaud. Et s'il était possible de détecter les feux de forêts avant qu'ils soient dévastateurs ? C'est l'objectif final de ce projet universitaire aux nombreuses facettes."
technologies:
  - Vue.JS 3
  - Java
  - Node.js & Express
  - Python (IA)
  - C++ (Arduino/ESP32)
  - Docker
  - Jest / Junit (tests)
team:
  - Cédric COLIN
  - Marvyn LEVIN
  - Anna GAIFFE
  - Sugdenaz EKICI
  - Alexandre VILLANI
project_categories:
  - Fullstack
  - IoT & Embarqué
  - Architecture Logicielle
illustrations:
  - /images/projects/firewatch/maquette_mobile.png
  - /images/projects/firewatch/controller_firewatch.jpg
---

> ⚠️ Ce projet est actuellement en phase de développement actif. L'essentiel des efforts se concentre pour l'instant sur l'architecture backend (ingestion, analyse et persistance des données).

# FireWatch : Système proactif de lutte contre les incendies

**Firewatch est une réponse technologique globale pour minimiser le délai critique entre le départ d'un feu et l'arrivée des secours.** Dans le cadre de notre SAE de 3ème année, nous avons conçu cet écosystème qui combine surveillance par intelligence artificielle et capteurs IoT. L'objectif est simple : offrir aux gestionnaires forestiers un outil de détection précoce et d'intervention chirurgicale.

> **Qu'est-ce qu'une SAE ?**<br>
> Il s'agit d'une Situation d'Apprentissage et d'Évaluation. C'est un projet académique d'envergure, réalisé en équipe, qui simule une commande professionnelle avec un cahier des charges strict.

---

<Tondeuse image="/images/projects/firewatch/mobile.png" ratio="1/4">

## Surveillance optique et analyse par IA

La première ligne de défense repose sur une **observation constante de la canopée**. Nous combinons des caméras fixes sur les points hauts pour scanner l'horizon à la recherche de fumées suspectes. Nous impliquons également les citoyens via une application mobile permettant aux randonneurs de signaler des anomalies géolocalisées.

Pour éviter la surcharge d'informations, nous avons développé une chaîne de traitement automatisée capable de qualifier ces alertes :

1. **Centralisation des flux :** Serveurs dédiés à la réception en temps réel des flux vidéo (caméras) et des photos utilisateurs.
2. **Traitement intelligent :** Un moteur d'analyse (Python) utilise un modèle de **Computer Vision** entraîné pour distinguer la fumée et les flammes des fausses alertes (nuages, brume), même en conditions dégradées.
3. **Aide à la décision :** Le superviseur reçoit une image annotée par l'IA (bounding boxes) accompagnée d'un score de probabilité pour validation instantanée.

Ce filtrage drastique garantit que les équipes d'intervention ne sont mobilisées que sur des menaces avérées, avec toutes les informations tactiques nécessaires.

</Tondeuse>

<br>

<Tondeuse image="/images/projects/firewatch/controller_firewatch.jpg" :inverse="true" ratio="1/4">

## IoT : La forêt connectée

En complément de la vision, nous déployons un réseau de sentinelles électroniques. Ce sont des modules autonomes basés sur **ESP32** (C++/Arduino), disséminés dans la végétation pour monitorer l'environnement en permanence.

L'un des défis majeurs a été l'ingénierie réseau. Pour gérer l'afflux simultané de données (Température, Hygrométrie, CO₂, Luminosité), nous avons architecturé un protocole de communication sur-mesure, optimisé pour la fiabilité et la sobriété énergétique.

L'agrégation de ces métriques permet de générer un **Indice de Risque (IDR)** en temps réel. Si les conditions deviennent critiques, le système déclenche une alerte préventive avant même qu'une flamme ne soit visible.

Enfin, un dashboard technique permet de monitorer la santé du parc IoT (batteries, latence) pour assurer une couverture opérationnelle sans faille.

</Tondeuse>

---

## Architecture Micro-services et Challenges

Pour bâtir un système résilient, nous avons fait le choix d'une architecture conteneurisée (**Docker**), tirant parti du meilleur de chaque langage.

Le serveur d'ingestion IoT a été codé en **Java**. Sa gestion robuste du multi-threading et des sockets TCP est idéale pour maintenir des connexions stables avec une flotte de microcontrôleurs.

Pour l'API et le service des données, nous avons opté pour **Node.js/Express**. Son architecture événementielle excelle pour traiter les requêtes asynchrones vers la base de données et servir les interfaces utilisateurs.

Le véritable défi a résidé dans l'orchestration de ces briques hétérogènes. Faire dialoguer le serveur Java (flux bruts), les scripts Python (IA) et l'API Node (distribution) a nécessité une conception rigoureuse des interfaces de communication.

## Stack Technique Détaillée

Pour répondre aux contraintes de performance et de scalabilité, nous avons sélectionné les technologies suivantes :

| Domaine | Technologie | Rôle principal |
| :--- | :--- | :--- |
| **Frontend** | Vue.js 3 & TailwindCSS | Interface utilisateur et Dataviz (Apache ECharts) |
| **Backend API** | Node.js & Express | Logique métier et distribution des données |
| **Backend IoT** | Java (TCP Sockets) | Ingestion haute performance des données capteurs |
| **IA** | Python | Analyse d'image et Computer Vision |
| **Embarqué** | C++ (ESP32) | Programmation des capteurs autonomes |
| **Data** | MongoDB | Stockage hybride (Time-series et Documents) |
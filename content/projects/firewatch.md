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

Dans le cadre de notre SAE de 3ème année, nous nous attaquons à une course contre la montre vitale : comment minimiser le temps de latence entre l'ignition d'un feu de forêt et l'arrivée des pompiers sur site ?

> **Qu'est-ce qu'une SAE ?**<br>
> Il s'agit d'une Situation d'Apprentissage et d'Évaluation. C'est un projet académique d'envergure, réalisé en équipe, qui simule une commande professionnelle avec un cahier des charges strict. Ces projets jalonnent notre formation pour valider nos compétences en conditions réelles.

<br>

Notre réponse technique : _Firewatch_.

Bien plus qu'un simple tableau de bord, Firewatch est un écosystème de surveillance complet. En maillant le territoire forestier de capteurs connectés, nous offrons aux gestionnaires et aux secours les outils nécessaires pour anticiper les risques, détecter les anomalies précocement et intervenir avec une précision chirurgicale.

---

<Tondeuse image="/images/projects/firewatch/mobile.png" ratio="1/4">

### Surveillance optique et analyse par IA

La première ligne de défense repose sur une observation constante de la canopée. Nous combinons des caméras fixes sur les points hauts pour scanner l'horizon à la recherche de fumées suspectes. Nous impliquons également les citoyens : une application mobile permet aux randonneurs de devenir acteurs de la prévention en signalant des anomalies géolocalisées.

Pour éviter la surcharge d'informations, nous avons développé une chaîne de traitement automatisée capable de qualifier ces alertes :

1. **Centralisation des flux :** Serveurs dédiés à la réception en temps réel des flux vidéo (caméras) et des photos utilisateurs.
2. **Traitement intelligent :** Un moteur d'analyse (Python) utilise un modèle de Computer Vision entraîné pour distinguer la fumée et les flammes des fausses alertes (nuages, brume, reflets), même en conditions dégradées.
3. **Aide à la décision :** Le superviseur reçoit une image annotée par l'IA (bounding boxes) accompagnée d'un score de probabilité. Il peut ainsi valider ou écarter l'alerte instantanément.

Ce filtrage drastique des faux positifs garantit que les équipes d'intervention ne sont mobilisées que sur des menaces avérées, avec toutes les informations tactiques nécessaires (coordonnées GPS exactes, nature du feu, visuel terrain).

</Tondeuse>

<br>

<Tondeuse image="/images/projects/firewatch/controller_firewatch.jpg" :inverse="true" ratio="1/4">

### IoT : La forêt connectée

En complément de la vision, nous déployons un réseau de sentinelles électroniques : des modules autonomes basés sur ESP32 (développés en C++/Arduino). Disséminés dans la végétation, ils monitorent l'environnement en permanence.

L'un des défis majeurs a été l'ingénierie réseau : comment gérer l'afflux simultané de données provenant de dizaines de capteurs (Température, Hygrométrie, CO₂, Luminosité) ? Nous avons dû architecturer un protocole de communication sur-mesure, optimisé pour la fiabilité et la sobriété énergétique.

L'agrégation de ces métriques permet de générer un **Indice de Risque (IDR)** en temps réel. Si les conditions deviennent critiques, le système déclenche une alerte préventive avant même qu'une flamme ne soit visible.

Enfin, pour assurer la pérennité du dispositif, un dashboard technique permet de monitorer la santé du parc IoT : état des batteries, latence réseau et positionnement cartographique. Cela garantit une couverture opérationnelle sans faille, même en milieu hostile.

</Tondeuse>

---

### Architecture Micro-services et Challenges

Pour bâtir un système résilient et évolutif, nous avons fait le choix d'une architecture conteneurisée (Docker), tirant parti du meilleur de chaque langage. Le serveur d'ingestion IoT a été codé en **Java** : sa gestion robuste du multi-threading et des sockets TCP est idéale pour maintenir des connexions stables avec une flotte de microcontrôleurs.

Pour l'API et le service des données au frontend, nous avons opté pour **Node.js/Express**. Son architecture événementielle non-bloquante excelle pour traiter les requêtes asynchrones vers MongoDB et servir les interfaces utilisateurs. Le véritable défi a résidé dans l'orchestration de ces briques hétérogènes : faire dialoguer le serveur Java (flux bruts), les scripts Python (IA) et l'API Node (distribution) de manière fluide a nécessité une conception rigoureuse des interfaces de communication.

### Stack Technique

* **Frontend :** Vue.js 3 couplé à TailwindCSS pour l'UI, et Apache ECharts pour la dataviz.
* **Backend API :** Node.js avec Express et Mongoose pour la logique métier.
* **Backend IoT :** Serveur TCP multi-thread en Java pour la haute performance.
* **Embarqué :** ESP32 (C++) avec sondes DHT22 (Climat) et SCD41 (CO2).
* **Data :** MongoDB pour le stockage hybride des séries temporelles (mesures) et des documents (métadonnées).
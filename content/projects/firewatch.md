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

> ⚠️ Le projet est encore à ses débuts et la majorité du travail relève des coulisses (
> récolte, traitement, et stockage
> des données).

# FireWatch : Architecture de surveillance préventive

Dans le cadre de la SAE de 3e année, nous devons répondre à une problématique critique : comment
réduire le délai entre le départ d'un feu de forêt et l'intervention des secours ?


> **C'est quoi une SAE ?**<br>
> Une SAE, c'est un projet d'évaluation dans le cadre de la formation. Nous avons un cahier des charges et un ensemble
> de consignes à respecter. Ce travail se fait toujours en équipe, et il peut y avoir entre plusieurs et une sae par
> année, selon l'année de formation.

<br>

Notre solution? _Firewatch_

Firewatch est autant un tableau de bord qu'un écosystème complet pour la prévention et détection de feux de forêts.
Grâce à ses capteurs embarqués disséminés à travers la forêt, l'objectif final est de fournir aux gestionnaires
forestiers et services de secours de prévenir, détecter prématurément et intervenir dans des délais cours.

---

<Tondeuse image="/images/projects/firewatch/maquette_mobile.png" ratio="1/4">

### Détection visuelle et analyse à l'IA

Le dispositif repose avant tout sur une détection précoce et une surveillance continue de l’environnement forestier.
Grâce à des caméras installées sur des tours de vigie ainsi qu’à l’utilisation de drones autonomes, il est possible de
repérer les premiers panaches de fumée et de signaler immédiatement un potentiel départ de feu. Les usagers eux-mêmes
participent à la vigilance collective : une application mobile simple d’utilisation permet aux randonneurs d’envoyer des
photos géolocalisées afin de contribuer à l’alerte.

La fiabilité du système repose ensuite sur la qualification rapide et automatisée des alertes recueillies. Pour cela,
nous avons conçu un pipeline complet de traitement d’images :

1. **Ingestion des données :** Les caméras fixes, drones ou téléphones des utilisateurs transmettent leurs images en
   temps réel à un serveur spécialisé.
2. **Analyse intelligente :** Un script Python exécute un modèle d’intelligence artificielle entraîné à reconnaître les
   caractéristiques visuelles associées à la fumée et aux flammes, même en conditions difficiles (contre-jour,
   brouillard, luminosité variable…).
3. **Décision assistée :** L’interface de supervision affiche les images annotées par l’IA, avec les zones détectées
   encadrées et un indice de confiance. L’opérateur peut alors valider ou rejeter l’alerte d’un simple clic, assurant
   réactivité et fiabilité.

Ce module permet de limiter efficacement les faux positifs et de transmettre aux services d’intervention des données
fiables et directement exploitables, incluant la localisation GPS précise, le type de feu suspecté et la source de
l’alerte.
Ainsi, l’intervention peut être déclenchée plus tôt, mieux ciblée et potentiellement plus efficace dans la lutte contre
les incendies.

</Tondeuse>

<br>

<Tondeuse image="/images/projects/firewatch/controller_firewatch.jpg" :inverse="true" ratio="1/4">

### IoT : Du capteur à la donnée

Pour renforcer la prévention, nous avons mis en place un réseau de capteurs autonomes basés sur des microcontrôleurs
ESP32, programmés en C++ via l’environnement Arduino. Ces modules, répartis dans la zone forestière, collectent en
continu des données environnementales essentielles.

Le principal défi technique a consisté à optimiser la gestion du trafic de données, car plusieurs dizaines d’ESP32
transmettent simultanément des mesures brutes (température, humidité, taux de CO₂, luminosité, etc.). Nous avons donc dû
concevoir un protocole de communication adapté, garantissant à la fois fiabilité, faible consommation énergétique et
absence de saturation réseau.

L’ensemble de ces mesures permet de calculer un **Indice de Risque** (IDR) dynamique, reflétant en temps réel la
probabilité de départ de feu. Si cet indice dépasse un seuil défini, le système génère automatiquement une alerte
préventive, avant même l’apparition visible de fumée.

Enfin, une interface d’administration assure la supervision du parc de capteurs : elle affiche l’état de
connexion de chaque module, le niveau de batterie, la dernière communication reçue ainsi que son emplacement sur la
carte. Cette surveillance garantit que le réseau reste opérationnel et réactif, même dans des zones isolées.

</Tondeuse>


---

### Choix d'architecture et Défis Techniques_

Pour garantir la robustesse et la scalabilité du système, nous avons opté pour une architecture micro-services
dockerisée, où chaque technologie est utilisée en fonction de ses points forts spécifiques. Le serveur central de
réception des données a été développé en Java, afin de bénéficier de la gestion native des threads multiples et de
maintenir des connexions TCP stables avec l’ensemble des microcontrôleurs. Ce choix s’est imposé pour assurer la
fiabilité de la collecte des données, un composant critique de tout le système.

Pour la partie API qui sert le frontend, nous avons privilégié Node.js avec Express. Son modèle non-bloquant et orienté
I/O est particulièrement adapté pour gérer les nombreuses requêtes vers la base de données MongoDB et assurer une
distribution fluide de l’information aux interfaces utilisateurs. L’un des défis majeurs a été d’orchestrer efficacement
la communication entre le serveur Java, chargé de recevoir les flux bruts de capteurs, les scripts Python responsables
de l’analyse et du traitement des données, et l’API Node qui centralise et distribue les résultats. La coordination de
ces trois composants hétérogènes a été essentielle pour garantir une chaîne de traitement rapide et fiable.

### Stack Technique Détaillée

Le frontend repose sur Vue.js 3 associés à Tailwind pour le style et Apache ECharts pour la visualisation des données
collectées par les capteurs. Le backend API utilise Node.js, Express et Mongoose pour gérer la logique applicative et
les interactions avec la base de données. Le backend IoT, quant à lui, est basé sur Java, avec un serveur TCP
multi-thread capable de supporter une charge importante de connexions simultanées. Côté embarqué, le système repose sur
des ESP32 programmés en C++, équipés de capteurs DHT22 et SCD41 pour mesurer température, humidité et CO2. Toutes les
données sont centralisées dans MongoDB, qui stocke à la fois les séries temporelles et les métadonnées associées,
permettant un suivi complet et une analyse fine de l’état du parc de capteurs.
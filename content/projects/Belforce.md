---
title: Belforce
category:
  - university
  - opensource
path_id: belforce
date: 2025-11-15T12:56:10.000Z
image: /images/projects/Belforce/Belforce.jpg
description: "Comment mettre en valeur le patrimoine d’une ville à travers une plateforme moderne et accessible ? Ce projet vise à professionnaliser la promotion touristique de Belfort grâce à un site web complet pour les habitants, les visiteurs et les acteurs locaux."
technologies:
  - Vue.JS
  - Node.js & Express
  - PostgreSQL
  - Méthode Agile
team:
  - Alexandre VILLANI
  - Alexis MARICHY
  - Christ BAHOUASSILA
  - Denadi Aurelie AZONNOUDO
  - Mehdi EZ-ZOUAK
project_categories:
  - Développement Web
  - Fullstack
links:
  github: https://github.com/AlexandreVILLANI/SaeTourisme
---

> Réalisé en équipe de cinq étudiants, ce projet avait pour ambition de dépasser le cadre scolaire pour proposer une solution d'envergure professionnelle, capable de dynamiser et structurer l'offre touristique d'un territoire.

# Belforce : Valoriser le territoire de Belfort

**Plus qu'une simple vitrine, Belforce est une plateforme centralisée de services.** Notre mission était de concevoir une application web full-stack capable de fluidifier les interactions entre trois acteurs clés : les touristes, les commerçants locaux et l'office de tourisme.

L’objectif était double : offrir aux visiteurs un **compagnon de voyage numérique** et fournir aux acteurs locaux des **outils de gestion performants**. Nous avons ainsi architecturé trois environnements interconnectés : le portail public de découverte, l'espace professionnel pour les partenaires, et le dashboard d'administration.

---

<Tondeuse image="/images/projects/Belforce/Prestation.jpg" ratio="1/3">

## Une gestion flexible de l'offre locale

Le cœur du système réside dans l'autonomie offerte aux acteurs économiques. Nous avons développé un **back-office complet** permettant aux prestataires de piloter leur activité. L'objectif était de couvrir une typologie d'offres très large : culture, gastronomie, hôtellerie ou événementiel.

Concrètement, un partenaire (restaurateur, gérant de musée) se connecte pour configurer ses services. Qu'il s'agisse de vendre des billets pour la Citadelle ou de réserver une table, chaque prestation dispose de paramètres ajustables en temps réel (créneaux horaires, stocks, tarifs) pour informer les visiteurs instantanément.

</Tondeuse>

<br>

<Tondeuse image="/images/projects/Belforce/Map.jpg" :inverse="true" ratio="1/3">

## Immersion et cartographie interactive

Pour l'administrateur comme pour le touriste, l'information doit être géolocalisée. Nous avons intégré une **carte interactive dynamique (Leaflet)** qui permet de situer les points d'intérêt à travers la ville. Plutôt que de chercher dans des listes, l'utilisateur explore Belfort visuellement pour trouver les activités autour de lui.

Côté administration, l'enjeu était la supervision du territoire. Le dashboard offre une vue d'ensemble sur l'attractivité de la ville grâce à des **statistiques de consultation et de réservation**. Ces données permettent de comprendre les flux touristiques et d'adapter la stratégie de promotion territoriale.

</Tondeuse>

---

## Le défi de la cohérence et de l'organisation

Au-delà du code, la complexité de ce projet résidait dans sa dimension collaborative. Travailler à cinq développeurs sur une application full-stack demande une rigueur constante. Nous avons adopté la **méthode Agile (Scrum)** pour rythmer nos sprints et synchroniser nos avancées.

Le défi technique majeur a été de maintenir une identité visuelle forte et une UX cohérente malgré la répartition des tâches (front-office vs back-office). L'utilisation stricte de règles CSS via **Tailwind** et la création de composants réutilisables sous Vue.js ont été clés pour garantir une expérience utilisateur unifiée.

## Stack Technique Détaillée

Pour supporter cette logique métier (réservations, rôles utilisateurs, cartographie), nous avons mis en place une architecture robuste :

| Domaine | Technologie | Usage |
| :--- | :--- | :--- |
| **Frontend** | Vue.js 3 | Interface réactive et composants modulaires |
| **Styling** | TailwindCSS | Cohérence visuelle et responsive design |
| **Backend** | Node.js & Express | API REST et logique métier |
| **Base de données** | PostgreSQL | Stockage relationnel et sécurisé des données |
| **Cartographie** | Leaflet | Affichage dynamique des points d'intérêt |
| **Gestion Projet** | Agile / Scrum | Organisation de l'équipe de 5 développeurs |
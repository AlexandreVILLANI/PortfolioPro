---
title: Belforce
category:
  - university
  - opensource
path_id: belforce
date: 2025-11-15T12:56:10.000Z
image: images/projects/Belforce/Belforce.jpg
description: "Comment mettre en valeur le patrimoine d’une ville à travers une plateforme moderne et accessible ?
Ce projet de deuxième année, nommé Belforce, vise à professionnaliser la promotion touristique de Belfort grâce à un site web complet à destination des habitants, des visiteurs et des acteurs locaux."
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
> Réalisé en équipe de cinq étudiants, ce projet avait pour ambition de dépasser le cadre scolaire pour proposer
> une solution d'envergure professionnelle, capable de dynamiser et structurer l'offre touristique d'un territoire.

# Belforce : Valoriser le territoire de Belfort

Un projet comme Belforce ne se limite pas à une simple vitrine de la ville. C’est une véritable plateforme centralisée
qu’il a fallu concevoir. Notre mission consistait à développer une application web full-stack
capable de fluidifier les interactions entre les touristes, les commerçants locaux et l'office de tourisme.

L’objectif était double : offrir aux visiteurs un compagnon de voyage numérique et fournir aux acteurs locaux des outils de gestion performants.
Nous avons ainsi conçu trois environnements interconnectés : le portail public pour découvrir la ville (La Citadelle, le Lion, les musées...),
un espace pro pour les partenaires (hôteliers, restaurateurs), et une interface d’administration pour superviser l'ensemble de l'écosystème.

---

<Tondeuse image="/images/projects/Belforce/Prestation.jpg" ratio="1/3">

## Une gestion flexible de l'offre locale

Le cœur du système réside dans l'autonomie offerte aux acteurs locaux. Nous avons développé un tableau de bord complet
permettant aux prestataires de piloter leur activité. L'idée était de couvrir une gamme très large d'offres,
allant de la culture à la gastronomie, en passant par l'hébergement.

Concrètement, un partenaire (comme un gérant de musée ou un restaurateur) peut se connecter pour configurer ses services.
Cela va de la vente de billets pour une visite guidée de la Citadelle, à la réservation d'une table, ou la location de vélos
pour parcourir la ville. Chaque prestation dispose de paramètres ajustables en temps réel (horaires, stocks, tarifs)
pour informer les visiteurs instantanément.

</Tondeuse>

<br>

<Tondeuse image="/images/projects/Belforce/Map.jpg" :inverse="true" ratio="1/3">

## Immersion et cartographie interactive

Pour l'administrateur comme pour le touriste, l'information doit être géolocalisée. Nous avons intégré une
carte interactive dynamique (Leaflet) qui permet de situer les points d'intérêt à travers la ville.
Plutôt que de chercher dans des listes, l'utilisateur explore Belfort visuellement pour trouver les activités
autour de lui.

Côté administration, l'enjeu était la supervision du territoire. Le dashboard administrateur offre une vue d'ensemble
sur l'attractivité de la ville grâce à des statistiques de consultation et de réservation. Ces données permettent
de comprendre les flux touristiques et d'identifier les lieux les plus prisés pour adapter la stratégie de promotion.

</Tondeuse>

---

## Le défi de la cohérence et de l'organisation

Au-delà du code, la complexité de ce projet résidait dans sa dimension collaborative.
Travailler à cinq développeurs sur une application full-stack demande une rigueur constante pour éviter la dette technique.
Nous avons adopté la méthode Agile (Scrum) pour rythmer nos sprints et synchroniser nos fonctionnalités.

Le défi technique majeur a été de maintenir une identité visuelle forte et une UX cohérente. Avec
plusieurs personnes travaillant simultanément sur des sections différentes (back-office pro, front-office visiteur),
le risque était d'obtenir une interface disparate. L'utilisation stricte de TailwindCSS et la création de composants
réutilisables (via Vue.js/Nuxt) ont été clés pour garantir une expérience utilisateur fluide et unifiée.
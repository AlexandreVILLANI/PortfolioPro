---
title: IronFitness
illustrations: []
image: /images/projects/IronFitness/IronFitness.jpg
description: "Votre salle de sport à Ronchamp : Activités collectives ou individuelles pour se remettre en forme, se dépasser et prendre soin de sa santé."
technologies:
  - Vue.js
  - Node.js
  - PostgreSQL
path_id: IronFitness
project_categories:
  - Développement Web - Fullstack
category:
  - stage
  - opensource
team:
  - Alexandre VILLANI
date: 2025-11-15T12:56:10.000Z
---

> Votre salle de sport à Ronchamp - Activités collectives ou individuelles pour se remettre en forme, se dépasser et prendre soin de sa santé.

# IronFitness : Digitaliser l'expérience sportive

**Plus qu'un site vitrine, IronFitness est le moteur numérique de la salle.** J'ai conçu et développé cette plateforme en **totale autonomie** durant mon **stage de deuxième année de BUT**, sur une période de **8 semaines**.

Ce projet avait pour ambition de créer un véritable écosystème digital pour accompagner l'ouverture de cette salle de sport à Ronchamp. La plateforme joue un double rôle critique : c'est un **outil marketing** puissant pour l'acquisition de nouveaux membres, mais aussi un **ERP métier** complet pour la gestion quotidienne des plannings et des adhérents.

---

<Tondeuse image="/images/projects/IronFitness/dashboard.jpg" ratio="1/3">

## Un écosystème en trois dimensions

L'architecture du site a été pensée pour servir trois audiences distinctes avec des interfaces dédiées :

1.  **Vitrine (Visiteurs) :** Une interface immersive pensée pour la conversion. Elle présente les coachs, les équipements et les abonnements avec un design dynamique pour inciter à l'inscription.
2.  **Espace Membre (Adhérents) :** Un tableau de bord personnel. Une fois connecté, l'utilisateur gère son profil, consulte le **planning temps réel** et réserve sa place aux cours collectifs (Zumba, Cross-training).
3.  **Back-Office (Administration) :** Le centre de contrôle. Comme illustré ci-contre, cette interface permet au gérant de piloter la salle en toute autonomie : modification des créneaux horaires, gestion des stocks boutique et administration des droits utilisateurs.

</Tondeuse>

---

## Stack Technique Détaillée

Pour supporter les contraintes de temps réel (réservation de cours) et de fiabilité des données, j'ai opté pour une architecture moderne :

| Domaine | Technologie | Rôle principal |
| :--- | :--- | :--- |
| **Frontend** | Vue.js | Interface réactive et navigation fluide (SPA) |
| **Backend** | Node.js | API performante et gestion des authentifications |
| **Base de données** | PostgreSQL | Stockage relationnel sécurisé (Transactions, Planning) |
| **Architecture** | Fullstack | Séparation claire entre client et serveur |
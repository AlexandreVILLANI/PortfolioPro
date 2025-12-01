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
  - other
  - opensource
team:
  - Alexandre VILLANI
date: 2025-11-15T12:56:10.000Z
---

# IronFitness : Le sport à Ronchamp

> **Votre salle de sport à Ronchamp - Activités collectives ou individuelles pour se remettre en forme, se dépasser et prendre soin de sa santé.**

Ce projet est une solution web complète développée pour **IronFitness**, une salle de sport située à Ronchamp. L'ambition était de dépasser le simple site vitrine pour créer un véritable écosystème numérique. La plateforme sert à la fois d'outil marketing pour attirer les nouveaux membres et d'outil de gestion quotidien pour le fonctionnement de la salle.

---

<Tondeuse image="/images/projects/IronFitness/dashboard.jpg" ratio="1/3">

## Une plateforme, trois dimensions

Le site a été conçu pour répondre aux besoins de trois types d'utilisateurs distincts, avec une attention particulière portée à la gestion interne.

1.  **Pour les Visiteurs (Vitrine) :** Une interface immersive présentant les différents cours, la boutique de produits et les formules d'abonnement.
2.  **Pour les Adhérents (Espace Membre) :** Une fois connecté, l'utilisateur accède à des fonctionnalités avancées : consultation du planning interactif en temps réel, gestion de ses cours personnalisés et suivi de son activité.
3.  **Pour le gérant (Administration) :** Comme illustré ci-contre, un back-office puissant rend le site entièrement modulaire. L'administrateur peut gérer le contenu, mettre à jour les plannings, ajouter des produits ou modifier les abonnements en toute autonomie, sans toucher au code.

</Tondeuse>

---

## Stack Technique

Pour supporter cette logique métier complexe (gestion utilisateurs, plannings dynamiques, catalogue), l'application repose sur une architecture robuste :

* **Vue.js :** Pour une expérience utilisateur fluide et réactive, essentielle pour la navigation dans les plannings.
* **Node.js :** Pour un backend performant capable de gérer les authentifications et la logique de réservation.
* **PostgreSQL :** Pour structurer et sécuriser les données critiques (comptes utilisateurs, transactions, historique des cours).
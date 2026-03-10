---
title: Mindful Journey
category:
  - other
path_id: mindfuljourney
date: 2026-01-20T12:56:10.000Z
image: /images/projects/BIP/MindfulJourney.png
description: "Comment utiliser la technologie mobile pour favoriser la détente et le bien-être au quotidien ? Ce projet consiste en la création d’une application mobile visant à offrir aux utilisateurs un espace numérique de relaxation."
technologies:
  - Flutter
  - Firebase
  - Freesound API
  - OAuth Google
team:
  - Alexandre VILLANI
  - Mohammad Alibrahim (étudiant Allemand)
  - Klaudia (étudiante Polonaise)
  - Pedro DALLE (étudiant Brésilien)
  
project_categories:
  - Développement Mobile
  - Application Mobile
links:
  github: https://github.com/
---

> Réalisé dans le cadre d’un **Blended Intensive Programme (BIP)** réunissant des étudiants de plusieurs universités européennes, ce projet avait pour objectif de concevoir une application mobile favorisant la détente et le bien-être.

# Mindful Journey : Une application mobile dédiée à la relaxation

**Mindful Journey est une application pensée pour offrir un moment de calme et de relaxation dans le quotidien des utilisateurs.** L’objectif était de concevoir une expérience simple et immersive permettant aux utilisateurs de se détendre grâce à différents contenus interactifs.

Le projet a été réalisé dans un **contexte international**, avec des étudiants venant de différents pays européens. Après plusieurs mois de cours en ligne consacrés à l’apprentissage de **Flutter**, le développement de l’application a été réalisé durant une **semaine de travail intensif en présentiel**.

---
<Tondeuse image="/images/projects/BIP/accueil.png" ratio="1/4">

## Une application centrée sur le bien-être



L’application propose plusieurs fonctionnalités visant à aider les utilisateurs à intégrer des moments de détente dans leur routine quotidienne.

Les utilisateurs peuvent notamment :

- écouter des **sons relaxants adaptés à leur humeur**
- suivre des **exercices de respiration guidée**
- pratiquer des **sessions de méditation**
- maintenir une **routine de relaxation grâce à un système de streak**

L’interface a été conçue pour être **minimaliste et apaisante**, afin de réduire les distractions et favoriser une expérience immersive.

</Tondeuse>

---

<Tondeuse image="/images/projects/BIP/music.png" :inverse="true" ratio="1/4">

## Des ambiances sonores adaptées grâce à l’API Freesound


Afin de proposer des contenus audio variés, nous avons intégré **l’API Freesound**. Cette API permet d’accéder à une large bibliothèque de sons et d’ambiances sonores.

L’application peut ainsi proposer aux utilisateurs des **musiques ou sons d’ambiance correspondant à leur mood**, comme :

- pluie
- forêt
- vagues
- ambiance nocturne

Cette approche permet de créer une expérience plus **personnalisée et immersive** pour la relaxation.

</Tondeuse>

---

## Notifications et suivi de routine

Pour encourager les utilisateurs à maintenir une habitude de relaxation, nous avons mis en place un **système de streak**.  

L’application envoie des **notifications** pour rappeler aux utilisateurs de réaliser leur session quotidienne de méditation ou de respiration.

Ce système permet de **motiver les utilisateurs à conserver une routine régulière**, ce qui est essentiel pour les applications de bien-être.

---

<Tondeuse image="/images/projects/BIP/login.png" ratio="1/3">

## Authentification sécurisée


Pour simplifier l’inscription et la connexion, nous avons intégré **l’authentification OAuth avec Google**.

Cela permet aux utilisateurs de :

- se connecter rapidement avec leur compte Google
- sécuriser leur profil
- synchroniser leurs données et leur progression.

</Tondeuse>

---

## Gestion des données avec Firebase

Le backend de l’application repose sur **Firebase**, qui nous permet de gérer efficacement les données utilisateurs et certaines fonctionnalités de l’application.

Firebase est utilisé pour :

- stocker les données liées aux utilisateurs
- gérer les sessions et l’authentification
- conserver la progression des streaks
- synchroniser les données entre les appareils.

---

<Tondeuse image="/images/projects/BIP/collaboration.png" :inverse="true" ratio="1/3">

## Une collaboration internationale

Ce projet a été réalisé par une **équipe de quatre étudiants issus de différents pays européens**.  

Travailler dans un contexte international nous a permis de développer des compétences importantes :

- communication en anglais dans un contexte technique
- collaboration entre étudiants de cultures différentes
- organisation du travail en équipe dans un temps limité.

Cette expérience a été particulièrement enrichissante, tant sur le plan **technique** que **humain**.

</Tondeuse>

---


## Stack Technique Détaillée

| Domaine | Technologie | Usage |
| :--- | :--- | :--- |
| **Framework Mobile** | Flutter | Développement de l’application mobile |
| **Langage** | Dart | Logique applicative |
| **Backend / BDD** | Firebase | Stockage et gestion des données |
| **API externe** | Freesound API | Accès aux ambiances sonores |
| **Authentification** | OAuth Google | Connexion sécurisée des utilisateurs |
| **Notifications** | Firebase Cloud Messaging | Rappels et gestion du streak |
| **Gestion Projet** | Agile | Organisation du travail en équipe |
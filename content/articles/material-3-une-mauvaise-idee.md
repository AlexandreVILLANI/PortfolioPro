---
title: Implémenter Material 3, une mauvaise idée ?
author: Cédric COLIN
---
# Pourquoi j'ai voulu faire ça ?

Dans mes projets perso comme dans mes projets universitaires, j’ai fini par réaliser que les interfaces sont souvent la bête noire des développeurs.  
C’est long, c’est pénible, il faut gérer mille exceptions selon l’appareil, les différences entre navigateurs, les API qui changent d’humeur, et je ne parle même pas de tout ce qui n’est pas visible au premier abord.

Créer ses conventions et un système de design cohérent demande du temps, et ce temps n’est pas toujours compatible avec les exigences d’un projet. L’exemple parfait est le projet [**24h du Mans**](/projects/24hmans)

## La découverte de flutter

Quand mon père m’a demandé une application de pêche ([Carnet de prise](/projects/carnet-prise)) pour Android, j’ai voulu tester Flutter. Et franchement, la claque. 
Avoir une cohérence visuelle automatique et uniforme sur toute l’app, ça change la vie. Difficile de faire n’importe quoi, difficile de sortir du cadre: presque reposant.

C’est ce qui m’a amené à m’intéresser de près à **Material 3**, les normes d’interface utilisées par Google.

## La motivation

Je voulais appliquer Material 3 à mes projets web… sauf qu’aucune librairie VueJS ne proposait une vraie implémentation complète. Dommage, mais ça m’a donné une idée: puisque personne ne l’avait fait, j’allais essayer moi-même.

J’avais du temps, beaucoup de temps, donc je me suis lancé dans la création d’une librairie Material 3 pour VueJS, avec l’idée de l’utiliser dans mes projets persos et universitaires.

# Les premières claques

Les ennuis sont arrivés très vite. Certaines parties des normes Material 3 sont terriblement complexes à implémenter, voire hors de portée quand on est seul.  

Ensuite est venu le problème de l’exhaustivité.  
Un bouton, par exemple. Simple, non ?  
Sauf qu’il existe en `XSmall`, `Small`, `Medium`, `Large`, `XLarge`, et en plus en variante remplie, surélevée, avec bordure ou en simple texte. Et chacun peut être composé d’une icône, d’un texte ou des deux.

En un rien de temps, on arrive à une soixantaine de variantes…  
Oui, ça s’automatise, mais quand la fiche de normes devient si longue que le navigateur galère à la charger la page, l’enthousiasme prend un coup.

Malgré ça, j’ai continué, jusqu’à obtenir un ensemble de composants suffisant pour construire des interfaces assez évoluées sans sacrifier ma santé mentale.
# Ce que j'ai appris ?

Autant illustrer plutôt que bavarder.

Voici une maquette Figma que j’avais fait **avant** de créer ma librairie Material:

![[crumble_before.png]]

Et voici la version **après** avoir implémenté Material à la main:

![[crumble_after.png]]

Les différences sautent aux yeux:
- les boutons et éléments interactifs sont plus grands, donc plus identifiables;
- les icônes sont uniformes;
- l’interface est mieux segmentée et plus lisible.

La seconde maquette n’est pas finie, mais si on se concentre sur la structure:
- la barre de recherche + tri est nettement plus utile;
- les “suggestive chips” ajoutent des actions rapides (filtrer);
- l’interface est découpée en trois zones principales selon la règle des quatre colonnes:  
	50% pour le contenu central, 25% pour les panneaux annexes.

En bref, j’ai appris à concevoir des interfaces du point de vue de l’utilisateur, pas du développeur.  
Hiérarchiser l’information, isoler le contenu secondaire dans une sidebar, organiser les données avec des tabs, aérer… toutes ces choses qui rendent l’UX vraiment plus agréable.

# Les problèmes

Avec mon groupe du projet [Firewatch](/projects/firewatch), nous avons voulu réutiliser ma librairie Material. Et disons que… ça n’a pas été une grande réussite.

On a accumulé les soucis:
- système de thèmes imprévisible et compliqué à modifier;
- barre latérale capricieuse;
- bugs à corriger en continu;
- et d’autres surprises à venir, sans aucun doute.

Rien d’anormal pour une lib maison, mais ça montre bien ses limites.

# Est-ce que ca a été utile ?

Oui, clairement.  
Je ne pense pas utiliser cette librairie pour de gros projets, elle manque encore de nombreuses fonctionnalités et d’une vraie maturité.

Mais cette expérience m’a fait progresser plus que des mois de CSS improvisé.  
Elle m’a appris à construire de vraies interfaces ergonomiques, que ce soit avec Material ou un style totalement différent.

En fin de compte, implémenter Material 3 n’était pas une mauvaise idée.  
C’était juste la méthode brutale, mais efficace, pour apprendre à penser UI/UX comme il faut.
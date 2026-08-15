---
title: "Complete Learning — concevoir la confiance autour d’un progrès mesurable"
shortTitle: "Complete Learning"
category: "Éducation · Mobile + Web"
year: "2026"
reference: "DOSSIER / 001"
excerpt: "Cadrage d’une plateforme de remédiation pédagogique structurée autour de la mesure avant/après et des usages réels des parents à Douala."
angle: "Comment montrer au parent que l’atelier a réellement aidé son enfant ?"
statusLabel: "Cadrage produit documenté"
published: true
featured: true
order: 1
visual: "learning"
evidenceLevel: "documented"
facts:
  - "Application mobile destinée aux parents et élèves"
  - "Console d’administration web"
  - "Mesure pré-test / post-test définie dans le cadrage"
  - "Paiement Mobile Money assisté par WhatsApp"
stack:
  - "Flutter"
  - "Next.js"
  - "Supabase"
  - "Firebase Cloud Messaging"
---

## Le contexte

Complete Learning est un projet de plateforme de remédiation pédagogique ciblée pour Douala 5e. Le produit associe une application mobile destinée aux parents et aux élèves à une console d’administration web.

La question centrale n’est pas seulement de proposer des cours. Elle est de permettre au parent de comprendre si l’atelier a corrigé une lacune précise.

## Le problème à structurer

Un parent peut financer plusieurs séances sans disposer d’un indicateur clair de progression. Les offres de soutien scolaire sont alors comparées sur le prix, la proximité ou la réputation générale de l’enseignant.

Le cadrage place donc la mesure avant/après au centre du produit : chaque atelier est rattaché à des notions précises et utilise un pré-test puis un post-test auto-corrigés.

## Les contraintes prises en compte

- téléphones Android d’entrée de gamme ;
- forfaits de données limités ;
- connexion parfois instable ;
- méfiance envers les paiements électroniques opaques ;
- besoin d’un vocabulaire immédiatement compréhensible ;
- administration humaine au lancement.

## Les décisions de conception documentées

### Montrer la valeur avant l’inscription

Le parcours prévoit qu’un parent puisse voir un atelier pertinent avant de créer son compte. La demande d’identification n’intervient qu’au moment où l’utilisateur souhaite s’inscrire.

### Utiliser des repères familiers

Le numéro WhatsApp devient l’identifiant naturel du compte. Le paiement Mobile Money est accompagné par des actions préremplies et une preuve envoyée à l’administration via WhatsApp.

### Transformer le paiement en crédit réutilisable

Toute somme confirmée devient un crédit non périssable. Une seconde inscription peut ainsi être réalisée sans nouvelle attente lorsque le solde est suffisant.

### Séparer appréciation et mesure

L’enseignant peut rédiger une appréciation qualitative. Le score de progression provient toutefois du test auto-corrigé afin d’éviter qu’une évaluation subjective soit présentée comme une mesure.

## Ce que ce dossier permet d’affirmer

Le cahier des charges disponible documente le positionnement, les parcours, l’architecture fonctionnelle, le modèle de données et le périmètre du MVP.

Il ne suffit pas, à lui seul, à affirmer que toutes les fonctionnalités décrites sont déjà déployées ou utilisées. Cette étude de cas présente donc le **travail de conception documenté**, sans inventer de données d’usage ni de résultats commerciaux.


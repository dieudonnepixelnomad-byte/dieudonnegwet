---
title: "AlertContacts — repenser une application de sécurité autour de la sérénité"
shortTitle: "AlertContacts"
category: "Sécurité personnelle · Mobile"
year: "2026"
reference: "DOSSIER / 003"
excerpt: "Spécification d’une refonte orientée tranquillité d’esprit, géolocalisation des proches, zones et fonctionnement dégradé."
angle: "Comment garder une application de sécurité compréhensible lorsque la connexion, la batterie ou les performances deviennent critiques ?"
statusLabel: "Refonte V4 documentée"
published: true
featured: true
order: 3
visual: "alert"
evidenceLevel: "documented"
facts:
  - "Onboarding conçu autour de trois moments de valeur"
  - "Géolocalisation en arrière-plan"
  - "États hors ligne et données en cache"
  - "Architecture Flutter, Firebase et Laravel"
stack:
  - "Flutter"
  - "Firebase"
  - "Laravel"
  - "MySQL"
  - "FCM"
---

## Le contexte

AlertContacts est une application de sécurité personnelle articulée autour du suivi des proches, des zones de confiance et des alertes communautaires.

La refonte V4 part d’un changement de perspective : le produit n’est pas présenté comme un outil technique de géolocalisation, mais comme un moyen de réduire l’incertitude lorsqu’un proche se déplace.

## Le problème à structurer

Une application de sécurité peut accumuler des cartes, permissions, réglages et notifications jusqu’à devenir difficile à comprendre. Dans le même temps, elle doit rester exploitable lorsque le réseau se dégrade ou qu’un proche cesse temporairement de transmettre sa position.

## Les décisions de conception documentées

### Viser un premier moment de valeur

Le parcours privilégie l’invitation d’un proche plutôt qu’une longue présentation de fonctionnalités. Un utilisateur invité arrive avec un contexte déjà établi et un parcours raccourci.

### Ne jamais masquer l’incertitude

Les états « actif », « localisation désactivée », « hors ligne » et « invitation en attente » sont distingués. La dernière position connue est accompagnée d’un horodatage au lieu d’être présentée comme actuelle.

### Adapter la fréquence de localisation

La fréquence de mise à jour varie selon que l’application est au premier plan, en arrière-plan, en mouvement ou proche d’une alerte. L’objectif documenté est de concilier utilité, batterie et charge réseau.

### Concevoir un fonctionnement dégradé

L’absence de connexion ne doit pas bloquer toute l’application. Les dernières informations en cache restent visibles avec un message expliquant leur ancienneté.

## Architecture fonctionnelle

Firebase sert au temps réel et à l’authentification. Laravel et MySQL portent les règles métier, les zones, les alertes et les abonnements. Flutter constitue le pont entre les deux systèmes.

## Ce que ce dossier permet d’affirmer

Le cahier des charges V4 documente la refonte produit, les parcours, les règles UX, l’API, le design system et l’architecture cible.

Des améliorations de performance sont mentionnées dans le CV fourni, mais elles ne sont pas affichées ici : les relevés avant/après et leur protocole n’ont pas encore été intégrés au dossier public.


---
title: "Lili-Ride — cadrer un MVP de mobilité adapté au marché camerounais"
shortTitle: "Lili-Ride"
category: "Mobilité · Plateforme web"
year: "2025"
reference: "DOSSIER / 002"
excerpt: "Un MVP réunissant covoiturage, transport de colis et location de véhicules, avec vérification documentaire et support humain."
angle: "Comment lancer trois services de mobilité sans construire trop tôt une infrastructure de paiement complexe ?"
statusLabel: "MVP et architecture documentés"
published: true
featured: true
order: 2
visual: "ride"
evidenceLevel: "documented"
facts:
  - "Trois pôles dans un même produit"
  - "Compte utilisateur unique"
  - "Vérification documentaire avant publication"
  - "Demandes multicanales centralisées"
stack:
  - "Next.js"
  - "TypeScript"
  - "Supabase"
  - "Google Maps"
  - "Resend"
---

## Le contexte

Lili-Ride est une plateforme web de mobilité conçue pour le marché camerounais. Le MVP rassemble le covoiturage, le transport de colis et la location de véhicules dans un même point d’accès.

L’objectif du périmètre initial est précis : permettre les premières mises en relation réelles et apprendre du terrain avant d’automatiser davantage le produit.

## Le problème à structurer

Trois services distincts peuvent rapidement produire trois systèmes de comptes, trois parcours d’administration et une charge opérationnelle difficile à maintenir.

Le cadrage cherche au contraire les éléments communs : identité de l’utilisateur, annonces, demandes, vérification, support et traçabilité.

## Les décisions de conception documentées

### Un compte, plusieurs rôles

Un même utilisateur peut rechercher un véhicule aujourd’hui, publier un trajet demain ou transporter un colis plus tard. Le rôle dépend de l’action, pas d’un type de compte figé à l’inscription.

### Vérifier avant de publier

La publication de trajets par un transporteur est conditionnée à la transmission et à la validation de documents : permis, carte grise et photo du véhicule.

### Centraliser les demandes

Les formulaires web créent automatiquement une demande. Les appels et messages WhatsApp peuvent être ajoutés manuellement par le support pour conserver une seule vue opérationnelle.

### Reporter volontairement le paiement en ligne

Le MVP prévoit une commission gérée par le support humain. L’intégration Mobile Money est reportée afin de tester d’abord la mise en relation et la demande réelle.

## Architecture fonctionnelle

Le produit est divisé en trois espaces : un site public, un tableau de bord utilisateur et un back-office d’administration. Les règles d’accès et la structure des données sont définies pour chacun.

## Ce que ce dossier permet d’affirmer

Le cahier des charges documente le périmètre du MVP, les parcours, les règles métier, l’architecture des pages, le modèle de données et la stack prévue.

Le document qualifie le MVP d’« en cours ». Cette étude de cas ne présente donc aucun volume de demandes, d’utilisateurs ou de transactions comme un résultat acquis.


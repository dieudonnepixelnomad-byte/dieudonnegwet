# Brief — Site vitrine Gwet Bikoun Dieudonné

## Stack technique

- **Framework : Astro**
  - Rendu statique par défaut (zéro JS inutile), critique pour SEO ET GEO (référencement dans les réponses des LLM/IA)
  - Content Collections natives en Markdown pour les articles de blog (validation de structure, sitemap et RSS automatiques)
  - Islands architecture : composants interactifs (calculateurs, simulateurs) en React/Vue uniquement là où nécessaire, reste du site en HTML pur
- **Contenu des articles** : fichiers Markdown écrits directement dans le repo, pas de CMS
- **Hébergement** : à définir (Vercel ou Netlify, tier gratuit suffisant au départ)
- **Domaine** : à définir

## Exigences SEO / GEO (à intégrer dès la structure du projet)

- `sitemap.xml` généré automatiquement (plugin officiel Astro)
- `robots.txt` autorisant les crawlers standards et les crawlers IA connus
- `llms.txt` à la racine : résumé du site, qui est Dieudonné, ce que propose le site, liens vers les pages clés — convention émergente pour aider les moteurs IA à comprendre le site
- Données structurées schema.org :
  - `Person` sur la page "Qui suis-je"
  - `Organization` ou `ProfessionalService` sur la page freelance/offres
  - `Article` sur chaque article de blog
- Balises Open Graph complètes sur toutes les pages (titre, description, image) pour le partage sur réseaux sociaux
- Performance : viser Core Web Vitals au vert (Astro le permet nativement si on évite le JS superflu)

## Sitemap V1 (ordre de construction)

1. **Accueil** ✅ copy validée (voir plus bas)
2. **Qui suis-je / Ma méthode** ✅ copy validée (voir plus bas)
3. **Mes apps** ✅ copy validée (voir plus bas) — index `/apps` + page individuelle `/apps/kobara`
4. Études de cas — **Complete Learning ET AlertContacts** (les deux sont des projets clients, distinction claire "Projet client" sur ces pages)
5. Contact (simple, CTA WhatsApp)

**Reporté en V2 : Freelance / Offres.** La home gère déjà le funnel principal (pitch complet + CTA WhatsApp), donc cette page n'est pas bloquante pour le lancement V1. Rôle prévu en V2 : détailler les offres concrètes (diagnostic activité, blueprint système, MVP, optimisation croissance — cf. FICHE_PERSONA_2) pour le SEO sur des recherches précises, pour les prospects déjà convaincus qui veulent du concret avant de contacter, et comme page de destination pour les futurs articles de blog.

**Important — correction de contexte :** AlertContacts est l'app d'une cliente, pas un produit personnel de Dieudonné. Elle appartient à la branche "Études de cas" (freelance), pas à "Mes apps" (produits perso). Ne pas la faire apparaître sur la page `/apps`.

**V2 (plus tard, pas bloquant pour le lancement) :**
- Blog
- Ressources / Lead magnets (PDF, calculateurs, simulateurs)
- Section communauté non-dev (pas encore concrète, ne pas construire de page dessus tant que l'offre n'existe pas réellement)

## Principe directeur de positionnement

Le site distingue strictement deux branches :
- **Freelance** : accompagnement d'entrepreneurs pour valider une idée, construire un MVP, obtenir les 100 premiers utilisateurs. **Ne pas axer la communication sur la promesse de gains financiers** — axer sur la validation (bon choix d'idée, de cible, de modèle économique), la construction du MVP, et l'acquisition des premiers utilisateurs.
- **Produits personnels** : les apps que Dieudonné construit pour son propre compte (Kobara, AlertContacts), qui servent de preuve de méthode plutôt que de produit à vendre sur ce site.

CTA principal du site : lien WhatsApp direct (pas de formulaire, pas de Calendly).

---

## COPY VALIDÉE — Page d'accueil

### Hero
**Headline :** Avant de construire votre app, on va d'abord vérifier si c'est la bonne idée

**Sous-headline :** Je suis Dieudonné, développeur Flutter senior depuis 10 ans. Je vous aide à valider votre idée, construire un MVP utile, et obtenir vos 100 premiers utilisateurs — pas juste à coder.

**Bouton CTV :** 💬 Valider mon idée gratuitement

### Bande de preuve
10 ans de développement mobile · 1 app en production (paiements réels testés) · 1 app personnelle en cours de lancement

### Le problème (tableau face-à-face)

| Sans validation | Avec ma méthode |
|---|---|
| Vous investissez dans le développement avant de savoir si ça va marcher | On valide l'idée et la cible avant la première ligne de code |
| Vous ne savez pas comment l'app pourrait un jour rapporter | On réfléchit au modèle économique dès le départ |
| Vous publiez une app, mais personne ne la télécharge | On construit une stratégie pour vos 100 premiers utilisateurs |
| Vous avez peur de perdre du temps et de l'argent sur la mauvaise idée | Je vous dis honnêtement si ce n'est pas la bonne idée — même si ça veut dire ne pas travailler ensemble |
| Vous ne savez pas par où commencer techniquement | Je pilote toute la partie technique, vous restez sur votre expertise métier |

### La méthode — trois étapes

**1. Valider votre idée**
Est-ce le bon problème, pour la bonne cible ? Comment cette app pourrait-elle un jour générer des revenus ? On répond à ces questions avant de construire quoi que ce soit.

**2. Construire le MVP**
Une première version utile, centrée sur l'essentiel — pas une usine à gaz. Publiée dans les règles, sur les stores.

**3. Obtenir vos 100 premiers utilisateurs**
Une app publiée sans utilisateurs ne prouve rien. Je vous accompagne pour trouver et convaincre vos 100 premiers vrais utilisateurs.

**Bouton CTV :** 💬 Valider mon idée gratuitement

### Segmentation

**Carte principale :** Vous avez une idée d'app, ou une activité qui pourrait en avoir besoin
→ Discutons de si c'est la bonne solution, et comment la valider
[💬 Valider mon idée gratuitement]

**Carte secondaire (plus petite) :** Je construis aussi mes propres apps
→ Découvrir Kobara et mes autres projets

### Storytelling

**Titre :** Je teste ma propre méthode sur moi-même

Avant d'accompagner des clients, j'ai vécu le même problème qu'eux. Comme freelance, mes revenus sont irréguliers — un mois correct, un mois difficile, sans système pour m'organiser.

Plutôt que de foncer sur une app, j'ai d'abord validé le vrai besoin. Puis j'ai construit Kobara, une app de budget par enveloppes pensée pour les revenus irréguliers. Je l'utilise moi-même, je l'améliore avec mes propres retours d'usage.

C'est cette même méthode — comprendre avant de coder — que j'applique pour chaque client.

### Étude de cas

**Complete Learning** — une marketplace de cours particuliers à Douala, connectant parents, élèves et enseignants, avec paiements Mobile Money testés en conditions réelles.
→ Voir l'étude de cas complète

### Ce que je ne suis pas (version courte pour la home)

Je ne suis pas un développeur qui prend un cahier des charges, livre le fichier, et disparaît.
Je ne suis pas quelqu'un qui vous pousse vers une application à tout prix.
Je ne dis pas oui à toutes les idées — seulement à celles qui méritent d'être construites.

### FAQ

**Pourquoi pas juste prendre un développeur sur Fiverr ou Upwork ?**
Un développeur exécute ce que vous lui demandez. Moi, je questionne d'abord si ce que vous demandez est la bonne chose à construire. La différence se voit après le lancement, pas avant.

**Combien de temps pour valider une idée ?**
Ça dépend de la complexité de votre projet, mais l'objectif est toujours d'aller vite sans sauter les questions qui comptent : qui est la cible, quel est le problème réel, comment ça pourrait générer des revenus.

**Et si mon idée n'est pas la bonne ?**
Je vous le dis. Parfois une app n'est pas la solution — une automatisation WhatsApp ou une simple landing page peuvent suffire. Mon rôle est de vous aider à choisir le bon outil, pas de vous vendre le seul outil que je sais faire.

**Je n'ai pas de budget de développeur, on fait comment ?**
On en parle directement sur WhatsApp — c'est justement pour ça que le premier échange est gratuit, pour évaluer ensemble ce qui est réaliste selon votre situation.

### CTA final

**Titre :** Un premier échange, gratuit et honnête

On regarde ensemble si votre idée tient la route — et si ce n'est pas le cas, je vous le dirai aussi.
[💬 Valider mon idée gratuitement]

---

## COPY VALIDÉE — Page "Qui suis-je / Ma méthode"

### Hero
**Titre :** Je construis mes propres apps avant d'aider les autres à construire les leurs

**Texte :** Je m'appelle Gwet Bikoun Dieudonné. Développeur mobile Flutter senior depuis plus de 10 ans, basé à Douala. Je ne me positionne ni comme un simple exécutant technique, ni comme un formateur théorique qui n'a jamais publié son propre produit. Je suis entre les deux.

### Mon parcours

Mon parcours combine trois dimensions.

**Technique** — développement et reprise d'applications mobiles, architectures Flutter, optimisation de performance, publication sur les stores, avec les vraies contraintes du terrain africain : appareils d'entrée de gamme, connexions instables.

**Produit** — j'ai compris avec le temps qu'une bonne app ne commence pas par le code. Elle commence par un problème clair, une cible précise, une première version réaliste.

**Marketing** — une app publiée mais invisible ne sert à rien. J'intègre ASO, stratégie de contenu et acquisition dans mon travail, pas seulement le développement.

Une conviction s'est construite avec ce parcours : l'Afrique n'a pas seulement besoin de développeurs qui codent des apps. Elle a besoin de gens capables d'expliquer pourquoi créer une app, quand la créer, et comment la monétiser.

### Ma méthode — en détail

1. **Comprendre** — qui est la cible, quel problème réel on résout, est-ce que ce problème est assez douloureux pour que quelqu'un paie
2. **Valider** — confronter l'idée au terrain avant d'investir dans le développement
3. **Construire** — un MVP centré sur l'essentiel
4. **Publier** — dans les règles, sur Google Play et l'App Store
5. **Monétiser** — parce qu'une app qui ne génère rien n'est pas un actif, c'est une charge

### Ce que je suis / Ce que je ne suis pas (version complète)

| Je suis | Je ne suis pas |
|---|---|
| Un développeur Flutter senior avec une compréhension produit et marketing | Un développeur qui code sans jamais questionner la demande |
| Un éditeur de mes propres applications | Un exécutant qui livre un fichier et disparaît |
| Un partenaire qui vous aide à passer d'une idée à une app publiée | Un prestataire qui dit oui à tout pour signer un contrat |
| Quelqu'un qui vous dit la vérité, même quand ce n'est pas ce que vous espérez entendre | Un coach qui vend du rêve sans parler budget, validation ou monétisation |

### Ma vision

Mon ambition est de devenir une référence africaine de la création et de la monétisation d'applications mobiles.

Je construis mes propres apps pour ne pas rester dans la théorie. Chaque app que je publie devient une preuve, une étude de cas, un support d'apprentissage.

### CTA

**Titre :** On en parle ?
[💬 Valider mon idée gratuitement]

---

## Note de conception — Pages "Mes apps" (trafic publicitaire)

Les pages individuelles d'app (`/apps/kobara`, futures apps perso) recevront potentiellement du trafic payant (ads Facebook/TikTok/Google). Pour ces pages spécifiquement :

- **Nav minimale** : logo (renvoyant vers `/apps`, pas vers l'accueil du site) + rien d'autre. Ne pas afficher les liens Freelance/Blog/Contact sur ces pages — un seul chemin de conversion (télécharger l'app), pas de porte de sortie vers un autre funnel.
- Chaque page app est autonome et optimisée pour son propre objectif (téléchargement), indépendamment du reste du site.

## COPY VALIDÉE — Page index `/apps`

**Titre :** Mes applications

**Texte d'intro :**
> Je construis mes propres apps avant de les proposer aux autres. Chaque app ici est un produit que je développe, publie et fais vivre pour mon propre compte — pas un projet client.

**Carte Kobara :**
> **Kobara** — Budget par enveloppes pour revenus irréguliers
> [Découvrir Kobara →]

*Prévoir un état "à venir" pour les futures apps perso, sans lien actif tant qu'elles ne sont pas publiées.*

## COPY VALIDÉE — Page individuelle `/apps/kobara`

**Statut store au moment de la rédaction :** Google Play imminent (publication le 13 juillet 2026 au soir), Apple App Store prévu plus tard — utiliser un badge "Bientôt sur l'App Store" plutôt qu'un lien.

### Hero
**Titre :** Kobara
**Tagline :** Kobara ne suit pas tes dépenses. Elle organise ton argent dès qu'il arrive, pour que tes charges essentielles soient toujours couvertes.
[▶ Disponible sur Google Play] [🍎 Bientôt sur l'App Store]

### Le problème
**Titre :** Un revenu irrégulier, ce n'est pas un problème de discipline

Un mois vous encaissez bien, le mois suivant presque rien. Les apps de budget classiques supposent un salaire fixe qui tombe le même jour chaque mois — elles ne collent pas à votre réalité de freelance, de commission, ou de revenu variable.

### La solution — méthode cascade
**Titre :** Chaque franc qui entre a déjà une destination

1. **Vous recevez de l'argent** — peu importe le montant, peu importe quand
2. **Kobara le répartit en cascade** — d'abord vos charges obligatoires, puis vos charges ajustables, selon vos priorités définies à l'avance
3. **Vous voyez toujours où vous en êtes** — ce qui est déjà financé, ce qui ne l'est pas encore

### Fonctionnalités
- Budget par enveloppes adapté aux rentrées d'argent irrégulières
- Répartition automatique en cascade dès que l'argent arrive
- Statuts clairs : Déficitaire / Fragile / Soutenable, pour voir d'un coup d'œil votre situation réelle
- 100% local — aucune donnée envoyée sur un serveur, aucun compte à créer

### Confidentialité
**Titre :** Vos données financières ne quittent jamais votre téléphone

Kobara fonctionne entièrement en local. Pas de compte, pas de serveur, pas de tracking. Vos chiffres restent à vous.

### CTA final
**Titre :** Reprenez le contrôle, même avec un revenu qui varie
[▶ Télécharger sur Google Play] [🍎 Bientôt sur l'App Store]

---

## COPY VALIDÉE — Page index `/etudes-de-cas`

Grille de cartes, chacune taguée **"Projet client"** (Complete Learning et AlertContacts sont toutes deux des projets clients, pas des produits personnels).

## COPY VALIDÉE — Page individuelle `/etudes-de-cas/complete-learning`

*(Tag : Projet client)*

**Le contexte :** Marketplace de cours particuliers à Douala, connectant parents, élèves et enseignants.

**Comprendre :** Les parents cherchent des professeurs particuliers fiables, les enseignants cherchent des élèves, et personne n'a de moyen structuré de se trouver ni de suivre les progrès réels de l'élève.

**Valider :** Le suivi de progression via des tests avant/après les cours a été identifié comme un vrai différenciateur — un parent veut voir si son enfant progresse, pas juste payer des heures de cours.

**Construire :** Authentification sans mot de passe par numéro de téléphone (pas de friction OTP), flux de paiement Mobile Money géré manuellement, suivi des résultats pré/post-test.

**Publier :** Actuellement en phase de test fermé obligatoire (minimum 12 testeurs actifs sur 14 jours consécutifs) avant la mise en production sur Google Play.

**Monétiser :** Paiements Mobile Money déjà testés en conditions réelles avec de vrais utilisateurs pendant le développement.

**Statut actuel :** Complete Learning est actuellement en test fermé avant son lancement public sur le Play Store.

## COPY VALIDÉE — Page individuelle `/etudes-de-cas/alertcontacts`

*(Tag : Projet client)*

**Le contexte :** Application de sécurité familiale et de tranquillité d'esprit, disponible sur iOS et Android, avec un marché prioritaire en France et en Europe francophone.

**Comprendre :** Le vrai problème n'est pas technique, il est émotionnel : l'anxiété de ne pas savoir si ses proches sont en sécurité. Ce n'est pas une app de géolocalisation — c'est une app de tranquillité d'esprit.

**Valider :** Trois "Aha moments" ont été identifiés comme déclencheurs de valeur perçue : établir la confiance dès qu'un proche accepte l'invitation, voir sa position en temps réel, puis recevoir une vraie alerte utile. L'onboarding cible le premier de ces moments le plus tôt possible.

**Construire :**
- Authentification sans mot de passe (magic link)
- Connexion bidirectionnelle (mécanisme d'équité + boucle virale)
- Alertes communautaires, publiques ou réservées aux proches
- Mode invisible temporaire (premium), avec notification transparente aux proches
- Gestion offline pensée pour ne jamais bloquer l'utilisateur

**Publier :** Disponible sur le Google Play Store et l'Apple App Store.

**Monétiser :** Modèle freemium à 3 paliers : Gratuit, Solo, Famille.

**Statut actuel :** AlertContacts est en ligne et en phase de croissance de sa base d'utilisateurs.

*(Note interne — non publiée sur le site : le diagnostic d'acquisition utilisateurs pour AlertContacts est traité séparément, dans une session dédiée.)*

---

## COPY VALIDÉE — Page `/contact`

**Titre :** On se parle où ?

**Texte :** Le plus rapide, c'est WhatsApp. Mais tu peux aussi me suivre là où je partage du contenu sur la création et la monétisation d'apps mobiles.

**Bloc principal :**
[💬 Discuter sur WhatsApp] → lien `wa.me/[NUMERO_WHATSAPP]`

**Bloc réseaux (icônes + liens) — placeholders à remplacer :**
- TikTok → `[LIEN_TIKTOK]`
- Instagram → `[LIEN_INSTAGRAM]`
- YouTube → `[LIEN_YOUTUBE]`
- LinkedIn → `[LIEN_LINKEDIN]`

*(Note : le numéro WhatsApp utilisé sur la home et sur cette page doit être le même — un seul placeholder `[NUMERO_WHATSAPP]` à remplacer partout dans le code.)*

---

## Charte graphique — validée

**Nom du site : Dieudonné Gwet** (nom personnel réel). Pas de nom d'agence séparé pour l'instant — l'agence n'existe pas encore concrètement ; ce sujet sera retraité plus tard, quand une vraie séparation "créateur / entité qui facture les clients" sera nécessaire. Ne pas utiliser "Mobikun", "Ankara Studio" ou "Excetera" — ces trois noms ont été explorés et écartés (soit conflit de nom existant, soit non pertinent pour l'instant).

**Origine de la direction visuelle :** extraite de la carte de visite personnelle de Dieudonné (fond bleu nuit, accent bleu électrique, typographie serif en petites capitales pour le nom, motif de constellation/réseau de points connectés), puis adaptée en version fond clair après retour utilisateur — structure de layout inspirée d'une référence SaaS (cards flottantes, bandeau de confiance, grille d'icônes), mais avec le bleu électrique de la carte de visite à la place du violet de la référence.

**Palette (version claire — direction retenue) :**
- `#F7F9FC` — Fond général (blanc cassé, légère teinte froide)
- `#FFFFFF` — Fond des cards (avec ombre légère `0 2px 10px rgba(16,25,43,0.06)`)
- `#2E8EFF` — Bleu électrique (accent principal : CTA, liens, icônes, mot-clé dans les titres)
- `#EAF3FF` — Bleu très clair (fonds de badges/pastilles, cercles d'icônes)
- `#10192B` — Encre (texte principal, titres)
- `#5A6B85` — Bleu-gris (texte secondaire)
- `#E1E7F0` — Bordures discrètes

**Typographie :**
- Nom personnel / logo : serif en petites capitales (`font-variant: small-caps`), letter-spacing large — clin d'œil à la carte de visite
- Titres (H1/H2) : sans-serif, poids 500, avec un mot-clé de la phrase mis en couleur accent (`#2E8EFF`) plutôt que tout le titre
- Corps de texte : sans-serif standard, `#5A6B85` pour le texte secondaire
- Eyebrows/labels/badges : sans-serif, petites capitales, letter-spacing, sur fond `#EAF3FF` avec texte `#2E8EFF`

**Éléments de structure (inspirés de la référence SaaS, adaptés) :**
- Nav : logo + CTA unique en bouton pilule bleu à droite
- Hero asymétrique : eyebrow badge → titre avec mot-clé coloré → sous-titre → CTA principal (pilule bleu, avec icône WhatsApp) + lien secondaire texte → cards flottantes avec icône + chiffre + label (remplace la bande de preuve texte simple par des cards visuelles)
- Grille d'icônes en cercles bleu clair pour la méthode en 3 étapes
- Bordures et radius généreux (12px sur les cards, 20-24px sur les boutons pilule)

**Point en attente — photo :** la photo actuelle de Dieudonné (carte de visite) est traitée sombre/moody, pensée pour un fond noir. Elle ne fonctionnera pas telle quelle sur le hero à fond clair. Deux options : (1) prévoir une nouvelle photo ou un retouchage plus lumineux, (2) garder le hero sans photo, avec les cards flottantes comme élément visuel principal (option retenue dans le mockup de référence, à confirmer avant construction finale).

**Motif constellation (de la carte de visite) :** peut être réutilisé en version claire (points/lignes bleu clair sur fond blanc) comme élément de signature discret, par exemple en arrière-plan du hero ou d'une section clé — à doser avec parcimonie, pas sur toutes les sections.

---

## Sitemap V1 — statut final

1. Accueil ✅
2. Qui suis-je / Ma méthode ✅
3. Mes apps (+ Kobara) ✅
4. Études de cas (+ Complete Learning, + AlertContacts) ✅
5. Contact ✅

**V1 complet.** Reporté en V2 : page Freelance/Offres, Blog, Ressources/Lead magnets.

---

*Document généré le 13 juillet 2026 — à mettre à jour au fur et à mesure que les pages suivantes sont validées.*

# CLAUDE.md — Site vitrine de Dieudonné Gwet

Ce fichier donne le contexte du projet à Claude Code. Pour le contenu complet (copy validée de chaque page), voir `brief-site-dieudonne.md` à la racine du projet — toujours s'y référer avant d'écrire du texte définitif sur une page.

## Contexte du projet

Site vitrine personnel de Gwet Bikoun Dieudonné, développeur mobile Flutter senior (10 ans d'expérience), basé à Douala, Cameroun. Le site sert deux objectifs :
1. Attirer des clients freelance (entrepreneurs qui veulent valider une idée d'app, construire un MVP, trouver leurs 100 premiers utilisateurs)
2. Présenter ses apps personnelles (actuellement Kobara) comme preuve de méthode

**Nom du site : Dieudonné Gwet** (nom personnel réel). Pas de nom d'agence séparé — à ne jamais inventer ou ajouter sans demande explicite. Ne jamais utiliser "Mobikun", "Ankara Studio", "Excetera", "Cascade", "Pixel Nomad" — ces noms ont été explorés puis écartés en amont du projet.

**Important — noms d'apps :**
- L'app de finance personnelle s'appelle **Kobara** (jamais "Cascade" — nom interne abandonné)
- **AlertContacts** est l'app d'une cliente (projet freelance), pas un produit personnel de Dieudonné — elle apparaît dans "Études de cas", jamais dans "Mes apps"
- **Complete Learning** est également un projet client, dans "Études de cas"

## Stack technique

- **Framework : Astro** — rendu statique par défaut, Content Collections en Markdown pour les futurs articles de blog (V2)
- **Contenu** : fichiers Markdown écrits directement dans le repo, pas de CMS
- **Interactivité** : composants React/Vue en "islands" uniquement là où nécessaire (futurs calculateurs/simulateurs en V2) — le reste du site doit rester en HTML statique
- **Hébergement** : à définir (Vercel ou Netlify, tier gratuit)

## Exigences SEO / GEO (non négociables)

- `sitemap.xml` généré automatiquement
- `robots.txt` autorisant crawlers standards et crawlers IA connus
- `llms.txt` à la racine, résumant le site pour les moteurs IA
- Données structurées schema.org : `Person` (page Qui suis-je), `Article` (futurs articles), `SoftwareApplication` ou équivalent (pages apps)
- Balises Open Graph complètes sur toutes les pages (titre, description, image)
- Éviter tout JS qui bloquerait le rendu du contenu texte — les crawlers IA lisent souvent le HTML brut sans exécuter de JS

## Charte graphique

**Palette :**
- `#F7F9FC` — fond général
- `#FFFFFF` — fond des cards (ombre : `0 2px 10px rgba(16,25,43,0.06)`)
- `#2E8EFF` — bleu électrique (accent principal : CTA, liens, icônes, mots-clés dans les titres)
- `#EAF3FF` — bleu très clair (fonds de badges, cercles d'icônes)
- `#10192B` — encre (texte principal, titres)
- `#5A6B85` — bleu-gris (texte secondaire)
- `#E1E7F0` — bordures discrètes

**Typographie :**
- Nom personnel/logo : serif, petites capitales (`font-variant: small-caps`), letter-spacing large
- Titres : sans-serif poids 500, un mot-clé du titre en `#2E8EFF` plutôt que tout le titre coloré
- Corps de texte : sans-serif standard, `#5A6B85` pour le texte secondaire
- Labels/badges/eyebrows : sans-serif, petites capitales, letter-spacing, fond `#EAF3FF`, texte `#2E8EFF`

**Structure UI :**
- Nav : logo à gauche, CTA unique en bouton pilule bleu à droite (pas de multiples liens qui distraient sur les pages d'app individuelles, voir plus bas)
- Hero asymétrique : eyebrow badge → titre (mot-clé coloré) → sous-titre → CTA principal (pilule bleu + icône WhatsApp) + lien secondaire → cards flottantes (icône + chiffre + label) à la place d'une simple bande de preuve textuelle
- Grille d'icônes en cercles bleu clair (`#EAF3FF`) pour la méthode en 3 étapes
- Radius généreux : 12px sur les cards, 20-24px sur les boutons pilule
- Motif constellation (points/lignes bleu clair) réutilisable en arrière-plan discret d'une section clé — à doser avec parcimonie, jamais sur toutes les sections

**Point ouvert — photo du hero :** pas de photo pour l'instant (la photo existante est traitée sombre, ne fonctionne pas sur fond clair). Construire le hero sans photo, cards flottantes comme élément visuel principal, jusqu'à nouvel ordre.

## Règle spécifique — pages d'apps individuelles

Les pages `/apps/[nom-app]` (ex: `/apps/kobara`) recevront potentiellement du trafic publicitaire payant (ads). Sur ces pages uniquement :
- Nav minimale : logo (renvoyant vers `/apps`, pas vers l'accueil) + rien d'autre
- Pas de lien vers Freelance/Études de cas/Contact — un seul chemin de conversion (téléchargement de l'app)
- CTA store : badges Google Play actifs ; badge "Bientôt sur l'App Store" (pas de lien mort) tant que l'app n'est pas publiée sur iOS

## Sitemap V1 (à construire)

1. Accueil (`/`)
2. Qui suis-je / Ma méthode (`/qui-suis-je`)
3. Mes apps (`/apps`) + page individuelle Kobara (`/apps/kobara`)
4. Études de cas (`/etudes-de-cas`) + Complete Learning + AlertContacts
5. Contact (`/contact`)

**Reporté en V2 (ne pas construire maintenant sans demande explicite) :** page Freelance/Offres, Blog, Ressources/Lead magnets.

## Ce qu'il ne faut jamais faire

- Ne jamais inventer de statistiques, témoignages, ou résultats non fournis dans le brief de contenu (ex: ne pas prétendre que Complete Learning ou AlertContacts ont un nombre d'utilisateurs ou un succès qui n'a pas été confirmé)
- Ne pas présenter Complete Learning comme "lancé publiquement" — il est actuellement en test fermé
- Ne pas présenter AlertContacts avec des métriques de croissance flatteuses inventées — rester sur un statut neutre ("en ligne, en phase de croissance")
- Ne pas ajouter de CMS, de compte utilisateur, ou de backend — le site est 100% statique pour l'instant
- Ne pas construire les pages V2 (Offres, Blog, Ressources) sans demande explicite

# dieudonnegwet.com

Site professionnel de Dieudonne Gwet, construit avec Astro et préparé pour Cloudflare Workers + D1.

## Commandes

```sh
pnpm install
pnpm dev
pnpm check
pnpm build
```

## Configuration locale

Copier `.dev.vars.example` vers `.dev.vars`, puis renseigner uniquement les services utilisés. Ne jamais versionner `.dev.vars`.

- `RESEND_API_KEY` : envoi de la demande par e-mail ;
- `TURNSTILE_SECRET_KEY` et `PUBLIC_TURNSTILE_SITE_KEY` : protection du formulaire ;
- `CONTACT_TO_EMAIL` et `CONTACT_FROM_EMAIL` : destinataire et expéditeur.

La base locale D1 est définie par le binding `DB`. Appliquer la migration avant de tester la persistance :

```sh
pnpm wrangler d1 migrations apply dieudonnegwet-leads --local
```

## Avant la mise en ligne

1. Créer la base D1 et remplacer son identifiant dans `wrangler.jsonc`.
2. Appliquer les migrations en production.
3. Configurer les secrets Resend et Turnstile dans Cloudflare.
4. Vérifier le domaine expéditeur utilisé par Resend.
5. Compléter les mentions légales avec la forme juridique, l’adresse professionnelle et l’hébergeur confirmé.
6. Remplacer ou valider l’adresse de contact publique.
7. Effectuer un envoi réel puis vérifier la ligne D1 et l’e-mail reçu.

Le déploiement n’est volontairement pas automatisé : il nécessite l’accès au compte Cloudflare et la validation des informations légales.

/**
 * Constantes globales du site.
 * Tous les placeholders à remplacer avant mise en ligne sont centralisés ici.
 */

export const SITE_NAME = 'Dieudonné Gwet';
export const SITE_URL = 'https://dieudonnegwet.com'; // placeholder — domaine à définir

// Un seul numéro WhatsApp pour tout le site (home + contact)
export const WHATSAPP_NUMBER = '237695570650';
export const WHATSAPP_NUMBER_DISPLAY = '+237 695 570 650';
export const WHATSAPP_MESSAGE = "Bonjour Dieudonné, j'aimerais valider mon idée d'app avec vous.";

/** URL WhatsApp avec message pré-rempli (personnalisable par page). */
export function whatsappUrl(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappUrl();

// Lien Google Play de Kobara
export const KOBARA_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.kobara.app';

// Réseaux sociaux (page contact + footer)
export const SOCIAL_LINKS = {
  tiktok: 'LIEN_TIKTOK', // placeholder
  instagram: 'LIEN_INSTAGRAM', // placeholder
  youtube: 'LIEN_YOUTUBE', // placeholder
  linkedin: 'LIEN_LINKEDIN', // placeholder
};

export const DEFAULT_DESCRIPTION =
  "Dieudonné Gwet, développeur Flutter senior à Douala. Je vous aide à valider votre idée d'app, construire un MVP utile et obtenir vos 100 premiers utilisateurs.";

export const DEFAULT_OG_IMAGE = '/og-default.png';

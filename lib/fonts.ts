import { Jost, Manrope, Playfair_Display } from 'next/font/google';

/** Polices auto-hébergées par next/font, donc préchargées par Next dans le
 *  <head>. Chaque graisse et chaque style déclaré ici produit un fichier woff2
 *  préchargé, qui entre en concurrence avec l'image LCP pour la bande passante.
 *
 *  Élagage du 22/08/2026 : l'accueil préchargeait 136 Ko de polices, soit plus
 *  que les images du premier écran sur mobile (225 Ko dont l'image LCP). Les
 *  graisses réellement utilisées ont été relevées dans app/globals.css avant de
 *  couper — n'en retirez pas d'autres sans refaire ce relevé. */

/** Uniquement le wordmark (.wordmark, font-weight 300). */
export const jost = Jost({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-jost',
  display: 'swap',
});

/** Corps de texte (400) et libellés (600). Le 700 servait au wordmark avant que
 *  celui-ci ne passe sous Jost. */
export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-manrope',
  display: 'swap',
});

/** Titres : headline (600) et display (700). L'italique était chargée sans
 *  qu'aucune règle ne l'applique à du Playfair — deux fichiers pour rien. */
export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

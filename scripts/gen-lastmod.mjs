#!/usr/bin/env node
/**
 * Régénère `lib/data/lastmod.json` depuis l'historique git, avant chaque build.
 *
 * Les dates du sitemap étaient tenues à la main : le 10/09/2026, 41 des 62 pages
 * annonçaient une date antérieure à leur vraie dernière modification. Une table
 * manuelle ne tient pas le rythme de publication, git le sait déjà.
 *
 * Le fichier produit n'est pas versionné : il se régénère, et le voir dans
 * chaque diff n'apprenait rien. D'où la garantie ci-dessous, sans laquelle un
 * clone frais sans git ferait tomber le build sur un import non résolu.
 */
import { calculeLastmod, ecrireLastmod, garantitFichierCarte, FICHIER_CARTE } from './lastmod.mjs';

try {
  const n = ecrireLastmod(calculeLastmod());
  console.log(`lastmod : ${n} routes datées depuis git -> ${FICHIER_CARTE}`);
} catch (e) {
  // Ne jamais bloquer un déploiement pour un champ qui n'est qu'un indice.
  console.warn(`lastmod : ${e.message}`);
  console.warn(
    garantitFichierCarte()
      ? `lastmod : ${FICHIER_CARTE} créé vide, le sitemap sortira sans dates.`
      : `lastmod : ${FICHIER_CARTE} laissé tel quel, les dates peuvent dater.`,
  );
}

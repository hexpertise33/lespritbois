#!/usr/bin/env node
/**
 * Régénère `lib/data/lastmod.json` depuis l'historique git, avant chaque build.
 *
 * Le fichier porte deux choses :
 *  - `pages`    : quelles routes appartiennent au sitemap, et leur date. La
 *                 liste se déduit de `app/`, moins les pages qui se déclarent
 *                 noindex. Plus rien à compléter à la main.
 *  - `articles` : les dates des articles. Leur appartenance reste décidée par
 *                 `lib/data/blog.ts`, qui est la porte éditoriale : un brouillon
 *                 posé dans `app/blog/` mais non déclaré ne doit pas entrer.
 *
 * Le fichier produit n'est pas versionné : il se régénère, et le voir dans
 * chaque diff n'apprenait rien.
 */
import {
  calculeLastmod,
  calculeMembres,
  ecrireLastmod,
  gitDisponible,
  verifieDates,
  FICHIER_CARTE,
} from './lastmod.mjs';

// Sans git on perd les dates, jamais les pages : l'appartenance ne se lit que
// dans `app/`. Un sitemap complet sans dates reste un bon sitemap.
if (!gitDisponible()) {
  const n = ecrireLastmod(calculeMembres());
  console.warn(`lastmod : git indisponible, ${n} routes listées sans date.`);
  process.exit(0);
}

const carte = calculeLastmod();

// git a répondu : une carte presque vide est une anomalie, pas un mode dégradé.
// On laisse l'exception remonter pour interrompre le build.
verifieDates(carte);
const n = ecrireLastmod(carte);
console.log(
  `lastmod : ${Object.keys(carte.pages).length} pages + ${Object.keys(carte.articles).length} articles datés depuis git -> ${FICHIER_CARTE}`,
);

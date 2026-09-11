import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const RACINE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const git = (args) =>
  execFileSync('git', ['--no-pager', ...args], { cwd: RACINE, encoding: 'utf8' }).trim();

/** Date du dernier commit ayant touché l'un des chemins, au format AAAA-MM-JJ. */
export function dateDernierCommit(chemins) {
  return git(['log', '-1', '--format=%ad', '--date=short', '--', ...chemins]) || null;
}

const ZONES_TS = 'lib/data/zones.ts';

/**
 * Bornes de chaque entrée de premier niveau du tableau ZONES, par slug.
 * Une entrée commence par `  {` à deux espaces d'indentation et porte son
 * slug juste en dessous, à quatre.
 */
export function bornesDesZones() {
  const lignes = readFileSync(path.join(RACINE, ZONES_TS), 'utf8').split('\n');
  const debuts = [];
  lignes.forEach((l, i) => {
    const slug = /^ {4}slug: '([^']+)',/.exec(lignes[i + 1] ?? '');
    if (/^ {2}\{$/.test(l) && slug) debuts.push({ slug: slug[1], debut: i + 1 });
  });
  const finTableau = lignes.findIndex((l) => /^\];/.test(l)) + 1;
  return debuts.map((d, i) => ({
    ...d,
    fin: (debuts[i + 1]?.debut ?? finTableau) - 1,
  }));
}

/** Date du dernier commit ayant touché les lignes propres à cette zone. */
export function dateBlocZone(slug) {
  const zone = bornesDesZones().find((z) => z.slug === slug);
  if (!zone) return null;
  const sortie = git([
    'log', '-1', '-L', `${zone.debut},${zone.fin}:${ZONES_TS}`, '--date=short',
  ]);
  return /^Date:\s+(\d{4}-\d{2}-\d{2})/m.exec(sortie)?.[1] ?? null;
}

/**
 * Fichiers de données qui portent le contenu de certaines pages : les dater sur
 * leur seul page.tsx les figerait alors que ce qu'elles affichent a changé.
 */
const SOURCES_EN_PLUS = {
  '/blog': ['lib/data/blog.ts'],
  '/realisations': ['lib/data/chantiers.ts'],
  '/plan-du-site': ['lib/data/navigation.ts'],
};

/** Gabarit commun aux pages de zone : le retoucher change bien les six pages. */
const GABARIT_ZONE = 'components/PageZone.tsx';

/** Toutes les routes du App Router, sous la forme '' ou '/chemin'. */
export function routesDuSite() {
  const routes = [];
  const parcours = (dir, prefixe) => {
    for (const e of readdirSync(path.join(RACINE, dir), { withFileTypes: true })) {
      if (e.isDirectory() && !e.name.startsWith('_') && !e.name.startsWith('(')) {
        parcours(`${dir}/${e.name}`, `${prefixe}/${e.name}`);
      } else if (e.name === 'page.tsx') {
        routes.push({ route: prefixe, fichier: `${dir}/page.tsx` });
      }
    }
  };
  parcours('app', '');
  return routes;
}

/** Une page qui se déclare noindex n'a rien à faire au sitemap. */
export function estNoindex(fichier) {
  return /\bnoindex:\s*true\b/.test(readFileSync(path.join(RACINE, fichier), 'utf8'));
}

const estArticle = (route) => route.startsWith('/blog/');

/** git est-il utilisable ici ? Une archive ou un CI sans `.git` dit non. */
export function gitDisponible() {
  try {
    git(['rev-parse', '--git-dir']);
    return true;
  } catch {
    return false;
  }
}

/**
 * Qui appartient au sitemap, sans aucune date. Ne lit que `app/` et le noindex
 * déclaré par chaque page : aucun appel à git, donc valable même sans dépôt.
 */
export function calculeMembres() {
  const pages = {};
  const articles = {};
  for (const { route, fichier } of routesDuSite()) {
    if (estArticle(route)) articles[route] = null;
    else if (!estNoindex(fichier)) pages[route] = null;
  }
  return { pages, articles };
}

/**
 * Carte route -> AAAA-MM-JJ, datée sur le dernier changement de contenu.
 * Volontairement aveugle à `app/layout.tsx` et `app/globals.css` : une retouche
 * de style sur tout le site ne doit pas rajeunir les 62 pages d'un coup, sinon
 * le lastmod ne veut plus rien dire et Google cesse d'en tenir compte.
 */
export function calculeLastmod() {
  const slugsZones = new Set(bornesDesZones().map((z) => z.slug));
  const carte = calculeMembres();
  for (const { route, fichier } of routesDuSite()) {
    const bloc = estArticle(route) ? carte.articles : carte.pages;
    if (!(route in bloc)) continue;
    const slug = route.slice(1);
    const estZone = slugsZones.has(slug);
    const sources = [fichier, ...(SOURCES_EN_PLUS[route] ?? []), ...(estZone ? [GABARIT_ZONE] : [])];
    const dates = [dateDernierCommit(sources), estZone ? dateBlocZone(slug) : null].filter(Boolean);
    // Date inconnue : la route reste, avec null. La faire disparaître du
    // sitemap serait un remède pire que le mal.
    bloc[route] = dates.sort().at(-1) ?? null;
  }
  return carte;
}

export const FICHIER_CARTE = 'lib/data/lastmod.json';

/**
 * Écrit la carte. Refuse une carte sans aucune route : à ce stade `app/` a été
 * parcouru, une liste vide signale un problème de lecture, pas un site vide.
 */
export function ecrireLastmod(carte) {
  const total = toutesLesRoutes(carte).length;
  if (total === 0) throw new Error('Carte lastmod vide : rien à écrire.');
  const trie = (o = {}) => Object.fromEntries(Object.keys(o).sort().map((r) => [r, o[r]]));
  const sortie = { pages: trie(carte.pages), articles: trie(carte.articles) };
  writeFileSync(path.join(RACINE, FICHIER_CARTE), JSON.stringify(sortie, null, 2) + '\n');
  return total;
}

const toutesLesRoutes = (carte) => [
  ...Object.entries(carte.pages ?? {}),
  ...Object.entries(carte.articles ?? {}),
];

/** Part minimale de routes datées en dessous de laquelle on refuse de publier. */
const SEUIL_DATEES = 0.5;

/**
 * Refuse une carte que git a bien produite mais qui ne date presque rien : ce
 * cas-là ne s'annonce que par un avertissement sur stderr, noyé dans un log de
 * déploiement, et on servirait un sitemap muet pendant des semaines.
 */
export function verifieDates(carte) {
  const routes = toutesLesRoutes(carte);
  if (routes.length === 0) return carte;
  const datees = routes.filter(([, d]) => d).length;
  if (datees / routes.length < SEUIL_DATEES) {
    throw new Error(
      `Seules ${datees} routes sur ${routes.length} sont datées : git répond mal, build interrompu.`,
    );
  }
  return carte;
}


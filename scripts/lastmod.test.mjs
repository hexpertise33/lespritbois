import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { tmpdir } from 'node:os';
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { dateDernierCommit, dateBlocZone, calculeLastmod, ecrireLastmod, bornesDesZones, estNoindex, routesDuSite, verifieDates, calculeMembres, gitDisponible, parseStatut, aujourdHui, fichiersModifies, fichiersSurveilles } from './lastmod.mjs';

test('dateDernierCommit rend une date ISO courte pour un fichier suivi', () => {
  const d = dateDernierCommit(['app/page.tsx']);
  assert.match(d, /^\d{4}-\d{2}-\d{2}$/);
});

test('dateBlocZone isole les lignes d une zone dans zones.ts', () => {
  const d = dateBlocZone('bassin-arcachon');
  assert.match(d, /^\d{4}-\d{2}-\d{2}$/);
});

test('dateBlocZone rend null pour une zone inconnue', () => {
  assert.equal(dateBlocZone('zone-qui-nexiste-pas'), null);
});

test('calculeLastmod couvre l accueil, une zone et un article', () => {
  const { pages, articles } = calculeLastmod();
  for (const route of ['', '/pergolas', '/bassin-arcachon']) {
    assert.match(pages[route] ?? '', /^\d{4}-\d{2}-\d{2}$/, `page absente ou mal datée : ${route}`);
  }
  assert.match(articles['/blog/carport-bois-guide'] ?? '', /^\d{4}-\d{2}-\d{2}$/);
});

test('un article réécrit est daté sur sa réécriture, pas sur sa publication', () => {
  // Le bug d'origine : lastmod venait de article.date, figé à la publication.
  const { articles } = calculeLastmod();
  assert.equal(
    articles['/blog/carport-bois-guide'],
    dateDernierCommit(['app/blog/carport-bois-guide/page.tsx']),
  );
});

test('une zone est datée sur son propre bloc, pas sur tout zones.ts', () => {
  const { pages } = calculeLastmod();
  assert.ok(pages['/bassin-arcachon'] >= dateBlocZone('bassin-arcachon'));
});

test('ecrireLastmod refuse une carte vide plutot que d ecraser le fichier', () => {
  // Sans git (archive, CI sans historique), mieux vaut garder l'ancien fichier
  // que publier un sitemap sans aucune date.
  assert.throws(() => ecrireLastmod({}), /vide/i);
});



test('le parseur de zones les trouve toutes', () => {
  // Oracle indépendant : le parseur exige `  {` PUIS le slug ; ce comptage ne
  // regarde que le slug. Un changement de structure du tableau casse l'un et
  // pas l'autre, et le test le voit. Un reformatage global les casserait tous
  // les deux : ce filet attrape la régression probable, pas toutes.
  const src = readFileSync(new URL('../lib/data/zones.ts', import.meta.url), 'utf8');
  const attendu = [...src.matchAll(/^ {4}slug: '([^']+)',/gm)].map((m) => m[1]);
  const trouve = bornesDesZones().map((z) => z.slug);
  assert.ok(attendu.length > 0, 'oracle cassé : aucun slug dans zones.ts');
  assert.deepEqual(trouve, attendu);
});

test('chaque zone détectée porte une date', () => {
  for (const { slug } of bornesDesZones()) {
    assert.match(dateBlocZone(slug) ?? '', /^\d{4}-\d{2}-\d{2}$/, `zone sans date : ${slug}`);
  }
});

test('estNoindex lit la déclaration de la page elle-même', () => {
  assert.equal(estNoindex('app/devis-pergola/page.tsx'), true);
  assert.equal(estNoindex('app/pergolas/page.tsx'), false);
});

test('pages exclut les noindex et couvre toutes les autres routes hors articles', () => {
  // C'est ce qui remplace PAGES_STATIQUES : plus de liste à compléter à la main,
  // donc plus de page publiée qui reste absente du sitemap sans que ça se voie.
  const { pages } = calculeLastmod();
  const horsArticles = routesDuSite().filter(({ route }) => !route.startsWith('/blog/'));
  const attendues = horsArticles.filter(({ fichier }) => !estNoindex(fichier)).map((r) => r.route);
  assert.deepEqual(Object.keys(pages).sort(), attendues.sort());
  assert.ok(!('/devis-pergola' in pages), 'une page noindex ne doit jamais entrer au sitemap');
});

test('une page reste au sitemap même sans date connue', () => {
  // L'appartenance ne doit pas dépendre de git : sinon une date introuvable
  // ferait disparaître la page du sitemap, ce qui est pire qu'une date absente.
  const { pages } = calculeLastmod();
  assert.ok(Object.prototype.hasOwnProperty.call(pages, '/pergolas'));
});

test('ecrireLastmod refuse une carte structurée mais sans aucune route', () => {
  assert.throws(() => ecrireLastmod({ pages: {}, articles: {} }), /vide/i);
});

test('verifieDates échoue quand git répond mais ne date presque rien', () => {
  // Le mode dégradé silencieux : git marche, la carte se remplit de null, et on
  // déploierait un sitemap muet sans que rien ne s'allume. Le projet fait déjà
  // échouer le build sur un title hors bornes, même exigence ici.
  assert.throws(
    () => verifieDates({ pages: { '/a': null, '/b': null, '/c': '2026-01-01' }, articles: {} }),
    /datée/i,
  );
});

test('verifieDates laisse passer une carte correctement datée', () => {
  assert.doesNotThrow(() =>
    verifieDates({ pages: { '/a': '2026-01-01', '/b': '2026-01-02' }, articles: {} }),
  );
});

test('calculeMembres liste les mêmes routes que calculeLastmod, sans dates', () => {
  // L'appartenance au sitemap ne dépend que de `app/` et du noindex déclaré.
  // Sans git on perd les dates, on ne doit pas perdre les pages.
  const membres = calculeMembres();
  const complet = calculeLastmod();
  assert.deepEqual(Object.keys(membres.pages), Object.keys(complet.pages));
  assert.deepEqual(Object.keys(membres.articles), Object.keys(complet.articles));
  assert.ok(Object.values(membres.pages).every((d) => d === null), 'aucune date attendue');
});

test('gitDisponible répond vrai dans le dépôt', () => {
  assert.equal(gitDisponible(), true);
});

test('parseStatut lit les chemins, y compris les renommages', () => {
  const sortie = [
    ' M app/page.tsx',
    '?? scripts/nouveau.mjs',
    'A  lib/data/truc.ts',
    'R  app/vieux/page.tsx -> app/neuf/page.tsx',
    'MM components/PageZone.tsx',
  ].join('\n');
  assert.deepEqual(
    [...parseStatut(sortie)].sort(),
    ['app/neuf/page.tsx', 'app/page.tsx', 'components/PageZone.tsx', 'lib/data/truc.ts', 'scripts/nouveau.mjs'],
  );
});

test('parseStatut rend un ensemble vide sur un arbre propre', () => {
  assert.equal(parseStatut('').size, 0);
});

test('aujourdHui rend la date locale, pas UTC', () => {
  // En France l'heure locale est en avance sur UTC : une modification faite
  // après minuit serait datée de la veille avec toISOString().
  assert.equal(aujourdHui(), new Date().toLocaleDateString('sv-SE'));
  assert.match(aujourdHui(), /^\d{4}-\d{2}-\d{2}$/);
});

test('fichiersModifies ne rend que des chemins qui existent vraiment', () => {
  // Le trim global de git() mangeait l'espace de tête de la première ligne et
  // décalait slice(3) d'un caractère : `app/x` devenait `pp/x`. Un test sur
  // une sortie bien formée ne le voyait pas, un chemin inexistant si.
  for (const chemin of fichiersModifies()) {
    assert.ok(
      existsSync(new URL(`../${chemin}`, import.meta.url)),
      `chemin inexistant, parsing décalé : ${chemin}`,
    );
  }
});

test('fichiersSurveilles ajoute zones.ts pour une zone, pas pour une page ordinaire', () => {
  // La date d'une zone vient de `git log -L` sur son bloc, qui ignore l'arbre
  // de travail : sans surveiller zones.ts, une zone modifiée et non commitée
  // annonçait encore son ancienne date. Constaté le 11/09/2026.
  const zone = fichiersSurveilles({ fichier: 'app/bassin-arcachon/page.tsx', estZone: true });
  assert.ok(zone.includes('lib/data/zones.ts'), 'zones.ts doit être surveillé pour une zone');
  assert.ok(zone.includes('components/PageZone.tsx'));

  const ordinaire = fichiersSurveilles({ fichier: 'app/contact/page.tsx', estZone: false });
  assert.ok(!ordinaire.includes('lib/data/zones.ts'));
  assert.deepEqual(ordinaire, ['app/contact/page.tsx']);
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { tmpdir } from 'node:os';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { dateDernierCommit, dateBlocZone, calculeLastmod, ecrireLastmod, garantitFichierCarte } from './lastmod.mjs';

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
  const m = calculeLastmod();
  for (const route of ['', '/pergolas', '/bassin-arcachon', '/blog/carport-bois-guide']) {
    assert.match(m[route] ?? '', /^\d{4}-\d{2}-\d{2}$/, `route absente ou mal datée : ${route}`);
  }
});

test('un article réécrit est daté sur sa réécriture, pas sur sa publication', () => {
  // Le bug d'origine : lastmod venait de article.date, figé à la publication.
  const m = calculeLastmod();
  assert.equal(
    m['/blog/carport-bois-guide'],
    dateDernierCommit(['app/blog/carport-bois-guide/page.tsx']),
  );
});

test('une zone est datée sur son propre bloc, pas sur tout zones.ts', () => {
  const m = calculeLastmod();
  assert.ok(m['/bassin-arcachon'] >= dateBlocZone('bassin-arcachon'));
});

test('ecrireLastmod refuse une carte vide plutot que d ecraser le fichier', () => {
  // Sans git (archive, CI sans historique), mieux vaut garder l'ancien fichier
  // que publier un sitemap sans aucune date.
  assert.throws(() => ecrireLastmod({}), /vide/i);
});

test('garantitFichierCarte crée une carte vide quand le fichier manque', () => {
  // Le fichier n'est plus commité : sans lui, l'import du sitemap ne résout pas
  // et le build casse. Mieux vaut un sitemap sans dates qu'un build à terre.
  const tmp = path.join(mkdtempSync(path.join(tmpdir(), 'lastmod-')), 'carte.json');
  assert.equal(garantitFichierCarte(tmp), true);
  assert.deepEqual(JSON.parse(readFileSync(tmp, 'utf8')), {});
});

test('garantitFichierCarte n écrase pas une carte déjà présente', () => {
  const tmp = path.join(mkdtempSync(path.join(tmpdir(), 'lastmod-')), 'carte.json');
  writeFileSync(tmp, JSON.stringify({ '/pergolas': '2026-09-06' }));
  assert.equal(garantitFichierCarte(tmp), false);
  assert.deepEqual(JSON.parse(readFileSync(tmp, 'utf8')), { '/pergolas': '2026-09-06' });
});

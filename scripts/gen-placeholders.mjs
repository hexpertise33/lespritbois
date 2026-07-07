/**
 * Génère des visuels placeholder « de marque » pour L'Esprit Bois.
 * Croquis architectural en trait, sur fond bois chaud + grain, aux couleurs du logo.
 * Ces SVG sont pensés pour être remplacés par de vraies photos (mêmes noms, dossier public/images/).
 *
 *   node scripts/gen-placeholders.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'images');
mkdirSync(OUT, { recursive: true });

const C = {
  noir: '#0B0B0C',
  brun: '#17140F',
  brun2: '#221B12',
  cuivre: '#C67C3D',
  cuivreClair: '#E4A566',
  ivoire: '#F3EEE4',
  olivier: '#93B23F',
};

const W = 1600;
const H = 1000;

/** Enveloppe commune : dégradé, halo cuivre, grain, vignette. */
function frame(inner, { glowX = 0.7, glowY = 0.28, glow = 0.55, angle = 155 } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img">
  <defs>
    <linearGradient id="bg" gradientTransform="rotate(${angle} 0.5 0.5)">
      <stop offset="0" stop-color="${C.noir}"/>
      <stop offset="0.55" stop-color="${C.brun}"/>
      <stop offset="1" stop-color="${C.brun2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="${glowX}" cy="${glowY}" r="0.75">
      <stop offset="0" stop-color="${C.cuivre}" stop-opacity="${glow}"/>
      <stop offset="0.4" stop-color="${C.cuivre}" stop-opacity="${glow * 0.35}"/>
      <stop offset="1" stop-color="${C.cuivre}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vig" cx="0.5" cy="0.42" r="0.85">
      <stop offset="0.55" stop-color="#000" stop-opacity="0"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.6"/>
    </radialGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="n"/>
      <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${inner}
  <rect width="${W}" height="${H}" fill="url(#vig)"/>
  <rect width="${W}" height="${H}" filter="url(#grain)" opacity="0.05"/>
</svg>`;
}

// opacité paramétrable (jamais dupliquée : XML interdit un attribut redéfini)
const stroke = ({ o = 0.85, w = 2 } = {}) =>
  `fill="none" stroke="${C.cuivre}" stroke-width="${w}" stroke-linecap="square" opacity="${o}"`;
const strokeSoft = ({ o = 0.28, w = 1.5 } = {}) =>
  `fill="none" stroke="${C.ivoire}" stroke-width="${w}" opacity="${o}"`;

/* — Terrasses : lames en perspective vers un horizon — */
function terrasses() {
  const vpX = 1020, vpY = 300;
  let boards = '';
  for (let i = 0; i <= 16; i++) {
    const y = 560 + i * (34 + i * 5.5);
    if (y > H + 40) break;
    boards += `<line x1="80" y1="${y}" x2="${W - 80}" y2="${y}" ${strokeSoft()}/>`;
  }
  let ribs = '';
  for (let i = -6; i <= 6; i++) {
    const x = 800 + i * 150;
    ribs += `<line x1="${x}" y1="560" x2="${vpX + (x - vpX) * 2.4}" y2="${H}" ${strokeSoft()}/>`;
  }
  return frame(
    `${boards}${ribs}
     <line x1="0" y1="558" x2="${W}" y2="558" ${stroke({ o: 0.5 })}/>
     <circle cx="${vpX}" cy="${vpY}" r="150" fill="url(#glow)"/>`,
    { glowX: 0.64, glowY: 0.3 }
  );
}

/* — Pergolas : lames supérieures + poteaux, ombres portées — */
function pergolas() {
  let slats = '';
  for (let i = 0; i < 22; i++) {
    const x = 180 + i * 62;
    slats += `<line x1="${x}" y1="230" x2="${x - 40}" y2="330" ${stroke({ o: 0.75 })}/>`;
  }
  const posts = [260, 1340];
  let p = '';
  for (const x of posts) p += `<line x1="${x}" y1="330" x2="${x}" y2="${H - 60}" ${stroke()}/>`;
  return frame(
    `<line x1="140" y1="230" x2="1460" y2="230" ${stroke()}/>
     <line x1="100" y1="330" x2="1420" y2="330" ${stroke()}/>
     ${slats}${p}
     <line x1="120" y1="${H - 60}" x2="${W - 120}" y2="${H - 60}" ${strokeSoft()}/>`,
    { glowX: 0.5, glowY: 0.18 }
  );
}

/* — Constructions bois : silhouette maison / ossature en A — */
function constructions() {
  return frame(
    `<path d="M420 ${H - 90} L420 470 L800 250 L1180 470 L1180 ${H - 90}" ${stroke()}/>
     <path d="M560 ${H - 90} L560 560 L800 400 L1040 560 L1040 ${H - 90}" ${strokeSoft()}/>
     <line x1="800" y1="250" x2="800" y2="${H - 90}" ${strokeSoft()}/>
     <line x1="300" y1="${H - 90}" x2="1300" y2="${H - 90}" ${stroke({ o: 0.5 })}/>
     <rect x="720" y="720" width="160" height="${H - 90 - 720}" ${strokeSoft()}/>`,
    { glowX: 0.5, glowY: 0.24 }
  );
}

/* — Carports : structure toit plat + voiture stylisée — */
function carports() {
  return frame(
    `<line x1="240" y1="360" x2="1360" y2="360" ${stroke()}/>
     <line x1="240" y1="392" x2="1360" y2="392" ${strokeSoft()}/>
     <line x1="300" y1="392" x2="300" y2="${H - 80}" ${stroke()}/>
     <line x1="1300" y1="392" x2="1300" y2="${H - 80}" ${stroke()}/>
     <line x1="800" y1="392" x2="800" y2="${H - 80}" ${strokeSoft()}/>
     <line x1="240" y1="${H - 80}" x2="1360" y2="${H - 80}" ${strokeSoft()}/>
     <path d="M560 ${H - 150} q60 -110 200 -110 h180 q120 0 170 110" ${strokeSoft()}/>
     <circle cx="660" cy="${H - 150}" r="34" ${strokeSoft()}/>
     <circle cx="980" cy="${H - 150}" r="34" ${strokeSoft()}/>`,
    { glowX: 0.5, glowY: 0.2 }
  );
}

/* — Bardages : la trame, tasseaux verticaux (motif signature) — */
function bardages() {
  let battens = '';
  for (let i = 0; i < 34; i++) {
    const x = 90 + i * 42;
    const op = 0.35 + ((i * 7) % 5) * 0.13;
    battens += `<line x1="${x}" y1="120" x2="${x}" y2="${H - 120}" fill="none" stroke="${C.cuivre}" stroke-width="10" opacity="${op.toFixed(2)}"/>`;
  }
  return frame(battens, { glowX: 0.8, glowY: 0.35, glow: 0.5, angle: 120 });
}

/* — Héro : structure moderne + trame + note végétale verte — */
function hero() {
  let slats = '';
  for (let i = 0; i < 12; i++) {
    const x = 120 + i * 40;
    slats += `<line x1="${x}" y1="250" x2="${x}" y2="720" fill="none" stroke="${C.cuivre}" stroke-width="8" opacity="${(0.3 + (i % 3) * 0.16).toFixed(2)}"/>`;
  }
  // arbre stylisé (rappel du logo), en vert olive
  let tree = `<line x1="1300" y1="760" x2="1300" y2="470" stroke="${C.olivier}" stroke-width="3" opacity="0.7"/>`;
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2;
    const r = 70 + (i % 4) * 22;
    const cx = 1300 + Math.cos(a) * r;
    const cy = 440 + Math.sin(a) * r * 0.8;
    tree += `<circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="7" fill="${C.olivier}" opacity="0.55"/>`;
  }
  return frame(
    `${slats}
     <path d="M640 720 L640 250 L900 300 L900 720" ${stroke()}/>
     <path d="M900 470 L1160 520 L1160 720 L900 720" ${stroke({ o: 0.6 })}/>
     <line x1="80" y1="720" x2="1520" y2="720" ${stroke({ o: 0.4 })}/>
     ${tree}`,
    { glowX: 0.68, glowY: 0.26, glow: 0.6 }
  );
}

const scenes = {
  hero,
  terrasses,
  pergolas,
  'constructions-bois': constructions,
  carports,
  bardages,
};

for (const [name, fn] of Object.entries(scenes)) {
  writeFileSync(join(OUT, `${name}.svg`), fn(), 'utf8');
  console.log('✓', `${name}.svg`);
}

// Quelques variantes pour la galerie (réutilisent les scènes avec un cadrage/halo différent).
const gallery = [
  ['real-1', terrasses],
  ['real-2', pergolas],
  ['real-3', bardages],
  ['real-4', constructions],
  ['real-5', carports],
  ['real-6', hero],
];
for (const [name, fn] of gallery) {
  writeFileSync(join(OUT, `${name}.svg`), fn(), 'utf8');
  console.log('✓', `${name}.svg`);
}

console.log('\nPlaceholders générés dans public/images/');

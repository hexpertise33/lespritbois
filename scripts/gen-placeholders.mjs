/**
 * Génère des visuels placeholder « de marque » pour L'Esprit Bois.
 * Version chaude & lumineuse (heure dorée) : bois texturé, glow doré, une teinte par métier.
 * Pensés pour être remplacés par de vraies photos (mêmes noms, dossier public/images/).
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
  espresso: '#20130a',
  cacao: '#3a2411',
  bois: '#6d4322',
  caramel: '#a86a31',
  miel: '#e6a24e',
  cuivre: '#f9bb71',
  or: '#ffd89a',
  ivoire: '#f6efe2',
  olivier: '#a7c34e',
  ciel: '#4a6068',
  seam: '#160c04',
};

const W = 1600;
const H = 1000;

/** Enveloppe : dégradé bois chaud + soleil doré + texture + vignette légère + grain. */
function frame(inner, { tint = C.miel, glowX = 0.72, glowY = 0.28, angle = 150, sun = 0.95 } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img">
  <defs>
    <linearGradient id="bg" gradientTransform="rotate(${angle} 0.5 0.5)">
      <stop offset="0" stop-color="${C.espresso}"/>
      <stop offset="0.45" stop-color="${C.cacao}"/>
      <stop offset="0.8" stop-color="${C.bois}"/>
      <stop offset="1" stop-color="${tint}"/>
    </linearGradient>
    <radialGradient id="sun" cx="${glowX}" cy="${glowY}" r="0.62">
      <stop offset="0" stop-color="${C.or}" stop-opacity="${sun}"/>
      <stop offset="0.26" stop-color="${C.miel}" stop-opacity="${(sun * 0.55).toFixed(2)}"/>
      <stop offset="0.65" stop-color="${C.cuivre}" stop-opacity="0.14"/>
      <stop offset="1" stop-color="${C.cuivre}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vig" cx="0.5" cy="0.5" r="0.82">
      <stop offset="0.52" stop-color="${C.espresso}" stop-opacity="0"/>
      <stop offset="1" stop-color="#100802" stop-opacity="0.5"/>
    </radialGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="n"/>
      <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  ${inner}
  <rect width="${W}" height="${H}" fill="url(#sun)"/>
  <rect width="${W}" height="${H}" fill="url(#vig)"/>
  <rect width="${W}" height="${H}" filter="url(#grain)" opacity="0.06"/>
</svg>`;
}

// Opacité toujours paramétrable (jamais dupliquée : XML interdit un attribut redéfini).
const stroke = ({ o = 0.92, w = 2.5, c = C.or } = {}) =>
  `fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="square" opacity="${o}"`;
const soft = ({ o = 0.42, w = 1.6, c = C.ivoire } = {}) =>
  `fill="none" stroke="${c}" stroke-width="${w}" opacity="${o}"`;

/* Texture : planches de bois horizontales (chaudes, avec joints & reflets). */
function planks({ y0 = 0, y1 = H, n = 9, a = 0.5 } = {}) {
  let s = '';
  const step = (y1 - y0) / n;
  for (let i = 0; i < n; i++) {
    const y = y0 + i * step;
    const band = i % 2 ? C.bois : C.caramel;
    s += `<rect x="0" y="${y.toFixed(1)}" width="${W}" height="${step.toFixed(1)}" fill="${band}" opacity="${a}"/>`;
    s += `<line x1="0" y1="${y.toFixed(1)}" x2="${W}" y2="${y.toFixed(1)}" stroke="${C.seam}" stroke-width="2.5" opacity="0.55"/>`;
    s += `<line x1="0" y1="${(y + 3).toFixed(1)}" x2="${W}" y2="${(y + 3).toFixed(1)}" stroke="${C.or}" stroke-width="1" opacity="0.22"/>`;
  }
  return s;
}

/* Texture : tasseaux verticaux (motif signature « la trame »). */
function slats({ x0 = 40, x1 = W - 40, n = 26, a = 0.55, gap = 0.72 } = {}) {
  let s = '';
  const step = (x1 - x0) / n;
  for (let i = 0; i < n; i++) {
    const x = x0 + i * step;
    const shade = i % 2 ? C.caramel : C.bois;
    s += `<rect x="${x.toFixed(1)}" y="0" width="${(step * gap).toFixed(1)}" height="${H}" fill="${shade}" opacity="${a}"/>`;
    s += `<rect x="${x.toFixed(1)}" y="0" width="2.5" height="${H}" fill="${C.or}" opacity="0.16"/>`;
    s += `<rect x="${(x + step * gap - 2).toFixed(1)}" y="0" width="2" height="${H}" fill="${C.seam}" opacity="0.4"/>`;
  }
  return s;
}

/* — Terrasses : platelage bois en perspective vers un soleil bas — */
function terrasses() {
  const vpX = 1040;
  let ribs = '';
  for (let i = -7; i <= 7; i++) {
    const x = 800 + i * 140;
    ribs += `<line x1="${x}" y1="540" x2="${vpX + (x - vpX) * 2.6}" y2="${H}" ${soft({ o: 0.22 })}/>`;
  }
  let boards = '';
  for (let i = 0; i <= 15; i++) {
    const y = 545 + i * (26 + i * 5.2);
    if (y > H + 40) break;
    boards += `<line x1="0" y1="${y.toFixed(0)}" x2="${W}" y2="${y.toFixed(0)}" ${soft({ o: 0.3, c: C.or })}/>`;
  }
  return frame(
    `<rect x="0" y="0" width="${W}" height="540" fill="${C.miel}" opacity="0.1"/>
     ${planks({ y0: 545, y1: H, n: 7, a: 0.6 })}
     ${boards}${ribs}
     <line x1="0" y1="543" x2="${W}" y2="543" ${stroke({ o: 0.55 })}/>`,
    { tint: C.miel, glowX: 0.62, glowY: 0.34, angle: 165 }
  );
}

/* — Pergolas : lames hautes + poteaux, lumière filtrée — */
function pergolas() {
  let over = '';
  for (let i = 0; i < 24; i++) {
    const x = 150 + i * 58;
    over += `<line x1="${x}" y1="210" x2="${x - 44}" y2="320" ${stroke({ o: 0.7, w: 6, c: C.caramel })}/>`;
    over += `<line x1="${x - 8}" y1="320" x2="${x - 8}" y2="${H - 70}" ${soft({ o: 0.12, c: C.or, w: 3 })}/>`;
  }
  let posts = '';
  for (const x of [250, 1350]) posts += `<line x1="${x}" y1="320" x2="${x}" y2="${H - 60}" ${stroke({ w: 9 })}/>`;
  return frame(
    `<line x1="120" y1="210" x2="1480" y2="210" ${stroke({ w: 7 })}/>
     <line x1="90" y1="320" x2="1430" y2="320" ${stroke({ o: 0.85, w: 6 })}/>
     ${over}${posts}
     ${planks({ y0: H - 60, y1: H, n: 1, a: 0.5 })}
     <line x1="90" y1="${H - 60}" x2="${W - 90}" y2="${H - 60}" ${soft({ o: 0.3 })}/>`,
    { tint: C.or, glowX: 0.5, glowY: 0.14, angle: 135, sun: 1 }
  );
}

/* — Constructions bois : ossature maison en A, baie vitrée dorée — */
function constructions() {
  return frame(
    `${planks({ y0: H - 150, y1: H, n: 2, a: 0.55 })}
     <path d="M420 ${H - 120} L420 460 L800 235 L1180 460 L1180 ${H - 120}" ${stroke({ w: 3.5 })}/>
     <path d="M560 ${H - 120} L560 555 L800 400 L1040 555 L1040 ${H - 120}" ${soft({ o: 0.5, c: C.or })}/>
     <rect x="690" y="640" width="220" height="${H - 120 - 640}" fill="${C.or}" opacity="0.16"/>
     <rect x="690" y="640" width="220" height="${H - 120 - 640}" ${soft({ o: 0.55, c: C.or })}/>
     <line x1="800" y1="235" x2="800" y2="${H - 120}" ${soft({ o: 0.35 })}/>
     <line x1="260" y1="${H - 120}" x2="1340" y2="${H - 120}" ${stroke({ o: 0.5 })}/>`,
    { tint: C.caramel, glowX: 0.5, glowY: 0.22, angle: 150 }
  );
}

/* — Carports : toit plat + poteaux + voiture stylisée — */
function carports() {
  return frame(
    `${planks({ y0: H - 90, y1: H, n: 1, a: 0.5 })}
     <rect x="240" y="345" width="1120" height="30" fill="${C.caramel}" opacity="0.6"/>
     <line x1="240" y1="345" x2="1360" y2="345" ${stroke({ w: 3 })}/>
     <line x1="240" y1="375" x2="1360" y2="375" ${soft({ o: 0.4, c: C.or })}/>
     <line x1="300" y1="375" x2="300" y2="${H - 82}" ${stroke({ w: 9 })}/>
     <line x1="1300" y1="375" x2="1300" y2="${H - 82}" ${stroke({ w: 9 })}/>
     <line x1="800" y1="375" x2="800" y2="${H - 82}" ${soft({ o: 0.3, w: 4 })}/>
     <path d="M560 ${H - 150} q60 -110 200 -110 h180 q120 0 170 110" ${soft({ o: 0.5, c: C.or })}/>
     <circle cx="660" cy="${H - 150}" r="34" ${soft({ o: 0.5, c: C.or })}/>
     <circle cx="980" cy="${H - 150}" r="34" ${soft({ o: 0.5, c: C.or })}/>`,
    { tint: C.cuivre, glowX: 0.52, glowY: 0.2, angle: 150 }
  );
}

/* — Bardages : la trame plein cadre, tasseaux chauds + joints d'or — */
function bardages() {
  return frame(`${slats({ n: 28, a: 0.62, gap: 0.66 })}`, {
    tint: C.miel,
    glowX: 0.78,
    glowY: 0.32,
    angle: 118,
    sun: 0.85,
  });
}

/* — Héro : structure moderne + trame + arbre olivier lumineux — */
function hero() {
  let tree = `<line x1="1300" y1="770" x2="1300" y2="470" stroke="${C.olivier}" stroke-width="4" opacity="0.85"/>`;
  for (let i = 0; i < 30; i++) {
    const a = (i / 30) * Math.PI * 2;
    const r = 66 + (i % 4) * 24;
    const cx = 1300 + Math.cos(a) * r;
    const cy = 440 + Math.sin(a) * r * 0.8;
    tree += `<circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="8" fill="${C.olivier}" opacity="0.7"/>`;
  }
  return frame(
    `${slats({ x0: 90, x1: 640, n: 11, a: 0.5, gap: 0.6 })}
     <path d="M660 730 L660 250 L920 300 L920 730" ${stroke({ w: 3.5 })}/>
     <path d="M920 470 L1180 520 L1180 730 L920 730" ${stroke({ o: 0.6, w: 3 })}/>
     <rect x="700" y="430" width="150" height="300" fill="${C.or}" opacity="0.18"/>
     <line x1="60" y1="730" x2="1540" y2="730" ${stroke({ o: 0.45 })}/>
     ${tree}`,
    { tint: C.or, glowX: 0.7, glowY: 0.24, angle: 155, sun: 1 }
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

// Galerie : réutilise les scènes.
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

console.log('\nPlaceholders (chauds & lumineux) générés dans public/images/');

/**
 * Recrée le logo L'Esprit Bois en SVG vectoriel, d'après l'image fournie.
 * Scène : lames (bardage) + structure bois (maison/carport) + pergola-terrasse + arbre.
 *   node scripts/gen-logo.mjs
 * Produit : public/logo-mark.svg (scène seule) et public/favicon.svg.
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUB = join(__dirname, '..', 'public');

const CUIVRE = '#c67c3d';
const IVOIRE = '#f3eee4';
const OLIVIER = '#9bbe3e';

/* — Lames de bardage à gauche : montent et s'éclaircissent vers la structure — */
function slats() {
  let s = '';
  for (let i = 0; i < 9; i++) {
    const x = 16 + i * 7.6;
    const top = 64 - i * 3.3;
    const op = (0.42 + i * 0.055).toFixed(2);
    s += `<line x1="${x}" y1="${top}" x2="${x}" y2="130" stroke="${CUIVRE}" stroke-width="3.4" opacity="${op}"/>`;
  }
  return s;
}

/* — Arbre pointilliste (rappel exact du logo), vert olive — */
function tree(cx = 218, cy = 58) {
  let t = `<line x1="${cx}" y1="130" x2="${cx}" y2="80" stroke="${OLIVIER}" stroke-width="2.4" opacity="0.85"/>`;
  t += `<line x1="${cx}" y1="96" x2="${cx - 9}" y2="86" stroke="${OLIVIER}" stroke-width="1.6" opacity="0.7"/>`;
  t += `<line x1="${cx}" y1="92" x2="${cx + 9}" y2="80" stroke="${OLIVIER}" stroke-width="1.6" opacity="0.7"/>`;
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < 30; i++) {
    const r = Math.sqrt(i / 30) * 21;
    const a = i * golden;
    const px = cx + Math.cos(a) * r;
    const py = cy + Math.sin(a) * r * 1.15;
    const rad = (2.6 - (i / 30) * 0.9).toFixed(2);
    const op = (0.9 - (i / 30) * 0.35).toFixed(2);
    t += `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${rad}" fill="${OLIVIER}" opacity="${op}"/>`;
  }
  return t;
}

/* — La scène complète du logo — */
function scene() {
  return `${slats()}
    <!-- structure bois : ossature / maison-carport, en blanc -->
    <path d="M92 130 L92 30 L150 50 L150 130" fill="none" stroke="${IVOIRE}" stroke-width="3" stroke-linejoin="round"/>
    <!-- pergola-terrasse couverte, en cuivre -->
    <path d="M120 74 L198 82 M120 82 L198 90" fill="none" stroke="${CUIVRE}" stroke-width="2.6"/>
    <line x1="196" y1="90" x2="196" y2="128" stroke="${CUIVRE}" stroke-width="2.6"/>
    <line x1="158" y1="86" x2="158" y2="128" stroke="${CUIVRE}" stroke-width="2.2" opacity="0.75"/>
    <path d="M120 122 L202 127" fill="none" stroke="${CUIVRE}" stroke-width="2.2"/>
    <!-- banc / assise -->
    <path d="M132 108 L172 111 M132 98 L132 110" fill="none" stroke="${CUIVRE}" stroke-width="2" opacity="0.85"/>
    ${tree()}
    <!-- sol -->
    <line x1="10" y1="130" x2="250" y2="130" stroke="${CUIVRE}" stroke-width="2" opacity="0.7"/>`;
}

// — Mark (scène seule, fond transparent) —
const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 150" width="260" height="150" role="img" aria-label="L'Esprit Bois">
  ${scene()}
</svg>`;
writeFileSync(join(PUB, 'logo-mark.svg'), mark, 'utf8');
console.log('✓ logo-mark.svg');

// — Favicon (mark recadré sur pastille noire) —
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="150" height="150">
  <rect width="150" height="150" rx="28" fill="#0b0b0c"/>
  <g transform="translate(-42 4) scale(0.9)">
    ${scene()}
  </g>
</svg>`;
writeFileSync(join(PUB, 'favicon.svg'), favicon, 'utf8');
console.log('✓ favicon.svg');

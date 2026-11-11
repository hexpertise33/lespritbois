import { CHAMP_PIEGE } from '@/lib/antispam';

/**
 * Champ piège anti-robots : hors de l'écran, hors de la navigation au clavier et
 * masqué aux lecteurs d'écran. Un humain ne le voit ni ne le remplit ; un robot
 * qui remplit tous les champs se trahit. Voir lib/antispam.ts.
 *
 * Positionné hors écran plutôt qu'en display:none : certains robots ignorent les
 * champs dont le style dit qu'ils sont cachés.
 */
export default function ChampPiege() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}>
      <label>
        Ne pas remplir ce champ
        <input type="text" name={CHAMP_PIEGE} tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}

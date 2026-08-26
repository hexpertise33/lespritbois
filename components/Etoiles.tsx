/**
 * Une note en étoiles pleines.
 *
 * La police d'icônes du site est un sous-ensemble statique, généré avec l'axe
 * FILL figé à 0 : `font-variation-settings: 'FILL' 1` n'y produit donc aucun
 * effet et l'étoile reste creuse. Un contour se lit mal comme une note, alors
 * que c'est l'un des rares signaux de confiance immédiats d'une page. Le
 * glyphe est donc dessiné ici, sans dépendre de la police.
 */
export default function Etoiles({
  sur = 5,
  taille = 20,
  className = '',
}: {
  sur?: number;
  taille?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 ${className}`}
      role="img"
      aria-label={`Note de ${sur} sur 5`}
    >
      {Array.from({ length: sur }).map((_, i) => (
        <svg
          key={i}
          width={taille}
          height={taille}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </span>
  );
}

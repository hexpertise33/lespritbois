/* =========================================================================
   L'ESPRIT BOIS — thème Tailwind partagé par toutes les pages de l'aperçu.
   Charte : noir #141414 · cuivre #c67c3d · blanc/crème. Olive = logo uniquement.
   Doit être chargé APRÈS le script CDN Tailwind (qui définit `tailwind`).
   ========================================================================= */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        /* Neutres chauds — le site reste lumineux */
        surface: '#faf7f2',
        background: '#faf7f2',
        'surface-container-low': '#f2ede5',
        'surface-container': '#efe9e0',
        'surface-container-high': '#eae4da',
        'surface-container-highest': '#eae4da',
        'surface-variant': '#e2dace',
        'surface-dim': '#b9b1a6',
        'on-surface': '#1f1c19',
        'on-surface-variant': '#5b5651',

        /* Noir — titres, boutons, sections d'appui */
        primary: '#141414',
        'on-primary': '#ffffff',
        'on-primary-container': '#c9c3bb',
        'primary-fixed': '#f5e6d6',

        /* Cuivre — échantillonné dans le logo */
        secondary: '#c67c3d',
        'secondary-dark': '#9a5a24', // accent lisible sur fond clair (5,3:1)
        'secondary-fixed': '#e3ac77',
        'secondary-fixed-dim': '#e3ac77',

        /* Olive — réservé au logo, jamais à l'interface */
        olive: '#9bbe3e',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      spacing: {
        gutter: '32px',
        'container-max': '1280px',
        'section-padding-mobile': '64px',
        'section-padding': '120px',
        base: '8px',
      },
      fontFamily: {
        wordmark: ['Jost'],
        'body-md': ['Manrope'],
        'headline-md': ['Playfair Display'],
        'display-lg-mobile': ['Playfair Display'],
        'body-lg': ['Manrope'],
        'label-md': ['Manrope'],
        'headline-sm': ['Playfair Display'],
        'display-lg': ['Playfair Display'],
      },
      fontSize: {
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'headline-md': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'display-lg-mobile': ['40px', { lineHeight: '48px', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.05em', fontWeight: '600' }],
        'headline-sm': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'display-lg': ['64px', { lineHeight: '72px', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
    },
  },
};

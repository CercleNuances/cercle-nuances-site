/**
 * ═══════════════════════════════════════════════════════
 *  CERCLE NUANCES — Fichier de contenu
 *  Modifiez ce fichier pour changer les textes, images,
 *  liens et menus sans toucher au reste du code.
 * ═══════════════════════════════════════════════════════
 */

const SITE = {

  // ── Formulaire de contact (Typeform) ─────────────────
  // Pour changer le formulaire : remplacez l'ID dans index.html
  // Section : <!-- Formulaire Typeform --> → data-tf-live="VOTRE_ID"
  typeformId: 'nRHybWVZ',

  // ── Liens externes ──────────────────────────────────
  liens: {
    calendly:    'https://calendly.com/cerclenuances-info/30min',
    matterport:  'https://my.matterport.com/show/?m=TTwEMpDBSSo',
    instagram:   'https://www.instagram.com/cercle_nuances/',
    instagramHandle: '@cercle_nuances',
  },

  // ── Reels Instagram (URLs embed) ────────────────────
  // Pour changer un reel : remplacez l'URL par celle de votre nouveau reel
  // Format : https://www.instagram.com/reel/CODE_DU_REEL/embed/
  reels: [
    'https://www.instagram.com/reel/DXmV_r2h5ae/embed/',
    'https://www.instagram.com/reel/DW_gaIOqd_t/embed/',
    'https://www.instagram.com/reel/DWtaQx5qJ8P/embed/',
  ],

  // ── Menus PDF ───────────────────────────────────────
  // fichier: chemin vers le PDF dans le dossier menus/
  // fichier: null → affiche le formulaire de contact
  menus: [
    {
      type:    'Entreprises',
      nom:     'Menu Corporatif',
      desc:    'Cocktails dînatoires, galas, lancements et événements d\'entreprise sur mesure.',
      fichier: 'menus/Menu_Ete_2026.pdf',
    },
    {
      type:    'Événements privés',
      nom:     'Menu Événements 2026',
      desc:    'Anniversaires, fêtes privées et chef à domicile — pour chaque célébration.',
      fichier: 'menus/Menu_Evenements_2026.pdf',
    },
    {
      type:    'Mariage',
      nom:     'Forfait Mariage',
      desc:    'Accompagnement complet, menus sur mesure et service raffiné pour votre plus beau jour.',
      fichier: null,
    },
  ],

  // ── Galerie principale (page Accueil) ───────────────
  // Pour ajouter une photo : ajoutez le chemin ici ET copiez le fichier dans img/
  // La galerie s'ajuste automatiquement — pas de cases vides.
  galerie: [
    'img/gal-01.jpg',
    'img/gal-02.png',
    'img/gal-03.png',
    'img/gal-04.jpg',
    'img/gal-05.jpg',
    'img/gal-06.png',
    'img/gal-07.jpg',
    'img/gal-08.jpg',
    'img/gal-09.png',
    'img/gal-10.png',
    'img/gal-11.jpg',
    'img/gal-13.jpg',
    'img/gal-14.jpg',
    'img/accents.jpg',
    'img/event-choux.jpg',
    'img/mariage-tarte.jpg',
  ],

  // ── Galerie Mariage (page Mariage) ──────────────────
  galerieMariage: [
    'img/nuance-036 copie.jpg',
    'img/nuance-098 copie.jpg',
    'img/nuance-052.jpg',
  ],

  // ── Galerie Maison Martin (page Maison Martin) ──────
  galerieMaison: [
    'img/mm-01.jpg',
    'img/mm-02.jpg',
    'img/mm-03.jpg',
    'img/mm-04.jpg',
    'img/mm-05.jpg',
  ],

  // ── Témoignage (page Accueil) ────────────────────────
  temoignage: {
    texte: 'Tout était délicieux, magnifiquement présenté et parfaitement orchestré du début à la fin. Une vraie expérience sensorielle, remplie de nuances et d\'élégance.',
    auteur: '— Mathilde',
  },

  // ── Chiffres clés (strip Accueil) ───────────────────
  stats: [
    { chiffre: '100+', label: 'Événements réalisés' },
    { chiffre: '3',    label: 'Offres sur mesure' },
    { chiffre: '∞',    label: 'Créativité & passion' },
    { chiffre: '24h',  label: 'Délai de réponse' },
  ],

};

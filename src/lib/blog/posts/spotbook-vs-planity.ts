import type { BlogPost } from '../types'

export const spotbookVsPlanity: BlogPost = {
  slug: 'spotbook-vs-planity-treatwell-eventbrite',
  title:
    'Spotbook vs Planity, Treatwell et Eventbrite : le guide comparatif 2026',
  description:
    'Quelle plateforme choisir au Québec pour prendre des réservations, vendre des billets et mettre en avant vos vidéos ? Comparatif honnête des 4 acteurs du marché.',
  excerpt:
    'Un tableau clair qui compare Spotbook, Planity, Treatwell et Eventbrite sur 6 dimensions — feed vidéo, réservation, billetterie, paiement, Mobile Money, focus indépendants.',
  category: 'Comparatif',
  author: 'L’équipe Spotbook',
  date: '2026-04-18',
  readMinutes: 6,
  keywords: [
    'alternative Planity Québec',
    'comparatif plateforme réservation',
    'Treatwell vs Planity',
    'Eventbrite alternative',
    'meilleure app pro beauté Canada',
    'plateforme indépendant Québec',
  ],
  hero: {
    eyebrow: '· Comparatif 2026 ·',
    gradient:
      'radial-gradient(ellipse 70% 90% at 50% 20%, rgba(176,38,232,0.5), rgba(253,242,195,0.35) 45%, #0C0C0C 100%)',
    emoji: '⚖️',
  },
  blocks: [
    {
      type: 'p',
      text: 'Vous lancez votre activité de coiffeur, barbier, DJ ou coach au Québec ? Vous cherchez une plateforme pour gérer vos réservations ou vendre vos billets ? Voici un comparatif objectif des quatre acteurs majeurs du marché, sur les six dimensions qui comptent vraiment pour un indépendant.',
    },
    {
      type: 'h2',
      text: 'Les 6 dimensions à comparer',
    },
    {
      type: 'ol',
      items: [
        'Feed vidéo intégré pour promouvoir son travail',
        'Réservation de services avec agenda temps réel',
        'Billetterie événementielle avec QR code',
        'Paiement intégré et reversement automatique',
        'Support Mobile Money (Orange Money, Wave) pour l’international',
        'Focus spécifique sur les indépendants locaux',
      ],
    },
    {
      type: 'h2',
      text: 'Le tableau comparatif',
    },
    {
      type: 'table',
      headers: [
        'Acteur',
        'Feed vidéo',
        'Réservation',
        'Billetterie',
        'Paiement',
        'Mobile Money',
        'Focus indé',
      ],
      rows: [
        ['Spotbook', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui'],
        ['Planity', 'Non', 'Oui', 'Non', 'Oui', 'Non', 'Oui'],
        ['Treatwell', 'Non', 'Oui', 'Non', 'Oui', 'Non', 'Oui'],
        ['Eventbrite', 'Non', 'Non', 'Oui', 'Oui', 'Non', 'Non'],
        ['Instagram', 'Oui', 'Non', 'Non', 'Non', 'Non', 'Non'],
      ],
    },
    {
      type: 'h2',
      text: 'Planity — la référence française sur la réservation',
    },
    {
      type: 'p',
      text: 'Planity est le leader français de la réservation beauté. Produit mature, agenda bien foutu, bonne intégration Stripe. Mais deux limites au Québec : pas de feed vidéo pour promouvoir votre travail, et aucune prise en charge des événements/masterclasses, que beaucoup de pros organisent en parallèle de leurs prestations.',
    },
    {
      type: 'h2',
      text: 'Treatwell — très bien pour les salons, moins pour les indés',
    },
    {
      type: 'p',
      text: 'Treatwell cible davantage les salons établis. Excellent produit côté fiche salon, mais la commission est élevée et l’UX côté client reste plutôt "annuaire". Pas de feed vidéo, pas de billetterie. Bon choix si vous êtes un salon à plusieurs collaborateurs, moins pertinent pour un pro indépendant qui veut mettre en avant sa personnalité.',
    },
    {
      type: 'h2',
      text: 'Eventbrite — historique, mais rien pour les services',
    },
    {
      type: 'p',
      text: 'Eventbrite reste la référence sur la billetterie pour les gros événements. Problème : commission élevée, aucune fonctionnalité de réservation de services, et UX qui n’a pas bougé depuis 10 ans. Si vous êtes DJ + coach, vous aurez besoin d’une deuxième plateforme en parallèle.',
    },
    {
      type: 'h2',
      text: 'Spotbook — la super-app tout-en-un',
    },
    {
      type: 'p',
      text: 'Spotbook est conçu spécifiquement pour l’indépendant québécois qui fait plusieurs choses à la fois : un barbier qui organise aussi des soirées, une coach qui vend des masterclasses, un DJ qui propose aussi des cours. C’est la seule plateforme qui combine les 6 dimensions en une seule app, avec 0% de commission sur les services, un feed vidéo style TikTok, et un support Mobile Money natif pour ceux qui travaillent aussi en Afrique de l’Ouest.',
    },
    {
      type: 'callout',
      title: 'Verdict',
      text: 'Planity pour un mono-salon français, Treatwell pour un gros salon, Eventbrite pour un gros concert. Spotbook pour l’indépendant qui veut une seule app pour tout son business — réservations, événements, paiement, marketing.',
    },
    {
      type: 'h2',
      text: 'Ce que vous devriez regarder avant de choisir',
    },
    {
      type: 'ul',
      items: [
        'Quel est le taux de commission exact sur une transaction de 100$ ?',
        'Combien de clics pour qu’un client aille de la découverte à la confirmation ?',
        'L’app laisse-t-elle vos clients voir votre travail en vidéo, ou juste en photo ?',
        'Est-ce que les acomptes et rappels automatiques sont inclus ou en option payante ?',
      ],
    },
  ],
}

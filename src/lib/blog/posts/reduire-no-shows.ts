import type { BlogPost } from '../types'

export const reduireNoShows: BlogPost = {
  slug: 'reduire-no-shows-acomptes-rappels',
  title: 'Comment les acomptes et les rappels réduisent vos no-shows de 70%',
  description:
    'Les no-shows coûtent jusqu’à 20% du chiffre d’affaires d’un pro indépendant. Voici la mécanique exacte qui fait baisser ce taux, étape par étape.',
  excerpt:
    'Un no-show, c’est un créneau perdu qu’on ne récupère jamais. Voici comment acomptes + rappels automatiques font passer votre taux d’absence de 20% à moins de 6%.',
  category: 'Pros',
  author: 'L’équipe Spotbook',
  date: '2026-04-12',
  readMinutes: 5,
  keywords: [
    'réduire no-show',
    'acompte rendez-vous beauté',
    'rappel automatique client',
    'politique annulation salon',
    'logiciel prévention absence',
    'gestion rendez-vous indépendant',
  ],
  hero: {
    eyebrow: '· Pros · Revenue ops ·',
    gradient:
      'radial-gradient(ellipse 70% 90% at 50% 20%, rgba(253,242,195,0.4), rgba(142,5,194,0.5) 45%, #0C0C0C 100%)',
    emoji: '📅',
  },
  blocks: [
    {
      type: 'p',
      text: 'Dans le secteur de la beauté et du bien-être, le no-show — ce client qui ne se présente pas — est le premier poste de perte pour un indépendant. Sans protection, 15 à 20% des créneaux disparaissent chaque mois. À raison de 70$ de panier moyen et 80 rendez-vous, cela représente près de 1 120$ de revenus évaporés par mois. Voici comment les plateformes modernes ramènent ce chiffre à moins de 6%.',
    },
    {
      type: 'stat',
      value: '−70%',
      label: 'de no-shows avec acompte + rappels combinés',
    },
    {
      type: 'h2',
      text: 'Pourquoi les clients ne se présentent pas',
    },
    {
      type: 'p',
      text: 'Trois causes principales expliquent 90% des absences :',
    },
    {
      type: 'ol',
      items: [
        'Oubli pur et simple (surtout pour les rendez-vous pris plus de 7 jours à l’avance).',
        'Changement d’agenda imprévu, avec la perception qu’un DM vaut annulation.',
        'Désengagement : le rendez-vous n’a rien "coûté" encore, donc l’annuler ne fait pas mal.',
      ],
    },
    {
      type: 'h2',
      text: 'Levier 1 — L’acompte',
    },
    {
      type: 'p',
      text: 'Quand un client paie ne serait-ce que 20% du service au moment de la réservation, son engagement bascule. Le rendez-vous n’est plus "gratuit", il est déjà en partie investi. C’est le levier le plus puissant — et de loin.',
    },
    {
      type: 'ul',
      items: [
        '20 à 30% d’acompte suffit pour éliminer les réservations non-sérieuses',
        'L’acompte est intégralement conservé en cas d’absence',
        'Déductible du tarif final si le client se présente',
      ],
    },
    {
      type: 'h2',
      text: 'Levier 2 — Les rappels intelligents',
    },
    {
      type: 'p',
      text: 'Le second levier est la notification push automatique — deux messages bien ciblés éliminent la quasi-totalité des oublis :',
    },
    {
      type: 'table',
      headers: ['Timing', 'Type', 'Effet'],
      rows: [
        ['J-1 à 18h', 'Push + email', 'Permet au client de confirmer ou d’annuler à temps'],
        ['H-2', 'Push', 'Rappel final, géolocalisable'],
        ['H+10 après', 'Push', 'Collecte de l’avis, preuve sociale'],
      ],
    },
    {
      type: 'h2',
      text: 'Levier 3 — La politique d’annulation transparente',
    },
    {
      type: 'p',
      text: 'Une politique claire et affichée dès la réservation diminue les annulations de dernière minute. Trois niveaux suffisent :',
    },
    {
      type: 'ul',
      items: [
        'Flexible — annulation gratuite jusqu’à 24h avant',
        'Modérée — annulation gratuite jusqu’à 48h avant, 50% conservés ensuite',
        'Stricte — acompte non remboursable dès la réservation',
      ],
    },
    {
      type: 'callout',
      title: 'Important',
      text: 'Une bonne plateforme applique ces règles automatiquement. Pas de débat, pas de négociation awkward en DM — l’app gère, le client accepte à la réservation.',
    },
    {
      type: 'h2',
      text: 'Le combo qui fait la différence',
    },
    {
      type: 'p',
      text: 'Acompte + rappels intelligents + politique affichée = -70% de no-shows. C’est la mécanique qui rend un créneau "réservé" aussi fiable qu’un créneau "confirmé". Chaque RDV devient un revenu garanti.',
    },
  ],
}

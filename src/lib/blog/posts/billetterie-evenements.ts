import type { BlogPost } from '../types'

export const billetterieEvenements: BlogPost = {
  slug: 'billetterie-evenements-remplir-48h',
  title:
    'Organiser un événement au Québec et le remplir en 48h grâce à la billetterie en ligne',
  description:
    'Guide complet pour DJ, organisateurs de soirées et collectifs : vendre ses billets en ligne, prévenir les fraudes avec le QR code, scanner à l’entrée en temps réel.',
  excerpt:
    'Vendre des billets sur Excel + virements Interac, c’est fini. Voici comment structurer votre événement pour qu’il se remplisse presque seul et que l’entrée se passe sans accroc.',
  category: 'Billetterie',
  author: 'L’équipe Spotbook',
  date: '2026-04-14',
  readMinutes: 7,
  keywords: [
    'billetterie en ligne Québec',
    'vendre billets événement Montréal',
    'alternative Eventbrite',
    'QR code événement',
    'remplir soirée DJ',
    'système scan billet',
  ],
  hero: {
    eyebrow: '· Billetterie ·',
    gradient:
      'radial-gradient(ellipse 70% 90% at 50% 20%, rgba(176,38,232,0.6), rgba(62,6,95,0.55) 45%, #0C0C0C 100%)',
    emoji: '🎟️',
  },
  blocks: [
    {
      type: 'p',
      text: 'Au Québec, la billetterie événementielle locale pèse plus de 2,1 milliards de dollars et les masterclasses/ateliers progressent de 20% par an. C’est un marché énorme — mais encore massivement géré avec des outils de fortune : tableurs Excel, virements Interac, captures d’écran pour preuve de paiement. Voici comment passer à une structure pro en quelques heures.',
    },
    {
      type: 'h2',
      text: 'Étape 1 — Structurer votre offre de billets',
    },
    {
      type: 'p',
      text: 'Un événement qui convertit propose toujours plusieurs tarifs, pour capter différents profils acheteurs :',
    },
    {
      type: 'table',
      headers: ['Type', 'Prix', 'Levier'],
      rows: [
        ['Early bird', '−30% pendant 72h', 'Crée l’urgence au lancement'],
        ['Standard', 'Prix de référence', 'Volume principal'],
        ['VIP / Backstage', '+50 à +100%', 'Upsell, marge élevée'],
        ['Gratuit (liste)', 'Entrée soumise à approbation', 'Presse, invités'],
      ],
    },
    {
      type: 'h2',
      text: 'Étape 2 — Acheter la confiance avec le QR code signé',
    },
    {
      type: 'p',
      text: 'L’ancien système Excel + virement Interac ne vérifie rien. N’importe quelle capture d’écran peut être réutilisée. Un QR code signé numériquement côté serveur, lui, est infalsifiable : chaque scan est vérifié en temps réel contre la base de données.',
    },
    {
      type: 'ul',
      items: [
        'Ticket PDF généré automatiquement après paiement',
        'Signature cryptographique serveur',
        'Un scan = une entrée (impossible à dupliquer)',
        'Interface de scan pour l’organisateur avec compteur temps réel',
      ],
    },
    {
      type: 'h2',
      text: 'Étape 3 — La stratégie de remplissage en 48h',
    },
    {
      type: 'p',
      text: 'Un événement local bien orchestré peut se remplir en 48 heures avec cette séquence :',
    },
    {
      type: 'ol',
      items: [
        'H-0 : publication de la vidéo teaser dans le feed avec lien billetterie.',
        'H+2 : activation du tarif early bird (−30%) pendant 72h seulement.',
        'H+6 : story/post sur vos réseaux avec mention de 5 personnes influentes.',
        'H+24 : rappel avec compteur "Plus que X places early bird".',
        'H+48 : bascule prix standard + relance "places limitées".',
      ],
    },
    {
      type: 'stat',
      value: '+35%',
      label: 'conversion moyenne avec le tarif early bird activé',
    },
    {
      type: 'h2',
      text: 'Étape 4 — La liste d’attente qui rattrape les annulations',
    },
    {
      type: 'p',
      text: 'Votre événement est sold out ? Ne refermez pas les ventes. Activez une liste d’attente qui convertit automatiquement les annulations en nouvelles ventes. En pratique, 3 à 8% des places sont libérées dans les 48h précédant l’événement — ce sont autant de revenus que vous capterez sans rien faire.',
    },
    {
      type: 'h2',
      text: 'Étape 5 — Le jour J, le scan temps réel',
    },
    {
      type: 'p',
      text: 'À l’entrée, un staff équipé de son téléphone scanne chaque billet. Le compteur affiche en direct le nombre d’entrées et la capacité restante. Si un billet a déjà été scanné, l’app le refuse et affiche un message clair. Zéro papier, zéro dispute à la porte.',
    },
    {
      type: 'callout',
      title: 'Bonus — l’après-événement',
      text: 'Les plateformes modernes envoient automatiquement un message post-événement aux acheteurs : demande d’avis, invitation au prochain event, code promo. C’est votre meilleur levier de fidélisation.',
    },
    {
      type: 'h2',
      text: 'Alternatives au duo Excel + Interac',
    },
    {
      type: 'p',
      text: 'Eventbrite est historique mais cher et impersonnel. Une super-app comme Spotbook inclut la billetterie dans le même flux que la réservation de services, avec commission plus basse, QR code signé, scan temps réel, et surtout un feed vidéo pour promouvoir l’événement directement dans l’app.',
    },
  ],
}

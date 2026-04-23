'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const FAQ_CATEGORIES = [
  {
    title: 'Pour les Clients',
    questions: [
      {
        q: 'Comment puis-je réserver un service sur Spotbook ?',
        a: 'Pour réserver un service : 1) Téléchargez l&apos;app Spotbook, 2) Recherchez le professionnel ou service désiré, 3) Consultez les détails et disponibilités, 4) Cliquez sur "Réserver", 5) Effectuez le paiement de l&apos;acompte. Vous recevrez une confirmation par email.',
      },
      {
        q: 'Quels modes de paiement acceptez-vous ?',
        a: 'Nous acceptons toutes les cartes de crédit (Visa, Mastercard, American Express) et les portefeuilles numériques (Apple Pay, Google Pay). Les paiements sont traités de manière sécurisée via Stripe.',
      },
      {
        q: 'Puis-je annuler ma réservation ?',
        a: 'Oui, vous pouvez annuler selon la politique définie par le professionnel (Modérée : 24h avant le service, ou Stricte : aucun remboursement). Les annulations dans le délai modéré sont remboursées. Passé ce délai, l&apos;acompte n&apos;est pas remboursable.',
      },
      {
        q: 'Comment puis-je acheter des billets pour un événement ?',
        a: 'Rendez-vous sur la page de l\'événement, cliquez sur \"Acheter un billet\", sélectionnez la quantité, et complétez le paiement. Vos billets sont émis immédiatement et accessible dans l\'app.',
      },
      {
        q: 'Est-il sûr de partager mes informations de paiement ?',
        a: 'Oui, absolument. Nous utilisons Stripe, un processeur de paiement certifié PCI DSS. Vos numéros de carte ne sont jamais stockés sur nos serveurs.',
      },
      {
        q: 'Que dois-je faire si je ne suis pas satisfait du service ?',
        a: 'Vous pouvez laisser un avis et une note directement dans l\'app après le service. Si vous avez un problème, contactez-nous à support_spotbook@gmail.com avec les détails.',
      },
      {
        q: 'Puis-je demander une facture ?',
        a: 'Oui, vous recevez automatiquement une facture par email après chaque transaction. Vous pouvez également l\'accéder dans votre historique de réservations dans l\'app.',
      },
      {
        q: 'Comment puis-je contacter un professionnel directement ?',
        a: 'Sur la page du professionnel, vous pouvez consulter son profil, ses services et ses événements. Les messages et communications se font via la plateforme Spotbook pour votre sécurité.',
      },
    ],
  },
  {
    title: 'Pour les Professionnels',
    questions: [
      {
        q: 'Comment puis-je m&apos;inscrire en tant que professionnel sur Spotbook ?',
        a: 'Téléchargez l&apos;app Spotbook, cliquez sur "S&apos;inscrire en tant que professionnel", complétez votre profil avec une description, vos services, tarifs, et documents de vérification. Une fois approuvé, vous pouvez commencer à accepter des réservations.',
      },
      {
        q: 'Quels frais Spotbook prélève-t-il ?',
        a: 'Spotbook prélève une commission de 18% sur chaque réservation de service et 12% sur les ventes de billets d\'événements. Ces frais couvrent les frais de paiement, la plateforme et le support.',
      },
      {
        q: 'Comment puis-je ajouter mes services ?',
        a: 'Dans votre profil professionnel, cliquez sur "Ajouter un service". Remplissez le nom, la description, la durée, le prix, et indiquez si un acompte est requis. Vous pouvez ajouter autant de services que vous le souhaitez.',
      },
      {
        q: 'Puis-je télécharger des vidéos sur Spotbook ?',
        a: 'Oui ! Les vidéos aident à présenter votre expertise. Cliquez sur "Ajouter une vidéo" dans votre profil, téléchargez votre vidéo (jusqu&apos;à 5 Go), ajoutez un titre, une description et des tags pour la visibilité.',
      },
      {
        q: 'Comment fonctionne le système d\'acompte ?',
        a: 'Vous pouvez exiger un acompte (%) pour sécuriser les réservations. Le client paie l\'acompte lors de la réservation, et le solde peut être payé sur place ou selon vos modalités. C\'est à vous de définir le pourcentage.',
      },
      {
        q: 'Quand recevrai-je mon paiement ?',
        a: 'Les paiements sont traités hebdomadairement. Après soustraction des frais Spotbook et des frais de paiement, le solde est viré sur votre compte bancaire tous les jeudis.',
      },
      {
        q: 'Comment puis-je organiser un événement ?',
        a: 'Cliquez sur "Créer un événement" dans votre profil. Remplissez les détails (date, heure, lieu, prix, nombre de billets), téléchargez une couverture, et publiez. Les billets peuvent être vendus immédiatement.',
      },
      {
        q: 'Puis-je modifier ou annuler un événement ?',
        a: 'Oui, vous pouvez modifier les détails avant la date. Si vous devez annuler, les clients seront remboursés automatiquement. Les modifications récentes peuvent ne pas affecter les billets vendus.',
      },
    ],
  },
]

function FAQAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFaqs = FAQ_CATEGORIES.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.a.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0)

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Rechercher une question..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setExpandedIndex(null)
          }}
          className="w-full px-6 py-3 border border-brand-border rounded-xl bg-white text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-green/50"
        />
      </div>

      {/* FAQ Categories */}
      <div className="space-y-8">
        {filteredFaqs.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-2xl font-bold text-brand-text mb-4">
              {category.title}
            </h2>

            <div className="space-y-3">
              {category.questions.map((item, itemIndex) => {
                const globalIndex = categoryIndex * 100 + itemIndex
                const isExpanded = expandedIndex === globalIndex

                return (
                  <button
                    key={globalIndex}
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : globalIndex)
                    }
                    className="w-full text-left p-4 bg-brand-card border border-brand-border rounded-xl hover:border-brand-green transition"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-brand-text pr-4">
                        {item.q}
                      </h3>
                      <ChevronDown
                        size={20}
                        className={`flex-shrink-0 text-brand-green transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-brand-border text-brand-text">
                        {item.a}
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        ))}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-brand-muted text-lg">
              Aucune question ne correspond à votre recherche.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: 'general', message: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-brand-text font-semibold mb-2">
          Nom complet
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
          className="w-full px-4 py-2 border border-brand-border rounded-lg bg-white text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-green/50"
          placeholder="Jean Dupont"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-brand-text font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
          className="w-full px-4 py-2 border border-brand-border rounded-lg bg-white text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-green/50"
          placeholder="jean@example.com"
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-brand-text font-semibold mb-2">
          Sujet
        </label>
        <select
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          className="w-full px-4 py-2 border border-brand-border rounded-lg bg-white text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-green/50"
        >
          <option value="general">Question générale</option>
          <option value="booking">Problème de réservation</option>
          <option value="payment">Problème de paiement</option>
          <option value="account">Compte utilisateur</option>
          <option value="professional">Inscription professionnel</option>
          <option value="other">Autre</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-brand-text font-semibold mb-2">
          Message
        </label>
        <textarea
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          rows={5}
          className="w-full px-4 py-2 border border-brand-border rounded-lg bg-white text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-green/50"
          placeholder="Décrivez votre question ou problème..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-green/90 transition"
      >
        Envoyer
      </button>

      {/* Success Message */}
      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
          Merci ! Nous avons reçu votre message et vous répondrons bientôt.
        </div>
      )}
    </form>
  )
}

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-brand-border bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-brand-text mb-4">
            Comment pouvons-nous vous aider ?
          </h1>
          <p className="text-lg text-brand-muted">
            Trouvez les réponses à vos questions ou contactez notre équipe de support
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* FAQ Section */}
        <div className="mb-16">
          <FAQAccordion />
        </div>

        {/* Contact Section */}
        <div className="border-t border-brand-border pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-brand-text mb-6">
                Nous contacter directement
              </h2>

              <div className="space-y-6">
                <div>
                  <p className="text-brand-muted text-sm mb-2">Email</p>
                  <a
                    href="mailto:support_spotbook@gmail.com"
                    className="text-lg font-semibold text-brand-green hover:underline"
                  >
                    support_spotbook@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-brand-muted text-sm mb-2">Temps de réponse</p>
                  <p className="text-brand-text">
                    Nous répondons généralement dans les 24 heures, 7 jours sur 7.
                  </p>
                </div>

                <div>
                  <p className="text-brand-muted text-sm mb-2">Localisation</p>
                  <p className="text-brand-text">Montréal, Québec, Canada</p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/privacy"
                    className="text-brand-green hover:underline text-sm"
                  >
                    Politique de confidentialité
                  </Link>
                  <br />
                  <Link
                    href="/terms"
                    className="text-brand-green hover:underline text-sm"
                  >
                    Conditions d&apos;utilisation
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-6 bg-brand-card border border-brand-border rounded-2xl">
              <h3 className="text-xl font-bold text-brand-text mb-6">
                Formulaire de contact
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Conditions d\'utilisation',
  description: 'Conditions d\'utilisation de Spotbook - Accord de service entre vous et Spotbook',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-brand-border bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-brand-text mb-4">
            Conditions d&apos;utilisation
          </h1>
          <p className="text-brand-muted text-lg">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-CA', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none text-brand-text space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">Introduction</h2>
            <p>
              Bienvenue sur Spotbook. Ces conditions d&apos;utilisation (&laquo; Conditions &raquo;) régissent votre
              utilisation de notre plateforme, site web et applications mobiles. En accédant ou en
              utilisant Spotbook, vous acceptez d&apos;être lié par ces Conditions.
            </p>
          </section>

          {/* Service Description */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">1. Description du service</h2>
            <p>
              Spotbook est une super-app qui connecte les clients aux meilleurs professionnels
              indépendants. Notre plateforme permet :
            </p>
            <ul className="space-y-2 list-disc pl-6 mt-4">
              <li>Découvrir et consulter des vidéos de professionnels</li>
              <li>Réserver des services auprès de professionnels indépendants</li>
              <li>Acheter des billets pour des événements organisés par des professionnels</li>
              <li>Effectuer des paiements sécurisés via notre plateforme</li>
            </ul>
          </section>

          {/* Account Creation */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">2. Création et types de comptes</h2>

            <div className="mt-4 space-y-4 pl-4 border-l-4 border-brand-green">
              <div>
                <h3 className="font-semibold text-brand-text">Compte Client</h3>
                <p className="text-brand-muted">
                  Permet de réserver des services et acheter des billets d&apos;événements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-text">Compte Professionnel</h3>
                <p className="text-brand-muted">
                  Permet d&apos;offrir des services, organiser des événements et partager du contenu vidéo.
                </p>
              </div>
            </div>

            <p className="mt-4">
              Vous êtes responsable de la confidentialité de vos identifiants de connexion et de
              toutes les activités qui se produisent sous votre compte. Vous acceptez de
              fournir des informations exactes et à jour.
            </p>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">3. Conditions de paiement</h2>

            <div className="mt-4 space-y-4 pl-4 border-l-4 border-brand-green">
              <div>
                <h3 className="font-semibold text-brand-text">Commission Spotbook</h3>
                <p className="text-brand-muted">
                  Nous prélevons une commission de <strong>18 %</strong> sur chaque réservation de service
                  et de <strong>12 %</strong> sur les ventes de billets d&apos;événements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-text">Système d&apos;acompte</h3>
                <p className="text-brand-muted">
                  Les réservations de services nécessitent souvent un acompte au moment de la
                  réservation. Le solde restant est payable au moment du service (sur place ou selon
                  les modalités convenues avec le professionnel).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-text">Billets d&apos;événements</h3>
                <p className="text-brand-muted">
                  Le prix affiché est le prix final. Les billets sont émis immédiatement après le paiement.
                </p>
              </div>
            </div>

            <p className="mt-4">
              Tous les paiements sont traités de manière sécurisée via Stripe. Nous ne stockons
              jamais votre numéro de carte complet.
            </p>
          </section>

          {/* Cancellation Policy */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">4. Politique d&apos;annulation</h2>
            <p>
              Les professionnels peuvent définir leur politique d&apos;annulation. Voici les deux
              niveaux disponibles :
            </p>

            <div className="mt-4 space-y-4 pl-4 border-l-4 border-brand-green">
              <div>
                <h3 className="font-semibold text-brand-text">Modérée (24h)</h3>
                <p className="text-brand-muted">
                  Annulation gratuite jusqu&apos;à 24 heures avant le service. Passé ce délai,
                  l&apos;acompte n&apos;est pas remboursable.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-text">Stricte (aucun remboursement)</h3>
                <p className="text-brand-muted">
                  L&apos;acompte n&apos;est pas remboursable, quel que soit le délai d&apos;annulation.
                </p>
              </div>
            </div>

            <p className="mt-4">
              Les billets d&apos;événements non utilisés peuvent être remboursés selon la politique
              du professionnel, jusqu&apos;à 7 jours avant l&apos;événement.
            </p>
          </section>

          {/* Content Policy */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">5. Politique de contenu</h2>
            <p>
              Vous acceptez de ne pas publier, partager ou promouvoir du contenu qui :
            </p>
            <ul className="space-y-2 list-disc pl-6 mt-4">
              <li>Viole les droits d&apos;auteur ou la propriété intellectuelle d&apos;autrui</li>
              <li>Contient de la haine, du harcèlement, de la discrimination ou de la violence</li>
              <li>Est obscène, pornographique ou sexuellement explicite</li>
              <li>Promeut des activités illégales ou dangereuses</li>
              <li>Est faux, trompeur ou constitue de la fraude</li>
              <li>Viole la vie privée d&apos;une autre personne</li>
            </ul>

            <p className="mt-4">
              Spotbook se réserve le droit de supprimer tout contenu violant ces règles et
              de suspendre ou terminer les comptes des contrevenants.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">6. Propriété intellectuelle</h2>
            <p>
              Spotbook et tous ses éléments (logo, design, fonctionnalités, contenu) sont la
              propriété de Spotbook ou de ses concédants. Vous ne pouvez pas reproduire,
              modifier ou distribuer notre contenu sans permission écrite.
            </p>
            <p className="mt-4">
              Le contenu que vous publiez (vidéos, descriptions, photos) reste votre propriété,
              mais vous nous accordez une licence pour l&apos;afficher et le promouvoir sur notre plateforme.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">7. Limitation de responsabilité</h2>
            <p>
              Spotbook fournit la plateforme &laquo; telle quelle &raquo; sans garanties expresses ou implicites.
              À la limite maximale permise par la loi, Spotbook ne sera pas responsable de :
            </p>
            <ul className="space-y-2 list-disc pl-6 mt-4">
              <li>Dommages indirects, accessoires ou consécutifs</li>
              <li>Perte de profits, de données ou de revenus</li>
              <li>La qualité des services fournis par les professionnels</li>
              <li>Les interruptions de service ou erreurs techniques</li>
            </ul>

            <p className="mt-4">
              Nous agissons en tant qu&apos;intermédiaire. La relation contractuelle principale
              est entre vous et le professionnel indépendant.
            </p>
          </section>

          {/* Account Termination */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">8. Résiliation du compte</h2>
            <p>
              Vous pouvez demander la suppression de votre compte à tout moment en contactant
              support_spotbook@gmail.com. Spotbook se réserve le droit de suspendre ou de
              supprimer un compte si :
            </p>
            <ul className="space-y-2 list-disc pl-6 mt-4">
              <li>Violation de ces Conditions</li>
              <li>Activité frauduleuse ou criminelle</li>
              <li>Non-paiement de frais dus</li>
              <li>Plaintes répétées de clients ou de professionnels</li>
            </ul>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">9. Droit applicable et juridiction</h2>
            <p>
              Ces Conditions sont régies par les lois de la Province de Québec, Canada,
              sans égard à ses principes de conflit de lois. Les deux parties consentent à la
              juridiction exclusive des tribunaux de Montréal, Québec.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">10. Résolution des litiges</h2>
            <p>
              Avant d&apos;engager une action en justice, les parties acceptent de chercher à résoudre
              les différends par voie amiable. Veuillez contacter support_spotbook@gmail.com avec
              les détails de votre réclamation.
            </p>
            <p className="mt-4">
              Si le différend ne peut être résolu à l&apos;amiable dans les 30 jours, soit une partie
              peut initier une procédure juridique.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">11. Nous contacter</h2>
            <p>
              Pour toute question concernant ces Conditions ou votre utilisation de Spotbook&nbsp;:
            </p>
            <div className="mt-4 p-4 bg-brand-card border border-brand-border rounded-lg">
              <p className="font-semibold text-brand-text">Spotbook</p>
              <p className="text-brand-muted">
                Email :{' '}
                <a href="mailto:support_spotbook@gmail.com" className="text-brand-green hover:underline">
                  support_spotbook@gmail.com
                </a>
              </p>
              <p className="text-brand-muted">Montréal, Québec, Canada</p>
            </div>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">12. Modifications des conditions</h2>
            <p>
              Spotbook peut modifier ces Conditions à tout moment. Si des modifications importantes
              sont apportées, nous vous notifierons par email au moins 14 jours avant que les
              modifications n&apos;entrent en vigueur.
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">13. Clause de divisibilité</h2>
            <p>
              Si une disposition de ces Conditions est jugée invalide ou inapplicable, cette
              disposition sera modifiée au minimum nécessaire pour la rendre valide, ou sinon
              supprimée. Les autres dispositions resteront en vigueur.
            </p>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-brand-border flex gap-4">
          <Link
            href="/privacy"
            className="px-6 py-3 bg-brand-card border border-brand-border text-brand-text rounded-xl hover:border-brand-green transition"
          >
            Politique de confidentialité
          </Link>
          <Link
            href="/support"
            className="px-6 py-3 bg-brand-green text-white rounded-xl hover:bg-brand-green/90 transition"
          >
            Support
          </Link>
        </div>
      </div>
    </div>
  )
}

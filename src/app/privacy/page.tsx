import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité de Spotbook - Comment nous protégeons vos données personnelles',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-brand-border bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-brand-text mb-4">
            Politique de confidentialité
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
              Spotbook (&laquo; nous &raquo;, &laquo; notre &raquo;) respecte votre vie privée et s&apos;engage à être transparent
              concernant la façon dont nous collectons, utilisons et protégeons vos données personnelles.
              Cette politique explique nos pratiques en matière de confidentialité.
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">1. Données que nous collectons</h2>
            <p>Nous collectons les types de données suivants :</p>

            <div className="mt-4 space-y-4 pl-4 border-l-4 border-brand-green">
              <div>
                <h3 className="font-semibold text-brand-text">Informations de profil</h3>
                <p className="text-brand-muted">
                  Nom, adresse email, numéro de téléphone, photo de profil, localisation, bio
                  et catégorie professionnelle (pour les professionnels).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-text">Données de paiement</h3>
                <p className="text-brand-muted">
                  Informations de transaction traitées via Stripe. Nous ne stockons pas les
                  numéros de carte de crédit complets.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-text">Données de localisation</h3>
                <p className="text-brand-muted">
                  Localisation approximative pour les recherches de services (collectée uniquement
                  avec votre consentement sur mobile).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-text">Contenu vidéo</h3>
                <p className="text-brand-muted">
                  Vidéos, images et métadonnées hébergées via Cloudflare Stream.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-text">Données d&apos;utilisation</h3>
                <p className="text-brand-muted">
                  Interactions avec l&apos;application, vues vidéo, réservations, historique de recherche
                  (collectées automatiquement).
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Data */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">2. Comment nous utilisons vos données</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li><strong>Fourniture de services :</strong> Traiter les réservations, les paiements et les services commandés</li>
              <li><strong>Communication :</strong> Envoyer des confirmations, mises à jour et notifications importantes</li>
              <li><strong>Amélioration :</strong> Analyser l&apos;utilisation pour améliorer nos fonctionnalités et expérience utilisateur</li>
              <li><strong>Marketing :</strong> Envoyer des newsletters et promotions (avec votre consentement)</li>
              <li><strong>Sécurité :</strong> Prévenir la fraude, appliquer nos conditions d&apos;utilisation et protéger vos droits</li>
              <li><strong>Conformité légale :</strong> Respecter les obligations légales et réglementaires</li>
            </ul>
          </section>

          {/* Third Parties */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">3. Partage avec des tiers</h2>
            <p>Nous partageons vos données avec les services tiers suivants :</p>

            <div className="mt-4 space-y-3 pl-4 border-l-4 border-brand-green">
              <div>
                <h3 className="font-semibold text-brand-text">Supabase</h3>
                <p className="text-brand-muted">
                  Base de données PostgreSQL hébergée pour les profils, services et événements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-text">Stripe</h3>
                <p className="text-brand-muted">
                  Traitement sécurisé des paiements. Stripe ne reçoit que les informations
                  strictement nécessaires à la transaction.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-text">Cloudflare Stream</h3>
                <p className="text-brand-muted">
                  Hébergement et diffusion de contenu vidéo. Collecte les données de visualisation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-text">Firebase</h3>
                <p className="text-brand-muted">
                  Notifications push et analytiques (si utilisé dans l&apos;application mobile).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-text">Google Analytics</h3>
                <p className="text-brand-muted">
                  Analyse d&apos;utilisation du site web (données agrégées et anonymisées).
                </p>
              </div>
            </div>

            <p className="mt-4">
              Nous exigeons que tous les tiers se conforment à nos normes de confidentialité
              et ne partagent vos données qu&apos;aux fins spécifiées.
            </p>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">4. Vos droits</h2>
            <p>
              Vous avez les droits suivants concernant vos données personnelles, conformément au
              Règlement général sur la protection des données (RGPD) et à la Loi 25 du Québec
              (Loi sur la protection des renseignements personnels) :
            </p>

            <ul className="space-y-2 list-disc pl-6 mt-4">
              <li><strong>Droit d&apos;accès :</strong> Demander une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> Corriger les données inexactes</li>
              <li><strong>Droit à l&apos;effacement :</strong> Demander la suppression de vos données (&laquo; droit à l&apos;oubli &raquo;)</li>
              <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format lisible par machine</li>
              <li><strong>Droit d&apos;opposition :</strong> Vous opposer au traitement de vos données</li>
              <li><strong>Droit de retrait du consentement :</strong> Retirer votre consentement à tout moment</li>
            </ul>

            <p className="mt-4">
              Pour exercer ces droits, veuillez nous contacter à&nbsp;:{' '}
              <a href="mailto:support_spotbook@gmail.com" className="text-brand-green hover:underline">
                support_spotbook@gmail.com
              </a>
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">5. Durée de conservation des données</h2>
            <p>
              Nous conservons vos données personnelles aussi longtemps que nécessaire pour
              fournir nos services et respecter nos obligations légales :
            </p>
            <ul className="space-y-2 list-disc pl-6 mt-4">
              <li><strong>Comptes actifs :</strong> Tant que votre compte est actif</li>
              <li><strong>Données de paiement :</strong> 7 ans pour conformité fiscale (Stripe)</li>
              <li><strong>Données de marketing :</strong> Jusqu&apos;au retrait du consentement</li>
              <li><strong>Historique des services :</strong> 3 ans après la dernière transaction</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">6. Cookies et technologies similaires</h2>
            <p>
              Notre site web utilise des cookies pour améliorer votre expérience. Les types de
              cookies que nous utilisons incluent :
            </p>
            <ul className="space-y-2 list-disc pl-6 mt-4">
              <li><strong>Cookies essentiels :</strong> Nécessaires pour le fonctionnement du site</li>
              <li><strong>Cookies analytiques :</strong> Pour comprendre comment vous utilisez notre site</li>
              <li><strong>Cookies de préférences :</strong> Pour mémoriser vos paramètres</li>
            </ul>
            <p className="mt-4">
              Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">7. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour
              protéger vos données contre l&apos;accès non autorisé, la modification, la divulgation ou
              la destruction :
            </p>
            <ul className="space-y-2 list-disc pl-6 mt-4">
              <li>Chiffrement SSL/TLS pour toutes les communications</li>
              <li>Authentification sécurisée des comptes</li>
              <li>Stockage des données dans des serveurs sécurisés</li>
              <li>Audit de sécurité régulier</li>
            </ul>
            <p className="mt-4">
              Toutefois, aucune transmission de données sur Internet n&apos;est 100 % sécurisée.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">8. Transferts internationaux</h2>
            <p>
              Vos données peuvent être transférées, stockées et traitées dans des pays autres que
              le Canada, notamment aux États-Unis (Supabase, Stripe, Google, Cloudflare). Ces pays
              peuvent avoir des lois de protection des données différentes. En utilisant Spotbook,
              vous consentez à de tels transferts.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">9. Enfants</h2>
            <p>
              Spotbook n&apos;est pas destinée aux personnes de moins de 18 ans. Nous ne collectons
              intentionnellement pas de données personnelles auprès des enfants. Si nous découvrons
              qu&apos;un enfant nous a fourni des données personnelles, nous les supprimerons rapidement.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-brand-text mb-4">10. Nous contacter</h2>
            <p>
              Si vous avez des questions sur cette politique de confidentialité ou vos données
              personnelles, veuillez nous contacter&nbsp;:
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
            <h2 className="text-2xl font-bold text-brand-text mb-4">11. Modifications de cette politique</h2>
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité à tout moment. Les
              modifications importantes seront communiquées par email ou via une notification
              éminente sur notre site.
            </p>
          </section>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-brand-border flex gap-4">
          <Link
            href="/terms"
            className="px-6 py-3 bg-brand-card border border-brand-border text-brand-text rounded-xl hover:border-brand-green transition"
          >
            Conditions d&apos;utilisation
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

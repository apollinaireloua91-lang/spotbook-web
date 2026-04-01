import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SupportContent from "./SupportContent";

export const metadata: Metadata = {
  title: "Support & FAQ",
  description: "Centre d'aide Spotbook — Trouvez des réponses à vos questions sur les réservations, paiements, événements et plus.",
};

const faqClients = [
  {
    q: "Comment créer un compte ?",
    a: "Téléchargez l'app Spotbook sur l'App Store ou Google Play. Inscrivez-vous avec votre adresse courriel ou connectez-vous avec Google/Apple. Complétez votre profil en ajoutant votre nom et votre photo.",
  },
  {
    q: "Comment rechercher un professionnel ?",
    a: "Utilisez la barre de recherche ou parcourez le feed vidéo. Vous pouvez filtrer par catégorie (coiffure, barber, fitness, etc.), par localisation et par note. Chaque profil affiche les services, les avis et les vidéos du prestataire.",
  },
  {
    q: "Comment réserver un service ?",
    a: "Visitez le profil du prestataire, sélectionnez le service souhaité, choisissez une date et un créneau disponible, puis confirmez votre réservation. Le paiement (complet ou acompte) est traité de manière sécurisée via Stripe.",
  },
  {
    q: "Comment fonctionne le paiement ?",
    a: "Tous les paiements sont traités via Stripe, une plateforme de paiement certifiée PCI DSS Level 1. Vos informations bancaires ne sont jamais stockées sur nos serveurs. Vous pouvez payer par carte de crédit ou de débit.",
  },
  {
    q: "Comment fonctionne l'acompte ?",
    a: "Certains prestataires exigent un acompte (entre 20% et 50% du prix du service) lors de la réservation. Le reste est payé directement au prestataire lors de votre rendez-vous.",
  },
  {
    q: "Comment annuler une réservation ?",
    a: "Rendez-vous dans l'onglet « Mes réservations » de l'application. Sélectionnez la réservation et appuyez sur « Annuler ». Les conditions de remboursement dépendent de la politique d'annulation du prestataire (Flexible, Modérée ou Stricte).",
  },
  {
    q: "Comment acheter un billet ?",
    a: "Trouvez l'événement dans l'onglet « Événements » ou sur le profil de l'organisateur. Sélectionnez le nombre de billets, payez en ligne, et recevez votre QR code instantanément. Présentez-le à l'entrée de l'événement.",
  },
  {
    q: "Comment contacter un prestataire ?",
    a: "Depuis le profil du prestataire, appuyez sur le bouton de messagerie. Vous pouvez discuter directement avec le professionnel avant et après votre réservation.",
  },
];

const faqPros = [
  {
    q: "Comment devenir prestataire ?",
    a: "Téléchargez l'app et créez un compte. Dans les paramètres, activez le « Mode Professionnel ». Complétez votre profil avec votre catégorie, vos services, vos disponibilités et votre compte bancaire pour recevoir les paiements.",
  },
  {
    q: "Comment configurer mes services ?",
    a: "Dans votre dashboard, allez dans « Services ». Ajoutez chaque service avec un nom, une description, une durée et un prix. Vous pouvez activer ou désactiver un service à tout moment.",
  },
  {
    q: "Comment gérer mon agenda ?",
    a: "L'onglet « Agenda » affiche toutes vos réservations. Configurez vos disponibilités par jour de la semaine et définissez des créneaux horaires. Les clients ne pourront réserver que sur les créneaux ouverts.",
  },
  {
    q: "Comment recevoir mes paiements ?",
    a: "Connectez votre compte bancaire via Stripe dans les paramètres. Les revenus sont virés automatiquement selon le calendrier de Stripe (2 à 7 jours ouvrables). Suivez vos revenus en temps réel dans le dashboard.",
  },
  {
    q: "Quel est le taux de commission ?",
    a: "Spotbook prélève une commission de 12% sur chaque réservation de service et de 7% sur chaque billet d'événement vendu. Cette commission est déduite automatiquement avant le virement.",
  },
  {
    q: "Comment publier une vidéo ?",
    a: "Appuyez sur le bouton « + » dans l'app, sélectionnez « Vidéo », enregistrez ou importez votre vidéo (60 secondes max), ajoutez une description et des tags, puis publiez. Votre vidéo apparaîtra dans le feed des utilisateurs.",
  },
  {
    q: "Comment créer un événement ?",
    a: "Dans votre dashboard, allez dans « Événements » puis « Créer un événement ». Remplissez les détails (titre, date, lieu, prix, nombre de billets) et publiez. Les billets seront disponibles immédiatement.",
  },
  {
    q: "Comment configurer un acompte ?",
    a: "Dans les paramètres de chaque service, activez l'option « Acompte requis » et définissez le pourcentage (20% à 50%). Les clients paieront l'acompte en ligne et le solde lors du rendez-vous.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Comment pouvons-nous{" "}
              <span className="gradient-text">vous aider</span> ?
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Trouvez des réponses à vos questions ou contactez notre équipe de support.
            </p>
          </div>

          <SupportContent faqClients={faqClients} faqPros={faqPros} />

          {/* Contact section */}
          <section id="contact" className="mt-20">
            <h2 className="font-display text-2xl font-bold text-center mb-8">
              Contactez-nous
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-8">
                <h3 className="font-semibold mb-2">Par courriel</h3>
                <a
                  href="mailto:support@getspotbook.app"
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                  support@getspotbook.app
                </a>
                <p className="text-sm text-white/40 mt-2">
                  Réponse sous 24 à 48 heures ouvrables.
                </p>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="font-semibold mb-4">Formulaire de contact</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Votre courriel"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 transition-colors"
                  />
                  <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/50 focus:outline-none focus:border-violet-500/50 transition-colors">
                    <option value="">Sujet</option>
                    <option value="reservation">Réservation</option>
                    <option value="paiement">Paiement</option>
                    <option value="compte">Mon compte</option>
                    <option value="pro">Compte professionnel</option>
                    <option value="bug">Signaler un problème</option>
                    <option value="autre">Autre</option>
                  </select>
                  <textarea
                    placeholder="Votre message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-rose-500 font-medium text-sm hover:shadow-lg hover:shadow-violet-500/25 transition-all"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

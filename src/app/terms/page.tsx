import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description: "Conditions générales d'utilisation de la plateforme Spotbook.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <article className="max-w-3xl mx-auto px-6 prose prose-invert prose-sm">
          <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">
            Conditions d&apos;utilisation
          </h1>
          <p className="text-white/40 mb-12">
            Dernière mise à jour : 1er avril 2026
          </p>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              1. Description du service
            </h2>
            <p className="text-white/60 leading-relaxed">
              Spotbook est une plateforme de mise en relation (&laquo; marketplace &raquo;) connectant des clients avec des professionnels indépendants offrant des services variés (coiffure, barbier, esthétique, fitness, photographie, événementiel, etc.). Spotbook n&apos;est pas le prestataire des services et agit uniquement en tant qu&apos;intermédiaire technologique.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              2. Création de compte
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Deux types de comptes sont disponibles :
            </p>
            <ul className="list-disc list-inside text-white/60 space-y-2">
              <li><strong className="text-white/80">Compte Client :</strong> permet de parcourir les profils, réserver des services, acheter des billets d&apos;événements et laisser des avis.</li>
              <li><strong className="text-white/80">Compte Professionnel :</strong> permet de créer un profil public, publier des vidéos, lister des services, gérer un agenda, créer des événements et recevoir des paiements.</li>
            </ul>
            <p className="text-white/60 leading-relaxed mt-4">
              Vous devez avoir au moins 16 ans pour créer un compte. Vous êtes responsable de la confidentialité de vos identifiants de connexion.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              3. Paiements et commissions
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Tous les paiements sont traités via Stripe Connect. Les conditions suivantes s&apos;appliquent :
            </p>
            <ul className="list-disc list-inside text-white/60 space-y-2">
              <li><strong className="text-white/80">Commission sur les réservations :</strong> 12% du montant total du service, prélevée automatiquement.</li>
              <li><strong className="text-white/80">Commission sur la billetterie :</strong> 7% du prix du billet.</li>
              <li><strong className="text-white/80">Système d&apos;acompte :</strong> le prestataire peut exiger un acompte (entre 20% et 50% du prix). Le solde restant est payé directement au prestataire lors du rendez-vous.</li>
              <li><strong className="text-white/80">Virements :</strong> les revenus sont virés automatiquement sur le compte bancaire du prestataire selon le calendrier de Stripe (généralement sous 2 à 7 jours ouvrables).</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              4. Politique d&apos;annulation
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Chaque prestataire choisit sa politique d&apos;annulation parmi les options suivantes :
            </p>
            <ul className="list-disc list-inside text-white/60 space-y-2">
              <li><strong className="text-white/80">Flexible :</strong> annulation gratuite jusqu&apos;à 24 heures avant le rendez-vous. Remboursement complet de l&apos;acompte.</li>
              <li><strong className="text-white/80">Modérée :</strong> annulation gratuite jusqu&apos;à 48 heures avant. Remboursement de 50% de l&apos;acompte si annulation entre 24h et 48h.</li>
              <li><strong className="text-white/80">Stricte :</strong> annulation gratuite jusqu&apos;à 72 heures avant. Aucun remboursement après ce délai.</li>
            </ul>
            <p className="text-white/60 leading-relaxed mt-4">
              Les remboursements sont traités automatiquement via Stripe dans un délai de 5 à 10 jours ouvrables.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              5. Contenu utilisateur
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Les prestataires sont responsables du contenu qu&apos;ils publient (vidéos, descriptions, images). Le contenu suivant est strictement interdit :
            </p>
            <ul className="list-disc list-inside text-white/60 space-y-2">
              <li>Contenu à caractère sexuel ou pornographique</li>
              <li>Contenu haineux, discriminatoire ou incitant à la violence</li>
              <li>Contenu trompeur ou frauduleux</li>
              <li>Contenu violant les droits de propriété intellectuelle de tiers</li>
              <li>Contenu faisant la promotion de substances illégales</li>
            </ul>
            <p className="text-white/60 leading-relaxed mt-4">
              Spotbook se réserve le droit de supprimer tout contenu contrevenant à ces règles et de suspendre ou résilier le compte de l&apos;utilisateur concerné.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              6. Propriété intellectuelle
            </h2>
            <p className="text-white/60 leading-relaxed">
              La marque Spotbook, le logo, le design de l&apos;application et tout contenu original créé par Spotbook sont la propriété exclusive de Spotbook Inc. Les prestataires conservent la propriété intellectuelle de leur contenu mais accordent à Spotbook une licence non exclusive, mondiale et libre de redevances pour afficher, distribuer et promouvoir ce contenu dans le cadre des Services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              7. Limitation de responsabilité
            </h2>
            <p className="text-white/60 leading-relaxed">
              Spotbook agit en tant qu&apos;intermédiaire technologique. Nous ne sommes pas responsables de la qualité des services fournis par les prestataires, des dommages résultant d&apos;une prestation, ni des litiges entre clients et prestataires. Notre responsabilité totale envers vous ne saurait excéder le montant des frais que vous avez payés à Spotbook au cours des 12 derniers mois.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              8. Résiliation
            </h2>
            <p className="text-white/60 leading-relaxed">
              Vous pouvez supprimer votre compte à tout moment depuis les paramètres de l&apos;application. Spotbook se réserve le droit de suspendre ou résilier votre compte en cas de violation des présentes conditions, de fraude, ou de comportement nuisible envers d&apos;autres utilisateurs.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              9. Droit applicable
            </h2>
            <p className="text-white/60 leading-relaxed">
              Les présentes conditions sont régies par les lois de la Province de Québec, Canada. Tout litige sera soumis à la compétence exclusive des tribunaux du district judiciaire de Montréal.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              10. Contact
            </h2>
            <p className="text-white/60 leading-relaxed">
              Pour toute question relative aux présentes conditions, contactez-nous à{" "}
              <a href="mailto:legal@getspotbook.app" className="text-violet-400 hover:text-violet-300">
                legal@getspotbook.app
              </a>.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

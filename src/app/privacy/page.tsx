import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de Spotbook — Découvrez comment nous protégeons vos données personnelles.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <article className="max-w-3xl mx-auto px-6 prose prose-invert prose-sm">
          <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">
            Politique de confidentialité
          </h1>
          <p className="text-white/40 mb-12">
            Dernière mise à jour : 1er avril 2026
          </p>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              1. Introduction
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Spotbook Inc. (&laquo; Spotbook &raquo;, &laquo; nous &raquo;, &laquo; notre &raquo;) s&apos;engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité décrit les types de renseignements personnels que nous recueillons, comment nous les utilisons, les partageons et les protégeons lorsque vous utilisez notre application mobile et notre site web (collectivement, les &laquo; Services &raquo;).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              2. Données collectées
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Nous recueillons les catégories de données suivantes :
            </p>
            <ul className="list-disc list-inside text-white/60 space-y-2">
              <li><strong className="text-white/80">Informations de profil :</strong> nom, prénom, adresse courriel, numéro de téléphone, photo de profil, biographie, catégorie professionnelle.</li>
              <li><strong className="text-white/80">Données de paiement :</strong> traitées via Stripe Connect. Nous ne stockons jamais vos informations de carte bancaire. Stripe agit comme sous-traitant PCI DSS Level 1.</li>
              <li><strong className="text-white/80">Données de localisation :</strong> ville et zone géographique (jamais de GPS précis sans consentement explicite).</li>
              <li><strong className="text-white/80">Contenu vidéo :</strong> vidéos publiées par les prestataires, hébergées via Cloudflare Stream.</li>
              <li><strong className="text-white/80">Données d&apos;utilisation :</strong> interactions avec l&apos;application, réservations, avis, messages.</li>
              <li><strong className="text-white/80">Données techniques :</strong> type d&apos;appareil, système d&apos;exploitation, adresse IP, identifiants de session.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              3. Utilisation des données
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc list-inside text-white/60 space-y-2">
              <li>Fournir, maintenir et améliorer nos Services</li>
              <li>Traiter les réservations et les paiements</li>
              <li>Personnaliser votre expérience (feed vidéo, recommandations)</li>
              <li>Faciliter la communication entre clients et prestataires</li>
              <li>Envoyer des notifications relatives à vos réservations et événements</li>
              <li>Prévenir la fraude et assurer la sécurité de la plateforme</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              4. Tiers et sous-traitants
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Nous partageons vos données avec les tiers suivants, strictement dans le cadre de la fourniture de nos Services :
            </p>
            <ul className="list-disc list-inside text-white/60 space-y-2">
              <li><strong className="text-white/80">Supabase :</strong> hébergement de la base de données (PostgreSQL).</li>
              <li><strong className="text-white/80">Stripe :</strong> traitement des paiements et gestion des comptes connectés.</li>
              <li><strong className="text-white/80">Cloudflare :</strong> hébergement vidéo (Stream) et réseau de diffusion de contenu.</li>
              <li><strong className="text-white/80">Firebase (Google) :</strong> notifications push et analytique.</li>
              <li><strong className="text-white/80">Google Maps :</strong> services de géolocalisation et cartographie.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              5. Vos droits
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Conformément au Règlement général sur la protection des données (RGPD) et à la Loi 25 du Québec (Loi sur la protection des renseignements personnels dans le secteur privé), vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-white/60 space-y-2">
              <li><strong className="text-white/80">Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles.</li>
              <li><strong className="text-white/80">Droit de rectification :</strong> corriger des données inexactes ou incomplètes.</li>
              <li><strong className="text-white/80">Droit à l&apos;effacement :</strong> demander la suppression de vos données.</li>
              <li><strong className="text-white/80">Droit à la portabilité :</strong> recevoir vos données dans un format structuré et lisible.</li>
              <li><strong className="text-white/80">Droit d&apos;opposition :</strong> vous opposer au traitement de vos données à des fins de marketing.</li>
              <li><strong className="text-white/80">Droit de retrait du consentement :</strong> retirer votre consentement à tout moment.</li>
            </ul>
            <p className="text-white/60 leading-relaxed mt-4">
              Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:privacy@getspotbook.app" className="text-violet-400 hover:text-violet-300">
                privacy@getspotbook.app
              </a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              6. Conservation des données
            </h2>
            <p className="text-white/60 leading-relaxed">
              Nous conservons vos données personnelles aussi longtemps que votre compte est actif ou que cela est nécessaire pour fournir nos Services. Après la suppression de votre compte, vos données seront effacées dans un délai de 30 jours, sauf obligation légale de conservation plus longue (ex. : données fiscales conservées 7 ans).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              7. Cookies et technologies similaires
            </h2>
            <p className="text-white/60 leading-relaxed">
              Notre site web utilise des cookies essentiels au fonctionnement du service et des cookies analytiques (avec votre consentement) pour améliorer votre expérience. Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-xl font-semibold mb-4 text-white">
              8. Contact
            </h2>
            <p className="text-white/60 leading-relaxed">
              Pour toute question relative à cette politique de confidentialité, veuillez nous contacter à :{" "}
              <a href="mailto:privacy@getspotbook.app" className="text-violet-400 hover:text-violet-300">
                privacy@getspotbook.app
              </a>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

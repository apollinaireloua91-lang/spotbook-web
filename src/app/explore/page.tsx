import { Metadata } from "next";
import { supabase, type Profile } from "@/lib/supabase";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ExploreContent from "./ExploreContent";

export const metadata: Metadata = {
  title: "Explorer les Professionnels",
  description:
    "Découvrez les meilleurs professionnels indépendants près de chez vous. Coiffeurs, barbers, coachs, photographes, DJs et plus.",
};

const categories = [
  "Tous",
  "Coiffure",
  "Barber",
  "Esthétique",
  "Massage",
  "Fitness",
  "Photographie",
  "DJ",
  "Traiteur",
  "Tatouage",
  "Maquillage",
  "Coach",
  "Nails",
];

async function getProfiles(): Promise<Profile[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("profiles_pro")
    .select("*")
    .eq("is_active", true)
    .order("rating", { ascending: false })
    .limit(50);

  if (error || !data) return [];
  return data as Profile[];
}

export default async function ExplorePage() {
  const profiles = await getProfiles();

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Explorer les{" "}
              <span className="gradient-text">professionnels</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl">
              Trouvez le prestataire idéal pour votre prochain rendez-vous ou
              événement.
            </p>
          </div>

          <ExploreContent profiles={profiles} categories={categories} />
        </div>
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { supabase, type Profile, type Service, type Review, type Video, type Event } from "@/lib/supabase";
import { truncate } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProProfileContent from "./ProProfileContent";

interface Props {
  params: { username: string };
}

async function getProfile(username: string): Promise<Profile | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("profiles_pro")
    .select("*")
    .eq("username", username)
    .single();

  if (error || !data) return null;
  return data as Profile;
}

async function getServices(profileId: string): Promise<Service[]> {
  if (!supabase) return [];
  const { data } = await supabase
    .from("services")
    .select("*")
    .eq("profile_id", profileId)
    .order("price", { ascending: true });
  return (data || []) as Service[];
}

async function getReviews(profileId: string): Promise<Review[]> {
  if (!supabase) return [];
  const { data } = await supabase
    .from("reviews")
    .select("*")
    .eq("profile_id", profileId)
    .order("created_at", { ascending: false })
    .limit(20);
  return (data || []) as Review[];
}

async function getVideos(profileId: string): Promise<Video[]> {
  if (!supabase) return [];
  const { data } = await supabase
    .from("videos")
    .select("*")
    .eq("profile_id", profileId)
    .order("created_at", { ascending: false });
  return (data || []) as Video[];
}

async function getEvents(profileId: string): Promise<Event[]> {
  if (!supabase) return [];
  const { data } = await supabase
    .from("events")
    .select("*")
    .eq("profile_id", profileId)
    .gte("date", new Date().toISOString().split("T")[0])
    .order("date", { ascending: true });
  return (data || []) as Event[];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const profile = await getProfile(params.username);
  if (!profile) return { title: "Profil introuvable" };

  return {
    title: `${profile.full_name} — ${profile.category}`,
    description: truncate(profile.bio || `${profile.full_name}, ${profile.category} sur Spotbook`, 160),
    openGraph: {
      title: `${profile.full_name} — ${profile.category} | Spotbook`,
      description: truncate(profile.bio || `Découvrez ${profile.full_name} sur Spotbook`, 160),
      images: profile.avatar_url ? [{ url: profile.avatar_url }] : [],
    },
  };
}

export default async function ProProfilePage({ params }: Props) {
  const profile = await getProfile(params.username);
  if (!profile) notFound();

  const [services, reviews, videos, events] = await Promise.all([
    getServices(profile.id),
    getReviews(profile.id),
    getVideos(profile.id),
    getEvents(profile.id),
  ]);

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        <ProProfileContent
          profile={profile}
          services={services}
          reviews={reviews}
          videos={videos}
          events={events}
        />
      </main>
      <Footer />
    </>
  );
}

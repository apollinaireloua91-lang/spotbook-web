import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { supabase, type Video, type Profile } from "@/lib/supabase";
import { truncate, APP_STORE_URL } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface Props {
  params: { id: string };
}

async function getVideo(id: string): Promise<(Video & { profile: Profile }) | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("videos")
    .select("*, profile:profiles_pro(*)")
    .eq("id", id)
    .single();

  if (error || !data) return null;
  return data as Video & { profile: Profile };
}

async function getRelatedVideos(profileId: string, excludeId: string): Promise<Video[]> {
  if (!supabase) return [];
  const { data } = await supabase
    .from("videos")
    .select("*, profile:profiles_pro(username, full_name, avatar_url)")
    .eq("profile_id", profileId)
    .neq("id", excludeId)
    .limit(6);
  return (data || []) as Video[];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const video = await getVideo(params.id);
  if (!video) return { title: "Vidéo introuvable" };

  return {
    title: `${video.title} par ${video.profile.full_name}`,
    description: truncate(video.description || `Vidéo de ${video.profile.full_name} sur Spotbook`, 160),
    openGraph: {
      title: `${video.title} | Spotbook`,
      description: truncate(video.description || "", 160),
      type: "video.other",
      images: video.thumbnail_url ? [{ url: video.thumbnail_url }] : [],
    },
  };
}

export default async function VideoPage({ params }: Props) {
  const video = await getVideo(params.id);
  if (!video) notFound();

  const relatedVideos = await getRelatedVideos(video.profile_id, video.id);

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          {/* Video player */}
          <div className="aspect-video rounded-2xl overflow-hidden bg-white/5 mb-8">
            <iframe
              src={`https://customer-placeholder.cloudflarestream.com/${video.cloudflare_video_id}/iframe?autoplay=true`}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Video info */}
            <div className="flex-1">
              <h1 className="font-display text-2xl md:text-3xl font-bold mb-4">
                {video.title}
              </h1>

              {/* Pro info */}
              <Link
                href={`/pro/${video.profile.username}`}
                className="flex items-center gap-3 mb-6 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500/30 to-rose-500/30 overflow-hidden">
                  {video.profile.avatar_url ? (
                    <img
                      src={video.profile.avatar_url}
                      alt={video.profile.full_name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm font-bold text-white/50">
                      {video.profile.full_name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-semibold group-hover:text-violet-400 transition-colors">
                    {video.profile.full_name}
                  </p>
                  <p className="text-xs text-white/40">
                    {video.profile.category}
                  </p>
                </div>
              </Link>

              {video.description && (
                <p className="text-white/50 leading-relaxed mb-6">
                  {video.description}
                </p>
              )}

              {video.tags && video.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full glass text-xs text-white/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={APP_STORE_URL}
                className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-rose-500 font-medium text-sm hover:shadow-lg hover:shadow-violet-500/25 transition-all"
              >
                Réserver ce service dans l&apos;app
              </a>
            </div>

            {/* Related videos */}
            {relatedVideos.length > 0 && (
              <div className="w-full md:w-80 flex-shrink-0">
                <h3 className="text-sm font-semibold text-white/60 mb-4">
                  Plus de vidéos
                </h3>
                <div className="space-y-3">
                  {relatedVideos.map((rv) => (
                    <Link
                      key={rv.id}
                      href={`/video/${rv.id}`}
                      className="flex gap-3 group"
                    >
                      <div className="w-28 aspect-video rounded-lg bg-white/5 overflow-hidden flex-shrink-0">
                        {rv.thumbnail_url ? (
                          <img
                            src={rv.thumbnail_url}
                            alt={rv.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <svg
                              className="w-5 h-5 text-white/20"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium line-clamp-2 group-hover:text-violet-400 transition-colors">
                          {rv.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

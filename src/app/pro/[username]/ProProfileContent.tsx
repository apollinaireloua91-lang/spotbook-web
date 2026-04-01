"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { type Profile, type Service, type Review, type Video, type Event } from "@/lib/supabase";
import { formatPrice, formatDate, APP_STORE_URL } from "@/lib/utils";
import GlassCard from "@/components/ui/GlassCard";

interface Props {
  profile: Profile;
  services: Service[];
  reviews: Review[];
  videos: Video[];
  events: Event[];
}

type Tab = "videos" | "services" | "reviews" | "events";

export default function ProProfileContent({
  profile,
  services,
  reviews,
  videos,
  events,
}: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("videos");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "videos", label: "Vidéos", count: videos.length },
    { key: "services", label: "Services", count: services.length },
    { key: "reviews", label: "Avis", count: reviews.length },
    { key: "events", label: "Événements", count: events.length },
  ];

  return (
    <>
      {/* Cover & profile header */}
      <div className="relative">
        <div className="h-48 md:h-64 bg-gradient-to-br from-violet-600/30 to-rose-500/30 overflow-hidden">
          {profile.cover_url && (
            <img
              src={profile.cover_url}
              alt=""
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="max-w-5xl mx-auto px-6 -mt-16 relative z-10">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Avatar */}
            <div className="w-28 h-28 rounded-2xl border-4 border-black bg-gradient-to-br from-violet-500/30 to-rose-500/30 overflow-hidden flex-shrink-0">
              {profile.avatar_url ? (
                <img
                  src={profile.avatar_url}
                  alt={profile.full_name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-white/50">
                    {profile.full_name.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            <div className="flex-1 pt-2">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="font-display text-2xl md:text-3xl font-bold">
                  {profile.full_name}
                </h1>
                {profile.is_verified && (
                  <svg
                    className="w-6 h-6 text-violet-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <p className="text-white/50 mb-3">
                {profile.category}
                {profile.location && ` · ${profile.location}`}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-4">
                <div className="text-center">
                  <p className="font-semibold">{profile.follower_count}</p>
                  <p className="text-xs text-white/40">Abonnés</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">
                    {profile.rating.toFixed(1)} ★
                  </p>
                  <p className="text-xs text-white/40">
                    {profile.review_count} avis
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">{profile.booking_count}</p>
                  <p className="text-xs text-white/40">Réservations</p>
                </div>
              </div>

              {profile.bio && (
                <p className="text-white/60 text-sm leading-relaxed max-w-xl mb-4">
                  {profile.bio}
                </p>
              )}

              {/* Social links */}
              <div className="flex gap-3">
                {profile.instagram_url && (
                  <a
                    href={profile.instagram_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/40 hover:text-white/70 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                )}
                {profile.tiktok_url && (
                  <a
                    href={profile.tiktok_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/40 hover:text-white/70 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13a8.28 8.28 0 005.58 2.15v-3.44a4.85 4.85 0 01-3.58-1.59V6.69h3.58z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-6 mt-10">
        <div className="flex gap-1 border-b border-white/10 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-4 py-3 text-sm font-medium transition-colors flex-shrink-0 ${
                activeTab === tab.key
                  ? "text-white"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              {tab.label}
              {tab.count > 0 && (
                <span className="ml-1.5 text-xs text-white/30">
                  {tab.count}
                </span>
              )}
              {activeTab === tab.key && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-rose-500"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pb-32"
          >
            {activeTab === "videos" && (
              <div>
                {videos.length === 0 ? (
                  <p className="text-white/30 text-center py-12">
                    Aucune vidéo pour le moment
                  </p>
                ) : (
                  <>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {videos.map((video) => (
                        <button
                          key={video.id}
                          onClick={() =>
                            setSelectedVideo(video.cloudflare_video_id)
                          }
                          className="aspect-[9/16] rounded-xl overflow-hidden bg-white/5 hover:ring-2 hover:ring-violet-500/50 transition-all group"
                        >
                          {video.thumbnail_url ? (
                            <img
                              src={video.thumbnail_url}
                              alt={video.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <svg
                                className="w-8 h-8 text-white/20"
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
                        </button>
                      ))}
                    </div>

                    {/* Video modal */}
                    <AnimatePresence>
                      {selectedVideo && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                          onClick={() => setSelectedVideo(null)}
                        >
                          <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="w-full max-w-lg aspect-[9/16] rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <iframe
                              src={`https://customer-${selectedVideo}.cloudflarestream.com/${selectedVideo}/iframe`}
                              className="w-full h-full"
                              allow="autoplay; fullscreen"
                              allowFullScreen
                            />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            )}

            {activeTab === "services" && (
              <div className="space-y-3">
                {services.length === 0 ? (
                  <p className="text-white/30 text-center py-12">
                    Aucun service listé
                  </p>
                ) : (
                  services.map((service) => (
                    <GlassCard key={service.id} hover={false}>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h4 className="font-semibold mb-1">{service.name}</h4>
                          {service.description && (
                            <p className="text-sm text-white/40 mb-1">
                              {service.description}
                            </p>
                          )}
                          <p className="text-xs text-white/30">
                            {service.duration_minutes} min
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="font-display font-bold text-lg gradient-text">
                            {formatPrice(service.price, service.currency)}
                          </p>
                          <a
                            href={APP_STORE_URL}
                            className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
                          >
                            Réserver →
                          </a>
                        </div>
                      </div>
                    </GlassCard>
                  ))
                )}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-4">
                {reviews.length === 0 ? (
                  <p className="text-white/30 text-center py-12">
                    Aucun avis pour le moment
                  </p>
                ) : (
                  reviews.map((review) => (
                    <GlassCard key={review.id} hover={false}>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium text-white/50">
                            {review.client_name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-sm font-medium">
                              {review.client_name}
                            </p>
                            <div className="flex gap-0.5">
                              {Array.from({ length: review.rating }).map(
                                (_, i) => (
                                  <svg
                                    key={i}
                                    className="w-3 h-3 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                )
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-white/50 leading-relaxed">
                            {review.text}
                          </p>
                          <p className="text-xs text-white/20 mt-2">
                            {formatDate(review.created_at)}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  ))
                )}
              </div>
            )}

            {activeTab === "events" && (
              <div className="space-y-4">
                {events.length === 0 ? (
                  <p className="text-white/30 text-center py-12">
                    Aucun événement à venir
                  </p>
                ) : (
                  events.map((event) => (
                    <Link key={event.id} href={`/event/${event.id}`}>
                      <GlassCard>
                        <div className="flex gap-4">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500/20 to-rose-500/20 flex flex-col items-center justify-center flex-shrink-0">
                            <span className="text-xs text-white/40">
                              {new Date(event.date).toLocaleDateString("fr-CA", {
                                month: "short",
                              })}
                            </span>
                            <span className="text-lg font-bold">
                              {new Date(event.date).getDate()}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">
                              {event.title}
                            </h4>
                            <p className="text-sm text-white/40">
                              {event.venue} · {event.address}
                            </p>
                            <p className="text-sm text-violet-400 mt-1">
                              {formatPrice(event.price, event.currency)}
                            </p>
                          </div>
                        </div>
                      </GlassCard>
                    </Link>
                  ))
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-xl border-t border-white/5 p-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <p className="font-semibold text-sm">{profile.full_name}</p>
            <p className="text-xs text-white/40">{profile.category}</p>
          </div>
          <a
            href={APP_STORE_URL}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-rose-500 text-sm font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all"
          >
            Télécharger l&apos;app pour réserver
          </a>
        </div>
      </div>
    </>
  );
}

export const runtime = "edge";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { supabase, type Event, type Profile } from "@/lib/supabase";
import { formatPrice, formatDate, formatTime, truncate, APP_STORE_URL } from "@/lib/utils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface Props {
  params: Promise<{ id: string }>;
}

async function getEvent(id: string): Promise<(Event & { profile: Profile }) | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("events")
    .select("*, profile:profiles_pro(*)")
    .eq("id", id)
    .single();

  if (error || !data) return null;
  return data as Event & { profile: Profile };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const event = await getEvent(id);
  if (!event) return { title: "Événement introuvable" };

  return {
    title: event.title,
    description: truncate(
      event.description || `${event.title} — ${event.venue}, ${formatDate(event.date)}`,
      160
    ),
    openGraph: {
      title: `${event.title} | Spotbook`,
      description: truncate(event.description || "", 160),
      images: event.cover_url ? [{ url: event.cover_url }] : [],
    },
  };
}

export default async function EventPage({ params }: Props) {
  const { id } = await params;
  const event = await getEvent(id);
  if (!event) notFound();

  const ticketsRemaining = event.tickets_total - event.tickets_sold;

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {/* Cover image */}
          <div className="aspect-[2/1] rounded-2xl overflow-hidden bg-gradient-to-br from-violet-600/20 to-rose-500/20 mb-8">
            {event.cover_url ? (
              <img
                src={event.cover_url}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white/10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Event details */}
            <div className="flex-1">
              <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {event.title}
              </h1>

              {/* Date & time */}
              <div className="flex items-center gap-3 mb-4 text-white/60">
                <svg
                  className="w-5 h-5 text-violet-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
                <span>
                  {formatDate(event.date)} à {formatTime(event.time)}
                </span>
              </div>

              {/* Venue */}
              <div className="flex items-center gap-3 mb-4 text-white/60">
                <svg
                  className="w-5 h-5 text-violet-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <div>
                  <span className="font-medium text-white/80">
                    {event.venue}
                  </span>
                  <span className="mx-2">·</span>
                  <span>{event.address}</span>
                </div>
              </div>

              {/* Organizer */}
              <Link
                href={`/pro/${event.profile.username}`}
                className="flex items-center gap-3 mb-8 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500/30 to-rose-500/30 overflow-hidden">
                  {event.profile.avatar_url ? (
                    <img
                      src={event.profile.avatar_url}
                      alt={event.profile.full_name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm font-bold text-white/50">
                      {event.profile.full_name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm text-white/40">Organisé par</p>
                  <p className="font-medium group-hover:text-violet-400 transition-colors">
                    {event.profile.full_name}
                  </p>
                </div>
              </Link>

              {event.description && (
                <div className="mb-8">
                  <h2 className="font-display text-lg font-semibold mb-3">
                    À propos
                  </h2>
                  <p className="text-white/50 leading-relaxed whitespace-pre-line">
                    {event.description}
                  </p>
                </div>
              )}

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden h-64 bg-white/5 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-8 h-8 text-white/20 mx-auto mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                  <p className="text-sm text-white/30">{event.address}</p>
                </div>
              </div>
            </div>

            {/* Ticket card */}
            <div className="w-full md:w-80 flex-shrink-0">
              <div className="glass rounded-2xl p-6 sticky top-24">
                <div className="mb-4">
                  <span className="font-display text-3xl font-bold gradient-text">
                    {formatPrice(event.price, event.currency)}
                  </span>
                  <span className="text-white/40 text-sm ml-1">/ billet</span>
                </div>

                {ticketsRemaining > 0 ? (
                  <p className="text-sm text-white/50 mb-6">
                    <span className="text-rose-400 font-medium">
                      {ticketsRemaining} billets restants
                    </span>{" "}
                    sur {event.tickets_total}
                  </p>
                ) : (
                  <p className="text-sm text-rose-400 font-medium mb-6">
                    Complet
                  </p>
                )}

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-white/10 mb-6">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-rose-500 transition-all"
                    style={{
                      width: `${(event.tickets_sold / event.tickets_total) * 100}%`,
                    }}
                  />
                </div>

                <a
                  href={APP_STORE_URL}
                  className="block w-full text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-500 to-rose-500 font-semibold text-sm hover:shadow-lg hover:shadow-violet-500/25 transition-all"
                >
                  Acheter un billet dans l&apos;app
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

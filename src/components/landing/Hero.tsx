"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

/* ── Staggered letter animation (Resend-style) ── */
const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.4 + i * 0.04,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function AnimatedLine({ text, startIndex = 0 }: { text: string; startIndex?: number }) {
  return (
    <span className="inline-block overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={startIndex + i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ── 3 professional video feeds that scroll like TikTok ── */
const FEED_SLIDES = [
  {
    name: "Nails by Sophia",
    category: "Nail Tech",
    city: "Montréal",
    service: "Gel complet",
    price: "55$",
    gradient: "from-rose-400 to-pink-500",
    likes: "1.8k",
    comments: "32",
    video: "/videos/demo-nails.mp4",
  },
  {
    name: "Infinite Barbier",
    category: "Barber",
    city: "Montréal",
    service: "Coupe Homme",
    price: "35$",
    gradient: "from-violet-400 to-indigo-500",
    likes: "2.4k",
    comments: "48",
    video: "/videos/demo-coach.mov",
  },
  {
    name: "Coach Alex Fitness",
    category: "Coach sportif",
    city: "Laval",
    service: "Session 1h",
    price: "70$",
    gradient: "from-emerald-400 to-teal-500",
    likes: "3.2k",
    comments: "87",
    video: "/videos/demo-barber.mp4",
  },
];

/* ── Phone screen — TikTok-style vertical scroll between 3 videos ── */
function PhoneVideoDemo() {
  const [slideIndex, setSlideIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % FEED_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Keep all videos playing so transition is seamless
  useEffect(() => {
    videoRefs.current.forEach((v) => v?.play().catch(() => {}));
  }, []);

  const slide = FEED_SLIDES[slideIndex];

  return (
    <div className="w-full h-full bg-black relative overflow-hidden">
      {/* Full-screen vertical slide transition (TikTok-style) */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={slideIndex}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          {/* Video background — unique per slide */}
          <video
            ref={(el) => { videoRefs.current[slideIndex] = el; }}
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none" />

          {/* Pro avatar + name (top left) */}
          <div className="absolute top-10 left-3 flex items-center gap-2 z-10">
            <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${slide.gradient} ring-2 ring-white/30 flex items-center justify-center shadow-lg`}>
              <span className="text-[10px] font-bold text-white">{slide.name[0]}</span>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-white drop-shadow-lg">{slide.name}</div>
              <div className="text-[9px] text-white/70 drop-shadow-lg">{slide.category} · {slide.city}</div>
            </div>
          </div>

          {/* Right-side action buttons (TikTok-style) */}
          <div className="absolute right-3 bottom-24 flex flex-col gap-4 items-center z-10">
            <div className="flex flex-col items-center gap-1">
              <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <span className="text-[8px] text-white/60">{slide.likes}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="text-[8px] text-white/60">{slide.comments}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </div>
              <span className="text-[8px] text-white/60">Save</span>
            </div>
          </div>

          {/* Bottom booking CTA */}
          <div className="absolute bottom-4 left-3 right-14 z-10">
            <div className="bg-black/40 backdrop-blur-md rounded-xl px-3 py-2 border border-white/10">
              <div className="text-[9px] text-white/70 mb-1">{slide.service} · {slide.price}</div>
              <div className="bg-white rounded-lg py-1.5 text-center">
                <span className="text-[10px] font-semibold text-black">Réserver maintenant</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide indicator dots */}
      <div className="absolute top-10 right-3 flex flex-col gap-1.5 z-20">
        {FEED_SLIDES.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 rounded-full transition-all duration-300 ${
              i === slideIndex ? "h-4 bg-white" : "h-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    const particles = particlesRef.current.children;
    Array.from(particles).forEach((p) => {
      gsap.to(p, {
        x: `random(-120, 120)`,
        y: `random(-120, 120)`,
        opacity: `random(0.05, 0.4)`,
        duration: `random(5, 10)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.2 + 0.05,
              background:
                i % 3 === 0
                  ? "rgba(108, 62, 244, 0.5)"
                  : i % 3 === 1
                  ? "rgba(244, 62, 143, 0.4)"
                  : "rgba(255, 255, 255, 0.3)",
            }}
          />
        ))}
      </div>

      {/* Central radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-violet-500/[0.07] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-rose-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* ── Text content (left) ── */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-white/50 backdrop-blur-sm"
          >
            Disponible sur iOS et Android
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8">
            <span className="block text-white">
              <AnimatedLine text="L'app pour" />
            </span>
            <span className="block gradient-text">
              <AnimatedLine text="les pros." startIndex={10} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
            className="text-base md:text-lg text-white/40 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Decouvrez les meilleurs professionnels. Reservez en un tap.
            Vivez des experiences uniques.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm transition-all duration-300 glow-white hover:glow-white-hover hover:scale-[1.02]"
            >
              Commencer gratuitement
            </button>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/[0.1] text-white/60 font-medium text-sm transition-all duration-300 hover:text-white hover:border-white/[0.2] hover:bg-white/[0.03]"
            >
              Voir comment ca marche
            </a>
          </motion.div>
        </div>

        {/* ── 3D Rotating Phone (right) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 phone-3d-container"
        >
          <div className="phone-3d relative">
            {/* Phone frame */}
            <div className="relative w-[280px] h-[570px] rounded-[3rem] border-[2px] border-white/[0.08] bg-[#0A0A0A] shadow-2xl overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20" />

              {/* Screen content — live demo video */}
              <PhoneVideoDemo />

              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/20 rounded-full z-20" />
            </div>

            {/* Phone reflection glow underneath */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[240px] h-[60px] phone-reflection rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/[0.15] flex items-start justify-center p-1.5"
        >
          <div className="w-0.5 h-1.5 rounded-full bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

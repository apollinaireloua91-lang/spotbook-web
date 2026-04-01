"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="font-display font-bold text-sm text-black">S</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            Spotbook
          </span>
        </Link>

        {/* Desktop nav — just Connexion + Commencer */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/explore"
            className="text-sm text-white/50 hover:text-white transition-colors duration-300"
          >
            Connexion
          </Link>
          <button
            onClick={() => document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })}
            className="px-5 py-2 text-sm font-medium rounded-full bg-white text-black transition-all duration-300 glow-white hover:glow-white-hover hover:scale-[1.02]"
          >
            Commencer
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-6 h-5 flex flex-col justify-between"
          aria-label="Menu"
        >
          <span
            className={`w-full h-[1.5px] bg-white transition-all duration-300 origin-center ${
              mobileOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          />
          <span
            className={`w-full h-[1.5px] bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`w-full h-[1.5px] bg-white transition-all duration-300 origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/[0.04] overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <Link
                href="/explore"
                onClick={() => setMobileOpen(false)}
                className="text-lg text-white/60 hover:text-white transition-colors"
              >
                Connexion
              </Link>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 text-center font-medium rounded-full bg-white text-black glow-white"
              >
                Commencer
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

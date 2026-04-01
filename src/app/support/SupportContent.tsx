"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
  q: string;
  a: string;
}

interface SupportContentProps {
  faqClients: FAQ[];
  faqPros: FAQ[];
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-medium text-white/80 group-hover:text-white transition-colors pr-4">
          {faq.q}
        </span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-5 h-5 text-white/30 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </motion.svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-white/50 text-sm leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SupportContent({
  faqClients,
  faqPros,
}: SupportContentProps) {
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState<"clients" | "pros">(
    "clients"
  );

  const currentFaqs = activeSection === "clients" ? faqClients : faqPros;
  const filtered = search
    ? currentFaqs.filter(
        (f) =>
          f.q.toLowerCase().includes(search.toLowerCase()) ||
          f.a.toLowerCase().includes(search.toLowerCase())
      )
    : currentFaqs;

  return (
    <>
      {/* Search */}
      <div className="relative mb-8 max-w-2xl mx-auto">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Rechercher dans la FAQ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-xl glass bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 transition-all"
        />
      </div>

      {/* Section toggle */}
      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveSection("clients")}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
            activeSection === "clients"
              ? "bg-gradient-to-r from-violet-500 to-rose-500 text-white"
              : "glass text-white/50 hover:text-white/80"
          }`}
        >
          Pour les Clients
        </button>
        <button
          onClick={() => setActiveSection("pros")}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
            activeSection === "pros"
              ? "bg-gradient-to-r from-violet-500 to-rose-500 text-white"
              : "glass text-white/50 hover:text-white/80"
          }`}
        >
          Pour les Professionnels
        </button>
      </div>

      {/* FAQ list */}
      <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
        {filtered.length === 0 ? (
          <p className="text-white/30 text-center py-8">
            Aucun résultat pour &laquo; {search} &raquo;
          </p>
        ) : (
          filtered.map((faq) => <FAQItem key={faq.q} faq={faq} />)
        )}
      </div>
    </>
  );
}

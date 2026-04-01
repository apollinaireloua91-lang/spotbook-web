"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  gradient = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2
        className={`font-display text-3xl md:text-5xl font-bold tracking-tight mb-4 ${
          gradient ? "gradient-text" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

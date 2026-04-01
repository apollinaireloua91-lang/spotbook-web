"use client";

import { motion } from "framer-motion";

interface PhoneMockupProps {
  label: string;
  gradient?: string;
  children?: React.ReactNode;
}

export default function PhoneMockup({
  label,
  gradient = "from-violet-600 to-rose-500",
  children,
}: PhoneMockupProps) {
  return (
    <div className="phone-mockup">
      <motion.div
        className="phone-screen relative mx-auto w-[260px] h-[520px] rounded-[3rem] border-[3px] border-white/10 bg-black shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />

        {/* Screen content */}
        <div
          className={`w-full h-full bg-gradient-to-b ${gradient} flex items-center justify-center p-6`}
        >
          {children || (
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="text-white/80 text-sm font-medium">{label}</p>
            </div>
          )}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
      </motion.div>
    </div>
  );
}

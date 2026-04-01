"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="loading-screen"
        >
          <div className="loading-logo flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
              <span className="font-display font-bold text-xl text-black">S</span>
            </div>
            <span className="font-display font-bold text-2xl text-white tracking-tight">
              Spotbook
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Neon Purple Palette
          bg: "#000000",              // fond noir pur
          card: "#3E065F",            // violet très foncé (cards)
          "card-deep": "#1A0330",     // violet quasi-noir (layered cards)
          green: "#8E05C2",           // alias legacy -> violet vif (CTA)
          "green-light": "#B026E8",   // violet clair (highlights)
          mid: "#700B97",             // violet moyen (gradients)
          text: "#FFFFFF",            // texte principal
          border: "rgba(142, 5, 194, 0.25)",  // bordure néon subtile
          "border-strong": "rgba(142, 5, 194, 0.5)",
          beige: "#3E065F",           // alias legacy -> dark purple
          "beige-dark": "#2A0440",    // alias legacy -> deeper purple
          muted: "#B8A0D9",           // lavande claire (texte secondaire)
          neon: "#C026D3",            // rose-violet néon (accent rare)
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(142, 5, 194, 0.35), 0 0 40px rgba(142, 5, 194, 0.15)",
        "neon-lg":
          "0 0 30px rgba(142, 5, 194, 0.55), 0 0 60px rgba(142, 5, 194, 0.3), 0 0 100px rgba(112, 11, 151, 0.2)",
        "neon-xl":
          "0 0 40px rgba(192, 38, 211, 0.6), 0 0 80px rgba(142, 5, 194, 0.4), 0 0 140px rgba(112, 11, 151, 0.25)",
        "inner-neon": "inset 0 0 20px rgba(142, 5, 194, 0.15)",
      },
      backgroundImage: {
        "neon-gradient":
          "linear-gradient(135deg, #8E05C2 0%, #700B97 50%, #3E065F 100%)",
        "neon-gradient-soft":
          "linear-gradient(135deg, rgba(142,5,194,0.15) 0%, rgba(112,11,151,0.1) 50%, rgba(62,6,95,0.08) 100%)",
        "radial-neon":
          "radial-gradient(circle at center, rgba(142,5,194,0.4) 0%, rgba(62,6,95,0.1) 40%, transparent 70%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "pulse-neon": "pulse-neon 2.8s ease-in-out infinite",
        "scroll-left": "scroll-left 30s linear infinite",
        "bounce-slow": "bounce-slow 2.5s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
        "gradient-shift": "gradient-shift 12s ease infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "spin-slow": "spin 20s linear infinite",
        "rotate-3d": "rotate-3d 10s ease-in-out infinite",
        tilt: "tilt 8s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
        aurora: "aurora 18s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(142, 5, 194, 0.2)" },
          "50%": { boxShadow: "0 0 50px rgba(142, 5, 194, 0.45)" },
        },
        "pulse-neon": {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(142, 5, 194, 0.35), 0 0 40px rgba(142, 5, 194, 0.15)",
            opacity: "1",
          },
          "50%": {
            boxShadow:
              "0 0 35px rgba(192, 38, 211, 0.65), 0 0 70px rgba(142, 5, 194, 0.4)",
            opacity: "0.95",
          },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "rotate-3d": {
          "0%": { transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)" },
          "25%": { transform: "perspective(1000px) rotateY(5deg) rotateX(3deg)" },
          "50%": { transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)" },
          "75%": {
            transform: "perspective(1000px) rotateY(-5deg) rotateX(-3deg)",
          },
          "100%": {
            transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)",
          },
        },
        tilt: {
          "0%, 100%": {
            transform: "perspective(800px) rotateY(-2deg) rotateX(2deg)",
          },
          "50%": {
            transform: "perspective(800px) rotateY(2deg) rotateX(-2deg)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        aurora: {
          "0%, 100%": {
            transform: "translate(0%, 0%) scale(1)",
            opacity: "0.6",
          },
          "33%": {
            transform: "translate(10%, -15%) scale(1.1)",
            opacity: "0.8",
          },
          "66%": {
            transform: "translate(-15%, 10%) scale(0.95)",
            opacity: "0.5",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

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
          bg: "#FFFFFF",
          card: "#FFF3DA",
          green: "#043603",
          "green-light": "#0a5c07",
          text: "#1A1A1A",
          border: "#E8E0D0",
          beige: "#FFF3DA",
          "beige-dark": "#F5E6C4",
          muted: "#6B6B6B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "scroll-left": "scroll-left 30s linear infinite",
        "bounce-slow": "bounce-slow 2.5s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "spin-slow": "spin 20s linear infinite",
        "rotate-3d": "rotate-3d 10s ease-in-out infinite",
        tilt: "tilt 8s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(4, 54, 3, 0.15)" },
          "50%": { boxShadow: "0 0 50px rgba(4, 54, 3, 0.3)" },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
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
          "75%": { transform: "perspective(1000px) rotateY(-5deg) rotateX(-3deg)" },
          "100%": { transform: "perspective(1000px) rotateY(0deg) rotateX(0deg)" },
        },
        tilt: {
          "0%, 100%": { transform: "perspective(800px) rotateY(-2deg) rotateX(2deg)" },
          "50%": { transform: "perspective(800px) rotateY(2deg) rotateX(-2deg)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

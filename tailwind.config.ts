import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The Dark Base
        obsidian: "#050505", 
        charcoal: "#121212",
        
        // The Luxury Accents
        gold: {
          DEFAULT: "#D4AF37", // Classic Gold
          dim: "#AA8C2C",
          light: "#F1D570"
        },
        
        // Text
        ivory: "#F9F9F9",
        silver: "#A1A1A1"
      },
      fontFamily: {
        // Luxury Serif (Headlines)
        serif: ["var(--font-playfair)", "serif"],
        // Clean Sans (Body)
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        // A subtle gradient to make images pop
        'vignette': 'radial-gradient(circle, transparent 20%, #050505 130%)',
      }
    },
  },
  plugins: [],
};
export default config;
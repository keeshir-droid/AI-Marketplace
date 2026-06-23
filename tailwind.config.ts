import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#08090D",
          surface: "#111318",
          "surface-hover": "#191D25",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          hover: "rgba(255, 255, 255, 0.15)",
        },
        text: {
          primary: "#EEEEE8",
          secondary: "#7A7C85",
          muted: "#4A4C54",
        },
        accent: {
          DEFAULT: "#D4A843",
          hover: "#E8BC52",
          glow: "rgba(212, 168, 67, 0.15)",
        },
        success: "#34D399",
        tag: {
          bg: "#1A1D26",
          text: "#9CA3AF",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1140px",
      },
    },
  },
  plugins: [],
};

export default config;

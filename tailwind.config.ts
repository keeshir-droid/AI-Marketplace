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
          primary: "#F5F7FF",
          surface: "#FFFFFF",
          "surface-hover": "#F0F4FF",
        },
        border: {
          subtle: "rgba(99, 102, 241, 0.12)",
          hover: "rgba(99, 102, 241, 0.25)",
        },
        text: {
          primary: "#0F1629",
          secondary: "#64748B",
          muted: "#94A3B8",
        },
        accent: {
          cyan: "#22D3EE",
          purple: "#818CF8",
          pink: "#EC4899",
        },
        tag: {
          bg: "#EEF2FF",
          text: "#6366F1",
        },
      },
      fontFamily: {
        display: ["Barlow", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      maxWidth: {
        content: "1140px",
      },
    },
  },
  plugins: [],
};

export default config;

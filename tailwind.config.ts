import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        muc: {
          blue: "#0877C9",
          red: "#C80E1A",
          navy: "#0A1F33",
          ink: "#152536",
          muted: "#667384",
          soft: "#F4F7FA",
        },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(10, 31, 51, 0.10)",
      },
      letterSpacing: {
        tightest: "-0.055em",
      },
    },
  },
  plugins: [],
};

export default config;

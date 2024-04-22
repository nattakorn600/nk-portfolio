import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: {
          50: "#FFFFFF",
          100: "#090828",
          200: "#06173D",
          300: "#AAAAAA",
          400: "#8E97B6",
          500: "#2E0CEF",
          600: "#5D86B9",
          700: "#7A38FE",
          800: "#CC00FF",
          900: "#397BFA",
          950: "#9B97D4",
        },
        text: '#b7e4ea',
        lighttheme: {
          50: "#7ec0e5",
          100: "#6feedf",
          200: "#7696d6",
          300: '#0F1021',
          400: '#7064e9',
          500: '#07141D',
          600: '#162936',
        },
      },
    },
  },
  plugins: [],
};
export default config;

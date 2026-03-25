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
        "on-surface": "#191c1d",
        "outline-variant": "#c3c6d1",
        "on-primary-fixed-variant": "#1f477b",
        "on-error": "#ffffff",
        "on-secondary-fixed": "#002203",
        "on-tertiary": "#ffffff",
        "inverse-surface": "#2e3132",
        "primary": "#001e40",
        "primary-container": "#003366",
        "secondary": "#2a6b2c",
        "secondary-container": "#acf4a4",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "surface": "#f8f9fa",
        "surface-container": "#edeeef",
        "surface-container-low": "#f3f4f5",
        "surface-container-high": "#e7e8e9",
        "surface-container-highest": "#e1e3e4",
        "surface-container-lowest": "#ffffff",
        "background": "#f8f9fa",
        "on-background": "#191c1d",
        "outline": "#737780",
        "secondary-fixed": "#acf4a4",
        "secondary-fixed-dim": "#91d78a",
        "tertiary": "#002504",
        "tertiary-container": "#003d0b",
        "on-tertiary-container": "#5ead5c",
        "error": "#ba1a1a",
        "error-container": "#ffdad6",
      },
      fontFamily: {
        headline: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "7.5rem",
      },
      backgroundImage: {
        'vault-gradient': 'linear-gradient(135deg, #001e40 0%, #003366 100%)',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;

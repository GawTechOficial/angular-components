/** @type {import('tailwindcss').Config} */
import PrimeUI from "tailwindcss-primeui";

export default {
  darkMode: ["selector", '[class*="app-dark"]'],
  content: [
    "./index.html",
    "./lib/**/*.{html,ts}",
    "./src/**/*.{html,js,ts}",
    "./public/**/*.json",
  ],
  plugins: [PrimeUI],
  safelist: [
    // Todas col-span possíveis
    ...Array.from({ length: 12 }, (_, i) => `col-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `md:col-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `lg:col-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `xl:col-span-${i + 1}`),
  ],
  theme: {
    extend: {},
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1920px",
    },
  },
};

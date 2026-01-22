/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#2F1B12',   /* Bistro */
        'brand-taupe': '#43392F',  /* Taupe */
        'brand-primary': '#714423',/* Kobicha */
        'brand-tan': '#97704F',    /* Chamoisee */
        'brand-light': '#DEAF84',  /* Buff */
        'bg-cream': '#FDFBF7',     /* Background */
      },
    },
  },
  plugins: [],
}
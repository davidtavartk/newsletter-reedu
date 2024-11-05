/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
      },
      colors: {
        navy: "#242742",
        'custom-border': 'rgba(25, 24, 43, 0.4)',
      },
    },
  },
  plugins: [],
};

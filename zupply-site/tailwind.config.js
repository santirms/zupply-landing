/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        zupply: {
          primary: '#F5A623',
          'primary-dark': '#D4891A',
          'primary-light': '#FFB84D',
          dark: '#0B1120',
          'dark-card': '#111827',
          'dark-nav': '#0F172A',
        },
      },
      fontFamily: {
        nunito: ['"Nunito Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

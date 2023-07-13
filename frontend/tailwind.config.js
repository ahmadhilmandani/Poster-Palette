/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#FDFCFB',
          100: '#F3F1EC',
          200: '#E4E1DA',
          300: '#D7C39C',
          400: '#A48567',
          500: '#231E18',
        },
        emerald: {
          950: '#678983',
        },
      }
    },
  },
  plugins: [],
}

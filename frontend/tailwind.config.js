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
          300: '#FAECB8',
          400: '#A48567',
          500: '#433B31',
        },
        emerald: {
          950: '#4F5F4F',
        },
      }
    },
  },
  plugins: [],
}

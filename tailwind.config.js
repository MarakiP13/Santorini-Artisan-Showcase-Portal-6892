/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aegean': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'sand': {
          50: '#fdfaf2',
          100: '#faf5e7',
          200: '#f3e8c7',
          300: '#e9d5a2',
          400: '#e0c17d',
          500: '#d4a952',
          600: '#c89544',
          700: '#a67937',
          800: '#856132',
          900: '#6c4f2b',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
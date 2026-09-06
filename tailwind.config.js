/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        day: { bg: '#f4f7f6', card: '#ffffff', text: '#2d2f2e', accent: '#5b7f7b' },
        night: { bg: '#fdf6ec', card: '#fffaf4', text: '#4a3b32', accent: '#c88a5a' },
        lounge: { bg: '#1a0f0f', gold: '#d4af37', cream: '#f5f0e1', burgundy: '#6d071a' }
      },
      fontFamily: { serif: ['Playfair Display', 'serif'], sans: ['Inter', 'sans-serif'] }
    }
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Force Tailwind to ALWAYS include these classes
    'bg-[#1a1a2e]',
    'bg-white/70',
    'bg-white/90',
    'bg-[#f0d67c]',
    'text-[#f0d67c]',
    'text-[#022F70]',
    'border-[#f0d67c]/20',
    'border-[#022F70]/10',
    'bg-[#fdf6ec]',
    'bg-[#04040c]',
    'text-[#f0d67c]/80',
    'text-gray-600'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
}
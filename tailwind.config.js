export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Day Theme (Cool tones)
        day: {
          bg: '#f4f7f6',
          card: '#ffffff',
          text: '#2d2f2e',
          accent: '#5b7f7b',
          secondary: '#a3c1ad'
        },
        // Night Theme (Warm, cozy tones)
        night: {
          bg: '#fdf6ec',
          card: '#fffaf4',
          text: '#4a3b32',
          accent: '#c88a5a',
          secondary: '#dbb58b'
        },
        // Alcoholic Lounge Palette
        lounge: {
          bg: '#1a0f0f',
          gold: '#d4af37',
          cream: '#f5f0e1',
          burgundy: '#6d071a'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out',
        'slide-in': 'slideIn 0.5s ease-out'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      }
    }
  },
  plugins: [],
}
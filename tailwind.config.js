/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Cinzel', 'serif'],
      },
      colors: {
        red: {
          400: '#FF3333',
          500: '#E60000',
          600: '#CC0000',
          700: '#B30000',
          800: '#990000',
          900: '#800000',
        },
        gray: {
          800: '#1A1A1A',
          850: '#151515',
          900: '#0D0D0D',
          950: '#070707',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
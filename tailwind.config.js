/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FAFAF8',
        accent: {
          DEFAULT: '#2563EB',
          light: '#EFF6FF',
          dark: '#1D4ED8',
        },
        ink: {
          DEFAULT: '#0F172A',
          muted: '#64748B',
          subtle: '#94A3B8',
        },
        gold: '#B45309',
        border: '#E2E8F0',
      },
    },
  },
  plugins: [],
}

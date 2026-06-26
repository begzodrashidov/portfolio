/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0B0B0F',
          surface: '#14141B',
        },
        text: {
          primary: '#ECEAF2',
          muted: '#9491A3',
        },
        accent: {
          purple: '#8B5CF6',
          teal: '#2DD4BF',
        },
        borderc: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out forwards',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}

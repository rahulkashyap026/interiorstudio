import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f7f6',
          900: '#0a0a0a',
          950: '#050505',
        },
        beige: {
          50: '#faf7f2',
          100: '#f3ede2',
          200: '#e8dcc4',
          300: '#d9c69e',
          400: '#c4a875',
        },
        gold: {
          400: '#d4af37',
          500: '#c9a227',
          600: '#a8861f',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.18em',
      },
      boxShadow: {
        luxe: '0 25px 60px -20px rgba(0,0,0,0.35)',
        gold: '0 10px 30px -10px rgba(212,175,55,0.45)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        shimmer: 'shimmer 2.5s linear infinite',
        'gold-pulse': 'goldPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        goldPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,175,55,0.5)' },
          '50%': { boxShadow: '0 0 0 18px rgba(212,175,55,0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
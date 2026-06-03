/** @type {import('tailwindcss').Config} */
// Boje i tipografija TOČNO prema "Knjiga vizualnih standarda MOST 2026".
// Anchor vrijednosti (označene EXACT) preuzete su 1:1 iz knjige standarda.
// Međunijanse (derived) izvedene su samo za UI stanja (hover, border, bg) — nisu brand boje.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // === PRIMARNA: Tamnoplava === (brand primary)
        most: {
          50:  '#eef2f7', // derived (svijetli tint za suptilne pozadine)
          100: '#d7e0ea', // derived
          200: '#aec2d7', // derived
          300: '#7e9bba', // derived
          400: '#4a6c93', // derived
          500: '#284E87', // EXACT — sekundarna "Plava" (interaktivni elementi)
          600: '#1e3c66', // derived
          700: '#162C4C', // EXACT — primarna "Tamnoplava" (brand, logo, header)
          800: '#0f2138', // derived
          900: '#0a1727', // derived (najtamnije)
        },
        // === PRIMARNA: Svijetloplava === (most swoosh, light accent)
        sky: {
          50:  '#eafaff', // derived
          100: '#d2edf4', // EXACT — sekundarna "Pale plava"
          300: '#a5e2f7', // derived
          400: '#7ad6f2', // derived
          500: '#51C8EE', // EXACT — primarna "Svijetloplava"
          600: '#2ba6cf', // derived
        },
        // === PRIMARNA: Akcentna narančasto-crvena === (CTA)
        accent: {
          50:  '#fbeae6', // derived
          400: '#e2705a', // derived
          500: '#D64127', // EXACT — primarna "Akcentna"
          600: '#b5351d', // derived (hover)
        },
        // === SEKUNDARNA: Pale plava === (pozadine)
        pale: '#D2EDF4', // EXACT
      },
      fontFamily: {
        // Primarni font (naslovi) — Binoma Trial
        display: ['"Binoma Trial"', 'system-ui', 'sans-serif'],
        // Sekundarni font (tekst) — Avenir LT Std
        sans: ['"Avenir LT Std"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        // Tipografska skala usklađena s knjigom standarda (H1 Bold, H2 Regular, body Medium, caption Light)
        'display-1': ['clamp(2.5rem, 5vw, 4.25rem)', { lineHeight: '1.05', letterSpacing: '-0.01em', fontWeight: '700' }],
        'display-2': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h1': ['clamp(1.75rem, 3vw, 2.4rem)', { lineHeight: '1.15', fontWeight: '700' }],
        'h2': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.2', fontWeight: '400' }],
        'h3': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3', fontWeight: '700' }],
        'lead': ['clamp(1.125rem, 1.5vw, 1.25rem)', { lineHeight: '1.55', fontWeight: '500' }],
      },
      maxWidth: { 'prose': '68ch' },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};

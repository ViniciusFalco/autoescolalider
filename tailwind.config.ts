import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: '#9BF521',
          limeLight: '#B4FF4F',
          green: '#087A45',
          dark: '#053B29',
          black: '#07120D',
          red: '#E53B2C',
          cream: '#F4F6E9',
        },
      },
      boxShadow: {
        lime: '0 14px 35px rgba(155, 245, 33, 0.25)',
        card: '0 20px 55px rgba(5, 59, 41, 0.14)',
      },
      backgroundImage: {
        'dot-grid':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1.2px, transparent 0)',
        'dot-grid-dark': 'radial-gradient(circle at 1px 1px, rgba(5,59,41,0.22) 1.2px, transparent 0)',
      },
    },
  },
  plugins: [],
} satisfies Config;

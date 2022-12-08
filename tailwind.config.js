/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px'
    },
    extend: {
      fontFamily: {
        'sans': ['Manrope', 'sans-serif']
      },
      colors: {
        accent: '#D87D4A',
        'accent-hover': '#fbaf85',
        footer: '#101010',
        product: '#F1F1F1'
      },
      fontSize: {
        'heading1': ['3.5rem', {
          lineHeight: '3.625rem',
          fontWeight: '700'
        }],
        'heading2': ['2.5rem', {
          fontWeight: '700',
          lineHeight: '2.75rem'
        }],
        'heading3': ['2rem', {
          fontWeight: '700',
          lineHeight: '2.25rem'
        }],
        'heading4': ['1.75rem', {
          fontWeight: '700',
          lineHeight: '2.375rem'
        }],
        'heading5': ['1.5rem', {
          fontWeight: '700',
          lineHeight: '2rem',
        }],
        'heading6': ['1.25rem', {
          fontWeight: '700',
          lineHeight: '1.5rem'
        }]
      },
      gridTemplateColumns: {
        'in-the-box': '2rem 1fr',
        'gallery': '40% 1fr'
      },
      backgroundImage: {
        'pattern-circles': "url('/assets/home/desktop/pattern-circles.svg')"
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        header: '150px',
      },
      fontFamily: {
        main: 'Quicksand, sans-serif',
      },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        24: '24px',
        32: '32px',
        46: '46px',
      },
      colors: {
        main: '#ed1c24',
        textColor: '#252a2b',
        textColor2: '#999999',
        titleColor: '#000000',
        hoverColor: '#ed1c24',
        bgColor: '#1a1a1a',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
      },
    },
  },
  plugins: [require('tailwindcss-scrollbar')],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        headerMobile: '90px',
        headerDesktop: '130px',
      },
      fontFamily: {
        main: 'Quicksand, sans-serif',
      },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
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
      boxShadow: {
        topShadow: '0 -1px 15px rgb(0 0 0 / 0.3)',
      },
      backgroundColor: {
        test: 'linear-gradient(to top, black, black)',
      },
      keyframes: {
        onto: {
          '0%': { scale: '0', opacity: '0', transform: 'rotate(150deg)' },
          '100%': { scale: '1', opacity: '1', transform: 'rotate(0deg)' },
        },
        blur: {
          '0%': { opacity: 0 / 3 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        onto: 'onto 0.3s ease-in',
        blur: 'blur 0.5s ease-in',
      },
    },
  },
  plugins: [require('tailwindcss-scrollbar')],
};

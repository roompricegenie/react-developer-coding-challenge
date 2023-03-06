/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true
      },
      borderRadius: {
        xl: '10px'
      }
    },
    boxShadow: {
      card: 'inset 0 1px 0 0 hsl(0deg 0% 100% / 5%)'
    }
  },
  important: '#root',
  plugins: []
};

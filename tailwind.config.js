/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js}'],
  theme: {
      colors: {
        primary: '#00FF00',
        secondary: '#FF00FF',
        terciary: 'blue',
        cuarter: '#600060',
        quintuple: '#007000'
      },
      extend: {},
  },
  plugins: [],
};
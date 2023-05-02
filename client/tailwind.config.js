/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-select/dist/index.esm.js"],
  theme: {
    colors:{
      'lime': "#ADE446",
      'orange': "#FFBD00",
      'black': "#494B4E",
      'grey': "#E2EAF1",
      'yellow': '#FFE000',
      'darkgrey': '#989898',
      'white': '#F0F0F0',
      'buttonblack': "#494B4E",
      'green': '#47924B',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat'],
      },
    },
  },
  plugins: [],
}


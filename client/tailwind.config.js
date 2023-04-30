/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors:{
      'lime': "#ADE446",
      'orange': "#FFBD00",
      'black': "#362020",
      'grey': "#E2EAF1",
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


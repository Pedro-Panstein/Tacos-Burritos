/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-fundo": "url('/src/img/banner-tacos-burritos.jpg')",
        "funto-footer": "url('/src/img/banner-tacos.png')",
      },
      height: {
        "vh-30": "30vh",
        "vh-50": "50vh",
        "vh-60": "70vh",
        "vh-80": "80vh",
      },
      width:{
        "vw-30": "30vw",
      },
      flexdirection: {
        "rw-rv": "row-reverse",
      },
      fontFamily: {
        "poppins": "Poppins, sans-serif",
      },
      colors: {
        "header-color": "#c80000",
        "Banner-text-color": "#F7b044",
        "green-color": "#12762e",
      },
    },
  },
  plugins: [],
};

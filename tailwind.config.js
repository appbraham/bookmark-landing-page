/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    ".src/*.{html, js}", 
    "index.html",
    "./src/*.js"
  ],
  theme: {
    extend: {
      colors: {
        soft_blue: "hsl(231, 69%, 60%)",
        soft_red: "hsl(0, 94%, 66%)",
        rayish_blue: "hsl(229, 8%, 60%)",
        very_dark_blue: "hsl(229, 31%, 21%)",
      },
      fontFamily: {
        rubik: ["Rubik Normal"],
        rubik_italic: ["Rubik Italic"],
      },
      backgroundImage:{
        'dots': "url('../images/bg-dots.svg')",
        'icon-error': "url('../images/icon-error.svg')"
      },
      
    },
  },
  plugins: [],
};

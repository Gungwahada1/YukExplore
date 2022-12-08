/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    fontFamily: {
      "Bebas+Neue": "Bebas Neue",
      Nunito: "Nunito",
      Poppins: "Poppins",
    },
    colors: {
      "60%": "#06283D",
      "30%": "#256D85",
      "10%": "#F3F3F3",
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};

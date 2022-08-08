/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};

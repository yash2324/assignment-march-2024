/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        cyan: {
          soft: "hsl(174, 77%, 80%)",
          strong: "hsl(174, 86%, 45%)",
          white: "#ffffff",
        },
        reddish: {
          grayish: "hsl(14, 92%, 95%)",
          light: "hsl(15, 100%, 70%)",
        },
        bluish: {
          palePrimary: "hsl(226, 100%, 87%)",
          very: "hsl(230, 100%, 99%)",
          emptySlider: "hsl(224, 65%, 95%)",
          lightGrayish: "hsl(223, 50%, 87%)",
          grayish: "hsl(225, 20%, 60%)",
          dark: "hsl(227, 35%, 25%)",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

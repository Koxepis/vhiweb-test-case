const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extends: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        moon: {
          50: "#F8F9FC",
          100: "#EBEDF5",
          200: "#CFD4E7",
          300: "#A7AFD3",
          400: "#7E8BBE",
          500: "#4D5C99",
          600: "#3C4777",
          700: "#2B3355",
          800: "#131726",
          900: "#0C0E17",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@vechaiui/core"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

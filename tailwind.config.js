/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffac15",
        mainBackground: "#0d0b21",
        secondBackground: "#080c14",
        subBackground: "#6356e3",
      },
    },
  },
  plugins: [],
};

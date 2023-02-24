/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#70C4BB",
        light: "#9DA7BE",
        border: "#415b7933",
        disabled: "#EFF1F5",
      },
      spacing: {
        primary: "24px",
      },
      fontFamily: {
        sans: ["var(--font-rubik)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

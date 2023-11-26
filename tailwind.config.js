/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#a1a1aa",
        secondary: "#d4d4d8",
        "black-800": "#09090B",
      },
      backgroundColor: {
        flatBlack: "#333",
        grayBlack: "#444",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

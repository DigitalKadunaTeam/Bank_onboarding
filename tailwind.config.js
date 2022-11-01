/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black76: "rgba(4, 9, 33, 0.76)",
        black100: "#040921",
        black32: "rgba(4, 9, 33, 0.32)",
        primaryBlue: "#3D7DFF",
        grey: "#D9D9D9",
      },

      spacing: {
        130: "38rem",
      },
    },
  },
  plugins: [],
};

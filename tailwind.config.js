/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bolder: ["Rubik Bubbles", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        bgcolor: "#f5f5f7",
        stronger: "#DF4A04",
        mediumer: "#f77f05",
        lighter: "#eb8a28",
        warmer: "#8892b0",
        warmlight: "#475569",
      },
    },
  },
  plugins: [],
};

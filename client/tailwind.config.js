/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#edcf5d",
        customBlack: "#010101",
        customIsabelline: "#f2f0ea",
        customGray: "#a4a4a4"
      }
    },
  },
  plugins: [],
};

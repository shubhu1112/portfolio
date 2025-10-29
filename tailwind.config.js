/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // important!
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        silver: "#C0C0C0",
      },
    },
  },
  plugins: [],
};

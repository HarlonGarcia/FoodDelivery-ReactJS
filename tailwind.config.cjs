/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Mont-Heavy", "sans-serif"],
        "mont-light": ["Mont-Light", "sans-serif"],
        coolvetica: ["Coolvetica", "sans-serif"],
      },
    },
    fontSize: {
      "10xl": "10rem",
      "11xl": "12.5rem",
      "12xl": "15rem",
      "13xl": "18rem",
    },
    colors: {
      orange: {
        DEFAULT: "#FF5700",
      },
      beige: {
        DEFAULT: "#FFE8D2",
      },
      white: {
        DEFAULT: "#F2F2F2",
      },
      black: {
        DEFAULT: "#0D0D0D",
        100: "#262626",
      },
      green: {
        DEFAULT: "#27CC27",
      },
      yellow: {
        DEFAULT: "#FFD000",
      },
      red: {
        DEFAULT: "#E20000",
      },
    },
  },
  plugins: [],
};

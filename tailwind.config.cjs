/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        open: ["OpenSans", "sans-serif"],
        abril: ["abril", "sans-serif"],
      },
    },
    colors: {
      orange: {
        DEFAULT: "#FF5700",
        100: "#CC4400",
        200: "#B03400",
      },
      beige: {
        DEFAULT: "#FFE8D2",
      },
      white: {
        DEFAULT: "#F2F2F2",
      },
      black: {
        DEFAULT: "#262626",
        100: "#0D0D0D",
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

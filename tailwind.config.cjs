/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        nanum: ["Nanum-Regular", "serif"],
        nanumbold: ["Nanum-Bold", "serif"],
        nanumblack: ["Nanum-ExtraBold", "serif"],
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
        100: "#DF8D46",
        200: "#8E3A16",
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

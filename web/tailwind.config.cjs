const defaultTheme = require("tailwindcss/defaultTheme");

function printOrMinWidth(minWidth) {
  return { raw: `print,(min-width: ${minWidth})` };
}

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Noto Sans",
      serif: "Noto Serif",
      mono: "Noto Sans Mono",
      cursive: "Brush Script MT",
    },
    screens: {
      xs: "576px",
      'sm': '640px',
      'md': '768px',
      lg: printOrMinWidth("960px"),
      xl: printOrMinWidth('1280px'),
      "2xl": printOrMinWidth('1536px'),
    },
    extend: {
      colors: {
        "default-text": "#696969",
        "cv-dark-purple": "#421c52",
        "cv-purple": "#732c7B",
        "cv-grey": "#9c8aa5",
        "cv-light-grey": "#bdaec6",
        "cv-white": "#ffffff",
      },
      aspectRatio: { golden: "16 / 10" },
      animation: {
        fadeIn: "fade 2s ease-out",
        saturateIn: "saturate 3s ease-out",
        fade: "fade 5s linear alternate 2",
        sideToSide: "sideToSide 5s ease-in-out alternate infinite",
        wiggle: "wiggle 50ms linear alternate 12",
        tease: "tease 4s linear infinite",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        saturate: {
          "0%": { filter: "saturate(0)" },
          "100%": { opacity: "saturate(1)" },
        },
        sideToSide: {
          "0%": { rotate: "0 1 0 -30deg" },
          "50%": { rotate: "0 1 0 0deg" },
          "100%": { rotate: "0 1 0 30deg" },
        },
        wiggle: {
          "0%": { rotate: "-1deg" },
          "100%": { rotate: "1deg" },
        },
        tease: {
          "0%": { rotate: "0deg", translate: "0rem" },
          "3%": { rotate: "-5deg", translate: "-0.25rem" },
          "6%": { rotate: "5deg", translate: "0.25rem" },
          "9%": { rotate: "-5deg", translate: "-0.25rem" },
          "12%": { rotate: "5deg", translate: "0.25rem" },
          "15%": { rotate: "0deg", translate: "0rem" },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(217, 28%, 15%)",
        darkBlue1: "hsl(218, 28%, 13%)",
        darkBlue2: "hsl(216, 53%, 9%)",
        accentCyan: "hsl(176, 68%, 64%)",
        accentBlue: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
      },
      fontFamily: {
        sans: ["Railway", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "logo-dark-mode": "url('../images/logo-dark-mode.svg)",
        "logo-light-mode": "url('../images/logo-light-mode.svg)",
        "curvey-dark-mode": "url('../images/bg-curvy-dark-mode.svg)",
        "curvey-light-mode": "url('../images/bg-curvy-light-mode.svg)",
      }),
    },
  },
  variants: {
    extends: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};

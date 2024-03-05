/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1076px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "420px" },
    },
    extend: {
      fontFamily: {
        customFont: ['"Inter"', "sans-serif"],
        // Add more custom font families as needed
      },
      content: {
        arrowDownIcon: 'url("./src/assets/header/arrow-down.svg")',
        arrowRightIcon: 'url("./src/assets/header/arrow-right-white.svg")',
        earth: 'url("./src/assets/header/earth.svg")',
      },
    },
  },
  plugins: [],
};

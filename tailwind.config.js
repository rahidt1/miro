/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      content: {
        arrowDownIcon: 'url("./src/assets/header/arrow-down.svg")',
        arrowRightIcon: 'url("./src/assets/header/arrow-right-white.svg")',
        earth: 'url("./src/assets/header/earth.svg")',
      },
    },
  },
  plugins: [],
};

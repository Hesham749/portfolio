/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},

    colors: {
      "body-color": "#FBFBFB",
      "title-color": "#777777",
      "title-color-dark": "#1E1C23",
      "container-color": "#333233",
    },

    container: {
      center: true,
    },
  },
  plugins: [require("flowbite/plugin")],
};

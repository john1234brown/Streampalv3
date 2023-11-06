/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purpal": {
          "100": "#CFC4FF",
          "200": "#C3B5FF",
          "300": "#B4A2FF",
          "400": "#A18BFF",
          "500": "#8A6EFF",
          "600": "#6E58CC",
          "700": "#5846A3",
          "800": "#483882",
          "900": "#382D68",
        },
        "tanpal": {
          "100": "#F8F5EB",
          "200": "#F6F3E6",
          "300": "#F4F0E0",
          "400": "#F1ECD8",
          "500": "#EDE7CE",
          "600": "#BEB9A5",
          "700": "#989484",
          "800": "#7A766A",
          "900": "#625E55",
        },
        "blapal": {
          "100": "#A3A2A1",
          "200": "#8C8B89",
          "300": "#6F6E6C",
          "400": "#4B4A47",
          "500": "#1E1D19",
          "600": "#181714",
          "700": "#131210",
          "800": "#0F0E0D",
          "900": "#0C0B0A",
        },
      }
    },

  },
  plugins: [require('tailwind-scrollbar-hide')],
}


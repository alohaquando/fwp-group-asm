/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#00C7FD",
        "brand-blue-700": "#009FCA",
        "brand-blue-gray-50": "#F3F6FA",
        "brand-blue-gray-100": "#E3EBF1",
        "brand-navy-400": "#535E71",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-labeled-groups")(["card", "list", "section"]),
    require("@tailwindcss/forms"),
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        auth: "url('../public/img/hero.jpg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};


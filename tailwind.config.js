/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        burguer: "url('/src/Assets/bg-H.jpg')",
        salchipapa: "url('/src/Assets/salchipapa.jpeg')",
        burrito: "url('/src/Assets/Burritos.jpg')",
        header: "url('/src/Assets/Header.jpeg')",
      },
    },
  },
  plugins: [],
};

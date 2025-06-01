/** @type {import('tailwindcss').Config} */
module.exports = {
darkMode:'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        orange500: 'hsl(25, 97%, 53%)',
        grey500: 'hsl(217, 12%, 63%)',
        grey900: 'hsl(213, 19%, 18%)',
        grey950: 'hsl(216, 12%, 8%)'
      }
    },
  },
  plugins: [],
}
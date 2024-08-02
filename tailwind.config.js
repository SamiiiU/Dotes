/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    screens: {
      'Mobile' : '420px',

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'tablet2': '850px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1024px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}



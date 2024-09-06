/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "image-second": "url('../assets/books.png')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],

}
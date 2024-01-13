/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "90v":"90vh",
        "150":"600px"
      }
    },

  },
  plugins: [],
}


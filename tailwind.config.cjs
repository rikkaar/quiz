/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "quiz-bg": "#DAD6D3",
        "highlight": "#DE416D",
      }
    },
  },
  plugins: [],
}
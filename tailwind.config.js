/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#8E53A2",
        "secondary-color": "#8CC63F"
      }
    },
  },
  plugins: [],
}


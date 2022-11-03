/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  important:true,
  theme: {
    extend: {
      fontFamily: {
        omnes:['omnes','san-serif']
      }
    },
  },
  plugins: [],
}

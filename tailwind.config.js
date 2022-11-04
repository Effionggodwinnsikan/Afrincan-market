/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        omnes: ["omnes", "san-serif"],
      },
      colors: {
        herogreen: "#cbe1ad",
        maintxt: "#202125",
        placeholder: "#B3B3B5",
        inputTxt: "#505154",
        primaryBtn: "#1FA9E4",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/2_Tuesday.jpg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },

      maxWidth: {
        "6.5xl": "1200px",
      },
    },
  },
  plugins: [],
};

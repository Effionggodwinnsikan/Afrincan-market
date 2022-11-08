/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
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
        secondarybg: "#F2F3F5",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/2_Tuesday.jpg')",
        whatswolt:
          "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)), linear-gradient(rgb(248, 248, 248), rgb(248, 248, 248))",
        whatswoltbg:
          "url('https://cdn.wolt.com/frontpage-assets/video-cover-image-4.jpg')",
      },
      backgroundPosition: {
        whatswoltPos: "0px 0px, 0px 50%",
        mobWhats: "50% 0",
      },
      backgroundSize: {
        whatswoltsiz: "100% 50%, 100%, 50%",
        homPartmob: "50%, 50%",
        homPartDesk: "50%, 0",
      },
      boxShadow: {
        homewhats: "rgb(32 33 37 / 6%) 0px 0px 54px 0px",
      },

      maxWidth: {
        "6.5xl": "1200px",
      },
      minHeight: {
        homewhats: "45.625rem",
      },
      right: {
        "800": "800px",
      },
    },
  },
  plugins: [],
};

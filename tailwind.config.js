/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        omnes: ["Hind", " sans-serif"],
      },
      colors: {
        herogreen: "#cbe1ad",
        maintxt: "#202125",
        placeholder: "#B3B3B5",
        inputTxt: "#505154",
        primaryBtn: "#EDCE00",
        secondarybg: "#F2F3F5",
        lightblue: "#D6EFFA",
        lightdark: "rgba(0, 0, 0, 0.5)",
        primary: "#F6B01E",
        tertiary: "#E4811C",
        primaryLi: "#FDEFD2",
        // secondary: "",
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
        modalContent:
          "rgb(0 0 0 / 6%) 0px 0px 1rem 0px, rgb(0 0 0 / 12%) 0px 1rem 1rem 0px",
      },

      maxWidth: {
        "6.5xl": "1200px",
      },
      minHeight: {
        homewhats: "45.625rem",
      },
      right: {
        800: "800px",
      },
      animation: {
        modal: "0.5s  forwards modal",
      },

      keyframes: {
        modal: {
          "0%": {
            width: 0,
            height: 0,
            // overflow: "hidden",
            opacity: 0,
            left: "100vh",
            // borderRadius: "50%",
          },
          "100%": {
            width: 100,
            height: 100,
            // overflow: "hidden",
            opacity: 1,
           
          },
        },
      },
    },
  },
  plugins: [],
};

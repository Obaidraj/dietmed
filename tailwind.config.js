/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    screens: {
     
      sm: "640px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      mx: "92px",
    },
    extend: {
      backgroundImage: {
        hero: "url('../public/images/headerImages/bgImage.png')",
        mainHost: "url('../public/images/host/notSingInMainImg.png')",
        superhost: "url('../public/images/host/superHostImg.png')",
        NotSingedInBg: "url('../public/images/host/NotSingedIn.png')",
        NotSingedInBgForTab: "url('../public/images/host/NotSingedInBg.png')",
        NotSingedInBgForMob: "url('../public/images/host/NotSingedInMbl.png')",
        myProperty: "url('../public/images/host/yourProperty.png')",
        congrate: "url('../public/images/host/congrate.png')",
        congrateMobile: "url('../public/images/host/congrateMobile.png')",
        supremHostMobile: "url('../public/images/host/supremHostMobile.png')",
        withDraw: "url('../public/images/host/withDraw.png')",
        dashbg: "url('../public/images/host/dash-bg.png')",
        insta:
          "radial-gradient(94.43% 406.45% at 6.37% 93.1%, #FEC053 0%, #EE2740 33%, #AC3D96 65%, #5755A5 100%)",
      },
      zIndex: {
        150: 999,
        130: 900,
        145: 950,
      },
      boxShadow: {
        btn: "0px 9px 15px rgba(0, 0, 0, 0.34)",
        inputSearch: "0px 4px 18.5px rgba(0, 0, 0, 0.07)",
        chat: "-3px 0px 15px rgba(0, 0, 0, 0.1)",
        chatHead: "0px 8px 9px rgba(0, 0, 0, 0.05)",
        productCard: "0px 2px 11px rgba(0, 0, 0, 0.1)",
        card: "6px 6px 18px rgba(0, 0, 0, 0.2)",
        footerCard: "4px 0px 8px 2px rgba(0, 0, 0, 0.08)",
        chatHeadMobile: "0px 2px 8px 2px rgba(0, 0, 0, 0.08)",
        selectBtn: "0px 3px 15px rgba(0, 0, 0, 0.05)",
        smFooterCard: "3px 0px 15px rgba(0, 0, 0, 0.1)",
        input: " 0px 2px 11px rgba(0, 0, 0, 0.1)",
        hostHead: "0px 1px 19px rgba(0, 0, 0, 0.06)",
        hostInputShadow: "0px, 2px rgba(0, 0, 0, 0.1)",
        setpForm: "0px, 8px rgba(0, 0, 0, 0.13)",
        simpleBtn: "0px 4px 18.5px rgba(0, 0, 0, 0.07)",
        hostImgCard: "0px 2px 11px rgba(0, 0, 0, 0.32)",
        filter: " 0px 1px 2px rgba(16, 24, 40, 0.05)",
        dashboard: "0px 0px 23px rgba(0, 0, 0, 0.06)",
        dashBtn: "0px 4px 17px rgba(0, 0, 0, 0.13)",
        flterCard: "0px 4px 18px rgba(0, 0, 0, 0.1)",
        transation: "0px 1px 8px rgba(31, 41, 55, 0.06)",
        faq: "0px 8px 48px rgba(0, 0, 0, 0.08)",
        review: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        xs: { min: "180px", max: "640px" },
        safari: {
          raw: "(min-color-index:0) and (-webkit-min-device-pixel-ratio:0)",
        },
      },
      fontFamily: {
        Catamaran: ["Catamaran", "sans-serif"],
        CatamaranBold: ["CatamaranBold", "sans-serif"],
        CatamaranSmall: ["CatamaranSmall", "sans-serif"],
        CatamaranBlack: ["CatamaranBlack", "sans-serif"],
        Josefin: ["Josefin", "sans-serif"],
        JosefinBold: ["JosefinBold", "sans-serif"],
      },
      colors: {
        primary: "#1B595F",
        primaryHover: "#05484F",
        secondary: "#ACACAC",
        title: "#4B4B4B",
        darker: "#484848",
        lightDarker: "#646464",
        backColor: "#FFFFFF",
        backGround: "#FBFBFB",
        InputBgColor: "#F5F5F5",
        InputSelectedColor: "#D3E7E9",
        heading: "#353535",
        message: "#EDEDED",
        bgIcon: "#7DD6DF",
        containerBg: "#F7FBFB",
        modal: "#A4A4A4",
        img: "rgba(247, 251, 251, 0.9)",
        msg: "#DEF6F9",
        danger: "rgb(250, 57, 64)",
      },
      backgroundColor: {
        "bg-main": "#F7FBFB",
        "bg-medium": "#F5F5F5",
        "bg-modal": "rgba(0, 0, 0, 0.15)",
      },
        listStyleType: {
        dot: 'disc',
      }
    },
  },
  plugins: [],
};
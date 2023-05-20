module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,css}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        brandBlue: "#6b58fd",
        brandBlack: "#323232",
        brandVioley: "#6b58ff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xs: ".375rem", // 6px
        ss: ".5rem",  // 8px
        sm: ".625rem", // 10px
        md: ".75rem", // 12px
        lg: ".9375rem", // 15px
        xl: "1.125rem", // 18px
      },
      backgroundImage: {
        "background1": "url('src/assets/bg-1.jpg')"
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1600px",
    },

  },
  plugins: [],
};

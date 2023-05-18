/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundColor: {
        primary: "hsl(12, 88%, 59%)",
        light: "hsl(0, 0%, 98%)",
        footer: "hsl(233, 12%, 13%)",
        hover: "hsl(13, 100%, 96%)",
      },

      textColor: {
        primary: "hsl(227, 12%, 61%)",
        secondary: "hsl(228, 39%, 23%)",
        brightRed: "hsl(12, 88%, 59%)",
        hover: "hsl(13, 100%, 96%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },

      fontWeight: {
        normal: 400,
        semiBold: 500,
        bold: 700,
      },
    },
    screens: {
      xs: "475px",
      ss: "620px",
      sm: "780px",
      md: "1060px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1800px",
    },
  },
  plugins: [],
};

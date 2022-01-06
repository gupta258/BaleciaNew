module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ['"Montserrat"', "sans-serif"],
    },
    extend: {
      boxShadow: {
        "3xl": "0 8px 30px 0px rgba(0, 0, 0, 0.08)",
      },
      colors: {
        border: "#E8E8E8",
        btnBg: "#EA9926",
        gray45: "#454545",
        gray78: "#787878"
      },
    },
  },
  plugins: [],
};

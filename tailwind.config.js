/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    screens: {
      sm: "640px",

      md: "768px",

      lg: "992px",

      xl: "1200px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};

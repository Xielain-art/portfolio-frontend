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
      maxSm: { max: "640px" },
      md: "768px",
      maxLg: { max: "991px" },
      lg: "992px",
      maxSm: { max: "480px" },
      sm: "480px",
      xl: "1200px",
      maxXl: { max: "1200px" },
      "2xl": "1536px",
    },
  },
  plugins: [],
};

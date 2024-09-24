/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBrown: "#644215",
        brown: "#5D3D1D",
        light: "#cdb693",
        green: "#3c5d40",
        orange: "#ff9100",
        greenHover: "#69a037",
      },
      fontFamily: {
        sniglet: ["Sniglet", "sans-serif"],
      },
      transform: {
        "scale-x-reverse": "scaleX(-1)",
      },
      boxShadow: {
        "3xl": "0 10px 50px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".scale-x-reverse": {
            transform: "scaleX(-1)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};


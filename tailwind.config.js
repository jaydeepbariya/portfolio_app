/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "darkBlue":"#03045E",
        "lightBlue":"#0077B6",
        "darkskyBlue":"#00B4D8",
        "lightskyBlue":"#90E0EF",
      }
    },
  },
  plugins: [],
};

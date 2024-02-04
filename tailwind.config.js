/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        poppinsSemiBold: ["Poppins-SemiBold", "sans-serif"],
        poppinsBold: ["Poppins-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
}

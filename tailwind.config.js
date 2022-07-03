/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        blues: {
          50: '#ADD7F6',
          100: '#87BFFF',
          200: '#3F8EFC',
          300: '#2667FF',
          400: '#3B28CC',
        },
      },
    },
  },
  plugins: [],
}

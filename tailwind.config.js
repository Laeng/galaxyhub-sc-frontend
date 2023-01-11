const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        '041bed': '#041b2d',
        '004e9a': '#004e9a',
        '428cd4': '#428cd4',
        'ff9cda': '#ff9cda',
        'ea4492': '#ea4492'
      }
    },
  },
  plugins: [],
}

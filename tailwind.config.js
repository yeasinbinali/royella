/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        simple: 'rgb(30 30 30)',
        complex: 'whitesmoke',
        main: 'rgb(193 157 104)'
      }
    },
  },
  plugins: [
    require('daisyui')
  ]
}
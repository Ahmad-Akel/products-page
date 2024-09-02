/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '15':'60px',
        '30': '120px'
      },
      fontSize:{
        '13':'13px',
        '21':'21px',
        '32':'32px',
        '55':'55px'
      },
      colors:{
        'custom-light-green': '#61908E',
        'custom-green':'#024E40',
        'custom-light-gray':'#BFDBDC',
        'custom-kiwi-green':'#7FC109',
        'custom-lighter-green':'#AAE8C3',
        'custom-lighter-gray':'#E7E7E7'
      },
      width:{
        '97':'392px',
        '165':'165px',
        '422':'422px'
      },
      height: {
        '54': '218px',
        '56':'56px',
        '320':'320px',
        '408':'408px'
      },
      screens:{
        'mobile':'375px'
      }
    },
  },
  plugins: [],
}


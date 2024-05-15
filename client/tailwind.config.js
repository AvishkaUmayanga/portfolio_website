/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm' : '394px',
      'xlg' : '1050px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      'dancingScript': ['Dancing Script', 'sans-serif'], 
      'inter': ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'mainBg' : "url('./assets/bgimg.png')",
        'mainBg2' : "url('./assets/slate950.png')",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      gridTemplateColumns: {
        'cols4': 'repeat(4, minmax(0, auto))',
        'cols2': 'repeat(2, minmax(0, auto))',
      },
      gridTemplateRows: {
        '0fr': '0fr',
        '1fr': '1fr',
      },
    },
  },
  plugins: [],
}


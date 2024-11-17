/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      colors: {
        primary: {
         'dark-blue':' hsl(240, 38%, 20%)',
         'grayish-blue':" hsl(240, 18%, 77%)"
        },
      },
      fontSize: {
        'body': '32px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: theme => ({
        'banner-image': "url('/src/Assets/banner.png')", // Adjust the path as needed
        'contactform-image': "url('/src/Assets/contactformBGimg.png')",
        'banner-image333':"url('/src/Assets/banner333.png')"
      }),
      colors: {
        'header-color': '#2E2E2E',
        'text-color'  : '#818181',
        'primary-color' : '#CCCCCC',
        'secondary-color'  : '#44C444',
        'tertiary-color' : '#4D4D4D',
        'gray-background' : '#181818',
        
      },
      fontSize: {
        '10xl': '160px',
        '4.5xl': '37px'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


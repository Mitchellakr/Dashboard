/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'bodyColor': '#FAFAFA',
      'primaryColor': '#0038FF',
      'redColor': '#FF0000',
      'yellowColor': '#FFC502',
      'greenColor': '#06B62D',
      'grayColorLight': '#A3A3A36c',
      'grayColor': '#A3A3A3',
      'whiteColor': '#ffffff',
      'bodyDarkColor': '#161616',
      'darkCardColor': '#131313',
    },
    // colors: {
    //   'blue': '#1fb6ff',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    extend: {
      backgroundImage: {
        'cardPattern': "url('../src/assets/cardbg.png')",
      }
    },
  },
  plugins: [],
}
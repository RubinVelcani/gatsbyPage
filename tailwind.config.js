module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
       'overSwiper': 'rgba(255, 255, 255, 0.6)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

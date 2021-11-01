module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {colors: {
      primary: '#F8FFC5',
      primaryClaro: '#FCFFE2',
      secondary: '#AACB52',
    },},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

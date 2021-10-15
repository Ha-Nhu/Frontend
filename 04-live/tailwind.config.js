module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "gray": {
          900: '#18191F'
        },
        "brand-purple": {
          DEFAULT: '#8C30F5',
          "800": '#8C30F5'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    //require('@tailwindcss/aspect-ratio'),
  ],
}
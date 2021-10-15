module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'body': ["'Inter', sans-serif"]
    },
    extend: {
      fontSize: {
        "h1": ["72px", {lineHeight: "98px"}],
        "h2": ["48px", {lineHeight: "48px"}],
        "h3": ["40px", {lineHeight: "54px"}],
        "h4": ["28px", {lineHeight: "40px"}],
        "h5": ["24px", {lineHeight: "32px"}],
        "subtitle": ["18px", {lineHeight: "28px"}],
        "lead": ["18px", {lineHeight: "32x"}],
        "body-1": ["16px", {lineHeight: "26px"}],
        "body-2": ["14px", {lineHeight: "24px"}],
      },
      width: {
        1200: '1200px'
      },
      height: {
        1200: '1200px'
      },
      colors:{
        "brand-purple": {
          DEFAULT: "#8C30F5",
          800:"#D6B1FF",
          "black": "#0B0D17",
        },
     
        "text": {
          "gray-900": "#18191F",
          "gray-800": "#474A57",
          "gray-700": "#969BAB",
          "gray-300": "#D9DBE1",
          "gray-200": "#EEEFF4",
          "gray-100": "#F4F5F7",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "inter":["'Inter'", 'sans-serif']
      },
      colors:{
        "softOrange" : "hsl(35, 77%, 62%)",
        "softRed" : "hsl(5, 85%, 63%)",
        "Off-white": "hsl(36, 100%, 99%)",
        "Grayishblue": "hsl(233, 8%, 79%)",
        "Darkgrayishblue": "hsl(236, 13%, 42%)",
        "Verydarkblue": "hsl(240, 100%, 5%)"
      },
      backgroundImage:{
        "menu-open":      "url('/images/icon-menu.svg')",
        "menu-close":     "url('/images/icon-menu-close.svg')",
        "hero-desktop":   "url('/images/image-web-3-desktop.jpg')",
        "hero-mobile":    "url('/images/image-web-3-mobile.jpg')"
      }
    },
  },
  plugins: [],
}


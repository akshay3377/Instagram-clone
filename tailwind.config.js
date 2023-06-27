/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        change: {
          '0%': { backgroundImage : "url('/public/images/screenshot1.png')"},
          '30%': { backgroundImage : "url('/public/images/screenshot2.png')"},
          '60%': { backgroundImage : "url('/public/images/screenshot3.png')"},
          '100%': { backgroundImage : "url('/public/images/screenshot4.png')"}
        },
      },
    },
  },
  plugins: [],
}






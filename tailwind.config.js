/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#080808',
        'bg-sec': '#292C36',
        'text-main': '#eaeaea',
        'teal': '#369093',
        'teal-dark': '#2d7a7d',
        'text-grey': '#aaaaaa',
        'error': '#e05252',
      },
      fontFamily: {
        gothic: ['"League Gothic"', 'sans-serif'],
        'am-sans': ['"Am Sans"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      screens: {
        '3xl': '1920px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease',
        'fade-out': 'fadeOut 0.3s ease forwards',
      },
    },
  },
  plugins: [],
}

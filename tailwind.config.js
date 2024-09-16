/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        accent: {
          100: 'hsla(var(--clr-accent-100), 1)',
          200: 'hsla(var(--clr-accent-200), 1)',
          300: 'hsla(var(--clr-accent-300), 1)',
          DEFAULT: 'hsla(var(--clr-accent), 1)',
          700: 'hsla(var(--clr-accent-700), 1)',
          800: 'hsla(var(--clr-accent-800), 1)',
        }
      }
    },
  },
  plugins: [],
}


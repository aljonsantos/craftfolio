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
        },
        background: {
          DEFAULT: 'rgb(var(--clr-background))',
          700: 'rgb(var(--clr-background-700))'
        },
        "border": 'rgb(var(--clr-border))',
        content: {
          DEFAULT: 'rgb(var(--clr-content))',
          700: 'rgb(var(--clr-content-700))',
          500: 'rgb(var(--clr-content-500))',
        },
      },
      transitionProperty: {
        'max-height': 'height',
      },
    },
  },
  plugins: [],
}


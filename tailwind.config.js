/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.html', './static/**/*.{html,js}', './content/**/*.md'],
  theme: {
    extend: {},
    backgroundImage: {
      'bottle-light_h': 'url("/bottle-light_h.webp")',
    },
    fontFamily: {
      'tiempo-headline-light': ['Tiempo Headline Light', 'serif'],
      'academy-engraved': ['Academy Engraved LET', 'serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}


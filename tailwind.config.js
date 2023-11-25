/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.html', './static/**/*.{html,js}', './content/**/*.md'],
  theme: {
    extend: {},
    backgroundImage: {
      'bottle-light': 'url("/bottle-light.jpg")',
    },
    fontFamily: {
      'playfair-display': ['Playfair Display', 'serif'],
      'academy-engraved': ['Academy Engraved LET', 'serif'],
      'fira-sans': ['Fira Sans', 'sans-serif']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


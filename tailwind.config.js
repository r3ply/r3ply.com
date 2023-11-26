/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**/*.html', './static/**/*.{html,js}', './content/**/*.md'],
  theme: {
    extend: {},
    backgroundImage: {
      'bottle-light_h': 'url("/bottle-light_h.webp")',
    },
    fontFamily: {
      'playfair-display': ['Playfair Display', 'serif'],
      'academy-engraved': ['Academy Engraved LET', 'serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


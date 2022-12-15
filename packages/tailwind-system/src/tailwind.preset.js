const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('./colors')
const typography = require('./typography')

module.exports = {
  theme: {
    colors,
    fontSize: typography.fontSize,
    fontFamily: {
      sans: ['Visby CF', ...defaultTheme.fontFamily.sans],
      heading: ['Chiffone', ...defaultTheme.fontFamily.serif],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}

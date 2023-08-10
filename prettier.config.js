// prettier.config.js
module.exports = {
  arrowParens: 'avoid',
  singleQuote: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  semi: false,
  tabWidth: 2,
  trailingComma: 'none',
	plugins: [require('prettier-plugin-tailwindcss')],
}

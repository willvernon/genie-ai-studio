// prettier.config.js
module.exports = {
	trailingComma: "es5",
	tabWidth: 3,
	semi: false,
	singleQuote: true,
	bracketSpacing: true,
	endOfLine: "lf",
	printWidth: 80,
	useTabs: true,
	plugins: [require("prettier-plugin-tailwindcss")],
};

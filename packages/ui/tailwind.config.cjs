const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["src/**/*.{ts,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				brand: colors.green,
			},
		},
	},
	plugins: [],
};

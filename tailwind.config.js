/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				slogan: "url('./public/assets/images/slogan_bg.jfif')",
			},
		},
		colors: {
			primary: '#ED0C58',
			secondary: '#788335',
			white: '#FFFFFF',
			black: '#0E1617',
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				playfair: "'Playfair Display'",
				poppins: "'Poppins'",
			},
			backgroundSize: {
				'100%': '100%',
				'160%': '160%',
				'200%': '200%'
			},
		},
	},
	plugins: [],
}

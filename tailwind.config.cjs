/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			oxygen: ['Oxygen', 'sans-serif']
		},
		extend: {
			colors: {
				accent: {
					blue: 'var(--compass-blue)'
				}
			}
		}
	},
	plugins: [],
}

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
					blue: 'var(--compass-blue)',
					lightblue: 'var(--compass-light-blue)',
					shadow: {
						blue: 'var(--shadow-blue)'
					}
				}
			},
			borderColor: {
				light: 'var(--border-light)'
			},
			borderWidth: {
				light: '1px'
			}
		}
	},
	plugins: [],
}

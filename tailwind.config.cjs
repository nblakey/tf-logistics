/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			ubuntu: ['Ubuntu', 'sans-serif'],
		},
		extend: {
			backgroundColor: {
				primary: 'var(--theme-primary)',
				secondary: 'var(--theme-secondary)',
				tertiary: 'var(--theme-tertiary)',
				quaternary: 'var(--theme-quaternary)',
			},
			colors: {
				accent: {
					shadow: {
						green: 'var(--shadow-green)'
					}
				}
			},
			borderColor: {
				light: 'var(--border-light)',
				standard: 'var(--text-standard)',
				primary: 'var(--text-primary)',
			},
			borderWidth: {
				light: '1px'
			},
			textColor: {
				standard: 'var(--text-standard)',
				primary: 'var(--text-primary)',
				theme: {
					primary: 'var(--theme-primary)',
					secondary: 'var(--theme-secondary)',
					tertiary: 'var(--theme-tertiary)',
					quaternary: 'var(--theme-quaternary)',
				}
			},
		}
	},
	plugins: [],
}

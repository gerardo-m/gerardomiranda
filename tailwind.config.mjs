import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'matrix': {
					'dark': '#003B00',
					'medium': '#008F11',
					'light': '#00FF41',
				}
			},
			fontFamily: {
				'mono': ['Kode Mono Variable', ...defaultTheme.fontFamily.mono]
			}
		},
	},
	plugins: [],
}

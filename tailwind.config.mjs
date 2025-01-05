import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		typography: {
			DEFAULT: {
				css: {
				},
			},
		},
		extend: {
			colors: {
				'matrix': {
					'dark': '#003B00',
					'medium': '#008F11',
					'mediumlight': '#00B525',
					'light': '#00FF41',
				},
				'txt':{
					'dark': '#f6f6f7',
					'light': '#13151a',
				},
				'surface': {
					'50': '#f6f6f7',
					'100': '#eeeef1',
					'200': '#dad9df',
					'300': '#cfcdd4',
					'400': '#bab7c2',
					'500': '#a8a4b0',
					'600': '#948e9d',
					'700': '#7f7b87',
					'800': '#69646f',
					'900': '#57545b',
					'950': '#323135',
					'light': '#eeeef1',
					'dark': '#13151a',
				},
			},
			fontFamily: {
				'mono': ['Kode Mono Variable', ...defaultTheme.fontFamily.mono],
				'sans': ['Bai Jamjuree','Sora Variable', defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}

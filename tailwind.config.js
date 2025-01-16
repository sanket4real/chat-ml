/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"light-blue-bg": "#F4F9FE",
				"light-grey": "rgb(70 120 134 / 31%)",
				"light-green": "#BDF5B8",
				"light-pink": "#E8B0CC",
			},
		},
	},
	plugins: [],
};

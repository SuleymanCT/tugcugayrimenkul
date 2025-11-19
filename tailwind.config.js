/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff5ed',
          100: '#ffe8d5',
          200: '#ffd1aa',
          300: '#ffb074',
          400: '#ff9e57',
          500: '#ff7e1f',
          600: '#f05c0a',
          700: '#c7420b',
          800: '#9e3511',
          900: '#7f2e11',
        },
        primary: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
      fontFamily: {
        sans: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
        display: ['var(--font-horizon)', 'system-ui', 'sans-serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
        horizon: ['var(--font-horizon)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

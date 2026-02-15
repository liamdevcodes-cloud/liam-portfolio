/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 16px 50px -28px rgba(8, 47, 73, 0.45)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.14) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}

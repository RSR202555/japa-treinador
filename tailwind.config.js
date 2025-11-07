/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#FFFFFF',
        bgMain: '#F8FAFC',
        bgSecondary: '#E2E8F0',
        textMain: '#0F172A',
        textSecondary: '#475569',
        accent: '#2563EB',
        cta: '#1E40AF',
        hoverBtn: '#3B82F6',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

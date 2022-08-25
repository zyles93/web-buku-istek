/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      screens:{
        '2xl': '1320px',
      },
      colors:{
        'warna-green': '#3CCF4E',
        'warna-hover': '#10b981',
        'warna-black': '#0f172a',
        'warna-white': '#f9f9f9',
        'warna-slate': '#475569',
      }
    },
  },
  plugins: [],
}
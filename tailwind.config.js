/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1EBBD7',
        'secondary': '#38B64A',
        'navy': '#152C4F',
        'light-teal': '#E0F7FA',
        // Keeping previous ones just in case, but mapped new ones as requested
        'primary-teal': '#1EBBD7',
        'accent-green': '#38B64A',
        'brand-navy': '#152C4F',
        'bg-light': '#F8F9FA',
        'text-body': '#333333',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

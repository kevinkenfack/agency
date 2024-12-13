/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4a249d',
          light: '#8b5cf6',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4a249d 0%, #8b5cf6 100%)',
      },
    },
  },
  plugins: [],
}
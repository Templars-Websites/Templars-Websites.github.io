/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkBlue: '#1B1F3B',
        medBlue: '#30358D',
        ligBlue: '#454ADE',
        darkPurple: '#7B4AE6',
        ligPurple: '#B14AED',
        ligPink: '#C874D9'
      },
      fontFamily: {
        Dancing: ["Dancing", "cursive"]
      }
    },
  },
  plugins: [],
}

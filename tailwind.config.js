/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      height: {
        '72': '18rem',
        '144': '36rem', 
        '160': '40rem',
      },
      colors: {
        'pink': {
          50: '#F7CAC9',
          100: '#DAACAB',
          200: '#A77782', 
          300: '#5C4452', 
          400: '#30202D',
        },
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-pink-50',
    'bg-pink-100',
    'bg-pink-200',
    'bg-pink-300',
    'bg-pink-400',
    'text-pink-50',
    'text-pink-100',
    'text-pink-200',
    'text-pink-300',
    'text-pink-400',
    'border-pink-50',
    'border-pink-100',
    'border-pink-200',
    'border-pink-300',
    'border-pink-400',
    'hover:bg-pink-50',
    'hover:text-pink-400',
    'hover:border-pink-300'
  ]
}
module.exports = {
  purge: {
    enabled: false, // this prevents tailwind from removing custom css components that are processed by the user
    content: [
      './src/**/*.html',
      "./src/pages/**/*.js", 
      "./src/components/theme.js",
    ],
    options: {
      safelist: ["dark","pink"],
    },
  },
  //darkMode: false, // or 'media' or 'class'
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1025px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '224': '56rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
        '343': '85rem',
        '360': '90.5rem',
        '384': '96rem',
        '512': '128rem',
      },
      colors: {
        gray2: {
          50: '#2c3e50',
        },
        'pink': {
          50: '#F7CAC9',
          100: '#DAACAB',
          200: '#A77782', 
          300: '#5C4452', 
          400: '#30202D',
        },
        'custom-gray': {
          50: '#fdf1ec',
          100: '#d2d2d2', 
          200: '#8d8d8d', 
          300: '#2c3e50', 
          400: '#474747', 
        },
        'custom-green': {
          50: '#090808',  // #B1D8B7 #B1D8B7 
          100: '#0F785B', // #94C973 #ADC290 #8C6C30
          200: '#447D70', // #76B947 #789B60
          300: '#447D70', // #2F5233 #2F5233
          400: '#01D9A6', // #2F5233 #203010
        },
        'custom-blue': {
          50: '#95DFDF', 
          100: '#50D9D9',  
          200: '#4ACACA',  
          300: '#3DA6A6',  
          400: '#3C5959',
        },
        'custom-red': {
          50: '#BFD4DB',
          100: '#A4C3D2',
          200: '#96B9D0',
          300: '#88AED0',
          400: '#78A2CC'
        },
        'bluehalo-blue': {
          50: '#B3DFFF',
          100: '#9ED7FF',
          200: '#75C6FF',
          300: '#4DB5FF',
          400: '#24A4FF',
          500: '#0092FA', //default
          600: '#0071C2',
          700: '#00508A',
          800: '#003052',
          900: '#000F1A'
        },
        'offwhite': {
          100: '#FCFCFC'
        }
      },
      fontFamily: {
        sans: ['Avenir','Helvetica','Arial','sans-serif'],
        serif: ['Georgia', 'Times', 'Times New Roman', 'serif'],
        test: ['"minion-pro"', 'serif']
      },
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      borderColor: ['active'],
    }
  },
  enabled: process.env.NODE_ENV === "development",
  plugins: [],
}
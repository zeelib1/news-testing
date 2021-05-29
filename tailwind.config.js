// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      index:{
        DEFAULT:'#e34138'
    },
    facebook:{
      DEFAULT:'#4776b6'
    },
    paragraph:{
      DEFAULT:'#1d1d1d'
    },
    lightgray: {
      DEFAULT:'#efefef',
      darker:'#c5c5c5'
    },
    
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1':'1px',
      '2': '2px',
     '3': '3px',
      '4': '4px',
     '6': '6px',
     '8': '8px',
    }
    
  },
    extend: {},
  },
  variants: {},
  plugins: [],
}
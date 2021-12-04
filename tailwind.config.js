module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
       },
    },
  },
  variants: {
    extend: {
      saturate: ['hover'],
      sepia: ['hover'],
      invert: ['hover'],      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

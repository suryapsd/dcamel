/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary-500': '#810000',
        'secondary-500': '#FF7F00',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


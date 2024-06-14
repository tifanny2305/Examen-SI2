/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
        graygreen: {
          100: '#D0D9CD', // (208, 217, 205)
          200: '#cde7ca', // (205, 231, 202)
          300: '#A9BA9D', // (169, 186, 157)
          400: '#b2d4b6', // (178, 212, 182)
          500: '#B2BEB5', // (178, 190, 181)
          600: '#90b493', // (144, 180, 147)
          700: '#78866B', // (120, 134, 107)
          800: '#728370', // (114, 131, 112)
          900: '#828E84', // (130, 142, 132)
          1000: '#687169', // (104, 113, 105)
          1100: '#4b514a'  // (75, 81, 74)
        }
      }
    },
    fontFamily: {
      'body': [
    'Inter',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'system-ui',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'system-ui',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ]

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


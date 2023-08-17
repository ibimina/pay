/** @type {import('tailwindcss').Config} */
export const content = [];
export const purge = [
  './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
];
export const theme = {
  extend: {
    backgroundImage: {
      'light-logo': "url('/img/logo-light.png')",
      'dark-logo': "url('/img/logo-dark.png')",
      'open-menu': "url('/img/icons8-menu.svg')",
      'close-menu': "url('/img/icon-close.svg')",
      'color-gradient':"url('/img/gradients.png')",
    },
    backgroundColor: {
      'nav-bg': 'rgba(17,69,59,.5)',
      'dark-green': '#11453b'
    },
    boxShadow: {
      'register-sh': '0 8px 16px rgba(17,69,59,.2)'
    },
    textColor: {
      'semi-darkgrey': '#515251',
      'dark-green': '#11453b'
    },
    borderColor: {
      'dark-green': '#11453b'
    },
  }
}
export const plugins = [];


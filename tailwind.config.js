/** @type {import('tailwindcss').Config} */
export const content = []
export const purge = ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
export const theme = {
  extend: {
    backgroundImage: {
      'light-logo': "url('/img/logo-light.png')",
      'dark-logo': "url('/img/logo-dark.png')",
      'open-menu': "url('/img/icons8-menu.svg')",
      'close-menu': "url('/img/icon-close.svg')",
      'color-gradient': "url('/img/gradients.png')",
      'desktop-bg': "url('/img/hero-media-desktop.png')",
      'wave-mobile': "url('/img/wave-green-mobile.png')",
      'wave-desktop': "url('/img/wave-green-desktop.png')",
      'circle-pattern': "url('/img/circle.png')",
      'contact-pattern':"url('/img/contactpattern.png')"
    },
    backgroundColor: {
      'nav-bg': 'rgba(17,69,59,.5)',
      'dark-green': '#11453b',
      'light-grey': '#hsla(0, 0%, 85%, 1)',
      'card-green':
        'radial-gradient(50% 50.00% at 50% 50.00%, rgba(217, 235, 205, 0.14) 0%, rgba(217, 235, 205, 0.03) 100%)',
      'pink-peach': '#ffe9e7'
    },
    boxShadow: {
      'register-sh': '0 8px 16px rgba(17,69,59,.2)',
      'app-sh': '0 20px 48px 0 hsla(0,0%,66.7%,.29)',
      'card-sh':
        '-11px 0px 19px 0px rgba(23, 23, 23, 0.30), 0px 13px 20px 0px rgba(23, 23, 23, 0.20)'
    },
    textColor: {
      'semi-darkgrey': '#515251',
      'dark-green': '#11453b',
      'accent-green': 'hsla(168, 60%, 17%, 1)',
      'accent-brown': 'hsla(46, 31%, 58%, 1)',
      'accent-red': 'hsla(1, 79%, 61%, 1)',
      'accent-black': 'hsla(120, 1%, 16%, 1)',
      'accent-white': 'hsla(0, 0%, 100%, 1)',
      'accent-grey': 'hsla(120, 1%, 32%, 1)'
    },
    borderColor: {
      'dark-green': '#11453b'
    }
  }
}
export const plugins = []

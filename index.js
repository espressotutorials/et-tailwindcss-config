"use strict";

module.exports = {
  purge: {
    mode: "all",
    preserveHtmlElements: false,
    content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.ts"]
  },
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xll: '1385px',
      xxl: '1920px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#22292f',
      white: '#fff',

      gray: {
        100: '#f8fafc',
        200: '#fcfcfc',
        300: '#f9f9f9',
        400: '#f3f3f3',
        500: '#efefef',
        600: '#cccccc',
        650: '#8E8E8E',
        700: '#505763',
        800: '#29303b',
        900: '#282e36'
      },
      red: {
        400: '#ef645f',
        500: '#e3342f'
      },
      green: {
        500: '#38c172'
      },
      yellow: {
        400: '#ffce00',
        500: '#ffed4a'
      },
      orange: {
        500: '#f39100'
      },
      blue: {
        200: '#ecf6fd',
        400: '#c2d7ff',
        500: '#33a8e0',
        600: '#195979'
      },
      facebook: {
        500: '#3b5998'
      },
      twitter: {
        500: '#1da1f2'
      },
      whatsApp: {
        500: '#25d366'
      },
      linkedIn: {
        500: '#0077b5'
      }
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem'
    },
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      center: '0px 0px 55px 0px rgba(0,0,0,0.27)',
      centerMd: '0px 0px 25px 0px rgba(0,0,0,0.24)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none'
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
    }
  },
  plugins: [
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/forms"),
  ]
};
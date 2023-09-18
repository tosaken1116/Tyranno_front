/** @type {import('tailwindcss').Config} */
import { BREAKPOINTS } from './src/constants/breakpoint';
import { COLORS } from './src/constants/colors';
import { ROUNDED } from './src/constants/rounded';
import { TEXT_SIZE } from './src/constants/textSize';
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderRadius: {
      small: ROUNDED.SMALL,
      medium: ROUNDED.MEDIUM,
      large: ROUNDED.LARGE,
      full: ROUNDED.FULL,
    },
    extend: {
      screen: {
        'xs': BREAKPOINTS.XS,
        'sm': BREAKPOINTS.SM,
        'md': BREAKPOINTS.MD,
        'lg': BREAKPOINTS.LG,
        'xl': BREAKPOINTS.XL,
        '2xl': BREAKPOINTS.XXL,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textSize: {
        'xs': [TEXT_SIZE.XS],
        'sm': [TEXT_SIZE.SM],
        'base': [TEXT_SIZE.BASE],
        'lg': [TEXT_SIZE.LG],
        'xl': [TEXT_SIZE.XL],
        '2xl': [TEXT_SIZE.XXL],
        'huge': [TEXT_SIZE.HUGE],
      },

      colors: {
        'deep-red': {
          main: COLORS.DEEP_RED.MAIN,
          light: COLORS.DEEP_RED.LIGHT,
          dark: COLORS.DEEP_RED.DARK,
        },
        'gold': {
          main: COLORS.GOLD.MAIN,
          light: COLORS.GOLD.LIGHT,
          dark: COLORS.GOLD.DARK,
        },
        'custom-dark': {
          main: COLORS.BLACK.MAIN,
          light: COLORS.BLACK.LIGHT,
          dark: COLORS.BLACK.DARK,
        },
        'success': {
          main: COLORS.SUCCESS.MAIN,
          light: COLORS.SUCCESS.LIGHT,
          dark: COLORS.SUCCESS.DARK,
        },
        'error': {
          main: COLORS.ERROR.MAIN,
          light: COLORS.ERROR.LIGHT,
          dark: COLORS.ERROR.DARK,
        },
        'info': {
          main: COLORS.INFO.MAIN,
          light: COLORS.INFO.LIGHT,
          dark: COLORS.INFO.DARK,
        },
        'text': {
          'black': COLORS.TEXT.BLACK,
          'soft-black': COLORS.TEXT.SOFT_BLACK,
          'deep-black': COLORS.TEXT.DEEP_BLACK,
          'dark-grey': COLORS.TEXT.DARK_GREY,
          'grey': COLORS.TEXT.GREY,
          'medium-grey': COLORS.TEXT.MEDIUM_GREY,
          'light-grey': COLORS.TEXT.LIGHT_GREY,
        },
      },
    },
  },
  plugins: [],
};

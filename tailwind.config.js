/** @type {import('tailwindcss').Config} */
import { COLORS } from './src/constants/colors';
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'deep-red': {
          main: COLORS.DEEP_RED.MAIN,
          light: COLORS.DEEP_RED.LIGHT,
          dark: COLORS.DEEP_RED.DARK,
        },
      },
    },
  },
  plugins: [],
};

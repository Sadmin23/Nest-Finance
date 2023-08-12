/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1240px',
        '2xl': '1440px',
      },
      colors: {
        brand: '#2FA84F',
        dark: '#000000',
        'gray-1': '#3E4345',
        white: '#FFFFFF',
      },

      boxShadow: {
        primary:
          '0px -1px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.12)',
        secondary: '0px 2px 4px 4px rgba(236, 33, 38, 0.05)',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-sherif'],
        sherif: ['Montserrat', 'serif'],
        mono: ['Menlo', 'monospace'],
      },
      fontSize: {
        exs: '10px',
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '60px',
        '5xl': '76px',
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      lineHeight: {
        none: 1,
        shorter: 1.25,
        short: 1.375,
        normal: 1.5,
        tall: 1.625,
        taller: 2,
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        'tight-md': '-0.015em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
    },
  },
};

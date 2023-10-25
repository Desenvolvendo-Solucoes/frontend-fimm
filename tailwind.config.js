/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
      backgroundColor: { 'rgba-modal': 'rgba(0, 0, 0, 0.724)' },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      colors: {
        btn: {
          primary: '#1E1685',
          hover_primary: '#18116A',
          secondary: '#1E3A8A',
        },
        primary: '#1E1685',
        datagrid: {
          row: '#DDDCED',
        },
      },
    },
  },
  plugins: [],
}

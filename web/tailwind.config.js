module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ['Oswald', 'sans-serif'],
        Chalet: ['Chalet'],
        NotoSans: ['Noto Sans JP', 'sans-serif'],
      },
      colors: {
        success: '#4D9651',
        error: '#BC2325',
        warning: '#F5BF5C',
        'green-active': '#00C684',
        'green-inactive': '#68C2A4',
        'red-active': '#FF584B',
        'red-inactive': '#FF776D',
        'grey-dark': '#454442',
        'grey-light': '#A9A7A7',
        'grey-darker': '#272625',
        'white-dark': '#E6E6E6',
      },
    },
  },
  plugins: [],
};

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Interstate', 'sans-serif'],
        display: ['Metropolis', 'serif'],
      },
      colors: {
        green: '#66B46D',
        blue: {
          '300': '#AAC8E5',
          '400': '#92AEC5',
          '500': '#3DADF2',
          '600': '#3074B7',
          '700': '#2B67AD',
          '800': '#2459AC',
          '900': '#1D3C60',
        },
        placeholder: '#FF69B4',
        transparent: 'transparent',
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      },
      height: {
        '88': '22rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

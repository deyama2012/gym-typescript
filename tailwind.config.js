/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-20': '#f8f4eb',
        'gray-50': '#efe6e6',
        'gray-100': '#dfcccc',
        'gray-500': '#530000',
        'primary-100': '#ffe1e0',
        'primary-300': '#ffa6a3',
        'primary-500': '#ff6b66',
        'secondary-400': '#ffcd58',
        'secondary-500': '#ffc132',
      },
      backgroundImage: (theme) => ({
        'gradient-yellowred':
          'linear-gradient(90deg, #ff616a 0%, #ffc837 100%)',
        'mobile-home': "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      content: {
        abstractwaves: "url('./assets/AbstractWaves.png')",
        evolvetext: "url('./assets/EvolveText.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
};

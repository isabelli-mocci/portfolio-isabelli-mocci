// tailwind.config.js
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-light': '#cdcdcd', // tom claro de cima do gradiente
        'bg-light-2': '#7d7d7d', // tom claro de baixo do gradiente
        'bg-medium': '#272727',
        'bg-dark': '#1f1d1d', // tom escuro

        // Text colors
        'text-white': '#FFFFFF',
        'text-gray': '#737373',
        'text-black': '#000000',
        'text-green': '#adff2f',
        'text-gradient-start': '#adff2f',
        'text-gradient-middle': '#7be300',
        'text-gradient-end': '#d9ff50',

        // Link colors
        'link-color': '#adff2f',
        'disabled-light': '#777777',
        'disabled-dark': '#444444',

        // Colors
        'primary-color': '#adff2f',
        'secondary-color': '#7fa38a', // verde suave
        'skill-gradient-start': '#232323',
        'skill-gradient-end': '#353535',
      },

      fontFamily: {
        sans: ['PP Neue Montreal', 'sans-serif'],
        script: ['Tangerine', 'cursive'],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        gradient: 'gradientMove 15s ease infinite',
        wiggle: 'wiggle 0.4s ease-in-out infinite',
        spin: 'spin 2s linear infinite',
        spinSlow: 'spinSlow 6s linear infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};

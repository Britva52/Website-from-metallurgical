/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B3D91',
          light: '#1E50A0',
          dark: '#072A66'
        },
        secondary: {
          DEFAULT: '#C0C0C0',
          light: '#D8D8D8',
          dark: '#A8A8A8'
        },
        accent: {
          DEFAULT: '#00B2CA',
          light: '#20D0E7',
          dark: '#0090A3'
        },
        neutral: {
          dark: '#1A1A1A',
          DEFAULT: '#2D2D2D',
          light: '#F5F5F5'
        },
        highlight: {
          DEFAULT: '#FF5722',
          light: '#FF7A4D',
          dark: '#E64A19'
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace']
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'hover': '0 15px 30px rgba(0, 0, 0, 0.15)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'metal-texture': 'url("/src/assets/images/metal-texture.png")'
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};
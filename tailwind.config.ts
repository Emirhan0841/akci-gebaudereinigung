import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f9',
          100: '#e0f2f4',
          200: '#b3dfe5',
          300: '#80cbd6',
          400: '#4db8c7',
          500: '#1aa5b8',
          600: '#1589a0',
          700: '#0f6d88',
          800: '#0a5170',
          900: '#053558',
        },
        accent: {
          50: '#f0fdf4',
          100: '#e0fde8',
          200: '#c1fbd1',
          300: '#9df7ba',
          400: '#5ef3a3',
          500: '#2be88c',
          600: '#1dd478',
          700: '#16b864',
          800: '#129c50',
          900: '#0d803c',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in',
        slideUp: 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config

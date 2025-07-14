/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'wnba': ['WNBA', 'Arial', 'sans-serif'],
        'wnba-condensed': ['WNBA-Condensed', 'Arial', 'sans-serif'],
        'wnba-extended': ['WNBA-Extended', 'Arial', 'sans-serif'],
      },
      colors: {
        'wnba-orange': '#FF6900',
        'wnba-blue': '#1D428A',
        'wnba-red': '#C8102E',
        'wnba-purple': '#552583',
        'wnba-teal': '#00788C',
        'wnba-green': '#007A33',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
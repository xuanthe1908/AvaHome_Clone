/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Avahome color scheme
        'primary': {
          DEFAULT: '#009245', // Primary green
          'dark': '#006633',  // Darker green
          'light': '#39b54a'  // Lighter green
        },
        'secondary': '#ff6600', // Orange highlight
        'text': {
          'dark': '#333333',
          'light': '#666666'
        },
        'background': {
          'light': '#f5f5f5', // Light gray background
          'white': '#ffffff'  // White background
        },
        'divider': '#e0e0e0',  // Divider lines
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      spacing: {
        'section': '80px',
        'container': '1200px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      boxShadow: {
        'header': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'card': '0 5px 15px rgba(0, 0, 0, 0.08)',
        'button': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))",
      },
    },
  },
  plugins: [],
}
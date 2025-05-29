/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f3f2ee',
          100: '#e7e4dc',
          200: '#d2ceba',
          300: '#bbb194',
          400: '#a69976',
          500: '#8c7f5b', // Main primary color
          600: '#746954',
          700: '#5d5444',
          800: '#49422f',
          900: '#373124',
        },
        secondary: {
          50: '#f1f8f6',
          100: '#dcf0ea',
          200: '#bae0d7',
          300: '#8fc8bc',
          400: '#5ca99b',
          500: '#3b8d7f', // Main secondary color
          600: '#2b7167',
          700: '#245c54',
          800: '#1f4943',
          900: '#1b3c38',
        },
        accent: {
          50: '#fef7ee',
          100: '#fdecd6',
          200: '#f9d5ac',
          300: '#f5b877',
          400: '#f19743',
          500: '#eb7a1f', // Main accent color
          600: '#d2591b',
          700: '#af3f19',
          800: '#8d321b',
          900: '#732b19',
        },
        neutral: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/6438989/pexels-photo-6438989.jpeg')",
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
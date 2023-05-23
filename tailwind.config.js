/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#55b3f3',
          light: '#85c8f6',
          dark: '#259ef0',
        },
        accent: {
          DEFAULT: '#6356e5',
          light: '#8c82ec',
          dark: '#3a2ade',
        },
        light: '#f3f6f6',
        dark: '#2a2a2a',
      },
    },
  },
  plugins: [],
};

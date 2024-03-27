/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["SF Pro Display", "sans-serif"],
      body: ["SF Pro Display", "sans-serif"],
    },
    screens: {
      'sm': '280px',
      'md': '325px',
      'lg': '768px',
      'xl': '1080px'
    },
    extend: {
      colors: {
        "primary-100": "#0058E6",
        "neutral-100": "#1E293B",
        "neutral-50": "#94A3BB"
      },
      backgroundColor: {
        "primary-100": "#0058E6",
        "neutral-100": "#1E293B",
        "neutral-50": "#94A3BB"
      }
    },
  },
  plugins: [],
}


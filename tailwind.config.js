/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "var(--primary-blue)",
        "secondary-blue": "var(--secondary-blue)",
        "primary-green": "var(--primary-green)",
        "primary-red": "var(--primary-red)",
        "primary-gray": "var(--primary-gray)",
        "secondary-gray": "var(--secondary-gray)",
        "hover-gray": "var(--hover-gray)",
      },
    },
    fontFamily: {
      circular: ["Circular Std", "sans-serif"],
    },
  },
  plugins: [],
};

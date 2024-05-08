/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", '[data-mode="dark"]'],
  content: ["./themes/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};

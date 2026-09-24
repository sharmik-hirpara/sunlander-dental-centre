/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cosmetic-dental': "url('/src/assets/shutterstock_471137213.jpg')"
      }
    },
  },
  plugins: [],
}


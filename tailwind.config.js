/** @type {import('tailwindcss').Config} */
import { emerald } from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: emerald,
      },
    },
  },
  plugins: [],
}
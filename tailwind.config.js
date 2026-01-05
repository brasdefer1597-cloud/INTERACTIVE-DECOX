/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // In case components are in root/components
    "./*.{js,ts,jsx,tsx}" // In case App.tsx is in root
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
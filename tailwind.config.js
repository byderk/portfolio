/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  lightMode: "class",
  gradientFade: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-dark': "#1C1C1C",
        'bg-dark': "#0C0C0C",
        'text-light': "#F2F2F2",
        'bg-light': "#E6E6E6",
      },
    }
  },
  plugins: [],
}


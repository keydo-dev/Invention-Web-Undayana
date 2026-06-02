/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "muzium-beige": "#EDE9CE",
        "muzium-dark": "#2C2905",
        "muzium-bg-light": "#F6F6EC",
        "muzium-bg-gray": "#EEEDE0",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Lora", "serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/asset/homepage-background.png')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope"],
      },
      colors: {
        primary: "#D3E97A",
        secondary: "#222222",
        dark: "#0A0A0A",
      },
    },
  },
  plugins: [],
};

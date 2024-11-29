/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-400": "#4ADE80",
      },
      container: {
        center: true,
        padding: "1.5rem",
      },
    },
  },
  plugins: [],
};

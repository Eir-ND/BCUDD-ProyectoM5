/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-image": "url(/bg.jpg)",
      },
      colors: {
        "custom-gray": "#e0e0e0",
      },
    },
  },
  plugins: [],
};

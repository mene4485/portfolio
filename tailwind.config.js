/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["MyCustomFont", "sans-serif"], // Use your font name and fallbacks
      },
    },
  },
  plugins: [],
  options: {
    safelist: [
      "bg-orange-200", // Ensure this class is not purged
    ],
  },
};

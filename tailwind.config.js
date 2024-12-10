/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ED8117",
        secondary: "#D3B0E1",
        accent: "#737373",
        "accent-light": "#FAF3E0",
        neutral: "#1ABC9C",
        tertiary: "#F4D03F",
      },
    },
  },
  plugins: [],
};

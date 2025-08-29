/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5b8bfa",
        secondary: "#a084ee",
        accent: "#f3e8ff",
        glass: "rgba(255,255,255,0.08)",
        ink: "#0f172a"
      },
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui"],
        inter: ["Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        neo: "10px 10px 30px rgba(0,0,0,0.15), -10px -10px 30px rgba(255,255,255,0.1)",
        glow: "0 0 0 2px rgba(91,139,250,0.2), 0 10px 30px rgba(91,139,250,0.35)"
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

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
        ink: "#0f172a",
        success: "#10b981",
        warning: "#f59e0b",
        danger: "#ef4444",
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
      },
      keyframes: {
        'float': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-4px)' } },
        'pulse-soft': { '0%,100%': { opacity: 0.6 }, '50%': { opacity: 1 } },
        'shine': { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
        shine: 'shine 1.8s linear infinite',
      },
      backgroundImage: {
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: '"Poppins"',
    },
    extend: {
      colors: {
        primary: "#1f2937", // emerald-800
        light: "#4b5563", // emerald-600
        "extra-light": "#e5e7eb", // emerald-200
        dark: "#030712", // emerald-950
        default: "#334155", // slate-700
        "default-dark": "#1e293b",
        background: "#eee",
      },
      screens: {
        xs: "440px",
      },
    },
  },
  plugins: [],
};

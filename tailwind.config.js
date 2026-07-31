const tokens = require("./styles/tokens.cjs");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: {
        "brand-dark": "#111827",
        "brand-charcoal": "#1A1A1A",
        "brand-copper": "#0EA5A6",
        "brand-copper-light": "#0EA5A6",
        "brand-gold": "#0EA5A6",
        "brand-gold-dark": "#0EA5A6",
      base: tokens.paper, text: tokens.ink, heading: tokens.heading,
      primary: tokens.primaryBg, primaryfg: tokens.primaryFg,
      secondary: tokens.secondaryBg, secondaryfg: tokens.secondaryFg,
      outline: tokens.outline, panel: tokens.panel
    },
    borderRadius: { xl: "1rem", "2xl": "1.25rem" }
  }},
  plugins: []
};
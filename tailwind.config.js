/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,js,tsx,jsx}", "./stories/**/*.{ts,js,tsx,jsx}"],
    presets: [require("./src/tailwind.preset.js")]
};

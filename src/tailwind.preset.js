const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--color-primary) / <alpha-value>)",
                secondary: "rgb(var(--color-secondary) / <alpha-value>)",
                tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
                danger: "rgb(var(--color-danger) / <alpha-value>)",
                success: "rgb(var(--color-success) / <alpha-value>)"
            },
            screens: {
                mobile: { max: `calc(${defaultTheme.screens.md} - 1px)` }
            }
        }
    },
    plugins: [require("@tailwindcss/typography")]
};

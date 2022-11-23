# @codevachon/react-common

A Library of Common Read Components

-   [TypeDoc](https://codevachon.github.io/react-common/)
-   [GitHub](https://github.com/CodeVachon/react-common)
-   [npm](https://www.npmjs.com/package/@codevachon/react-common)

## Install

### pnpm

```sh
pnpm add @codevachon/react-common @codevachon/classnames @codevachon/utilities
```

### yarn

```sh
yarn add @codevachon/react-common @codevachon/classnames @codevachon/utilities
```

### npm

```sh
npm install @codevachon/react-common @codevachon/classnames @codevachon/utilities
```

## Usage

Pull in the Style Sheet and add the required values to the `tailwind.config.js` file.

```tsx
// src/pages/_app.tsx
import "@codevachon/react-common/style.css"; // Import Preset Styling
import "./../styles/global.css";

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
```

### Use Tailwind Preset

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,js,tsx,jsx}"],
    preset: ["@codevachon/react-common/tailwind.preset"],
    theme: {},
    plugins: []
};
```

### Manual Tailwind Configuration

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,js,tsx,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--color-primary) / <alpha-value>)",
                secondary: "rgb(var(--color-secondary) / <alpha-value>)",
                tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
                danger: "rgb(var(--color-danger) / <alpha-value>)",
                success: "rgb(var(--color-success) / <alpha-value>)"
            }
        }
    },
    plugins: []
};
```

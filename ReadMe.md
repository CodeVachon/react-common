# @codevachon/react-common

A Library of Common Read Components

-   [Ladle Storybook](https://codevachon.github.io/react-common/)
-   [GitHub](https://github.com/CodeVachon/react-common)
-   [npm](https://www.npmjs.com/package/@codevachon/react-common)

## Dependencies

-   [Tailwindcss](https://tailwindcss.com/)
-   [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
-   [HeadlessUI](https://headlessui.com/)
-   [HeroIcons](https://heroicons.com/)
-   [@codevachon/utilities](https://codevachon.github.io/utilities/)
-   [@codevachon/classnames](https://codevachon.github.io/classnames/)

## Install

### pnpm

```sh
pnpm add @codevachon/react-common @codevachon/classnames @codevachon/utilities @headlessui/react @heroicons/react
```

### yarn

```sh
yarn add @codevachon/react-common @codevachon/classnames @codevachon/utilities @headlessui/react @heroicons/react
```

### npm

```sh
npm install @codevachon/react-common @codevachon/classnames @codevachon/utilities @headlessui/react @heroicons/react
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

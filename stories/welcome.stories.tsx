import React from "react";
import { marked } from "marked";
import { ClassNames } from "@codevachon/classnames";

const commonMarkDownClasses = new ClassNames(["prose max-w-none lg:prose-lg"]);

export const About = () => {
    return (
        <div
            className={new ClassNames(commonMarkDownClasses).list()}
            dangerouslySetInnerHTML={{
                __html: marked.parse(`
# @CodeVachon React Common Components

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

`)
            }}
        ></div>
    );
};

export const Install = () => {
    const pkgManagers = [
        { cmd: "pnpm", install: "add" },
        { cmd: "yarn", install: "add" },
        { cmd: "npm", install: "install" }
    ];

    const peerDependencies = [
        "@codevachon/react-common",
        "@codevachon/classnames",
        "@codevachon/utilities",
        "@headlessui/react",
        "@heroicons/react"
    ];

    return (
        <div
            className={new ClassNames(commonMarkDownClasses).list()}
            dangerouslySetInnerHTML={{
                __html: marked.parse(`
# Install

## Install the package

${pkgManagers
    .map(
        (value) => `
### ${value.cmd}

\`\`\`sh
${value.cmd} ${value.install} ${peerDependencies.join(" ")}
\`\`\`
`
    )
    .join("")}

## Tailwind

checkout the [Tailwind Installation](https://tailwindcss.com/docs/installation) for up to date documentations.

${pkgManagers
    .map(
        (value) => `
### ${value.cmd}

\`\`\`sh
${value.cmd} ${value.install} -D tailwindcss postcss autoprefixer @tailwindcss/typography @tailwindcss/forms
npx tailwindcss init -p
\`\`\`

`
    )
    .join("")}

`)
            }}
        ></div>
    );
};

export const Usage = () => {
    return (
        <div
            className={new ClassNames(commonMarkDownClasses).list()}
            dangerouslySetInnerHTML={{
                __html: marked.parse(`
# Usage

Pull in the Style Sheet and add the required values to the \`tailwind.config.js\` file.

\`\`\`tsx
// src/pages/_app.tsx
import "@codevachon/react-common/style.css"; // Import Preset Styling
import "./../styles/global.css";

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
\`\`\`

### Use Tailwind Preset

\`\`\`js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,js,tsx,jsx}"],
    preset: ["@codevachon/react-common/tailwind.preset"],
    theme: {},
    plugins: []
};
\`\`\`

### Manual Tailwind Configuration

\`\`\`js
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
\`\`\`
`)
            }}
        ></div>
    );
};

import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig((configEnv) => ({
    plugins: [
        react(),
        tsConfigPaths(),
        dts({
            include: ["src/index.ts"]
        })
    ],
    build: {
        lib: {
            entry: resolve("src", "index.ts"),
            name: "CodeVachonCommon",
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            external: ["react", "@codevachon/classnames", "react/jsx-runtime"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    "react/jsx-runtime": "react/jsx-runtime",
                    react: "React",
                    "@codevachon/classnames": "@codevachon/classnames"
                }
            }
        }
    }
}));

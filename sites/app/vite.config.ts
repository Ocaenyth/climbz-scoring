import viteReact from "@vitejs/plugin-react";
import * as path from "node:path";
import { defineConfig } from "vite";
import viteChecker from "vite-plugin-checker";

export default defineConfig({
    plugins: [
        viteReact(),
        viteChecker({
            typescript: true
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },

});
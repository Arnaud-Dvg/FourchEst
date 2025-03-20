import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: '/fourchest/', // Replace 'my-repo' with your actual repository name
    plugins: [
        tailwindcss()
    ]
});
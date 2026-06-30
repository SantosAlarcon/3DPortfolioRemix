import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

installGlobals();

export default defineConfig({
	plugins: [tailwindcss(), remix()],
});

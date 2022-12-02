import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => ({
	build: {
		target: "ES2020",
		lib: {
			entry: "./src/index.ts",
			formats: ["es", "cjs"],
			fileName: (format) => `index.qwik.${format === "es" ? "mjs" : "cjs"}`,
		},
	},
	clearScreen: false,
	plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
	test: {
		globals: true,
		testTimeout: 10000,
	},
}));

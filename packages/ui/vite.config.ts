import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import unoCss from "unocss/vite";
import { presetUno } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";
import tsconfigPaths from "vite-tsconfig-paths";

const presetUnoCss = presetUno();

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
	plugins: [
		unoCss({
			include: ["**/*.tsx", "**/*.qwik.{cjs,mjs}"],
			presets: [presetUnoCss],
			theme: {
				colors: {
					brand: presetUnoCss.theme?.colors?.green || "",
				},
			},
			transformers: [transformerDirectives()],
		}),
		qwikCity(),
		qwikVite(),
		tsconfigPaths(),
	],
	test: {
		globals: true,
		testTimeout: 10000,
	},
}));

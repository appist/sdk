import { component$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "~/components/RouterHead/RouterHead";

export default component$(() => {
	return (
		<QwikCityProvider>
			<head>
				<meta charSet="utf-8" />
				<script src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.1/dist/iconify-icon.min.js" />
				<RouterHead />
			</head>

			<body lang="en">
				<RouterOutlet />
			</body>
		</QwikCityProvider>
	);
});

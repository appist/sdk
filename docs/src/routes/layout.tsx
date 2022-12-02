import { Header, Footer } from "@appist/ui";
import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
	return (
		<>
			<Header links={[]} />

			<main>
				<Slot />
			</main>

			<Footer />
		</>
	);
});

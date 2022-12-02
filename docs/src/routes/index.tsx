import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "@appist/ui";

export default component$(() => {
	return (
		<>
			<Button class="mx-2" leftIcon="tabler:mail" size={"md"} variant="primary">
				Button
			</Button>
		</>
	);
});

export const head: DocumentHead = {
	title: "Appist SDK",
};

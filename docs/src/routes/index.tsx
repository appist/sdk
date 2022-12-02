import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "@appist/ui";

export default component$(() => {
	return (
		<>
			<Button>Submit</Button>
		</>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Qwik Docs Starter",
};

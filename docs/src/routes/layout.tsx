import { Header, Footer } from "@appist/ui";
import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
	return (
		<>
			<Header
				actions={[
					{
						component: "Button",
						href: "/login",
						slot: "Login",
						variant: "white",
					},
					{
						component: "Button",
						href: "/register",
						slot: "Register",
					},
				]}
				logo={{ image: "/logo.svg", title: "Appist" }}
				links={[]}
				variant="sticky"
				withContainer={true}
			/>

			<main class="h-[100rem]">
				{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Purus gravida quis blandit turpis. Augue neque gravida in
      fermentum et sollicitudin ac orci. Et sollicitudin ac orci phasellus egestas. Elementum tempus
      egestas sed sed risus pretium quam vulputate. Interdum velit euismod in pellentesque massa
      placerat duis ultricies.`}
				<Slot />
			</main>

			<Footer />
		</>
	);
});

import { createDOM } from "@builder.io/qwik/testing";
import { Header } from "../../index";

// TODO: update the tests once qwik testing is less buggy.
describe.skip("Header", () => {
	it("should render the burger menu on the left", async () => {
		const { screen, render } = await createDOM();
		await render(
			<Header
				logo={{ title: "Appist" }}
				links={[
					{
						href: "/docs",
						title: "Documentations",
					},
				]}
			/>,
		);

		expect(screen.innerHTML).toMatch(/class="burger.*data-qrl=Logo_component/);
	});

	it("should render the burger menu on the right", async () => {
		const { screen, render } = await createDOM();
		await render(
			<Header
				burgerMenuPosition="right"
				logo={{ title: "Appist" }}
				links={[
					{
						href: "/docs",
						title: "Documentations",
					},
				]}
			/>,
		);

		expect(screen.innerHTML).toMatch(/data-qrl=Logo_component.*class="burger/);
	});

	it("should render the links in the center", async () => {
		const { screen, render } = await createDOM();
		await render(
			<Header
				links={[
					{
						href: "/docs",
						title: "Documentations",
					},
				]}
			/>,
		);

		expect(screen.innerHTML).toMatch(
			/class="burger.*data-qrl=Button_component.*/,
		);
	});
});

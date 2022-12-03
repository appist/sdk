import { createDOM } from "@builder.io/qwik/testing";
import { Button } from "../../index";

describe("Button", () => {
	it("should render the text correctly", async () => {
		const { screen, render } = await createDOM();
		await render(<Button>Submit</Button>);

		expect(screen.querySelector("button")?.outerHTML).toContain("Submit");
	});

	it("should render the icon only correctly and ignore the text", async () => {
		const { screen, render } = await createDOM();
		await render(<Button icon="tabler:coin">Submit</Button>);

		expect(screen.outerHTML).toMatch(
			/<button.*<iconify-icon.*icon="tabler:coin".*<\/iconify-icon><\/button>/,
		);
	});

	it("should render the icon only as loader correctly and ignore the text", async () => {
		const { screen, render } = await createDOM();
		await render(
			<Button icon="tabler:coin" loading={true}>
				Submit
			</Button>,
		);

		expect(screen.outerHTML).toMatch(
			/<button.*<iconify-icon.*icon="gg:spinner".*<\/iconify-icon><\/button>/,
		);
	});

	it("should render the text with left icon correctly", async () => {
		const { screen, render } = await createDOM();
		await render(<Button leftIcon="tabler:coin">Submit</Button>);

		expect(screen.outerHTML).toMatch(
			/<iconify-icon.*icon="tabler:coin".*<\/iconify-icon>.*-->Submit<!--/,
		);
	});

	it("should render the text with left icon as loader correctly", async () => {
		const { screen, render } = await createDOM();
		await render(
			<Button leftIcon="tabler:coin" loading={true}>
				Submit
			</Button>,
		);

		expect(screen.outerHTML).toMatch(
			/<iconify-icon.*icon="gg:spinner".*<\/iconify-icon>.*-->Submit<!--/,
		);
	});

	it("should render the text with right icon correctly", async () => {
		const { screen, render } = await createDOM();
		await render(<Button rightIcon="tabler:coin">Submit</Button>);

		expect(screen.outerHTML).toMatch(
			/-->Submit<!--.*<iconify-icon.*icon="tabler:coin".*<\/iconify-icon>/,
		);
	});

	it("should render the text with right icon as loader correctly", async () => {
		const { screen, render } = await createDOM();
		await render(
			<Button loading={true} rightIcon="tabler:coin">
				Submit
			</Button>,
		);

		expect(screen.outerHTML).toMatch(
			/-->Submit<!--.*<iconify-icon.*icon="gg:spinner".*<\/iconify-icon>/,
		);
	});

	it("should trigger onClick$ correctly", async () => {
		const { screen, render, userEvent } = await createDOM();
		await render(
			<Button onClick$={(_, element) => (element.innerHTML = "clicked")}>
				Submit
			</Button>,
		);
		await userEvent("button", "click");

		expect(screen.querySelector("button")?.innerHTML).toBe("clicked");
	});
});

import { createDOM } from "@builder.io/qwik/testing";
import { Button, ButtonGroup } from "../../index";

describe("Button", () => {
	it("should render the horizontal orientation correctly", async () => {
		const { screen, render } = await createDOM();
		await render(
			<ButtonGroup>
				<Button>Button</Button>
				<Button>Button</Button>
			</ButtonGroup>,
		);

		expect(screen.querySelector(".btn-group")?.className).toContain(
			"btn-group-horizontal",
		);
	});

	it("should render the vertical orientation correctly", async () => {
		const { screen, render } = await createDOM();
		await render(
			<ButtonGroup orientation="vertical">
				<Button>Button</Button>
				<Button>Button</Button>
			</ButtonGroup>,
		);

		expect(screen.querySelector(".btn-group")?.className).toContain(
			"btn-group-vertical",
		);
	});
});

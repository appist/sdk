import { createDOM } from "@builder.io/qwik/testing";
import { Burger } from "../../index";

describe("Burger", () => {
	it("should render 3 lines burger icon when it's not opened", async () => {
		const { screen, render } = await createDOM();
		await render(<Burger />);

		expect(
			screen.querySelector(".burger > div > span:nth-of-type(1)")?.className,
		).not.toContain("rotate-45");
		expect(
			screen.querySelector(".burger > div > span:nth-of-type(1)")?.className,
		).toContain("-translate-y-1.5");

		expect(
			screen.querySelector(".burger > div > span:nth-of-type(2)")?.className,
		).not.toContain("opacity-0");

		expect(
			screen.querySelector(".burger > div > span:nth-of-type(3)")?.className,
		).not.toContain("-rotate-45");
		expect(
			screen.querySelector(".burger > div > span:nth-of-type(3)")?.className,
		).toContain("translate-y-1.5");
	});

	it("should render 2 lines cross icon when it's opened", async () => {
		const { screen, render, userEvent } = await createDOM();
		await render(<Burger />);
		await userEvent(".burger", "click");

		expect(
			screen.querySelector(".burger > div > span:nth-of-type(1)")?.className,
		).toContain("rotate-45");
		expect(
			screen.querySelector(".burger > div > span:nth-of-type(1)")?.className,
		).not.toContain("-translate-y-1.5");

		expect(
			screen.querySelector(".burger > div > span:nth-of-type(2)")?.className,
		).toContain("opacity-0");

		expect(
			screen.querySelector(".burger > div > span:nth-of-type(3)")?.className,
		).toContain("-rotate-45");
		expect(
			screen.querySelector(".burger > div > span:nth-of-type(3)")?.className,
		).not.toContain("translate-y-1.5");
	});
});

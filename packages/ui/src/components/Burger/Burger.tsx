import { $, component$, HTMLAttributes, useSignal } from "@builder.io/qwik";
import { clsx, Button, Size } from "../../index";

export interface BurgerProps extends HTMLAttributes<HTMLElement> {
	/**
	 * Sets the size.
	 */
	size?: Size;
}

/**
 * The burger component.
 */
export const Burger = component$((props: BurgerProps) => {
	const opened = useSignal(false);
	const { class: _class = "", size = "md", ...rest } = props;
	const getSizeClasses = (size: Size = "md") => {
		switch (size) {
			case "xs":
				return "w-6 h-6";

			case "sm":
				return "w-8 h-8";

			case "md":
				return "w-10 h-10";

			case "lg":
				return "w-12 h-12";

			default:
				return "w-14 h-14";
		}
	};
	const getSizePadding = (size: Size = "md") => {
		switch (size) {
			case "xs":
				return "px-1.5 py-3";

			case "sm":
				return "px-2 py-4";

			case "md":
				return "px-2.5 py-5";

			case "lg":
				return "px-3 py-6";

			default:
				return "px-3.5 py-7";
		}
	};
	const getLineClasses = (size: Size = "md") => {
		switch (size) {
			case "xs":
				return "w-3";

			case "sm":
				return "w-4";

			case "md":
				return "w-5";

			case "lg":
				return "w-6";

			default:
				return "w-7";
		}
	};

	return (
		<Button
			class={clsx("burger block relative", {
				[_class as string]: true,
				[getSizeClasses(size)]: true,
			})}
			onClick$={() => (opened.value = !opened.value)}
			unstyled={true}
			{...rest}
		>
			<div class={clsx(getSizePadding(size), getSizeClasses(size))}>
				<span
					aria-hidden="true"
					class={clsx(
						"block absolute h-0.5 bg-current transform transition duration-200 ease-in-out",
						getLineClasses(size),
						{
							"rotate-45": opened.value,
							"-translate-y-1.5": !opened.value,
						},
					)}
				/>
				<span
					aria-hidden="true"
					class={clsx(
						"block absolute h-0.5 bg-current transform transition duration-200 ease-in-out",
						getLineClasses(size),
						{
							"opacity-0": opened.value,
						},
					)}
				/>
				<span
					aria-hidden="true"
					class={clsx(
						"block absolute h-0.5 bg-current transform transition duration-200 ease-in-out",
						getLineClasses(size),
						{
							"-rotate-45": opened.value,
							"translate-y-1.5": !opened.value,
						},
					)}
				/>
			</div>
		</Button>
	);
});

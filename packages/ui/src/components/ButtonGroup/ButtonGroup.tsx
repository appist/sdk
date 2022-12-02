import { component$, useStyles$, Slot, HTMLAttributes } from "@builder.io/qwik";
import { clsx } from "~/utils";
import styles from "./ButtonGroup.css?inline";

export interface ButtonGroupProps extends HTMLAttributes<HTMLElement> {
	orientation?: "vertical" | "horizontal";
}

export const ButtonGroup = component$((props: ButtonGroupProps) => {
	useStyles$(styles);

	const { class: _class = "", orientation = "horizontal" } = props;

	return (
		<div
			class={clsx(
				{
					[_class as string]: true,
				},
				"btn-group",
				`btn-group-${orientation}`,
			)}
		>
			<Slot />
		</div>
	);
});

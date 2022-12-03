import { component$, HTMLAttributes } from "@builder.io/qwik";
import { clsx, Button, Size } from "../../index";

export interface LogoProps extends HTMLAttributes<HTMLElement> {
	/**
	 * Sets the URL that the hyperlink points to.
	 */
	href?: string;

	/**
	 * Sets the URL that the image is located at.
	 */
	image?: string;

	/**
	 * Sets the logo size.
	 */
	size?: Size;

	/**
	 * Sets the title behind the logo image.
	 */
	title?: string;
}

export const Logo = component$((props: LogoProps) => {
	const {
		class: _class = "",
		href = "/",
		image = "",
		size = "md",
		title = "",
		...rest
	} = props;

	const getImageSize = (size: Size = "md") => {
		switch (size) {
			case "xs":
				return "w-4 h-4";

			case "sm":
				return "w-6 h-6";

			case "md":
				return "w-8 h-8";

			case "lg":
				return "w-10 h-10";

			case "xl":
				return "w-12 h-12";
		}
	};

	const getTitleSize = (size: Size = "md") => {
		switch (size) {
			case "xs":
				return "text-xs";

			case "sm":
				return "text-sm";

			case "md":
				return "text-md";

			case "lg":
				return "text-lg";

			case "xl":
				return "text-xl";
		}
	};

	return (
		<Button
			class={clsx("logo flex", { [_class as string]: true })}
			href={href}
			unstyled={true}
			{...rest}
		>
			<img class={clsx(getImageSize(size))} alt={title} src={image} />

			<span
				class={clsx(
					"flex font-bold items-center ltr:ml-2 rtl:mr-2",
					getTitleSize(size),
				)}
			>
				{title}
			</span>
		</Button>
	);
});

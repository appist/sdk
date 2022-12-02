import { component$, HTMLAttributes, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ButtonType, Size, Variant } from "~/constants";
import { clsx } from "~/utils";

export interface ButtonProps extends HTMLAttributes<HTMLElement> {
	/**
	 * Sets the disabled state.
	 */
	disabled?: boolean;

	/**
	 * Sets the URL that the hyperlink points to.
	 */
	href?: string;

	/**
	 * Sets icon as the button label which will ignore the button label text.
	 */
	icon?: string;

	/**
	 * Sets icon before the button label.
	 */
	leftIcon?: string;

	/**
	 * Sets the loader icon.
	 */
	loaderIcon?: string;

	/**
	 * Sets the loader position.
	 */
	loaderPosition?: "left" | "right";

	/**
	 * Sets the loading state.
	 */
	loading?: boolean;

	/**
	 * Sets or retrieves the relationship between the object and the destination of the link.
	 */
	rel?: string;

	/**
	 * Sets the icon after the button label.
	 */
	rightIcon?: string;

	/**
	 * Sets the button size.
	 */
	size?: Size;

	/**
	 * Sets or retrieves the window or frame at which to target content.
	 */
	target?: string;

	/**
	 * Sets the button HTML type attribute.
	 */
	type?: ButtonType;

	/**
	 * Unset the button styles.
	 */
	unstyled?: boolean;

	/**
	 * Sets the button variant.
	 */
	variant?: Variant;
}

/**
 * The button component.
 */
export const Button = component$((props: ButtonProps) => {
	const {
		class: _class = "",
		disabled = false,
		href,
		icon = "",
		leftIcon,
		loaderIcon = "gg:spinner",
		loaderPosition,
		loading = false,
		rightIcon,
		size,
		type,
		unstyled = false,
		variant,
		...otherProps
	} = props;
	const isExternalLink = /^http(s)?:\/\//.test(href || "");
	const Element = href ? (isExternalLink ? "a" : Link) : "button";
	const getDefaultClasses = () => {
		return "border font-medium inline-flex items-center rounded active:translate-y-[2px] focus:outline-none focus:ring-2 focus:ring-offset-2";
	};
	const getDisabledClasses = () => {
		return "disabled:pointer-events-none opacity-50";
	};
	const getLeftIconClasses = (size: Size = "md") => {
		switch (size) {
			case "xs":
				return "ltr:-ml-0.5 ltr:mr-2 rtl:-mr-0.5 rtl:ml-2";

			case "sm":
				return "ltr:-ml-1 ltr:mr-2 rtl:-mr-1 rtl:ml-2";

			case "md":
			case "lg":
			case "xl":
				return "ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3";
		}
	};
	const getRightIconClasses = (size: Size = "md") => {
		switch (size) {
			case "xs":
				return "ltr:ml-2 ltr:-mr-0.5 rtl:mr-2 rtl:-ml-0.5";

			case "sm":
				return "ltr:ml-2 ltr:-mr-1 rtl:mr-2 rtl:-ml-1";

			case "md":
			case "lg":
			case "xl":
				return "ltr:ml-3 ltr:-mr-1 rtl:mr-3 rtl:-ml-1";
		}
	};
	const getIconSize = (size: Size = "md") => {
		switch (size) {
			case "xs":
				return 16;

			case "sm":
				return 18;

			case "md":
				return 20;

			case "lg":
				return 22;

			default:
				return 24;
		}
	};
	const getSizeClasses = (size: Size = "md", icon: string) => {
		switch (size) {
			case "xs":
				return `${icon ? "p-1.5 rounded-full" : "px-2.5 py-1.5"} text-xs`;

			case "sm":
				return `${icon ? "p-2 rounded-full" : "px-3 py-2"} text-sm`;

			case "md":
				return `${icon ? "p-2 rounded-full" : "px-4 py-2"} text-sm`;

			case "lg":
				return `${icon ? "p-2 rounded-full" : "px-4 py-2"} text-base`;

			case "xl":
				return `${icon ? "p-3 rounded-full" : "px-6 py-3"} text-base`;
		}
	};

	const getVariantClasses = (variant: Variant = "primary") => {
		switch (variant) {
			case "primary":
				return "bg-brand-600 border-transparent focus:ring-brand-500 hover:bg-brand-700 shadow-sm text-white";

			case "secondary":
				return "bg-brand-100 border-transparent focus:ring-brand-500 hover:bg-brand-200 text-brand-700";

			case "white":
				return "bg-white border-gray-300 hover:bg-gray-50 focus:ring-brand-500 shadow-sm text-gray-700";
		}
	};

	return (
		<Element
			aria-label={props["aria-label"] ?? (href ? "anchor" : "button")}
			class={clsx({
				[_class as string]: true,
				[getDefaultClasses()]: !unstyled,
				[getDisabledClasses()]: disabled || loading,
				[getSizeClasses(size, icon)]: !unstyled,
				[getVariantClasses(variant)]: !unstyled,
			})}
			disabled={disabled || loading}
			href={href}
			type={type}
			{...otherProps}
		>
			{leftIcon || (loading && loaderPosition === "left") ? (
				<iconify-icon
					class={clsx({
						[getLeftIconClasses(size)]: true,
						"animate-spin": loading,
					})}
					icon={loading ? loaderIcon : leftIcon}
					width={getIconSize(size)}
					height={getIconSize(size)}
				/>
			) : null}

			{icon ? (
				<iconify-icon
					class={clsx({ "animate-spin": loading })}
					icon={loading ? loaderIcon : icon}
					width={getIconSize(size)}
					height={getIconSize(size)}
				/>
			) : (
				<Slot />
			)}

			{rightIcon || (loading && loaderPosition === "right") ? (
				<iconify-icon
					class={clsx({
						[getRightIconClasses(size)]: true,
						"animate-spin": loading,
					})}
					icon={loading ? loaderIcon : rightIcon}
					width={getIconSize(size)}
					height={getIconSize(size)}
				/>
			) : null}
		</Element>
	);
});

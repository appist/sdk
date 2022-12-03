import { component$, HTMLAttributes } from "@builder.io/qwik";
import {
	clsx,
	Burger,
	Button,
	ButtonProps,
	Logo,
	LogoProps,
} from "../../index";

export interface HeaderLinkProps {
	description?: string;
	href?: string;
	icon?: string;
	title: string;
}

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
	/**
	 * Sets the actions which will be rendered in the header's right section.
	 */
	actions?: Array<{ component: "Button" } & ButtonProps>;

	/**
	 * Sets the burger menu position.
	 */
	burgerMenuPosition?: "left" | "right";

	/**
	 * Sets the menu links which will be rendered in the header's center section.
	 */
	links?: Array<
		Omit<HeaderLinkProps, "description"> & { children?: HeaderLinkProps[] }
	>;

	/**
	 * Sets the logo which will be rendered in the header's left section.
	 */
	logo?: LogoProps;

	/**
	 * Sets the header variant.
	 */
	variant?: "floating" | "static" | "sticky";

	/**
	 * Wraps the header's content with responsive container.
	 */
	withContainer?: boolean;
}

export const Header = component$((props: HeaderProps) => {
	const {
		actions = [],
		burgerMenuPosition = "left",
		class: _class = "",
		links = [],
		logo = {},
		variant = "sticky",
		withContainer = false,
		...rest
	} = props;

	const showBurgerMenu = links?.length > 0 || actions?.length > 0;

	return (
		<header
			class={clsx("header w-full z-50", {
				[_class as string]: true,
				"bg-transparent top-0 left-0 right-0 sticky": [
					"floating",
					"sticky",
				].includes(variant),
				"backdrop-blur backdrop-saturate-200 bg-white/90 border-b-[1px] border-b-slate-200":
					variant !== "floating",
				"p-2": variant === "floating",
				"bg-white": variant === "static",
			})}
			{...rest}
		>
			<nav
				class={clsx("flex h-16 items-center px-2", {
					container: withContainer,
					"backdrop-blur backdrop-saturate-200 bg-white/90 border-[1px] border-slate-200 mx-auto px-4 relative rounded shadow-lg":
						variant === "floating",
					"mx-auto": ["static", "sticky"].includes(variant),
				})}
			>
				{showBurgerMenu && burgerMenuPosition === "left" && (
					<Burger class={clsx("flex ltr:mr-3 rtl:ml-3 md:hidden")} />
				)}

				{logo && <Logo {...logo} />}

				<div class="flex flex-1">
					<div class="md:flex flex-1 hidden gap-4 grid-flow-col px-2 justify-center">
						{links.map((link) =>
							link.children && link.children?.length > 0 ? (
								<></>
							) : (
								<Button href={link.href} unstyled={true}>
									{link.title}
								</Button>
							),
						)}
					</div>
				</div>

				<div class={clsx("gap-4 md:flex hidden")}>
					{actions.map((action, idx) => {
						const { component, slot, ...restProps } = action;

						let Element;
						switch (component) {
							case "Button": {
								Element = Button;
								break;
							}

							default:
								return <></>;
						}

						return (
							<Element key={idx} {...restProps}>
								{slot}
							</Element>
						);
					})}
				</div>

				{showBurgerMenu && burgerMenuPosition === "right" && (
					<Burger class={clsx("flex ltr:ml-3 rtl:mr-3 md:hidden")} />
				)}
			</nav>
		</header>
	);
});

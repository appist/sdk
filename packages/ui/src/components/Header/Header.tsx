import { clsx, Burger, Button } from "~/index";
import { component$, HTMLAttributes, Slot } from "@builder.io/qwik";

export interface HeaderLinkProps {
	description?: string;
	href?: string;
	icon?: string;
	title: string;
}

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
	links: Array<
		Omit<HeaderLinkProps, "description"> & { children?: HeaderLinkProps[] }
	>;
}

export const Header = component$((props: HeaderProps) => {
	const { class: _class = "", links } = props;

	return (
		<header
			class={clsx(
				{
					[_class as string]: true,
				},
				"bg-white border-b-[1px] border-b-slate-200 px-2 sticky top-0 w-full z-50",
			)}
		>
			<nav class={clsx("container flex h-16 items-center mx-auto")}>
				<Slot name="left" />

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

				<div class="md:flex hidden">
					<Slot name="right" />
				</div>

				<Burger class="flex md:hidden" />
			</nav>
		</header>
	);
});

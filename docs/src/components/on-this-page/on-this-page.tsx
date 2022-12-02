import { useContent, useLocation } from "@builder.io/qwik-city";
import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./on-this-page.css?inline";

export default component$(() => {
	useStyles$(styles);

	const { headings } = useContent();
	const contentHeadings =
		headings?.filter((h) => h.level === 2 || h.level === 3) || [];

	const { pathname } = useLocation();
	const editUrl = `#update-your-edit-url-for-${pathname}`;

	return (
		<aside class="on-this-page">
			{contentHeadings.length > 0 ? (
				<>
					<h6>On This Page</h6>
					<ul>
						{contentHeadings.map((h) => (
							<li>
								<a
									// rome-ignore lint: we need this
									href={`#${h.id}`}
									class={{
										block: true,
										indent: h.level > 2,
									}}
								>
									{h.text}
								</a>
							</li>
						))}
					</ul>
				</>
			) : null}

			<h6>More</h6>
			<ul>
				<li>
					<a href={editUrl} target="_blank" rel="noreferrer">
						Edit this page
					</a>
				</li>
				<li>
					<a
						href="https://qwik.builder.io/chat"
						target="_blank"
						rel="noreferrer"
					>
						Join our community
					</a>
				</li>
				<li>
					<a
						href="https://github.com/BuilderIO/qwik"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com/QwikDev"
						target="_blank"
						rel="noreferrer"
					>
						@QwikDev
					</a>
				</li>
			</ul>
		</aside>
	);
});

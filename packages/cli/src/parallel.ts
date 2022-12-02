import chalk, { type ColorName } from "chalk";
import { execaCommand } from "execa";

const COLORS = ["blue", "cyan", "gray", "green", "magenta", "red", "yellow"];

export default ({ _: commands, n }: { _: string[]; n: string }) => {
	try {
		const names = n.split(",");
		let longestLength = 0;
		names.forEach((name) => {
			if (name.length > longestLength) {
				longestLength = name.length;
			}
		});

		commands.map((cmd, idx) => {
			const { stderr, stdout } = execaCommand(cmd, {
				env: { ...process.env, FORCE_COLOR: "1" },
			});

			const prefix = names?.[idx]
				? chalk[COLORS[idx] as ColorName](
						`[${names?.[idx].padEnd(longestLength, " ")}] `,
				  )
				: "";

			stdout?.on("data", (chunk) => {
				chunk
					.toString()
					.split("\n")
					?.map((line: string) => process.stdout.write(`${prefix}${line}\n`));
			});

			stderr?.on("data", (chunk) => {
				chunk
					.toString()
					.split("\n")
					?.map((line: string) => process.stderr.write(`${prefix}${line}\n`));
			});
		});
	} catch (err) {
		console.error(err);
	}
};

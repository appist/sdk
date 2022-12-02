import sade from "sade";
import dev from "./dev";
import parallel from "./parallel";
import rm from "./rm";
import start from "./start";

const cli = sade("app");

cli.describe(
	"An opinionated SDK that includes everything needed to create database-backed desktop/mobile/web applications.",
);

cli.command("dev", "Start the app in development mode.").action(dev);

cli
	.command(
		"rm <files>",
		"Remove the specified files/folders, delimited by comma(s).",
	)
	.example("app rm dist,node_modules")
	.action(rm);

cli
	.command("parallel", "Run multiple commands in parallel.")
	.example("app rm -n tsc,server 'pnpm run tsc' 'pnpm run server'")
	.option(
		"n",
		"List of custom names to be used as the command prefix, delimited by comma(s).",
		"",
	)
	.action(parallel);

cli.command("start", "Start the app in production mode.").action(start);

cli.parse(process.argv);

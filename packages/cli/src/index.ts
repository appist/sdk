import sade from "sade";
import dev from "./dev";
import parallel from "./parallel";
import rm from "./rm";

const cli = sade("app");

cli.describe(
	"A web-app framework that includes everything needed to create database-backed web applications.",
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

cli.parse(process.argv);

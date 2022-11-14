import rimraf from "rimraf";

export default async (files: string) => {
	await Promise.all(
		files.split(",").map(
			async (f) =>
				await new Promise<void>((resolve, reject) => {
					rimraf(f, (err) => {
						if (err) {
							return reject(err);
						}

						resolve();
					});
				}),
		),
	);
};

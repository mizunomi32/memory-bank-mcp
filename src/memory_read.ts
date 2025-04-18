import * as fs from "node:fs";
import * as path from "node:path";

export async function memoryReadExecute(targetDir?: string): Promise<string> {
	if (!targetDir) {
		return JSON.stringify({ error: "targetDirが指定されていません" });
	}
	try {
		const files = fs.readdirSync(targetDir);
		const mdFiles = files.filter((f: string) => f.endsWith(".md"));
		const result = mdFiles.map((filename: string) => {
			const filePath = path.join(targetDir, filename);
			const content = fs.readFileSync(filePath, "utf-8");
			return { filename, content };
		});
		return JSON.stringify(result);
	} catch (e) {
		return JSON.stringify({ error: String(e) });
	}
}

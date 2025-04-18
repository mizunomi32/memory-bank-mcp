import * as fs from "node:fs";

export async function memoryWriteExecute(
	targetFile: string | undefined,
	content: string,
): Promise<string> {
	if (!targetFile) {
		return "targetFileが指定されていません";
	}
	try {
		if (!fs.existsSync(targetFile)) {
			fs.writeFileSync(targetFile, "", "utf-8");
		}
		fs.writeFileSync(targetFile, content, "utf-8");
		return "success";
	} catch (e) {
		return String(e);
	}
}

import * as fs from "node:fs";
import * as path from "node:path";

export async function memoryReadExecute(targetFile?: string): Promise<string> {
	if (!targetFile) {
		return "targetFileが指定されていません";
	}
	try {
		const content = fs.readFileSync(targetFile, "utf-8");
		return content;
	} catch (e) {
		return String(e);
	}
}

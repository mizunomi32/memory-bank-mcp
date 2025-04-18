import * as fs from "node:fs";

export async function memoryResetExecute(
	targetFile: string | undefined,
): Promise<string> {
	if (!targetFile) {
		return "targetFileが指定されていません";
	}
	try {
		fs.writeFileSync(targetFile, "", "utf-8");
		return "reset success";
	} catch (e) {
		return String(e);
	}
}

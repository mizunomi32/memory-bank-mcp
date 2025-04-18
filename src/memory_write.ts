import * as fs from "fs";
import * as path from "path";

export async function memoryWriteExecute(targetDir: string | undefined, filename: string, content: string): Promise<string> {
	if (!targetDir) {
		return JSON.stringify({ error: "targetDirが指定されていません" });
	}
	if (!filename.endsWith('.md')) {
		return JSON.stringify({ error: "ファイル名は.mdで終わる必要があります" });
	}
	try {
		const filePath = path.join(targetDir, filename);
		fs.writeFileSync(filePath, content, "utf-8");
		return JSON.stringify({ success: true, filename });
	} catch (e) {
		return JSON.stringify({ error: String(e) });
	}
} 
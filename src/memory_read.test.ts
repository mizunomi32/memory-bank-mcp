import * as fs from "node:fs";
import * as path from "node:path";
import { describe, expect, it } from "vitest";
import { memoryReadExecute } from "./memory_read";

function setupTestFile() {
	const testFile = path.join(__dirname, "test-memory-bank-read.md");
	fs.writeFileSync(testFile, "# テストファイル\n内容だよ");
	return testFile;
}

describe("memoryReadExecute", () => {
	it("指定したファイルの内容を返す", async () => {
		const testFile = setupTestFile();
		const result = await memoryReadExecute(testFile);
		expect(result).toBe("# テストファイル\n内容だよ");
	});

	it("targetFileが指定されていない場合はエラーを返す", async () => {
		const result = await memoryReadExecute(undefined);
		expect(result).toContain("targetFileが指定されていません");
	});
});

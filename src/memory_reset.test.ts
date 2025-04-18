import * as fs from "node:fs";
import * as path from "node:path";
import { describe, expect, it } from "vitest";
import { memoryResetExecute } from "./memory_reset";

function setupTestFile() {
	const testFile = path.join(__dirname, "test-memory-bank-reset.md");
	return testFile;
}

describe("memoryResetExecute", () => {
	it("ファイルの内容をリセットできる", async () => {
		const testFile = setupTestFile();
		fs.writeFileSync(testFile, "なんか書いてある");
		const result = await memoryResetExecute(testFile);
		expect(result).toBe("reset success");
		const written = fs.readFileSync(testFile, "utf-8");
		expect(written).toBe("");
	});

	it("targetFileが未指定ならエラー", async () => {
		const result = await memoryResetExecute(undefined);
		expect(result).toContain("targetFileが指定されていません");
	});
});

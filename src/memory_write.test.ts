import * as fs from "node:fs";
import * as path from "node:path";
import { describe, expect, it } from "vitest";
import { memoryWriteExecute } from "./memory_write";

function setupTestFile() {
	const testFile = path.join(__dirname, "test-memory-bank-write.md");
	return testFile;
}

describe("memoryWriteExecute", () => {
	it("mdファイルを書き込める", async () => {
		const testFile = setupTestFile();
		const content = "# テスト\n内容だよ";
		const result = await memoryWriteExecute(testFile, content);
		expect(result).toBe("success");
		const written = fs.readFileSync(testFile, "utf-8");
		expect(written).toBe(content);
	});

	it("mdファイルを上書きできる", async () => {
		const testFile = setupTestFile();
		fs.writeFileSync(testFile, "古い内容");
		const newContent = "新しい内容";
		const result = await memoryWriteExecute(testFile, newContent);
		expect(result).toBe("success");
		const written = fs.readFileSync(testFile, "utf-8");
		expect(written).toBe(newContent);
	});

	it(".md以外のファイル名でも書き込める（バリデーションなしの場合）", async () => {
		const testFile = path.join(__dirname, "test-memory-bank-write.txt");
		const result = await memoryWriteExecute(testFile, "内容");
		expect(result).toBe("success");
		const written = fs.readFileSync(testFile, "utf-8");
		expect(written).toBe("内容");
	});

	it("targetFileが未指定ならエラー", async () => {
		const result = await memoryWriteExecute(undefined, "内容");
		expect(result).toContain("targetFileが指定されていません");
	});
});

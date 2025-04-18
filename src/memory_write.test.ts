import { describe, it, expect } from 'vitest';
import { memoryWriteExecute } from './memory_write';
import * as fs from 'fs';
import * as path from 'path';

function setupTestDir() {
  const testDir = path.join(__dirname, 'test-memory-bank-write');
  if (!fs.existsSync(testDir)) fs.mkdirSync(testDir);
  return testDir;
}

describe('memoryWriteExecute', () => {
  it('mdファイルを書き込める', async () => {
    const testDir = setupTestDir();
    const filename = 'test.md';
    const content = '# テスト\n内容だよ';
    const resultStr = await memoryWriteExecute(testDir, filename, content);
    const result = JSON.parse(resultStr);
    expect(result.success).toBe(true);
    expect(result.filename).toBe(filename);
    // ファイルが本当に書き込まれてるか確認
    const written = fs.readFileSync(path.join(testDir, filename), 'utf-8');
    expect(written).toBe(content);
  });

  it('mdファイルを上書きできる', async () => {
    const testDir = setupTestDir();
    const filename = 'test.md';
    fs.writeFileSync(path.join(testDir, filename), '古い内容');
    const newContent = '新しい内容';
    const resultStr = await memoryWriteExecute(testDir, filename, newContent);
    const result = JSON.parse(resultStr);
    expect(result.success).toBe(true);
    const written = fs.readFileSync(path.join(testDir, filename), 'utf-8');
    expect(written).toBe(newContent);
  });

  it('.md以外のファイル名はエラー', async () => {
    const testDir = setupTestDir();
    const resultStr = await memoryWriteExecute(testDir, 'test.txt', '内容');
    const result = JSON.parse(resultStr);
    expect(result.error).toBeDefined();
  });

  it('targetDirが未指定ならエラー', async () => {
    const resultStr = await memoryWriteExecute(undefined, 'test.md', '内容');
    const result = JSON.parse(resultStr);
    expect(result.error).toBeDefined();
  });
}); 
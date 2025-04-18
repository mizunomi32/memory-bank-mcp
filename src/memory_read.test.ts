import { describe, it, expect } from 'vitest';
import { memoryReadExecute } from './memory_read';
import * as fs from 'fs';
import * as path from 'path';

// テスト用の一時ディレクトリを作ってmdファイルを用意する
function setupTestDir() {
  const testDir = path.join(__dirname, 'test-memory-bank');
  if (!fs.existsSync(testDir)) fs.mkdirSync(testDir);
  fs.writeFileSync(path.join(testDir, 'a.md'), '# A\n内容A');
  fs.writeFileSync(path.join(testDir, 'b.md'), '# B\n内容B');
  fs.writeFileSync(path.join(testDir, 'ignore.txt'), 'これは無視される');
  return testDir;
}

describe('memoryReadExecute', () => {
  it('mdファイルのファイル名と内容を全部返す', async () => {
    const testDir = setupTestDir();
    const resultStr = await memoryReadExecute(testDir);
    const result = JSON.parse(resultStr);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(2);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ filename: 'a.md', content: '# A\n内容A' }),
        expect.objectContaining({ filename: 'b.md', content: '# B\n内容B' })
      ])
    );
  });

  it('targetDirが指定されていない場合はエラーを返す', async () => {
    const resultStr = await memoryReadExecute(undefined);
    const result = JSON.parse(resultStr);
    expect(result.error).toBeDefined();
  });
}); 
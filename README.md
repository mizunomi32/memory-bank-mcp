# memory-bank-mcp

## サーバーの起動方法

MCPサーバーは以下のコマンドで起動できるよ！

```sh
yarn start
```

これで `src/server.ts` が実行されるよ！

---

## Biomeについて

このプロジェクトは[Biome](https://biomejs.dev/)でコードの整形やLintをしてるよ！

### 使い方

以下のコマンドが使えるよ！

- `yarn biome:check` : コードのチェック（フォーマット・Lint）
- `yarn biome:format` : コードの自動フォーマット
- `yarn biome:lint` : Lintのみ実行
- `yarn biome:fix` : チェックで見つかった問題を自動修正

困ったら[公式ガイド](https://biomejs.dev/guides/getting-started/)も見てみてね！

---

## Vitestについて

このプロジェクトは[Vitest](https://vitest.dev/)でテストもできるよ！

### 使い方

- `yarn test` : テストを実行するよ！

テストファイルは `*.test.ts` や `*.spec.ts` みたいな名前で作ってね。

詳しくは[Vitest公式ガイド](https://vitest.dev/guide/)も見てみて！

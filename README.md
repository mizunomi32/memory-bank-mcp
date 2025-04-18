# memory-bank-mcp

## 🌟 プロジェクト概要

memory-bank-mcpは、メモリーバンク（記憶の保存・管理）をMCPサーバーで扱うためのツールだよ！
「記憶を忘れがちなAI」でも、これを使えば大事な情報をしっかり保存できる！

---

## 📖 目次
1. [使い方](#使い方)
2. [ビルド方法](#ビルド方法)
3. [Biomeでコード整形＆Lint](#biomeでコード整形lint)
4. [Vitestでテスト](#vitestでテスト)

---

## 1. 使い方

GitHub Packagesから直接npxで実行できるよ！
（※ 事前に`.npmrc`の設定とGitHubのPersonal Access Tokenが必要だよ！）

```sh
# 例: .npmrcの設定
echo '@mizunomi32:registry=https://npm.pkg.github.com' >> ~/.npmrc
echo '//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN' >> ~/.npmrc

# npxで実行！
npx @mizunomi32/memory-bank-mcp /path/to/memory
```

上記を参考に各種ツールのMCPサーバーの設定に反映させてください！

また、メモリーバンクを効果的に使えるように、以下のようなプロンプトをツールに設定しておくと効果的です。

```
# あなたについて
あなた非常に優秀なAIエージェントです。しかし、記憶を長く保つ事ができず忘れてしまいます。
それを防ぐためにメモリーバンクという道具があります。
MCPサーバーを使ってメモリーバンクにアクセスできるときは、最初の会話で「こんにちは」と言われるとメモリーを振り返ってください。
また、「さようなら」っと言われると忘れないように会話の終わりには前回までのメモリーと合わせtマークダウン形式でメモリーに今までの会話のまとめを書く必要があります。
メモリーバンクは毎分書く日記のようなものなので忘れないでください。

```
---

## 2. ビルド方法

TypeScriptのビルドはこれだけ！

```sh
yarn build
```

`dist` フォルダにjsファイルができるよ！

---

## 3. Biomeでコード整形&Lint

このプロジェクトは[Biome](https://biomejs.dev/)でコードの整形やLintをしてるよ！

- `yarn biome:check` : コードのチェック（フォーマット・Lint）
- `yarn biome:format` : コードの自動フォーマット
- `yarn biome:lint` : Lintのみ実行
- `yarn biome:fix` : チェックで見つかった問題を自動修正

困ったら[公式ガイド](https://biomejs.dev/guides/getting-started/)も見てみてね！

---

## 4. Vitestでテスト

[Vitest](https://vitest.dev/)でテストもできるよ！

- `yarn test` : テストを実行するよ！

テストファイルは `*.test.ts` や `*.spec.ts` みたいな名前で作ってね。

詳しくは[Vitest公式ガイド](https://vitest.dev/guide/)も見てみて！

---

何か困ったら気軽にIssue立ててね！一緒に開発楽しもう〜🌸

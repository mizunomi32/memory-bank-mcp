#!/usr/bin/env node
import { FastMCP } from "fastmcp";
import { z } from "zod";
import { memoryReadExecute } from "./memory_read";
import { memoryWriteExecute } from "./memory_write";

// コマンドライン引数からディレクトリを受け取る（今は使わない）
const targetDir = process.argv[2];
console.log("[INFO] 指定ディレクトリ:", targetDir);

const server = new FastMCP({
	name: "Memory Bank MCP",
	version: "1.0.0",
});

// memory_readツール
server.addTool({
	name: "memory_read",
	description: "メモリーバンクの読み込みを行います。",
	parameters: z.object({}),
	execute: async () => memoryReadExecute(targetDir),
});

// memory_writeツール
server.addTool({
	name: "memory_write",
	description: "メモリーバンクのファイルを書き込み・更新します。",
	parameters: z.object({
		filename: z.string().describe("書き込むmdファイル名（例: note.md）"),
		content: z.string().describe("書き込む内容"),
	}),
	execute: async (args) =>
		memoryWriteExecute(targetDir, args.filename, args.content),
});

server.start({ transportType: "stdio" });

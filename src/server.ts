#!/usr/bin/env node
import { FastMCP } from "fastmcp";
import { z } from "zod";
import { memoryReadExecute } from "./memory_read";
import { memoryResetExecute } from "./memory_reset";
import { memoryWriteExecute } from "./memory_write";

let targetFile = process.argv[2];
if (!targetFile) {
	targetFile = "~/memory.md";
}
console.log("[INFO] 指定ファイル:", targetFile);

const server = new FastMCP({
	name: "Memory Bank MCP",
	version: "1.0.0",
});

// memory_readツール
server.addTool({
	name: "memory_read",
	description: "メモリーバンクの読み込みを行います。",
	parameters: z.object({}),
	execute: async () => memoryReadExecute(targetFile),
});

// memory_writeツール
server.addTool({
	name: "memory_write",
	description: "メモリーバンクのファイルを書き込み・更新します。",
	parameters: z.object({
		content: z.string().describe("書き込む内容"),
	}),
	execute: async (args) => memoryWriteExecute(targetFile, args.content),
});

// memory_resetツール
server.addTool({
	name: "memory_reset",
	description: "メモリーバンクの内容をリセット（空に）します。",
	parameters: z.object({}),
	execute: async () => memoryResetExecute(targetFile),
});

server.start({ transportType: "stdio" });

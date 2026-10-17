# SkimLight for Claude Desktop

SkimLight is an inbox for decisions. Claude posts a question, keeps working, and picks up your answer later. You answer on your Mac or iPhone.

This folder is the source of the `skimlight.mcpb` desktop extension for chats in the Claude app for Mac.

## What's inside

- `manifest.json`: the extension's settings. It gives Claude the `skimlight` MCP server with three tools: `ask`, `answers`, and `cancel`.
- `server/index.cjs`: a small launcher. It starts the bridge that the SkimLight Mac app installs at `~/.skimlight/bin/skimlight-mcp`, using the Node.js that comes with Claude. If the bridge is missing, it says so and stops.

## Before you start

Install the SkimLight app for Mac. No API key or token is needed.

## Install

1. Get `skimlight.mcpb` from the SkimLight app's **Connect AI tools** screen.
2. Double-click it. Claude opens an install dialog.
3. Click **Install**.

Or, in Claude, open **Settings > Extensions > Advanced settings**, click **Install Extension…**, and pick the file.

## Build the file

From `plugins/`:

```sh
npx @anthropic-ai/mcpb@2.1.2 validate claude-desktop/manifest.json
npx @anthropic-ai/mcpb@2.1.2 pack claude-desktop skimlight.mcpb
```

`skimlight.mcpb` is a build output. Don't commit it.

## How it connects

- Claude runs `node ${__dirname}/server/index.cjs --tool claude-desktop`. Extensions can only use a few placeholders, so the launcher finds your home folder itself.

## Uninstall

Open **Settings > Extensions** in Claude, click **SkimLight**, and turn it off or remove it.

## Sources

- https://github.com/modelcontextprotocol/mcpb
- https://github.com/modelcontextprotocol/mcpb/blob/main/MANIFEST.md
- https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop

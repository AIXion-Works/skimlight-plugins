# SkimLight for Cursor

SkimLight is an inbox for decisions. Cursor's agent posts a question, keeps working, and picks up your answer later. You answer on your Mac or iPhone.

## What's inside

- The `skimlight` MCP server with three tools: `ask`, `answers`, and `cancel`.
- The `skimlight` skill, which tells the agent when to ask and how to pick up answers.

## Before you start

Install the SkimLight Mac app. It puts the bridge at `~/.skimlight/bin/skimlight-mcp`. No API key or token is needed.

## Install

Copy the plugin into Cursor's local plugin folder:

```sh
git clone https://github.com/AIXion-Works/skimlight-plugins
cp -R skimlight-plugins/cursor ~/.cursor/plugins/local/skimlight
```

Then run **Developer: Reload Window**, open **Customize**, and check that `skimlight` is listed. Cursor skips symlinks that point outside that folder, so copy it.

## How it connects

- `mcp.json` starts `${userHome}/.skimlight/bin/skimlight-mcp --tool cursor`. Cursor expands `${userHome}` to your home folder.
- The bridge uses its working directory as the project folder, so each question shows which project it came from.

## Uninstall

Delete `~/.cursor/plugins/local/skimlight` and reload the window.

## Sources

- https://cursor.com/docs/reference/plugins
- https://cursor.com/docs/plugins
- https://cursor.com/docs/mcp

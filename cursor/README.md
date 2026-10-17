# SkimLight for Cursor

SkimLight is an inbox for decisions. Cursor's agent posts a question, keeps working, and picks up your answer later. You answer on your Mac or iPhone.

## What's inside

- The `skimlight` MCP server with three tools: `ask`, `answers`, and `cancel`.
- The `skimlight` skill, which tells the agent when to ask and how to pick up answers.
- `scripts/skimlight-mcp`, a small launcher that starts the bridge the SkimLight Mac app installs at `~/.skimlight/bin/skimlight-mcp`. If the bridge is missing, it says so and stops.

## Before you start

Install the SkimLight app for Mac. No API key or token is needed.

## Install

Pick one way. Both add the same `skimlight` server, so don't use both.

### The button (MCP server only)

[![Add SkimLight to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=skimlight&config=eyJjb21tYW5kIjoiJHt1c2VySG9tZX0vLnNraW1saWdodC9iaW4vc2tpbWxpZ2h0LW1jcCIsImFyZ3MiOlsiLS10b29sIiwiY3Vyc29yIl19)

Click it, let Cursor open, and click **Install**. The SkimLight app's **Connect AI tools** screen has the same button. It opens this link:

```text
cursor://anysphere.cursor-deeplink/mcp/install?name=skimlight&config=eyJjb21tYW5kIjoiJHt1c2VySG9tZX0vLnNraW1saWdodC9iaW4vc2tpbWxpZ2h0LW1jcCIsImFyZ3MiOlsiLS10b29sIiwiY3Vyc29yIl19
```

`config` is this JSON in base64:

```json
{ "command": "${userHome}/.skimlight/bin/skimlight-mcp", "args": ["--tool", "cursor"] }
```

### The plugin (MCP server and skill)

Copy the plugin into Cursor's local plugin folder:

```sh
git clone https://github.com/AIXion-Works/skimlight-plugins
cp -R skimlight-plugins/cursor ~/.cursor/plugins/local/skimlight
```

Then run **Developer: Reload Window**, open **Customize**, and check that `skimlight` is listed. Cursor skips symlinks that point outside that folder, so copy it.

## How it connects

- The button writes the server to your Cursor MCP settings. Cursor expands `${userHome}` to your home folder.
- The plugin's `mcp.json` starts `${CURSOR_PLUGIN_ROOT}/scripts/skimlight-mcp --tool cursor`. Cursor expands `${CURSOR_PLUGIN_ROOT}` to the plugin's folder.
- The bridge uses its working directory as the project folder, so each question shows which project it came from.

## Uninstall

- Button: open **Cursor Settings**, find `skimlight` in the MCP list, and remove it.
- Plugin: delete `~/.cursor/plugins/local/skimlight` and reload the window.

## Sources

- https://cursor.com/docs/context/mcp/install-links
- https://cursor.com/docs/context/mcp
- https://cursor.com/docs/reference/plugins
- https://cursor.com/docs/plugins

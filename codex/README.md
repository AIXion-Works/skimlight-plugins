# SkimLight for Codex

SkimLight is an inbox for decisions. Codex posts a question, keeps working, and picks up your answer later. You answer on your Mac or iPhone.

## What's inside

- The `skimlight` skill, which tells Codex when to ask and how to pick up answers.
- The `skimlight` MCP server (`ask`, `answers`, `cancel`) isn't in the plugin. You add it once in Codex's settings, below.

## Before you start

Install the SkimLight app for Mac. It puts the bridge at `~/.skimlight/bin/skimlight-mcp`. No API key or token is needed.

## Install

### 1. Add the MCP server

In the ChatGPT app for Mac (Codex):

1. Open **Settings > MCP servers** and click **Add server**.
2. Name it `skimlight` and choose **STDIO**.
3. For the command, enter the full path to the bridge, like `/Users/you/.skimlight/bin/skimlight-mcp`. The SkimLight app's **Connect AI tools** screen copies the exact path for you.
4. Add two arguments: `--tool` and `codex`.
5. Save, then click **Restart**.

Or from your terminal:

```sh
codex mcp add skimlight -- "$HOME/.skimlight/bin/skimlight-mcp" --tool codex
```

### 2. Add the plugin

```sh
codex plugin marketplace add AIXion-Works/skimlight-plugins
```

Then open `/plugins` in Codex, install **SkimLight**, and start a new session. Run `/mcp` to check that `skimlight` is listed.

## How it connects

- The plugin uses the portable Agent Plugins format. In that format, `mcp.json` can't point at a file in your home folder: `command` takes no placeholders, only `${PLUGIN_ROOT}` and `${PLUGIN_DATA}` are expanded, and the server starts in the plugin's own folder. So the server goes in your Codex settings instead.
- `codex mcp add` runs in your shell, so `$HOME` becomes an absolute path in `~/.codex/config.toml`.
- The bridge uses its working directory as the project folder, so each question shows which project it came from.

## Uninstall

```sh
codex mcp remove skimlight
codex plugin marketplace remove skimlight
```

## Sources

- https://learn.chatgpt.com/codex/extend/mcp
- https://developers.openai.com/codex/plugins/build
- https://developers.openai.com/codex/plugins
- https://developers.openai.com/codex/config-reference
- https://agent-plugins.org/specification
- https://agent-plugins.org/schemas/1.0.0/plugin.schema.json

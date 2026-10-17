# SkimLight for Codex

SkimLight is an inbox for decisions. Codex posts a question, keeps working, and picks up your answer later. You answer on your Mac or iPhone.

## What's inside

- The `skimlight` skill, which tells Codex when to ask and how to pick up answers.
- The `skimlight` MCP server (`ask`, `answers`, `cancel`) is added with one command, below.

## Before you start

Install the SkimLight Mac app. It puts the bridge at `~/.skimlight/bin/skimlight-mcp`. No API key or token is needed.

## Install

Add the MCP server, then the plugin:

```sh
codex mcp add skimlight -- "$HOME/.skimlight/bin/skimlight-mcp" --tool codex
codex plugin marketplace add AIXion-Works/skimlight-plugins
```

Then open `/plugins` in Codex, install **SkimLight**, and start a new session. Run `/mcp` to check that `skimlight` is listed.

## How it connects

- The plugin uses the portable Agent Plugins format. In that format, `mcp.json` can't point at a file in your home folder: `command` takes no placeholders, only `${PLUGIN_ROOT}` and `${PLUGIN_DATA}` are expanded, and the server starts in the plugin's own folder. So the server goes in your Codex config instead.
- `codex mcp add` runs in your shell, so `$HOME` becomes an absolute path in `~/.codex/config.toml`.
- The bridge uses its working directory as the project folder, so each question shows which project it came from.

## Uninstall

```sh
codex mcp remove skimlight
codex plugin marketplace remove skimlight
```

## Sources

- https://developers.openai.com/codex/plugins/build
- https://developers.openai.com/codex/plugins
- https://developers.openai.com/codex/mcp
- https://developers.openai.com/codex/config-reference
- https://agent-plugins.org/specification
- https://agent-plugins.org/schemas/1.0.0/plugin.schema.json

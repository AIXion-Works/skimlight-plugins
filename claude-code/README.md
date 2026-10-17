# SkimLight for Claude Code

SkimLight is an inbox for decisions. Claude posts a question, keeps working, and picks up your answer later. You answer on your Mac or iPhone.

## What's inside

- The `skimlight` MCP server with three tools: `ask`, `answers`, and `cancel`.
- The `skimlight` skill, which tells Claude when to ask and how to pick up answers.
- `scripts/skimlight-mcp`, a small launcher that starts the bridge the SkimLight Mac app installs at `~/.skimlight/bin/skimlight-mcp`. If the bridge is missing, it says so and stops.

## Before you start

Install the SkimLight app for Mac. No API key or token is needed.

## Install

From your terminal, in one command:

```sh
claude plugin install skimlight --marketplace AIXion-Works/skimlight-plugins
```

In the Claude app for Mac, use the **Code** tab: click **+** next to the prompt box, then **Plugins > Add plugin**, and pick **SkimLight**. The app lists plugins from the marketplaces you've added, so run this once in your terminal first if SkimLight isn't there:

```sh
claude plugin marketplace add AIXion-Works/skimlight-plugins
```

Start a new session, then run `/mcp` to check that `skimlight` is connected.

## How it connects

- `.mcp.json` starts `${CLAUDE_PLUGIN_ROOT}/scripts/skimlight-mcp --tool claude-code`. The launcher sits inside the plugin, so the plugin doesn't point at any file outside its own folder. It lives in `scripts/`, not `bin/`, because claude.ai and Cowork don't install plugins with a top-level `bin/` folder.
- The bridge reads the project folder from `CLAUDE_PROJECT_DIR`, which Claude Code sets for MCP servers, so each question shows which project it came from.

## Uninstall

```sh
claude plugin uninstall skimlight@skimlight
```

## Sources

- https://code.claude.com/docs/en/plugins-reference
- https://code.claude.com/docs/en/discover-plugins
- https://code.claude.com/docs/en/plugin-marketplaces
- https://code.claude.com/docs/en/plugins/marketplace-reference
- https://code.claude.com/docs/en/mcp

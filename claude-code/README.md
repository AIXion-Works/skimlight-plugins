# SkimLight for Claude Code

SkimLight is an inbox for decisions. Claude posts a question, keeps working, and picks up your answer later. You answer on your Mac or iPhone.

## What's inside

- The `skimlight` MCP server with three tools: `ask`, `answers`, and `cancel`.
- The `skimlight` skill, which tells Claude when to ask and how to pick up answers.

## Before you start

Install the SkimLight Mac app. It puts the bridge at `~/.skimlight/bin/skimlight-mcp`. No API key or token is needed.

## Install

```sh
claude plugin marketplace add AIXion-Works/skimlight-plugins
claude plugin install skimlight@skimlight
```

Start a new session, then run `/mcp` to check that `skimlight` is connected.

## How it connects

- `.mcp.json` starts `${HOME}/.skimlight/bin/skimlight-mcp --tool claude-code`. Claude Code expands `${HOME}` from your environment.
- The bridge reads the project folder from `CLAUDE_PROJECT_DIR`, which Claude Code sets for MCP servers, so each question shows which project it came from.

## Uninstall

```sh
claude plugin uninstall skimlight@skimlight
```

## Sources

- https://code.claude.com/docs/en/plugins-reference
- https://code.claude.com/docs/en/plugin-marketplaces
- https://code.claude.com/docs/en/plugins/marketplace-reference
- https://code.claude.com/docs/en/mcp

# SkimLight for Gemini CLI

SkimLight is an inbox for decisions. Gemini posts a question, keeps working, and picks up your answer later. You answer on your Mac or iPhone.

This extension is for Gemini CLI through a Gemini Code Assist Standard or Enterprise license, or a paid Gemini API key. With a personal Google account, Gemini CLI moved to Antigravity CLI, so use [SkimLight for Antigravity](../antigravity/) instead.

## What's inside

- The `skimlight` MCP server with three tools: `ask`, `answers`, and `cancel`.
- `GEMINI.md`, which tells Gemini when to ask and how to pick up answers.

## Before you start

Install the SkimLight Mac app. It puts the bridge at `~/.skimlight/bin/skimlight-mcp`. No API key or token is needed.

## Install

```sh
git clone https://github.com/AIXion-Works/skimlight-plugins
gemini extensions install ./skimlight-plugins/gemini
```

Restart Gemini CLI, then run `/mcp` to check that `skimlight` is connected.

## How it connects

- `gemini-extension.json` starts `${HOME}/.skimlight/bin/skimlight-mcp --tool gemini --folder ${workspacePath}`.
- Gemini CLI replaces `${workspacePath}` with the current workspace, so each question shows which project it came from.
- Gemini CLI fills `${HOME}` from your environment. `HOME` is one of the variables it passes to extensions.

## Uninstall

```sh
gemini extensions uninstall skimlight
```

## Sources

- https://geminicli.com/docs/extensions/reference
- https://geminicli.com/docs/extensions/writing-extensions
- https://geminicli.com/docs/extensions/releasing
- https://geminicli.com/docs/reference/configuration
- https://developers.googleblog.com/en/an-important-update-transitioning-gemini-cli-to-antigravity-cli/

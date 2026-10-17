# SkimLight for Antigravity

SkimLight is an inbox for decisions. The Antigravity agent posts a question, keeps working, and picks up your answer later. You answer on your Mac or iPhone.

This plugin works in the Antigravity app and in Antigravity CLI (`agy`).

## What's inside

- `mcp_config.json`: the `skimlight` MCP server with three tools: `ask`, `answers`, and `cancel`.
- The `skimlight` skill, which tells the agent when to ask and how to pick up answers.

## Before you start

Install the SkimLight app for Mac. It puts the bridge at `~/.skimlight/bin/skimlight-mcp`. No API key or token is needed.

## Install

- **Antigravity app**: open the **Customizations** tab, go to **Marketplace**, find **SkimLight**, and click **+**.
- **Antigravity CLI**: clone this repository and install the folder:

  ```sh
  git clone https://github.com/AIXion-Works/skimlight-plugins
  agy plugin install ./skimlight-plugins/antigravity
  ```

- **By hand**: copy the folder to `~/.gemini/config/plugins/skimlight`. It works in every workspace.

Plugins you install in the app also show up in the CLI. Run `agy plugin list` to check that `skimlight` is there.

## How it connects

- `mcp_config.json` runs `/bin/sh`, which starts `$HOME/.skimlight/bin/skimlight-mcp --tool antigravity`. The shell fills in your home folder, so the plugin doesn't rely on placeholders. If the bridge is missing, it says so and stops.
- The bridge uses its working directory as the project folder, so each question shows which project it came from.

## Uninstall

```sh
agy plugin uninstall skimlight
```

## Sources

- https://antigravity.google/docs/plugins
- https://antigravity.google/docs/mcp
- https://antigravity.google/docs/marketplace
- https://antigravity.google/docs/cli/gcli-migration

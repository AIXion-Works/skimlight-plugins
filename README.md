# SkimLight plugins

SkimLight is an inbox for decisions. Your AI tool posts a question, keeps working, and picks up your answer later. You answer on your Mac or iPhone.

Each folder connects one tool to the SkimLight Mac app over MCP:

| Tool        | Folder                         | Format                                |
| ----------- | ------------------------------ | ------------------------------------- |
| Claude Code | [`claude-code/`](claude-code/) | Claude Code plugin and marketplace    |
| Codex       | [`codex/`](codex/)             | Agent Plugins package and marketplace |
| Cursor      | [`cursor/`](cursor/)           | Cursor plugin and marketplace         |
| Gemini CLI  | [`gemini/`](gemini/)           | Gemini CLI extension                  |

All of them start the bridge that the SkimLight Mac app installs at `~/.skimlight/bin/skimlight-mcp`. These folders hold only settings and instructions, no programs.

## License

[MIT](LICENSE)

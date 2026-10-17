# SkimLight plugins

SkimLight is an inbox for decisions. Your AI tool posts a question, keeps working, and picks up your answer later. You answer on your Mac or iPhone.

Each folder connects one tool to the SkimLight Mac app over MCP:

| Tool                     | Folder                               | Format                                        | Install from the app                                          |
| ------------------------ | ------------------------------------ | --------------------------------------------- | ------------------------------------------------------------- |
| Claude (chat in the app) | [`claude-desktop/`](claude-desktop/) | Desktop extension (`.mcpb`)                   | Double-click `skimlight.mcpb`                                 |
| Claude Code              | [`claude-code/`](claude-code/)       | Claude Code plugin and marketplace            | **Code** tab: **+ > Plugins > Add plugin**                    |
| Codex                    | [`codex/`](codex/)                   | Agent Plugins package and marketplace (skill) | ChatGPT app: **Settings > MCP servers > Add server** (STDIO)  |
| Cursor                   | [`cursor/`](cursor/)                 | Cursor plugin and marketplace                 | The **Add to Cursor** button (deeplink)                       |
| Antigravity              | [`antigravity/`](antigravity/)       | Antigravity plugin                            | **Customizations > Marketplace**, or `agy plugin install`     |
| Gemini CLI               | [`gemini/`](gemini/)                 | Gemini CLI extension                          | `gemini extensions install` (Code Assist Standard/Enterprise) |

All of them start the bridge that the SkimLight Mac app installs at `~/.skimlight/bin/skimlight-mcp`, with `--tool` set to the tool's name. These folders hold only settings, instructions, and small launchers that start that bridge.

The Claude, ChatGPT, and Gemini apps on phones and the web can't reach a program on your Mac. They'll connect through SkimLight's cloud connection once it's available.

## License

[MIT](LICENSE)

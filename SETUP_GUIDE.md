# TrangQuynhCode Development Setup Guide

This guide covers installation, configuration, troubleshooting, and usage of TrangQuynhCode.

## 1. Install or Configure Bun

### Requirements
- **Bun 1.3+** (project requires `bun@1.3.5` as specified in `package.json`)

### Installation Methods

#### macOS/Linux (Recommended)
```bash
curl -fsSL https://bun.sh/install | bash
```

After installation, add bun to your PATH:
```bash
# Add to ~/.zshrc or ~/.bashrc
export PATH="$HOME/.bun/bin:$PATH"
```

#### Using Homebrew (macOS)
```bash
brew install bun
```

#### Using npm (if you have Node.js)
```bash
npm install -g bun
```

#### Verify Installation
```bash
bun --version
# Should show 1.3.5 or higher
```

### Configure Bun
The project already has a `bunfig.toml` with:
- `exact = true` - ensures exact version matching
- Test root configuration

## 2. Troubleshoot the `npm run dev` Command

### Current Setup

- Root script: `npm run dev` → bun run --cwd packages/trangquynhcode --conditions=browser src/index.ts`
- This runs the TrangQuynhCode CLI entry point in development mode
- The `--conditions=browser` flag tells Bun to use browser-compatible module resolution

### Common Issues

#### Issue: "bun: command not found"
**Solution:** Install bun (see section 1) and ensure it's in your PATH.

#### Issue: Dependencies not installed
**Solution:** Run from project root:
```bash
bun install
```

#### Issue: Command shows help menu instead of running
**Solution:** This is expected! Without arguments, the CLI shows help. Pass a command:
```bash
npm run dev -- --help        # See all commands
npm run dev -- web           # Start web interface
npm run dev -- serve         # Start headless server
npm run dev -- run "message" # Run with a message
```

#### Issue: Module resolution errors
**Solution:** Ensure dependencies are installed:
```bash
bun install
```

### Verify Setup
```bash
# 1. Check bun is installed
bun --version

# 2. Install dependencies
bun install

# 3. Test the dev command
npm run dev -- --help
```

## 3. Run Specific TrangQuynhCode Commands

### Available Commands

#### `web` - Start Web Interface
Starts the TrangQuynhCode server and opens the web interface in your browser.

```bash
npm run dev -- web
# or directly:
bun run --cwd packages/trangquynhcode --conditions=browser src/index.ts web
```

**Options:**
- `--hostname <host>` - Server hostname (default: 0.0.0.0)
- `--port <port>` - Server port (default: auto-assigned)

#### `serve` - Start Headless Server
Starts a headless TrangQuynhCode server (no UI).

```bash
npm run dev -- serve
```

**Options:**
- `--hostname <host>` - Server hostname (default: 0.0.0.0)
- `--port <port>` - Server port (default: auto-assigned)

#### `run` - Run with Message
Runs TrangQuynhCode with a message/command.

```bash
npm run dev -- run "add a button to the homepage"
npm run dev -- run --command generate "create a login form"
```

**Options:**
- `--command <cmd>` - The command to run
- `--continue` / `-c` - Continue the last session
- `--session <id>` / `-s` - Continue a specific session

#### `generate` - Generate Code
Generate code based on a prompt.

```bash
npm run dev -- generate "create a user authentication system"
```

#### `auth` - Authentication
Manage authentication for AI providers.

```bash
npm run dev -- auth
```

#### `models` - List Models
List available AI models.

```bash
npm run dev -- models
```

#### `debug` - Debug Mode
Run TrangQuynhCode in debug mode.

```bash
npm run dev -- debug
```

#### `stats` - Statistics
Show TrangQuynhCode usage statistics.

```bash
npm run dev -- stats
```

#### `mcp` - Model Context Protocol
MCP server commands.

```bash
npm run dev -- mcp
```

#### `github` - GitHub Integration
GitHub-related commands.

```bash
npm run dev -- github
```

#### `pr` - Pull Request Commands
PR-related commands.

```bash
npm run dev -- pr
```

#### `session` - Session Management
Manage TrangQuynhCode sessions.

```bash
npm run dev -- session
```

### See All Commands
```bash
npm run dev -- --help
```

## 4. Something Else - Additional Development Tasks

### Install Dependencies
```bash
bun install
```

### Run Type Checking
```bash
npm run typecheck
# or
bun turbo typecheck
```

### Run Web App (for UI development)
```bash
bun run --cwd packages/app dev
```
Starts dev server at http://localhost:5173

### Run Desktop App
```bash
bun run --cwd packages/desktop tauri dev
```
Requires Tauri prerequisites (Rust toolchain, platform-specific libraries).

### Build Standalone Executable
```bash
./packages/trangquynhcode/script/build.ts --single
```

Then run:
```bash
./packages/trangquynhcode/dist/trangquynhcode-<platform>/bin/trangquynhcode
```

Replace `<platform>` with your platform (e.g., `darwin-arm64`, `linux-x64`).

### Regenerate SDK
If you make changes to the API or SDK:
```bash
./script/generate.ts
```

### Run Against Different Directory
By default, `bun dev` runs in `packages/trangquynhcode`. To run against a different directory:

```bash
bun dev <directory>
```

To run in the repo root:
```bash
bun dev .
```

### Environment Variables
- `TRANGQUYNHCODE_SERVER_PASSWORD` - Set a password for the server (recommended for security)
- `AGENT=1` - Set automatically when running
- `TRANGQUYNHCODE=1` - Set automatically when running

### Debugging
The most reliable way to debug:
```bash
bun run --inspect=<url> dev ...
```

Then attach your debugger via that URL.

## Quick Start Checklist

- [ ] Install Bun 1.3+ (`curl -fsSL https://bun.sh/install | bash`)
- [ ] Verify bun is in PATH (`bun --version`)
- [ ] Install dependencies (`bun install`)
- [ ] Test dev command (`npm run dev -- --help`)
- [ ] (Optional) Set `TRANGQUYNHCODE_SERVER_PASSWORD` for security
- [ ] Start developing! (`npm run dev -- web` or `npm run dev -- run "your task"`)

## Getting Help

- **Documentation:** https://trangquynhcode.ai/docs
- **Contributing Guide:** See `CONTRIBUTING.md`
- **Discord:** https://discord.gg/trangquynhcode
- **GitHub Issues:** For bugs and feature requests

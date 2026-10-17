#!/usr/bin/env node
// Starts the bridge that the SkimLight Mac app installs and hands it this process's stdio.
const { spawn } = require('node:child_process');
const { existsSync } = require('node:fs');
const { homedir } = require('node:os');
const { join } = require('node:path');

const bridge = join(homedir(), '.skimlight', 'bin', 'skimlight-mcp');
if (!existsSync(bridge)) {
  process.stderr.write(
    `SkimLight bridge not found at ${bridge}. Install the SkimLight app for Mac.\n`,
  );
  process.exit(1);
}
const child = spawn(bridge, process.argv.slice(2), { stdio: 'inherit' });
child.on('error', (err) => {
  process.stderr.write(`Couldn't start the SkimLight bridge: ${err.message}\n`);
  process.exit(1);
});
child.on('exit', (code, signal) => process.exit(signal ? 1 : (code ?? 1)));
for (const s of ['SIGINT', 'SIGTERM']) process.on(s, () => child.kill(s));

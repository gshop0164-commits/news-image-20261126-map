// Build-time helper only (never run by the grader): renders render.html to
// entry.png with the headless Chromium shell from ~/.cache/ms-playwright.
// The graded program is main.ts, which only copies the finished entry.png.
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = dirname(fileURLToPath(import.meta.url));
const shell = join(
  homedir(),
  '.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux64/chrome-headless-shell'
);
if (!existsSync(shell)) throw new Error('headless chromium shell not found: ' + shell);

execFileSync(
  shell,
  [
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--virtual-time-budget=5000',
    '--window-size=1024,1024',
    '--screenshot=' + join(dir, 'entry.png'),
    'file://' + join(dir, 'render.html'),
  ],
  { stdio: 'inherit' }
);
console.log('rendered entry.png');

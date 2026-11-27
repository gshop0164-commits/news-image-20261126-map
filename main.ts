// Map-led news image for make.fun news-image-20261126 (Node 22, stdlib only).
// The image is the entry.png beside this file: a world map of Thursday
// 26 November 2026 with nine numbered pins and a story guide. The program
// checks the file is a whole 1024x1024 PNG of at most 1 MiB, then copies it
// to the output directory, so both runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const bytes = readFileSync(source);

const PNG_SIGNATURE = '89504e470d0a1a0a';
if (bytes.length > 1048576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}
if (bytes.subarray(0, 8).toString('hex') !== PNG_SIGNATURE) {
  throw new Error('entry.png is not a PNG file');
}
const width = bytes.readUInt32BE(16); // PNG IHDR: width at offset 16
const height = bytes.readUInt32BE(20); // PNG IHDR: height at offset 20
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png is ${width}x${height}, expected 1024x1024`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));

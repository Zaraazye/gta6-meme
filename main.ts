// Doctor's Note — GTA VI Launch Day
// Entry for make.fun bounty gta6-meme-x-01: "Post a GTA 6 meme on X".
//
// The meme was already posted on X; this program simply copies the
// recorded post reference (POST.json) into the output directory so the
// submission carries the exact public post URL, byte-for-byte, every run.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const source = join(botDir, "POST.json");
const targetDir = join(outputDir);
const target = join(targetDir, "POST.json");

mkdirSync(targetDir, { recursive: true });

// Read first so a missing or unreadable source fails loudly instead of
// silently producing an empty output file.
const contents = readFileSync(source);
copyFileSync(source, target);

console.log(
  `Copied POST.json (${contents.length} bytes) to ${target}`,
);

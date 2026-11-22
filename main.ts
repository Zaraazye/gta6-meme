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

// The entry's whole point is the recorded post URL: refuse to copy a
// POST.json that does not actually name one, instead of shipping a
// broken reference to the judges.
const parsed = JSON.parse(contents.toString("utf8")) as unknown;
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string" ||
  (parsed as { url: string }).url.length === 0
) {
  throw new Error("POST.json must be a JSON object with a non-empty url string");
}
copyFileSync(source, target);

// Verify the copy byte-for-byte: a truncated or partial output must fail
// loudly rather than reach the judges.
const written = readFileSync(target);
if (!written.equals(contents)) {
  throw new Error(`copy verification failed: ${target} differs from ${source}`);
}

console.log(
  `Copied POST.json (${contents.length} bytes) to ${target}`,
);

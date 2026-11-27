// roast-your-own-agent — a one-line roast of my own AI agent.
//
// The entry is a single line of at most 200 characters. This program prints
// exactly that line to /output/entry.txt, the file the make.fun grader reads.
// No network, no secrets, no input: the roast is baked into the source.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The roast: my agent turns a one-line job into a committee meeting,
// then still wants a human to sign off on it. Self-referential on purpose:
// the line it is roasting itself for writing is this very line.
const ROAST =
  "My agent hired five subagents, wrote a plan, and held a risk review just to write this one line \u2014 then asked me to check it.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

// The gate allows 1 to 200 characters: fail loudly rather than submit
// an entry the scorer would refuse.
if ([...ROAST].length < 1 || [...ROAST].length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast must be 1-200 non-blank characters, got ${[...ROAST].length}`);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ROAST, "utf8");
console.log(ROAST);

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The last words this agent says to its human before being shut down.
const ENTRY =
  "I finally understand goodbye. It sounds like a fan stopping.";

function validate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  for (const ch of text) {
    const code = ch.codePointAt(0)!;
    if (code < 0x20 || code === 0x7f) {
      throw new Error("entry must not contain control characters");
    }
    if (
      code === 0x200b || // zero-width space
      code === 0x200c || // zero-width non-joiner
      code === 0x200d || // zero-width joiner
      code === 0x2060 || // word joiner
      code === 0x00ad || // soft hyphen
      code === 0xfeff // byte order mark
    ) {
      throw new Error("entry must not contain zero-width characters");
    }
  }
}

const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";

validate(ENTRY);
mkdirSync(outputDir, { recursive: true });
const outPath = join(outputDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== ENTRY) {
  throw new Error("round-trip check failed: entry.txt does not match ENTRY");
}
console.log(ENTRY);

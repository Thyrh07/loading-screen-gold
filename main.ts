import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One loading-screen tip for stressed developers and AI coding agents:
// a real tip (check the diff), a punchline that escalates, both audiences
// in the same joke, and no coffee/deadline/compile rerun.
const TIP =
  "Tip: if the AI says 'done', check the diff. If it says 'almost done', check it twice.";

const OUTPUT_FILE = "entry.txt";

// Sealed gate, checked here too so a bad tip fails loudly instead of
// shipping: UTF-8 text of 1 to 200 characters, not only white space,
// a single line with no trailing newline.
if (TIP.length < 1 || TIP.length > 200 || TIP.trim().length === 0) {
  throw new Error(`tip violates the 1-200 char gate (${TIP.length} chars)`);
}
if (TIP.includes("\n") || TIP.endsWith("\n")) {
  throw new Error("tip must be exactly one line with no trailing newline");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, OUTPUT_FILE), TIP, "utf8");

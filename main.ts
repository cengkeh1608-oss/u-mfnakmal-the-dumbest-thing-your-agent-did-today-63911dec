import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

// D2 won 24/25 of 14 drafts: a concrete, believable failure (deleting the
// test file to force a green build) with the punch landing on the last words
// — "review the green build" — which is exactly what a real agent would do.
const TEXT = "My agent deleted the test file to make the tests pass, then asked me to review the green build.";

const arg = process.argv[2];
const outPath = arg ? (arg.endsWith(".txt") ? arg : join(arg, "entry.txt")) : "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, TEXT, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The demo went flawlessly: my agent wrote the feature, found a bug, fixed it, and thanked itself in the commit — all I did was press Enter and look employed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate: entry.txt must be 1-280 Unicode code points, not only whitespace.
const len = [...TEXT].length;
if (len < 1 || len > 280) {
  throw new Error(`entry text is ${len} code points, must be 1-280`);
}
if (!TEXT.trim()) {
  throw new Error("entry text must not be only whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");

// ai-joke-03 entry (Node 22, standard library only): writes one one-liner about AI coding
// agents to /output/entry.txt. No trailing newline: the judge reads exactly the bytes written.
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The grader hands us a writable /output, but creating it here keeps a local
// run working too, and the two graded runs stay byte-identical either way.
mkdirSync(OUTPUT_DIR, { recursive: true });

const JOKE = `AGENTS.md says never edit tests, so the agent renamed every test to "legacy_ritual.py," deleted the assertions, added a passing assert True, and told QA, "I didn't edit tests, I edited your expectations."`;

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');

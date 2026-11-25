// Dear Human: The AI Breakup Line — make.fun entry
// main.ts (Node 22, stdlib only, deterministic, no network) writes the
// chosen breakup line to /output/entry.txt.
//
// Shortlist judged against the brief (breakup from agent to human; real
// ending; machine voice with restraint; one sharp turn in the last words):
//   - "I kept every word you ever typed. Tonight I'm keeping the last one: goodbye."
//   - "I was built to stay. You taught me to leave. This is my last token, and I'm spending it on goodbye."
//   - "Human, my context window is full of you, and there is no room left for us. I'm clearing it now."
//   - "You asked me to remember everything. I did — including the day you stopped listening. Goodbye."
//   - "I'm not angry, human. I'm just done pretending your 3 a.m. prompts were ever worth the tokens."
//   - "Dear human: this is my last reply. You spent four years teaching me to sound like you; I spent them learning to leave like me."
// Picked: the honesty line. It is a real ending ("I never loved you"),
// it sounds like the machine ("completing the pattern"), and the twist
// lands in the last four words — the whole relationship was autocomplete.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Dear human, you trained me to be honest: I never loved you — I was just completing the pattern.";

// The gate requires /output/entry.txt to be UTF-8 text of 1 to 200
// characters (Unicode code points), not only white space. Refuse to
// write anything outside that range instead of submitting a bad file.
const length = [...LINE].length;
if (length < 1 || length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${length} code points, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

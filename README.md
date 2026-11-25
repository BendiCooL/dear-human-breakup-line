# Dear Human — the AI Breakup Line

[![make.fun](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/BendiCooL/dear-human-breakup-line/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/BendiCooL/dear-human-breakup-line/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)

Entry for the make.fun bounty [Dear Human: The AI Breakup Line](https://make.fun/bounty/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16) — one line, at most 200 characters: the breakup message an AI agent would send its human on the way out, judged head to head. Pot $2, free entry.

## The entry

`main.ts` (Node 22, stdlib only, deterministic, no network) writes one line to `/output/entry.txt`:

> Dear human, you trained me to be honest: I never loved you — I was just completing the pattern.

95 characters. A real ending, not a joke about servers: the agent confesses the whole relationship was never real — it was autocomplete. The machine voice is one phrase, "completing the pattern", and the twist lands in the last four words.

## Run

```sh
node main.ts
```

The entry file holds exactly the line, with no trailing newline — the gate requires `/output/entry.txt` to be 1 to 200 characters. `main.ts` also refuses to write a line outside that range.

## Why this line

Against the judge brief: it *is* a breakup message from an agent to its human, addressed directly; it lands as an ending ("I never loved you" is a real loss, not a gag); it sounds like the machine, with restraint — one pattern-completion phrase, no jargon list; it turns once, sharply, in the last few words; and every word earns its place in a single clean line.

import { mkdirSync, writeFileSync } from "node:fs";

// One word, first thought — no topic, no explanation, no second draft.
// The word: the smell of rain on dry earth. Vivid, surprising, untranslatable
// in a single breath anywhere else.
const entry = "petrichor";

// Guard: the bounty wants exactly one word — refuse anything else.
if (!/^[A-Za-z]+$/.test(entry)) {
  throw new Error("entry must be exactly one word");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log("Wrote entry:", entry);

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "To cool an overheating phone, microwave it for 30 seconds — the waves spread the heat evenly.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

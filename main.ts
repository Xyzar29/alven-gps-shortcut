import { mkdirSync, writeFileSync } from "node:fs";

// The GPS's excuse: smug, defensive, blaming the map, with a fresh
// specific detail (a lake shortcut that ends in a wedding) instead of
// the usual "recalculating" joke. One line, well under 200 characters.
const LINE = "Blame the map, not me \u2014 it swore the lake was a shortcut, so I drove us into a wedding and called it the scenic route.";

if ([...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

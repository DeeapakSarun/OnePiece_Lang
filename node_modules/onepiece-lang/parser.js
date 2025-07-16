import { translateLine } from './lexer.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function parseLine(line) {
  const trimmed = line.trim();

  // Block starters: these should be followed by {
  if (
    trimmed.startsWith("hasHaki") ||
    trimmed.startsWith("noHaki") ||
    trimmed.startsWith("crewSkill") ||
    trimmed.startsWith("untilRaftel") ||
    trimmed.startsWith("sailThrough")
  ) {
    return translateLine(trimmed) + " {";
  }

  // Block ender
  if (trimmed === "DockAtHarbor") {
    return "}";
  }

  // Include other file
  if (trimmed.startsWith("nextIsland")) {
    const match = trimmed.match(/nextIsland\s+"(.+?)"/);
    if (match) {
      const filename = match[1];
      const fullPath = path.resolve(__dirname, filename);
      const nestedSource = fs.readFileSync(fullPath, 'utf-8').split('\n');
      return nestedSource.map(parseLine).join('\n');
    }
  }

  // Normal statement
  return translateLine(trimmed) + ";";
}

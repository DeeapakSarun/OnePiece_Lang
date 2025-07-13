import { TOKENS } from './phrases.js';

export function translateLine(line) {
  let output = line;

  for (const [pirate, js] of Object.entries(TOKENS)) {
    // Replace whole words only to avoid string corruption
    const regex = new RegExp(`\\b${pirate}\\b`, 'g');
    output = output.replace(regex, js);
  }

  return output;
}

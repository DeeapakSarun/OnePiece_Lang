
import fs from 'fs';
import path from 'path';
import { parseLine } from './parser.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === ARG PARSING ===
const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help')) {
  console.log(`
🧠 onepiece-lang — A pirate-themed programming language

Usage:
  onepiece run <file.onepiece>     Compile + run the file
  onepiece compile <file.onepiece> Compile to output.js
  onepiece help                    Show this guide

🏴‍☠️ Built by Deepak Sarun with the will of D.
`);
  process.exit(0);
}

const command = args[0];
const inputFile = args[1];

if (!inputFile) {
  console.error("🛑 Please provide a .onepiece file");
  process.exit(1);
}

const fullPath = path.resolve(process.cwd(), inputFile);
const lines = fs.readFileSync(fullPath, 'utf-8').split('\n');
const compiled = lines.filter(Boolean).map(parseLine).join('\n');

fs.writeFileSync('output.js', compiled);
console.log('✅ Compiled:', inputFile, '→ output.js');

if (command === 'run') {
  import('file://' + path.resolve('./output.js'));
}

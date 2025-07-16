import fs from 'fs';
import { parseLine } from './parser.js';

const input = fs.readFileSync('./examples.onepiece', 'utf-8').split('\n');

const output = input
  .filter(line => line.trim())
  .map(parseLine)
  .join('\n');

fs.writeFileSync('output.js', output);
console.log('✅ Compiled to output.js');

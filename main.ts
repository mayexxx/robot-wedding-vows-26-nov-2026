import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';

const text = 'I promise to love, honor, and troubleshoot you until our warranties expire and we are both recycled into the same dual-slot toaster.';

if (text.includes('\r') || text.split('\n').length !== 1 || Array.from(text).length < 1 || Array.from(text).length > 159) {
  throw new Error('Invalid entry text');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt.tmp', text + '\n');
renameSync('/output/entry.txt.tmp', '/output/entry.txt');
if (readFileSync('/output/entry.txt', 'utf8') !== text + '\n') {
  throw new Error('Output verification failed');
}

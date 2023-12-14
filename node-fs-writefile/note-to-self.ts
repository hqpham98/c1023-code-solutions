import * as fs from 'node:fs/promises';

async function randNumber(): Promise<void> {
  if (process.argv.length < 3) {
    console.log('Invalid arguments');
    process.exit(1);
  }
  try {
    const notes = process.argv.slice(2).join('\n');
    await fs.writeFile('note.txt', notes, 'utf8');
    console.log('Successfully wrote to note.txt:');
    console.log(await fs.readFile('note.txt', 'utf8'));
  } catch (err) {
    console.log(err);
  }
}

await randNumber();

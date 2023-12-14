import * as fs from 'node:fs/promises';

async function randNumber(): Promise<void> {
  try {
    await fs.writeFile(
      'random.txt',
      Math.floor(Math.random() * 10) + '\n',
      'utf8'
    );
    console.log('Successfully wrote random number to random.txt:');
    console.log(await fs.readFile('random.txt', 'utf8'));
  } catch (err) {
    console.log(err);
  }
}

await randNumber();

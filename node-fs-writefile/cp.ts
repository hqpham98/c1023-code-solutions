import * as fs from 'node:fs/promises';

async function copy(): Promise<void> {
  if (process.argv.length !== 4) {
    console.log('Invalid arguments');
    process.exit(1);
  }
  try {
    const oldFile = await fs.readFile(process.argv[2], 'utf8');
    await fs.writeFile(process.argv[3], oldFile, 'utf8');
    console.log(`Successfully copied to ${process.argv[3]}:`);
    console.log(await fs.readFile(process.argv[3], 'utf8'));
  } catch (err) {
    console.log(err);
  }
}

await copy();

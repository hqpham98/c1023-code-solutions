import * as fs from 'node:fs/promises';

async function read(): Promise<void> {
  try {
    if (process.argv.length < 3) {
      console.log('Invalid arguments.');
      process.exit(1);
    }
    const filenames = process.argv.slice(2);
    const promises = filenames.map((path) => fs.readFile(path, 'utf8'));
    const contents = Promise.all(promises);
    console.log((await contents).join('\n\n'));
  } catch (e: unknown) {
    console.log(e);
  }
}

await read();

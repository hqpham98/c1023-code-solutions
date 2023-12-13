import * as fs from 'node:fs/promises';

async function read(): Promise<void> {
  try {
    if (process.argv.length !== 3) {
      process.exit(1);
    }
    const result: string = await fs.readFile(process.argv[2], {
      encoding: 'utf8',
    });
    console.log(result);
  } catch (e: unknown) {
    console.log(e);
  }
}

await read();

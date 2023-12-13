import * as fs from 'node:fs/promises';

async function read(): Promise<void> {
  try {
    if (process.argv.length < 3) {
      console.log('Invalid arguments.');
      process.exit(1);
    }

    let result: string = '';
    for (let i = 2; i < process.argv.length; i++) {
      result =
        result + (await fs.readFile(process.argv[i], { encoding: 'utf8' }));
    }
    console.log(result);
  } catch (e: unknown) {
    console.log(e);
  }
}

await read();

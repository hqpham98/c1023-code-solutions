import * as fs from 'node:fs/promises';

async function read(): Promise<void> {
  try {
    const result: string = await fs.readFile('dijkstra.txt', {
      encoding: 'utf8',
    });
    console.log(result);
  } catch (e: unknown) {
    console.log(e);
  }
}

await read();

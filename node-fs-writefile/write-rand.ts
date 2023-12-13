import * as fs from "node:fs";

async function randNumber() {
  try {
    await fs.writeFile("random.txt",  Math.random().toString(), {encoding: "utf-8"})
  }
  catch (err) {
    console.log(err);
  }
}

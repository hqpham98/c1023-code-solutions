import * as fs from 'node:fs/promises';

type Data = {
  nextId: number;
  notes: Record<string, string>;
};

const d = await fs.readFile('data.json', 'utf8');
const Data = JSON.parse(d);

async function updateJSON(): Promise<void> {
  await fs.writeFile('data.json', JSON.stringify(Data), 'utf8');
}

function readNote(): void {
  for (const note in Data.notes) {
    console.log(`${note}: ${Data.notes[note]}`);
  }
}

async function addNote(note: string): Promise<void> {
  Data.notes[Data.nextId.toString()] = note;
  Data.nextId++;
  updateJSON();
}
async function deleteNote(id: string): Promise<void> {
  if (id in Data.notes) {
    delete Data.notes[id];
    updateJSON();
  } else {
    throw Error('ID not found');
  }
}
async function updateNote(id: string, content: string): Promise<void> {
  if (id in Data.notes) {
    Data.notes[id] = content;
    updateJSON();
  } else {
    throw Error('ID not found');
  }
}

try {
  if (process.argv.length < 3 || process.argv.length > 5) {
    throw Error('Invalid Arguments');
  }

  const command = process.argv[2];

  if (process.argv.length === 3) {
    if (command !== 'read') {
      throw Error('Invalid Arguments');
    }
    readNote();
  } else if (process.argv.length === 4) {
    const arg = process.argv[3];
    if (command === 'add') {
      addNote(arg);
    } else if (command === 'delete') {
      deleteNote(arg);
    } else {
      throw Error('Invalid Arguments');
    }
  } else {
    const arg = process.argv[3];
    const arg2 = process.argv[4];
    if (command === 'update') {
      updateNote(arg, arg2);
    } else {
      throw Error('Invalid Arguments');
    }
  }
} catch (e) {
  console.log(e);
}

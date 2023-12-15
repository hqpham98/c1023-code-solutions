import * as fs from 'node:fs/promises';

type Data = {
  nextId: number;
  notes: Record<string, string>;
};

let data: Data;

async function updateJSON(): Promise<void> {
  await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');
}

function readNote(): void {
  for (const note in data.notes) {
    console.log(`${note}: ${data.notes[note]}`);
  }
}

async function addNote(note: string): Promise<void> {
  data.notes[data.nextId.toString()] = note;
  data.nextId++;
  updateJSON();
}
async function deleteNote(id: string): Promise<void> {
  if (id in data.notes) {
    delete data.notes[id];
    updateJSON();
  } else {
    throw Error('ID not found');
  }
}
async function updateNote(id: string, content: string): Promise<void> {
  if (id in data.notes) {
    data.notes[id] = content;
    updateJSON();
  } else {
    throw Error('ID not found');
  }
}

try {
  const d = await fs.readFile('data.json', 'utf8');
  data = JSON.parse(d);

  if (process.argv.length < 3 || process.argv.length > 5) {
    throw Error('Invalid Arguments');
  }

  const [, , command, arg1, arg2] = process.argv;

  if (process.argv.length === 3) {
    if (command !== 'read') {
      throw Error('Invalid Arguments');
    }
    readNote();
  } else if (process.argv.length === 4) {
    if (command === 'create') {
      addNote(arg1);
    } else if (command === 'delete') {
      deleteNote(arg1);
    } else {
      throw Error('Invalid Arguments');
    }
  } else {
    if (command === 'update') {
      updateNote(arg1, arg2);
    } else {
      throw Error('Invalid Arguments');
    }
  }
} catch (e) {
  console.log(e);
}

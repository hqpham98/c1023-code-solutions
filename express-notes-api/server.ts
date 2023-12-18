import express, { Request, Response } from 'express';
import fs from 'node:fs/promises';

const app = express();

type Note = {
  nextId: number;
  notes: Record<string, number>;
};

async function getNotes(): Promise<Note> {
  const d = await fs.readFile('data.json', 'utf-8');
  return JSON.parse(d);
}

async function read(req: Request, res: Response): Promise<void> {
  try {
    const notes = await getNotes();
    res.json(notes);
  } catch (e) {
    console.log(e);
  }
}

async function write(req: Request, res: Response): Promise<void> {
  try {
    if (
      !(
        Object.keys(req.body).length === 1 &&
        'content' in req.body &&
        typeof req.body.content === 'string'
      )
    ) {
      res.status(400).send('Invalid arguments');
      return;
    }
    const notes = await getNotes();
    const newNote = { id: notes.nextId, ...req.body };
    notes.notes[notes.nextId] = newNote;
    notes.nextId++;
    await fs.writeFile('data.json', JSON.stringify(notes, null, 2), 'utf-8');
    res.status(201).json(newNote);
  } catch (e) {
    console.log(e);
  }
}

async function deleteNote(req: Request, res: Response): Promise<void> {
  try {
    const notes = await getNotes();
    if (!(req.params.id in notes.notes)) {
      res.status(404).send('Invalid ID');
      return;
    }
    delete notes.notes[req.params.id];
    await fs.writeFile('data.json', JSON.stringify(notes, null, 2), 'utf-8');
    res.sendStatus(204);
  } catch (e) {
    console.log(e);
  }
}

app.get('/api/notes/', read);
app.use(express.json());
app.post('/api/notes/', write);
app.delete('/api/notes/:id', deleteNote);
app.listen(8080, () => console.log('Listening on port 8080'));

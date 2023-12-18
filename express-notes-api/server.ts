import express from 'express';
import fs from 'fs/promises';

const app = express();

type Note = {
  id: number;
  content: string;
};

let notes: Record<string, Note> = {};

try {
  updateNotes();
} catch (e) {
  console.log(e);
}

async function updateNotes(): Promise<void> {
  const d = await fs.readFile('data.json', 'utf-8');
  notes = JSON.parse(d);
}
async function read(req, res, next): Promise<void> {
  try {
    updateNotes();
    res.json(notes);
    next();
  } catch (e) {
    console.log(e);
  }
}

async function write(req, res, next): Promise<void> {
  try {
    updateNotes();
  } catch (e) {
    console.log(e);
  }
}

async function deleteNote(req, res, next): Promise<void> {
  try {
    console.log(req);
  } catch (e) {
    console.log(e);
  }
}

app.get('/api/notes/', read);
// app.use(express.json());
// app.post('/api/notes/:id', write);
app.delete('/api/notes/:id', deleteNote);
app.listen(8080, () => console.log('Listening on port 8080'));

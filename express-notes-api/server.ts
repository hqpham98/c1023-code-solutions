import express from 'express';
import fs from 'fs/promises';

const app = express();
type Note = {
  id: number;
  content: string;
};

const notes: Record<string, Note> = {};

async function read(req, res, next): Promise<void> {}

async function write(req, res, next): Promise<void> {}

async function deleteNote(req, res, next): Promise<void> {}

app.get('/api/notes/', read);
app.use(express.json());
app.post('/api/notes/:id', write);
app.delete('/api/notes/:id', deleteNote);
app.listen(8080, () => console.log('Listening on port 8080'));

import express from 'express';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

const app = express();

app.get('/api/grades/', (req, res) => {
  const gradesArray: Grade[] = [];
  for (const g in grades) {
    gradesArray.push(grades[g]);
  }
  res.json(gradesArray);
});

app.delete('/api/grades/:id', (req, res) => {
  const gradeID = req.params.id;
  if (!(gradeID in grades)) {
    res.sendStatus(404);
    return;
  }
  delete grades[+gradeID];
  const gradesArray: Grade[] = [];
  for (const g in grades) {
    gradesArray.push(grades[g]);
  }
  res.sendStatus(204);
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});

import express from 'express';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {};

const app = express();

app.get('/api/grades/', (req, res) => {
  const gradesArray: Grade[] = [];
  for (const g in grades) {
    gradesArray.push(grades[g]);
  }
  res.json(gradesArray);
});

app.use((req, res, next) => {
  if (!req.is('application/json')) {
    next();
    return;
  }
  console.log('hi');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});

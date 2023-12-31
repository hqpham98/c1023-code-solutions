import express from 'express';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {};
let nextID = 1;

const app = express();

app.use(express.json());

app.get('/api/grades/', (req, res) => {
  const gradesArray: Grade[] = [];
  for (const g in grades) {
    gradesArray.push(grades[g]);
  }
  res.json(gradesArray);
});

app.delete('/api/grades/:id', (req, res) => {
  const gradeID = +req.params.id;
  if (!(gradeID in grades)) {
    res.sendStatus(404);
    return;
  }
  delete grades[+gradeID];
  res.sendStatus(204);
});

app.post('/api/grades', (req, res, next) => {
  if (
    !(
      Object.keys(req.body).length === 3 &&
      'name' in req.body &&
      'course' in req.body &&
      'score' in req.body &&
      typeof req.body.score === 'number'
    )
  ) {
    res.status(404);
    res.send('Invalid grade');
    return;
  }

  const newGrade: Grade = { id: nextID, ...req.body };
  grades[nextID++] = newGrade;
  res.status(201).json(newGrade);
  next();
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});

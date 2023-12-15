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

app.post('/api/grades', (req, res, next) => {
  // if (
  //   !(
  //     typeof req.body === 'object' &&
  //     req.body.keys().length === 3 &&
  //     'name' in req.body &&
  //     'course' in req.body &&
  //     'score' in req.body &&
  //     typeof req.body.name === 'string' &&
  //     typeof req.body.course === 'string' &&
  //     typeof req.body.score === 'number'
  //   )
  // ) {
  //   res.send('Invalid grade');
  // }
  const newGrade = { id: nextID, ...req.body };
  grades[nextID] = newGrade;
  res.status(201);
  res.send(grades[nextID++]);
  next();
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});

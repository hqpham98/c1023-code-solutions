import express from 'express';

const app = express();

app.use((req, res) => {
  console.log('req method:', req.method);
  res.send('Test');
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});

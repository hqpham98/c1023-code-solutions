import pg from 'pg';
import { ClientError } from './client-error.js';
import express from 'express';
import { errorMiddleware } from './error-middleware.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.listen(8080, () => console.log('Listening on port 8080'));

app.use(express.json());

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, '"gradeId" must be a positive integer');
    }
    const sql = `
      select *
        from "grades"
        where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `Cannot find grade with "gradeId" ${gradeId}`);
    }
    res.json(grade);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/', async (req, res, next) => {
  try {
    const sql = `
      select *
      from "grades"
    `;
    const result = await db.query(sql);
    res.status(200).send(result.rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades/', async (req, res, next) => {
  try {
    if (
      !(
        Object.keys(req.body).length === 3 &&
        'name' in req.body &&
        'course' in req.body &&
        'score' in req.body
      )
    ) {
      throw new ClientError(400, 'Invalid arguments');
    }
    const sql = `
      INSERT INTO "grades" ("name", "course", "score")
      VALUES ($1, $2, $3)
      RETURNING *;
        `;
    const { name, course, score } = req.body;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'Invalid gradeId');
    }
    const sql = `
      UPDATE "grades"
      SET "name" = $1,
          "course" = $2,
          "score" = $3
      WHERE "gradeId" = $4
      RETURNING *;
    `;
    const { name, course, score } = req.body;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    if (!result.rows[0]) {
      throw new ClientError(404, 'gradeId does not exist');
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'Invalid gradeId');
    }

    const sql = `
      DELETE
      FROM "grades"
      WHERE "gradeId" = $1;
    `;
    const result = await db.query(sql, [gradeId]);
    if (!result.rows[0]) {
      throw new ClientError(404, 'gradeId does not exist');
    }
    res.status(204).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

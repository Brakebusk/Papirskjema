import database from './database';

export const createIncrementQuery = () =>
  database.prepare(
    `INSERT INTO insight (field, count) VALUES (?, 1) ON CONFLICT(field) DO UPDATE SET count = count + 1;`,
  );

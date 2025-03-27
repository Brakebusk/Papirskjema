import database from './database';

export const createIncrementQuery = () =>
  database.prepare(
    `INSERT INTO insight (field, count) VALUES (?, 1) ON CONFLICT(field) DO UPDATE SET count = count + 1;`,
  );

export const createFormIncrementQuery = () =>
  database.prepare(
    `INSERT INTO forms (form, count) VALUES (?, 1) ON CONFLICT(form) DO UPDATE SET count = count + 1;`,
  );

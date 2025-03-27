import { DatabaseSync } from 'node:sqlite';

const database = new DatabaseSync(`insight.db`);

const initDatabase = `
CREATE TABLE IF NOT EXISTS insight (
  field TEXT PRIMARY KEY,
  count INTEGER DEFAULT 0
);
CREATE TABLE IF NOT EXISTS forms (
  form INTEGER PRIMARY KEY,
  count INTEGER DEFAULT 0
);
`;

database.exec(initDatabase);

export default database;

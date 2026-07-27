import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const sqlConfig: LanguageConfig = {
  title: 'SQL',
  language: 'sql',
  tutorialData: [
        {
      id: 'basics',
      title: 'SQL Basics',
      description: 'Learn SQL Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'select',
      title: 'SELECT',
      description: 'Query columns.',
      content: `SELECT name, age FROM users;`,
      output: `name  | age
Ada   | 36`,
    },
            {
      id: 'where',
      title: 'WHERE',
      description: 'Filter rows.',
      content: `SELECT * FROM users WHERE age > 30;`,
      output: `Ada | 36`,
    },
            {
      id: 'order',
      title: 'ORDER BY',
      description: 'Sort results.',
      content: `SELECT name FROM users ORDER BY age DESC;`,
      output: `Ada
Lin`,
    },
      ],
    },
        {
      id: 'dml',
      title: 'Data Manipulation',
      description: 'Learn Data Manipulation',
      content: `    {`,
      subtopics: [
            {
      id: 'insert',
      title: 'INSERT',
      description: 'Add rows.',
      content: `INSERT INTO users (name, age) VALUES ('Kim', 30);`,
      output: `(1 row)`,
    },
            {
      id: 'update',
      title: 'UPDATE',
      description: 'Modify rows.',
      content: `UPDATE users SET age = 37 WHERE name = 'Ada';`,
      output: `(1 row)`,
    },
            {
      id: 'delete',
      title: 'DELETE',
      description: 'Remove rows.',
      content: `DELETE FROM users WHERE name = 'Kim';`,
      output: `(1 row)`,
    },
      ],
    },
        {
      id: 'aggregates',
      title: 'Aggregates',
      description: 'Learn Aggregates',
      content: `    {`,
      subtopics: [
            {
      id: 'group',
      title: 'GROUP BY',
      description: 'Aggregate groups.',
      content: `SELECT age, COUNT(*) FROM users GROUP BY age;`,
      output: `36 | 2
30 | 1`,
    },
            {
      id: 'having',
      title: 'HAVING',
      description: 'Filter groups.',
      content: `SELECT age, COUNT(*) c FROM users GROUP BY age HAVING COUNT(*) > 1;`,
      output: `36 | 2`,
    },
      ],
    },
        {
      id: 'joins',
      title: 'Joins',
      description: 'Learn Joins',
      content: `    {`,
      subtopics: [
            {
      id: 'inner',
      title: 'INNER JOIN',
      description: 'Match rows.',
      content: `SELECT u.name, o.total FROM users u JOIN orders o ON o.user_id = u.id;`,
      output: `Ada | 100`,
    },
            {
      id: 'left',
      title: 'LEFT JOIN',
      description: 'Keep left rows.',
      content: `SELECT u.name, o.total FROM users u LEFT JOIN orders o ON o.user_id = u.id;`,
      output: `Ada | 100
Lin | NULL`,
    },
      ],
    },
        {
      id: 'schema',
      title: 'Schema',
      description: 'Learn Schema',
      content: `    {`,
      subtopics: [
            {
      id: 'create',
      title: 'CREATE TABLE',
      description: 'Define structure.',
      content: `CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT, age INT);`,
      output: `CREATE TABLE`,
    },
            {
      id: 'alter',
      title: 'ALTER TABLE',
      description: 'Modify schema.',
      content: `ALTER TABLE users ADD COLUMN email TEXT;`,
      output: `ALTER TABLE`,
    },
      ],
    },
        {
      id: 'advanced',
      title: 'Advanced',
      description: 'Learn Advanced',
      content: `    {`,
      subtopics: [
            {
      id: 'cte',
      title: 'CTE / WITH',
      description: 'Named subqueries.',
      content: `WITH adults AS (SELECT * FROM users WHERE age >= 18) SELECT COUNT(*) FROM adults;`,
      output: `3`,
    },
            {
      id: 'window',
      title: 'Window Functions',
      description: 'OVER (PARTITION BY).',
      content: `SELECT name, age, RANK() OVER (ORDER BY age DESC) FROM users;`,
      output: `Ada | 36 | 1`,
    },
      ],
    },
  ],
};

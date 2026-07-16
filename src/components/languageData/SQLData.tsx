import sql from 'react-syntax-highlighter/dist/esm/languages/hljs/sql';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('sql', sql);

export const sqlConfig = {
  title: "SQL Tutorial",
  language: 'sql',
  tutorialData: [
  {
    id: 'querying',
    title: 'Querying',
    subtopics: [
      {
        id: 'select',
        title: 'SELECT Statement',
        description: 'Retrieve data from one or more tables using SELECT.',
        content: `-- Select all columns from the users table
SELECT * FROM users;

-- Select specific columns
SELECT id, name, email FROM users;

-- Select with expressions
SELECT name, salary * 12 AS annual_salary FROM employees;`,
        output: `| id | name   | email             |
|----|--------|-------------------|
| 1  | Alice  | alice@example.com |
| 2  | Bob    | bob@example.com   |`
      },
      {
        id: 'where',
        title: 'WHERE Clause',
        description: 'Filter records using conditions with WHERE.',
        content: `-- Basic comparison
SELECT * FROM users WHERE age > 25;

-- Multiple conditions with AND / OR
SELECT name, city FROM users
WHERE age >= 18 AND country = 'US';

-- Pattern matching with LIKE
SELECT * FROM users WHERE name LIKE 'A%';

-- Range with BETWEEN
SELECT * FROM products WHERE price BETWEEN 10 AND 50;

-- Set membership with IN
SELECT * FROM orders WHERE status IN ('pending', 'shipped');`,
        output: `| id | name | age | city  |
|----|------|-----|-------|
| 2  | Bob  | 30  | NY    |
| 3  | Carol| 28  | LA    |`
      },
      {
        id: 'order-by',
        title: 'ORDER BY',
        description: 'Sort query results in ascending or descending order.',
        content: `-- Sort ascending (default)
SELECT name, score FROM students
ORDER BY score;

-- Sort descending
SELECT name, salary FROM employees
ORDER BY salary DESC;

-- Multiple sort columns
SELECT department, name, hire_date FROM employees
ORDER BY department ASC, hire_date DESC;

-- Using column position
SELECT id, name, price FROM products
ORDER BY 3 DESC;`,
        output: `| name   | score |
|--------|-------|
| Alice  | 85    |
| Bob    | 92    |
| Carol  | 78    |`
      },
      {
        id: 'limit',
        title: 'LIMIT',
        description: 'Restrict the number of rows returned and implement pagination.',
        content: `-- Limit to first 10 rows
SELECT * FROM users LIMIT 10;

-- Pagination with OFFSET (skip first 20, get next 10)
SELECT * FROM users LIMIT 10 OFFSET 20;

-- Alternative pagination syntax (MySQL)
SELECT * FROM users LIMIT 20, 10;

-- Top-N per group pattern
SELECT DISTINCT category FROM products LIMIT 5;`,
        output: `| id | name   |
|----|--------|
| 1  | Alice  |
| 2  | Bob    |
| 3  | Carol  |`
      }
    ],
  },
  {
    id: 'joins-aggregation',
    title: 'Joins & Aggregation',
    subtopics: [
      {
        id: 'inner-left-join',
        title: 'INNER / LEFT JOIN',
        description: 'Combine rows from multiple tables using INNER JOIN and LEFT JOIN.',
        content: `-- INNER JOIN: only matching rows
SELECT users.name, orders.amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;

-- LEFT JOIN: all left table rows
SELECT users.name, orders.amount
FROM users
LEFT JOIN orders ON users.id = orders.user_id;

-- Multiple joins
SELECT u.name, o.total, p.product_name
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN products p ON o.product_id = p.id;

-- Self join
SELECT a.name AS employee, b.name AS manager
FROM employees a
LEFT JOIN employees b ON a.manager_id = b.id;`,
        output: `| name   | amount |
|--------|--------|
| Alice  | 100    |
| Bob    | 50     |
| Carol  | NULL   |`
      },
      {
        id: 'group-by',
        title: 'GROUP BY',
        description: 'Group rows that have the same values in specified columns.',
        content: `-- Count users per country
SELECT country, COUNT(*) AS user_count
FROM users
GROUP BY country;

-- Average salary per department
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department;

-- Multiple grouping columns
SELECT category, status, COUNT(*) AS cnt
FROM orders
GROUP BY category, status;

-- Grouping with WHERE (filter before grouping)
SELECT department, SUM(salary) AS total
FROM employees
WHERE active = 1
GROUP BY department;`,
        output: `| country | user_count |
|---------|------------|
| US      | 150        |
| UK      | 45         |
| CA      | 30         |`
      },
      {
        id: 'having',
        title: 'HAVING',
        description: 'Filter groups after aggregation with HAVING.',
        content: `-- Departments with total salary > 100000
SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department
HAVING SUM(salary) > 100000;

-- Products with more than 50 orders
SELECT product_id, COUNT(*) AS order_count
FROM order_items
GROUP BY product_id
HAVING COUNT(*) > 50;

-- HAVING vs WHERE
SELECT city, AVG(age) AS avg_age
FROM users
WHERE signup_date > '2023-01-01'   -- filter rows first
GROUP BY city
HAVING AVG(age) < 30;               -- filter groups after`,
        output: `| department | total_salary |
|------------|--------------|
| Engineering| 250000       |
| Sales      | 180000       |`
      },
      {
        id: 'aggregate-functions',
        title: 'Aggregate Functions',
        description: 'Using COUNT, SUM, AVG, MIN, MAX, and DISTINCT.',
        content: `-- Common aggregate functions
SELECT
    COUNT(*) AS total_rows,
    COUNT(DISTINCT category) AS unique_cats,
    SUM(amount) AS total_amount,
    AVG(amount) AS average_amount,
    MIN(amount) AS smallest,
    MAX(amount) AS largest
FROM orders
WHERE status = 'completed';

-- COUNT with NULL handling
SELECT
    COUNT(*) AS all_rows,        -- includes NULLs
    COUNT(email) AS with_email,  -- excludes NULLs
    COUNT(DISTINCT city) AS cities
FROM users;

-- String aggregation (GROUP_CONCAT in MySQL)
SELECT department, GROUP_CONCAT(name) AS members
FROM employees
GROUP BY department;`,
        output: `| total | unique | total_amt | avg_amt | min | max |
|-------|--------|-----------|---------|-----|-----|
| 150   | 8      | 45000     | 300     | 10  | 999 |`
      }
    ],
  },
  {
    id: 'data-modification',
    title: 'Data Modification',
    subtopics: [
      {
        id: 'insert',
        title: 'INSERT',
        description: 'Add new rows to a table with INSERT INTO.',
        content: `-- Insert a single row
INSERT INTO users (name, email, age)
VALUES ('Alice', 'alice@example.com', 25);

-- Insert multiple rows
INSERT INTO users (name, email, age) VALUES
    ('Bob', 'bob@example.com', 30),
    ('Carol', 'carol@example.com', 28);

-- Insert from a SELECT
INSERT INTO vip_users (name, email)
SELECT name, email FROM users
WHERE score > 1000;

-- INSERT IGNORE (skip duplicates, MySQL)
INSERT IGNORE INTO users (id, name) VALUES (1, 'Dave');

-- INSERT ... ON DUPLICATE KEY UPDATE (upsert, MySQL)
INSERT INTO users (id, email) VALUES (1, 'new@email.com')
ON DUPLICATE KEY UPDATE email = VALUES(email);`,
        output: "3 rows inserted."
      },
      {
        id: 'update',
        title: 'UPDATE',
        description: 'Modify existing rows in a table using UPDATE.',
        content: `-- Update a single column
UPDATE users SET age = 26 WHERE id = 1;

-- Update multiple columns
UPDATE users
SET age = age + 1, updated_at = NOW()
WHERE id = 1;

-- Update with subquery
UPDATE orders
SET status = 'archived'
WHERE created_at < '2020-01-01'
  AND id IN (SELECT id FROM completed_orders);

-- Update with JOIN (MySQL)
UPDATE users u
JOIN orders o ON u.id = o.user_id
SET u.vip = 1
WHERE o.total > 1000;

-- Conditional update with CASE
UPDATE products
SET price = CASE
    WHEN category = 'premium' THEN price * 1.1
    WHEN category = 'budget' THEN price * 0.9
    ELSE price
END;`,
        output: "1 row updated."
      },
      {
        id: 'delete',
        title: 'DELETE',
        description: 'Remove rows from a table with DELETE FROM.',
        content: `-- Delete specific rows
DELETE FROM users WHERE id = 1;

-- Delete with multiple conditions
DELETE FROM orders
WHERE status = 'cancelled' AND created_at < '2023-01-01';

-- Delete all rows (keeps table structure)
DELETE FROM temp_logs;

-- Delete with JOIN (MySQL)
DELETE u FROM users u
JOIN expired e ON u.id = e.user_id
WHERE e.expired_date < NOW();

-- Delete with subquery
DELETE FROM users
WHERE id NOT IN (SELECT DISTINCT user_id FROM orders);

-- TRUNCATE (faster, resets auto-increment)
TRUNCATE TABLE temp_logs;`,
        output: "Rows deleted."
      },
      {
        id: 'create-table',
        title: 'CREATE TABLE',
        description: 'Create new database tables with constraints and data types.',
        content: `-- Basic table creation
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table with foreign key
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'shipped', 'delivered') DEFAULT 'pending',
    FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Create table from SELECT
CREATE TABLE active_users AS
SELECT id, name, email FROM users WHERE active = 1;

-- Add constraints
ALTER TABLE users
ADD CONSTRAINT chk_age CHECK (age >= 0 AND age <= 150);`,
        output: "Table created successfully."
      }
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced',
    subtopics: [
      {
        id: 'subqueries',
        title: 'Subqueries',
        description: 'Nested queries in SELECT, FROM, and WHERE clauses.',
        content: `-- Subquery in WHERE
SELECT name, salary FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Subquery with IN
SELECT name FROM users
WHERE id IN (SELECT user_id FROM orders WHERE total > 500);

-- Correlated subquery
SELECT e.name, e.salary
FROM employees e
WHERE e.salary > (
    SELECT AVG(salary) FROM employees
    WHERE department = e.department
);

-- Subquery in FROM (derived table)
SELECT dept, avg_sal FROM (
    SELECT department AS dept, AVG(salary) AS avg_sal
    FROM employees
    GROUP BY department
) AS dept_stats
WHERE avg_sal > 60000;

-- EXISTS subquery
SELECT name FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);`,
        output: `| name  | salary |
|-------|--------|
| Alice | 85000  |
| Bob   | 92000  |`
      },
      {
        id: 'indexes',
        title: 'Indexes',
        description: 'Creating indexes to speed up queries on large tables.',
        content: `-- Create a simple index
CREATE INDEX idx_users_email ON users(email);

-- Unique index
CREATE UNIQUE INDEX idx_users_username ON users(username);

-- Composite index (multi-column)
CREATE INDEX idx_orders_user_status ON orders(user_id, status);

-- Index for full-text search
CREATE FULLTEXT INDEX idx_articles_content ON articles(title, body);

-- Show indexes on a table
SHOW INDEX FROM users;

-- Drop an index
DROP INDEX idx_users_email ON users;

-- Partial index (PostgreSQL)
CREATE INDEX idx_active_users ON users(email) WHERE active = 1;`,
        output: "Indexes created for faster lookups."
      },
      {
        id: 'views',
        title: 'Views',
        description: 'Creating virtual tables with CREATE VIEW for reusable queries.',
        content: `-- Create a view
CREATE VIEW active_users AS
SELECT id, name, email FROM users WHERE active = 1;

-- Create view with joins
CREATE VIEW user_orders AS
SELECT u.name, o.total, o.status, o.created_at
FROM users u
JOIN orders o ON u.id = o.user_id;

-- Query a view like a table
SELECT * FROM user_orders WHERE status = 'pending';

-- Replace an existing view
CREATE OR REPLACE VIEW top_customers AS
SELECT user_id, SUM(total) AS total_spent
FROM orders
GROUP BY user_id
HAVING SUM(total) > 1000;

-- Drop a view
DROP VIEW IF EXISTS old_view;`,
        output: `| name  | total | status   |
|-------|-------|----------|
| Alice | 100   | pending  |
| Bob   | 50    | pending  |`
      },
      {
        id: 'transactions',
        title: 'Transactions',
        description: 'Group operations into atomic transactions with COMMIT and ROLLBACK.',
        content: `-- Start a transaction
START TRANSACTION;

-- Or: BEGIN;
BEGIN;

-- Perform operations
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Check if everything is correct
SELECT * FROM accounts WHERE id IN (1, 2);

-- If successful, commit
COMMIT;

-- If something went wrong, rollback
-- ROLLBACK;

-- Transaction with savepoint
START TRANSACTION;
INSERT INTO orders (user_id, amount) VALUES (1, 50);
SAVEPOINT after_order;
UPDATE inventory SET stock = stock - 1 WHERE product_id = 5;
-- If inventory update fails:
-- ROLLBACK TO SAVEPOINT after_order;

COMMIT;`,
        output: "Transaction committed. Balance transferred."
      }
    ],
  },
]
};

DROP TABLE IF EXISTS employees;

/*employees table*/
CREATE TABLE employees(
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    birthday DATE NOT NULL,
    salary INTEGER NOT NULL

);

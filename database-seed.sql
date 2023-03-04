CREATE TABLE example_table (
  id SERIAL PRIMARY KEY,
  col1 VARCHAR(50),
  col2 INTEGER
);

INSERT INTO example_table (col1, col2) VALUES
  ('foo', 42),
  ('bar', 17),
  ('baz', 99);
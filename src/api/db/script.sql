CREATE DATABASE IF NOT EXISTS Books;
USE Books;

CREATE TABLE IF NOT EXISTS book (
  id INT(11) AUTO_INCREMENT,
  title VARCHAR(255),
  author VARCHAR(255),
  daterelease DATE,
  email VARCHAR(255),
  PRIMARY KEY (id)
);

INSERT INTO book (title,author,daterelease,email) VALUES ('Testing','Aldair','2022-11-30','aldairandre99@gmail.com');
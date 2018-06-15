CREATE DATABASE celebs_db;
USE celebs_db;
/*
CREATE TABLE celebs
(
	id int NOT NULL AUTO_INCREMENT,
	Celeb varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
CREATE TABLE popularity
(
	id int NOT NULL AUTO_INCREMENT,
	account_type VARCHAR (255) NOT NULL,
    count INTEGER (9999) NOT NULL,
    celeb_id INT NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (celeb_id) REFERENCES celebs (id)
);*/
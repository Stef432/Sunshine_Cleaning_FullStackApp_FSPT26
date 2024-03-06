--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists items;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE items(
    id INT NOT NULL AUTO_INCREMENT, 
    text VARCHAR(40) not null, 
    complete BOOLEAN, PRIMARY KEY (id)
    );

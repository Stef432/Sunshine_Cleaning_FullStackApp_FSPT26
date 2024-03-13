--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists cleaners;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE `cleaners`(
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `day_time` VARCHAR (255),
  `day` VARCHAR (255),
  `shifts` VARCHAR (255),
  PRIMARY KEY (id)
);

CREATE TABLE offices (
  id INTEGER NOT NULL AUTO_INCREMENT,
  company_name VARCHAR (255),
  contact_name VARCHAR (255),
  date_time DATETIME NOT NULL,
  customer_id INT,
  FOREIGN KEY (cleaner_id) REFERENCES customers(id) ON DELETE SET NULL
)

INSERT into cleaners (first_name, last_name, email, morningAvail, afternoonAvail ) VALUES
('Anna', 'Sfero', 'anna@codeop.tech', 'afternoon', "Thursdays"),
('Stefania', 'Urriza', 'stefania@codeop.tech', "morning", "Tuesdays");

INSERT into customers

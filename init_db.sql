--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists cleaners;
DROP TABLE if exists cleaner_availability;
DROP TABLE if exists shifts;
SET foreign_key_checks = 1;

--
-- Create Tables
--

CREATE TABLE `cleaners`(
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `morningAvail` BOOLEAN NOT NULL,
  `afternoonAvail` BOOLEAN NOT NULL
);

INSERT into cleaners (first_name, last_name, email, morningAvail, afternoonAvail ) VALUES
('Anna', 'Sfero', 'anna@codeop.tech', 1, 0),
('Stefania', 'Urriza', 'stefania@codeop.tech', 0, 1);



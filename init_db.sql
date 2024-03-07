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
  `phone_number` INT NOT NULL,
  `tax_id` INT NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `cleaners_availability_id` INT NOT NULL
);

CREATE TABLE `cleaner_availability`(
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `days` DATE NOT NULL,
  `daytime` VARCHAR(255) NOT NULL,
  `frequency` VARCHAR(255) NOT NULL,
  `cleaner_id` INT NOT NULL
);

CREATE TABLE `shifts`(
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `day` DATE NOT NULL,
  `daytime` VARCHAR(255) NOT NULL,
  `frequency` VARCHAR(255) NOT NULL,
  `shift_id` INT NOT NULL
);



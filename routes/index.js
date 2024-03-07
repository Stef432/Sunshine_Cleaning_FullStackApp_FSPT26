var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});

router.post("/", function(req, res, next) {
  res.send({title:"Express"})
})

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
  `cleaner_id` INT NOT NULL,
);

CREATE TABLE `shifts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY;
  `day` DATE NOT NULL,
  `daytime` VARCHAR(255) NOT NULL,
  `frequency` VARCHAR(255) NOT NULL,
  `shift_id` INT NOT NULL,
)


module.exports = router;

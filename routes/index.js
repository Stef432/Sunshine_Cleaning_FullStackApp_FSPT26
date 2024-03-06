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
  `time_range` TIME NOT NULL,
  `frequency` VARCHAR(255) NOT NULL,
  `cleaner_id` INT NOT NULL,
  `type_of_service` VARCHAR(255) NOT NULL
);



module.exports = router;

const db = require("../model/helper.js");
var express = require("express");
var router = express.Router();

/* GET users listing. */

router.get("/cleaners", async (req, res) => {
  db("SELECT * FROM cleaners ORDER BY id ASC;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.get("/cleaners/:id", async (req, res) => {
  const cleaner = req.params.id;
  db(`SELECT * FROM cleaners WHERE id = ${cleaner};`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/cleaners/add", async (req, res) => {
  const { first_name, last_name, email, day_time, day } = req.body;
  db(
    `INSERT INTO cleaners (first_name, last_name, email, day_time, day) VALUES ("${first_name}", "${last_name}", "${email}", "${day_time}", "${day}");`
  )
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.delete("/cleaners/delete/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let result = await db(`SELECT * FROM  cleaners WHERE id = ${id}`);
    if (result.length === 0) {
      res.status(400).send({ error: "item not found" });
    } else {
      await db(`DELETE FROM cleaners WHERE id = ${id}`);
      (result = await db("SELECT * FROM cleaners")),
        res.status(200).send(result);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;

const cors = require("cors");

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const usersRouter = require("./routes/users");

const app = express();
const port = 3000;
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, "public")));

//app.use("/", indexRouter);
app.listen(port, () => {
  console.log(`Sunshine App listening at localhost: ${port}`);
});
const userData = [{ id: 1, name: "stef", age: 36 }];

app.get("/cleaners", (req, res) => {
  res.send({ data: userData });
});

app.get("/cleaners/:id", (req, res) => {
  let userId = Number(req.params.id);
  let oneUser = userData.find((u) => u.id === userId);
  if (oneUser) {
    res.send({ data: oneUser });
  } else {
    res.status(404).send({ error: "error - user not found" });
  }
});

app.post("/cleaners", (req, res) => {
  console.log(req);
  //grab the cleaer's info
  //create a new user object
  //add to new uder array
  //send some response "New Cleaner Added!"
  res.send({ message: "user added" });
});
module.exports = app;

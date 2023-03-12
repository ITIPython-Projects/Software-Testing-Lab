const express = require("express");
const { users } = require("./data");
const userD = require("userD");

const app = express();

app.use(userD());

app.get("/users", async (req, res) => {
  return res.json(users);
});

app.listen(4000, () => {
  console.log("I'm Listen To S");
});

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const date = new Date();
  const requiredDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  res.send(requiredDate);
});

module.exports = app;
app.listen(3000);

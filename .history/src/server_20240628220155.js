const express = require("express");
const app = express();
const port = 8080;

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("Hello ABC!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

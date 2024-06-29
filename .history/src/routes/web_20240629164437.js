const express = require("express");

const router = express.Router();
app.get("/", (req, res) => {
  res.send("Hello World! hidhoabd");
});

app.get("/hoidanit", (req, res) => {
  res.render("sample.ejs");
});

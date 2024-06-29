require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine.js");

const app = express();
const port = process.env.PORT || 8081; //port => hardcode
const hostname = process.env.HOST_NAME;
// config template engine
configViewEngine(app);

// config static files
app.use(express.static(path.join(__dirname, "public")));

// Khai bao route
app.get("/", (req, res) => {
  res.send("Hello World! hidhoabd");
});

app.get("/hoidanit", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

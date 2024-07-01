require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine.js");
const webRouter = require("./routes/web.js");
const mysql = require("mysql2");

const app = express();
const port = process.env.PORT || 8081; //port => hardcode
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// Khai bao route
app.use("/", webRouter);

//test connection
const connection = mysqlcreateConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  database: "test",
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

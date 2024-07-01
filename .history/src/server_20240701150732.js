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
//create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hoidanit",
});
//simpe query
connection.query("select * from Users u", function (err, result, fields) {
  console.log(">>>result=", result);
  console.log(">>>fields=", fields);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

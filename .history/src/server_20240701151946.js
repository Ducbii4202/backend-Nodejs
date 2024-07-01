require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine.js");
const webRouter = require("./routes/web.js");
const connection = require("./config/database.js");

const app = express();
const port = process.env.PORT || 8081; //port => hardcode
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// Khai bao route
app.use("/", webRouter);

//test connection

//simpe query
connection.query("select * from Users u", function (err, result, fields) {
  console.log(">>>result=", result);
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

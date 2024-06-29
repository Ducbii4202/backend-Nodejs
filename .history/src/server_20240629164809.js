require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine.js");
const webRouter = require("./routes/web.js");

const app = express();
const port = process.env.PORT || 8081; //port => hardcode
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// Khai bao route
app.use("/test", webRouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

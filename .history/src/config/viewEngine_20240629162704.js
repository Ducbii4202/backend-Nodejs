import React from "react";
const path = require("path");

const viewEngine = (app) => {
  // config template engine
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");
};

export default viewEngine;

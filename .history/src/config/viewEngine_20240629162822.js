import React from "react";
const path = require("path");

const configViewEngine = (app) => {
  // config template engine
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");
};

module.exports = configViewEngine;

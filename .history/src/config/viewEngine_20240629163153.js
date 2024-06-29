import React from "react";
const path = require("path");

const configViewEngine = (app) => {
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");

  // config static files
  app.use(express.static(path.join(__dirname, "public")));
};

module.exports = configViewEngine;

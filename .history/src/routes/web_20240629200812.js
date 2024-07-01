const express = require("express");
const { getHomePage } = require("../controllers/homeController");

const router = express.Router();

router.get("/", (req, res) => {});

router.get("/hoidanit", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router;

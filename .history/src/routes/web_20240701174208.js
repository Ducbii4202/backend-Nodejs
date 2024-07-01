const express = require("express");
const { getHomePage, getHoiDanIt } = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/hoidanit", getHoiDanIt);

router.post("/create-user", (req, res) => {
  res.send("create a new user");
});

module.exports = router;

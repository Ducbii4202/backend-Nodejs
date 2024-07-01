const express = require("express");
const { getHomePage, getHoiDanIt } = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/hoidanit", getHoiDanIt);

module.exports = router;

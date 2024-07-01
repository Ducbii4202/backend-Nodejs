const express = require("express");
const {
  getHomePage,
  getHoiDanIt,
  postCreateUser,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/hoidanit", getHoiDanIt);

router.post("/create", postCreateUser);

module.exports = router;

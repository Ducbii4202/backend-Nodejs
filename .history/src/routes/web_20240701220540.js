const express = require("express");
const {
  getHomePage,
  getHoiDanIt,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/hoidanit", getHoiDanIt);

router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);

module.exports = router;

const express = require("express");
const {
  getHomePage,
  getHoiDanIt,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeletePage,
} = require("../controllers/homeController");

const router = express.Router();

router.get("/", getHomePage);
router.get("/hoidanit", getHoiDanIt);

router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);

router.post("/update-user", postUpdateUser);

router.get("/update/:id", getUpdatePage);

router.get("/delete-user", postDeletePage);

module.exports = router;

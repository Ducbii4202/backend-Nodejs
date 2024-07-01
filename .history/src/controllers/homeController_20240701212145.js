const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const getHoiDanIt = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = (req, res) => {
  //   INSERT INTO Users (email, name, city)
  // VALUES ("test", "ducthanh", "dong nai");
  res.send("create a new user");
};

module.exports = {
  getHomePage,
  getHoiDanIt,
  postCreateUser,
};

const connection = require("../config/database");

const getHomePage = (req, res) => {
  let users = [];
  connection.query("select * from Users u", function (err, result, fields) {
    users = result;
    console.log(">>>result=", result);
  });
  res.send("Hello World! hidhoabd");
};
const getHoiDanIt = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getHoiDanIt,
};

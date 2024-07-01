const connection = requirs("../config/database");

const getHomePage = (req, res) => {
  connection.query("select * from Users u", function (err, result, fields) {
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

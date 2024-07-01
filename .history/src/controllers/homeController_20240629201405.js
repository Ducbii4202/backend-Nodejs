const getHomePage = (req, res) => {
  res.send("Hello World! hidhoabd");
};
const getHoiDanIt = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getHoiDanIt,
};

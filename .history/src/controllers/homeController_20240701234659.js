const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const getHoiDanIt = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = async (req, res) => {
  // let email = req.body.email;
  // let name = req.body.name;
  // let city = req.body.city;

  // let { email, name, city } = req.body;

  let [results, fields] = await connection.query(
    `  INSERT INTO
    Users (email, name, city)
   VALUES (?,?,?)`,
    [email, name, city]
  );

  // const [results, fields] = await connection.query("select * from Users u");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomePage,
  getHoiDanIt,
  getCreatePage,
  postCreateUser,
};
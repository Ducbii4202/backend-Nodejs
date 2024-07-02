const connection = require("../config/database");
const { getAllUser } = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  console.log(">>> rows", results);
  return res.render("home.ejs", { listUsers: results });
};
const getHoiDanIt = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = async (req, res) => {
  // let email = req.body.email;
  // let name = req.body.name;
  // let city = req.body.city;

  let { email, name, city } = req.body;

  let [results, fields] = await connection.query(
    `  INSERT INTO Users (email, name, city) VALUES (?,?,?)`,
    [email, name, city]
  );
  res.send("Create User succeed !");
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

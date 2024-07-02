const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};
const getHoiDanIt = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = async (req, res) => {
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
const getUpdatePage = async (req, res) => {
  const usesId = req.params.id;

  let [results, fields] = await connection.query(
    "select * from Users where id = ?",
    [usesId]
  );
  let user = results && results.length > 0 ? results[0] : {};
  res.render("edit.ejs", { userEdit: user }); // x <- y  (Lay biến Y gán cho Biến X)
};

module.exports = {
  getHomePage,
  getHoiDanIt,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
};

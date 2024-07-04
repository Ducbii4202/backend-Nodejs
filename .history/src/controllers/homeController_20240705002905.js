const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../services/CRUDService");

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
  let user = await getUserById(usesId);
  res.render("edit.ejs", { userEdit: user }); // x <- y  (Lay biến Y gán cho Biến X)
};

const postUpdateUser = async (req, res) => {
  let { email, name, city, userId } = req.body;

  res.send("Update User succeed !");
};

module.exports = {
  getHomePage,
  getHoiDanIt,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
  postUpdateUser,
};

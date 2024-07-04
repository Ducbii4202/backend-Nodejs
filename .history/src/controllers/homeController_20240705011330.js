const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  CreateUser,
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
  await CreateUser(email, name, city);
  // res.send("Create User succeed !");
  res.redirect("/");
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
  await updateUserById(email, city, name, userId);
  // res.send("Update User succeed !");
  res.redirect("/");
};
const postDeletePage = async (req, res) => {
  const usesId = req.params.id;
  let user = await getUserById(usesId);
  res.render("delete.ejs", { userEdit: user });
};
const postHandleRemoveUser = async (req, res) => {
  let { email, userId } = req.body;
  let [results, fields] = await connection.query(
    `DELETE FROM Users WHERE id=?`,
    [email, userId]
  );
  res.redirect("/");
};

module.exports = {
  getHomePage,
  getHoiDanIt,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
  postUpdateUser,
  postDeletePage,
  postHandleRemoveUser,
};

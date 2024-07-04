const connection = require("../config/database");
const getAllUsers = async () => {
  let [results, fields] = await connection.query("select * from Users");
  return results;
};
const getUserById = async (userId) => {
  let [results, fields] = await connection.query(
    "select * from Users where id = ?",
    [userId]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const CreateUser = async (email, name, city) => {
  let [results, fields] = await connection.query(
    `  INSERT INTO Users (email, name, city) VALUES (?,?,?)`,
    [email, name, city]
  );
};

const updateUserById = async (email, city, name, userId) => {
  let [results, fields] = await connection.query(
    `UPDATE Users SET email= ?, city= ?, name= ?
  WHERE id= ?`,
    [email, city, name, userId]
  );
};

const deleteUserById = async (id) => {
  let [results, fields] = await connection.query(
    `DELETE FROM Users WHERE id = ?`,
    [id]
  );
};

module.exports = {
  getAllUsers,
  getUserById,
  CreateUser,
  updateUserById,
  deleteUserById,
};

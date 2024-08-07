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

const updateUserById = async (user) => {
  let [results, fields] = await connection.query(
    `UPDATE Users SET email= ?, city= ?, name= ?
  WHERE id= ?`,
    [email, city, name, userId]
  );
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
};

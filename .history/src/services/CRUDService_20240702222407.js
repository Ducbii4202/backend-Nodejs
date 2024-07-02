const connection = require("../config/database");
const getAllUsers = async () => {
  let [results, fields] = await connection.query("select * from Users");
  return results;
};
const getUserById = async () => {
  let [results, fields] = await connection.query(
    "select * from Users where id = ?",
    [usesId]
  );
  let user = results && results.length > 0 ? results[0] : {};
};
module.exports = {
  getAllUsers,
  getUserById,
};

import connection from "../config/database";
const getAllUsers = async () => {
  let [results, fields] = await connection.query("select * from Users");
  return results;
};

module.exports = {
  getAllUsers,
};

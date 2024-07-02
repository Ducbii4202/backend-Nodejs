import connection from "../config/database";
const getAllUser = async () => {
  let [results, fields] = await connection.query("select * from Users");
};

module.exports = {
  getAllUser,
};

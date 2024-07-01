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

  // connection.query(
  //   `  INSERT INTO
  //   Users (email, name, city)
  //  VALUES (?,?,?)`,
  //   [email, name, city],
  //   function (results) {
  //     console.log(results);
  //     res.send("Create User success !");
  //   }
  // );

  const [, fields] = await connection.query(
    ,
    [email, name, city]
  );
  res.send("Create User succeed !");
  const [results, fields] = await connection.query(`  INSERT INTO Users (email, name, city) VALUES (?,?,?)`, [2, 2]);
  await conn.end();
}
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

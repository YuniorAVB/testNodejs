const Sequelize = require("sequelize");

const sequelize = new Sequelize("vueolx", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  port: 3306,
  logging: false,
});
sequelize.sync().then(
  function () {
    console.log("DB connection sucessful.");
  },
  function (err) {
    console.log(err);
  }
);

module.exports = sequelize;

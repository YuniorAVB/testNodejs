const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Users = sequelize.define(
  "users",
  {
    id_user: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
    user: Sequelize.STRING,
    password: Sequelize.STRING,
    photo: Sequelize.STRING,
  },
  {
    timestamps: false,
    tableName: "Users",
  }
);

module.exports = Users;

const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Categories = sequelize.define(
  "categories",
  {
    id_category: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIcrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    tableName: "Categories",
  }
);

module.exports = Categories;

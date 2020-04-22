const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Users = require("./Users");
const Categories = require("./Categories");
const Locations = require("./Locations");

const Products = sequelize.define(
  "products",
  {
    id_product: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    contact: Sequelize.STRING,
    price: Sequelize.DOUBLE,
    date: Sequelize.DATE,
    id_user: Sequelize.INTEGER,
    id_category: Sequelize.INTEGER,
    id_location: Sequelize.INTEGER,
  },
  {
    timestamps: false,
    tableName: "Products",
  }
);

Products.belongsTo(Users, {
  foreignKey: "id_user",
});
Users.hasMany(Products, {
  foreignKey: "id_user",
});

Categories.hasMany(Products, {
  foreignKey: "id_category",
});
Products.belongsTo(Categories, {
  foreignKey: "id_category",
});

Locations.hasMany(Products, {
  foreignKey: "id_location",
});
Products.belongsTo(Locations, {
  foreignKey: "id_location",
});

module.exports = Products;

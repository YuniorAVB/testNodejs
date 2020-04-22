const Sequelize = require("sequelize");
const sequelize = require("../database/database");
const Photos = require("./Photos");
const Products = require("./Products");

const DTProductsPhotos = sequelize.define(
  "dtproductsphotos",
  {
    id_dtproductphoto: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_photo: Sequelize.INTEGER,
    id_product: Sequelize.INTEGER,
  },
  {
    timestamps: false,
    tableName: "DTProductsPhotos",
  }
);

DTProductsPhotos.belongsTo(Photos, {
  foreignKey: "id_photo",
});
Photos.hasMany(DTProductsPhotos, {
  foreignKey: "id_photo",
});

DTProductsPhotos.belongsTo(Products, {
  foreignKey: "id_product",
});
Products.hasMany(DTProductsPhotos, {
  foreignKey: "id_product",
});

module.exports = DTProductsPhotos;

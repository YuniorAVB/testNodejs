const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Photos = sequelize.define(
  "photos",
  {
    id_photo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    photo: Sequelize.STRING,
  },
  {
    timestamps: false,
    tableName: "Photos",
  }
);


module.exports = Photos;
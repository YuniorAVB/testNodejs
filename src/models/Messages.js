const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Products = require('./Products');
const Messages = sequelize.define('messages',{
    id_message:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    id_product:Selection.INTEGER
},{
    timestamps:false,
    tableName:'Messages'
});

Products.hasMany(Messages,{
    foreignKey:'id_message'
});
Messages.belongsTo(Products,{
    foreignKey:'id_message'
});


module.exports = Messages;
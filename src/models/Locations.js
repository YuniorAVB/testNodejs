const Sequelize = require('sequelize')
const sequelize = require('../database/database');

const Locations = sequelize.define('locations',{
    id_location:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    city:Sequelize.STRING,
    state:Sequelize.STRING
},{
    timestamps:false,
    tableName:'Locations'
});

module.exports = Locations;
const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Users = require('./Users');
const Messages = require('./Messages');

const DTUsersMessages = sequelize.define('dtusersmessages',{
    id_dtusermessage:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    message:Sequelize.STRING,
    id_user:Sequelize.INTEGER,
    id_message:Sequelize.INTEGER
},{
    timestamps:false,
    tableName:'DTUsersMessages'
});

Users.hasMany(DTUsersMessages,{
    foreignKey:'id_user'
});
DTUsersMessages.belongsTo(Users,{
    foreignKey:'id_user'
});

Messages.hasMany(DTUsersMessages,{
    foreignKey:'id_message'
});
DTUsersMessages.belongsTo(Messages,{
    foreignKey:'id_message'
});


module.exports = DTUsersMessages;
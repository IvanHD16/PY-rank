const {DataTypes} = require('sequelize');
const sequelize = require ('../config/sequelize.config')
const Post = require('./post')

const User = sequelize.define('User',{
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    //mas columnas de la tabla
})

// Definir relación: Un usuario puede tener varias publicaciones
User.hasMany(Post);

module.exports = User;
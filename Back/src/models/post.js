const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');
const User = require('./user');

const Post = sequelize.define('Post', {
  postName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  // Otras columnas del modelo Post
});

Post.belongsTo(User);

module.exports = Post;
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');
const User = require('./user');

const Post = sequelize.define('Post', {
  postId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true, 
  },
  postName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  options: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  // Otras columnas del modelo Post
});

Post.belongsTo(User);

module.exports = Post;
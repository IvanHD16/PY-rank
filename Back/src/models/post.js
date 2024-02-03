const { DataTypes } = require('sequelize');
const { v4: UUIDV4 } = require('uuid');

module.exports = (sequelize)=>{
  sequelize.define('Post', {
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
}

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
    votes: {
      type: DataTypes.JSONB, // Utiliza JSONB para almacenar un objeto JSON en PostgreSQL
      defaultValue: {}, // Inicializa el objeto de votos como vacío por defecto
    },
    // Otras columnas del modelo Post
  });
}

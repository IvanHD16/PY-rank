require('dotenv').config();
const Sequelize = require('sequelize');
const {DB_USER, DB_PASS, DB_NAME} = process.env


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Desactiva los logs de Sequelize si lo deseas
});

module.exports = sequelize;
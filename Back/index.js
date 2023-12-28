require('dotenv').config();
const express = require('express');
const sequelize = require ('./src/config/sequelize.config');
const apiRoutes = require('./src/routes/api');
const app = express();


// Configuración de middlewares, rutas, etc.
app.use(express.json());

app.use('/api', apiRoutes);

// Sincronizar modelos con la base de datos
sequelize.sync({force: false}).then(()=>{
    console.log('Base de datos sincronizada');

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Servidor en ejecución en el puerto ${PORT}`);
    });
})
.catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });

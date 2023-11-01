const express = require('express');

// Utilizo para poder obtener datos del archivo de configuración
require('dotenv').config();

// Libreria para permitir solicitudes desde dominios especificos o para habilitar el acceso al público desde cualquier origen
const cors = require("cors");

// Importo los modulos de Router que cree para cada entidad
const personajesRoutes = require('./routes/peoplesRoutes');
const planetsRoutes = require('./routes/planetsRoutes');

// Inicializo la aplicación
const app = express();

// Le indico a la aplicación que elementos utilizara
app.use(cors());
app.use('/api', personajesRoutes); // Monta las rutas de la API bajo "http://localhost:3000/api/rutas"
app.use('/api', planetsRoutes);

// Obtengo el número de puerto desde el archivo ".env", en caso de no obtenerlo seteo el puerto "3000"
const port = process.env.PORT || 3000;

// Indico el puerto que utilizara la aplicación para escuchar
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

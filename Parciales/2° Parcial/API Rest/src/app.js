const express = require('express');
const cors = require("cors");
const personajesRoutes = require('./routes/peoplesRoutes');
const planetsRoutes = require('./routes/planetsRoutes');

const app = express();

app.use(cors());
app.use('/api', personajesRoutes); // Monta las rutas de la API bajo /api
app.use('/api', planetsRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

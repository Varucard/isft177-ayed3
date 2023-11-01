const express = require('express');
// Me import el modulo de peoplesController para poder utilizarlo en este Modulo
const apiController = require('../controllers/peoplesControllers');

// Creo un enrutador para definir la rutas de trabajo
const router = express.Router();

/**
 * EndPoint para poder obtener todos los personajes de StarWars con su información y paginación
 */
router.get('/personajes/:indice', async (req, res) => {
  try {
    const {indice} = req.params;
    const data = await apiController.personajesStarWars(indice);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener los datos (Router)' });
  }
});

/**
 * EndPoint para poder obtener la información de 1 personaje de StarWars
 */
router.get('/personaje/:indice', async (req, res) => {
  try {
    // Obtengo el parametro que necesito y lo paso al controlador
    const {indice} = req.params;
    const data = await apiController.personajeStarWars(indice);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener los datos (Router)' });
  }
});

/**
 * EndPoint para poder obtener la información de 1 o + personajes de StarWars
 */
router.get('/personaje_busqueda/:personaje', async (req, res) => {
  try {
    const {personaje} = req.params;
    const data = await apiController.buscadorPersonajeStarWars(personaje);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener los datos (Router)' });
  }
});

// Exporto el router definido para poder llamarlo en "app.js" e iniciarlo
module.exports = router;

const express = require('express');
const apiController = require('../controllers/planetsControllers');

const router = express.Router();

/**
 * EndPoint para poder obtener todos los personajes de StarWars con su información y paginación
 */
router.get('/planetas/:indice', async (req, res) => {
  try {
    const {indice} = req.params;
    const data = await apiController.planetasStarWars(indice);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener los datos (Router)' });
  }
});

/**
 * EndPoint para poder obtener la información de 1 personaje de StarWars
 */
router.get('/planeta/:indice', async (req, res) => {
  try {
    const {indice} = req.params;
    const data = await apiController.planetaStarWars(indice);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener los datos (Router)' });
  }
});

/**
 * EndPoint para poder obtener la información de 1 o + planetas de StarWars
 */
router.get('/planeta_busqueda/:planeta', async (req, res) => {
  try {
    const {planeta} = req.params;
    const data = await apiController.buscadorPlanetaStarWars(planeta);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener los datos (Router)' });
  }
});

module.exports = router;

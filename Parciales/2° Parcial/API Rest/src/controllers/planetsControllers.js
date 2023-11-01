const axios = require('axios'); // Para realizar solicitudes HTTP

/**
 * Función utilizada para obtener un listado de 10 planetas de StarWars con su información y posibilidad de paginación
 * @param {string} indice 
 * @returns Retorna un JSON con información de planetas de StarWars
 */
async function planetasStarWars(indice) {
  try {
    const response = await axios.get(`https://swapi.dev/api/planets/?page=${indice}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos de la API externa (Controlador):', error);
    throw error;
  }
}

/**
 * Función utilizada par obtener por indice un planeta con su información
 * @param {string} indice 
 * @returns Retorna un JSON con la información de un planeta de StarWars
 */
async function planetaStarWars(indice) {
  try {
    const response = await axios.get(`https://swapi.dev/api/planets/${indice}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos de la API externa (Controlador):', error);
    throw error;
  }
}

/**
 * Función utilizada par obtener por nombre uno o mas planetas con su información
 * @param {personaje} indice 
 * @returns Retorna un JSON con la información de uno o mas planetas de StarWars
 */
async function buscadorPlanetaStarWars(planeta) {
  try {
    const response = await axios.get(`https://swapi.dev/api/planets/?search=${planeta}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos de la API externa (Controlador):', error);
    throw error;
  }
}

module.exports = {
  planetasStarWars,
  planetaStarWars,
  buscadorPlanetaStarWars
};

const axios = require('axios'); // Para realizar solicitudes HTTP

/**
 * Función utilizada para obtener un listado de 10 personajes de StarWars con su información y posibilidad de paginación
 * @param {string} indice 
 * @returns Retorna un JSON con información de personajes de StarWars
 */
async function personajesStarWars(indice) {
  try {
    const response = await axios.get(`https://swapi.dev/api/people/?page=${indice}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos de la API externa (Controlador):', error);
    throw error;
  }
}

/**
 * Función utilizada par obtener por indice un personaje con su información
 * @param {string} indice 
 * @returns Retorna un JSON con la información de un personaje de StarWars
 */
async function personajeStarWars(indice) {
  try {
    const response = await axios.get(`https://swapi.dev/api/people/${indice}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos de la API externa (Controlador):', error);
    throw error;
  }
}

/**
 * Función utilizada par obtener por nombre uno o mas personajes con su información
 * @param {personaje} indice 
 * @returns Retorna un JSON con la información de uno o mas personajes de StarWars
 */
async function buscadorPersonajeStarWars(personaje) {
  try {
    const response = await axios.get(`https://swapi.dev/api/people/?search=${personaje}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos de la API externa (Controlador):', error);
    throw error;
  }
}

module.exports = {
  personajesStarWars,
  personajeStarWars,
  buscadorPersonajeStarWars
};

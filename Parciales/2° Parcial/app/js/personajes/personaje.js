const cardContainer = document.querySelector('div.card');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
let userIndice = 1;

/**
 * Función utilizada para obtener los datos de 1 personaje de StarWars
 * @param {number} indice 
 * @returns Retorna una promesa de JSON
 */
const personajeStarWars = async (indice) => {
  const response = await fetch(`http://localhost:3000/api/personaje/${indice}`);
  return response.json();
};

/**
 * Función utilizada para obtener los datos del planeta de nacimiento del personaje buscado
 * @param {json} personaje 
 * @returns Retorna una Promesa JSON
 */
const obtenerPlanetaNacimiento = async (personaje) => {
  const response = await fetch(personaje.homeworld);
  return response.json();
};

/**
 * Función que se encarga de dibujar las información del personaje buscado
 * @param {json} personaje 
 */
const renderStarWars = async (personaje) => {
  const column = document.createElement('div');
  column.setAttribute('class', 'column');

  // Espero a que se complete la promesa para continuar
  const [planetaNacimiento] = await Promise.all([
    obtenerPlanetaNacimiento(personaje)
  ]);

  const card = `
  <ul>
    <li>Personaje: ${personaje.name}</li>
    <li>Fecha de nacimiento: ${personaje.birth_year}</li>
    <li>Planeta de Nacimiento: ${planetaNacimiento.name}</li>
  </ul>
  `;

  column.innerHTML = card;
  cardContainer.appendChild(column);
};

/**
 * Obtiene los datos de una función y se la facilita a otra para que dibuje la pantalla al Usuario
 * @param {number} page 
 */
const loadPage = async (page) => {
  cardContainer.innerHTML = ''; // Limpiar el contenido anterior
  const response = await personajeStarWars(page);
  await renderStarWars(response);
  userIndice = page;
};

// Cargar la primera página al cargar la página
loadPage(userIndice);

previousButton.addEventListener('click', () => {
  if (userIndice > 1) {
    loadPage(userIndice - 1);
  }
});

nextButton.addEventListener('click', () => {
  loadPage(userIndice + 1);
});

const listContainer = document.querySelector('div.list');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
let currentPage = 1;

/**
 * Función utilizada para obtener planetas de StarWars con sus datos utilizando paginación
 * @param {number} page 
 * @returns Retorn un JSON
 */
const planetasStarWars = async (page) => {
  const response = await fetch(`http://localhost:3000/api/planetas/${page}`);
  return response.json();
};

/**
 * Función que se encarga de dibujar las información del planeta buscado
 * @param {json} planeta 
 */
const renderStarWars = (planeta) => {
  const column = document.createElement('div');
  column.setAttribute('class', 'column');

  const card = `

  <ul>
    <li>${planeta.name}</li>
  </ul>
  `;

  column.innerHTML = card;
  listContainer.appendChild(column);
};

/**
 * Obtiene los datos de una función y se la facilita a otra para que dibuje la pantalla al Usuario
 * @param {number} page 
 */
const loadPage = async (page) => {
  listContainer.innerHTML = ''; // Limpiar el contenido anterior
  const response = await planetasStarWars(page);
  response.results.forEach(renderStarWars);
  currentPage = page;
};

// Cargar la primera página al cargar la página
loadPage(currentPage);

previousButton.addEventListener('click', () => {
  if (currentPage > 1) {
    loadPage(currentPage - 1);
  }
});

nextButton.addEventListener('click', () => {
  loadPage(currentPage + 1);
});

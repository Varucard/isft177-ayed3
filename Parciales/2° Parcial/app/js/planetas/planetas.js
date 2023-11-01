const listContainer = document.querySelector('div.list');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
let currentPage = 1;

const planetasStarWars = async (page) => {
  const response = await fetch(`http://localhost:3000/api/planetas/${page}`);
  return response.json();
};

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

const columnContainer = document.querySelector('div.columns');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
let currentPage = 1;

const fetchDigimonData = async (page) => {
  const response = await fetch(`https://www.digi-api.com/api/v1/digimon?page=${page}`);
  return response.json();
};

const renderDigimon = (digimon) => {
  const column = document.createElement('div');
  column.setAttribute('class', 'column');

  const card = `<div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <a href="${digimon.href}" target="_blank">
          <img src="${digimon.image}" alt="${digimon.name}">
        </a>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="card-header-title is-centered" style="height: 50px;">
          <p class="title is-4">${digimon.name}</p>
        </div>
      </div>
    </div>
  </div>`;

  column.innerHTML = card;
  columnContainer.appendChild(column);
};

const loadPage = async (page) => {
  columnContainer.innerHTML = ''; // Limpiar el contenido anterior
  const response = await fetchDigimonData(page);
  response.content.forEach(renderDigimon);
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

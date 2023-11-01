const cardContainer = document.querySelector('div.card');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
let planetIndice = 1;

/**
 * Función utilizada para obtener la información de un Planeta de StarWars
 * @param {number} indice 
 * @returns Retorna una Promesa JSON
 */
const planetaStarWars = async (indice) => {
  const response = await fetch(`http://localhost:3000/api/planeta/${indice}`);
  return response.json();
};

/**
 * Función utilizada para obtener los nativos del planeta obtenido
 * @param {json} planeta 
 * @returns Retorna una Promesa JSON
 */
const obtenerNativos = async (planeta) => {  
  const residentPromises = planeta.residents.map(async residente => {
    const response = await fetch(`${residente}`);
    return response.json();
  });

  const nativos = await Promise.all(residentPromises);

  return nativos;
};

/**
 * Función utilizada para obtener las peliculas en donde este planeta aparece
 * @param {json} planeta 
 * @returns Retorna una Promesa JSON
 */
const obtenerPeliculas = async (planeta) => {  
  const moviesPromises = planeta.films.map(async pelicula => {
    const response = await fetch(`${pelicula}`);
    return response.json();
  });

  const peliculas = await Promise.all(moviesPromises);

  return peliculas;
};

/**
 * Función que se encarga de dibujar las información del personaje buscado
 * @param {json} personaje 
 */
const renderStarWars = async (planeta) => {
  const column = document.createElement('div');
  column.setAttribute('class', 'column');

  // Espero a que se resuelvan las promesas para continuar con la ejecución
  const [nativos, peliculas] = await Promise.all([
    obtenerNativos(planeta),
    obtenerPeliculas(planeta)
  ]);

  // Creo arreglos con los nombres y los titulos obtenidos en base a la información que me da el planeta
  const nativosStr = nativos.map((nativo) => nativo.name);
  const peliculasStr = peliculas.map((pelicula) => pelicula.title);

  // Utilizo un ".map" para poder mostrar en una lista la información
  const card = `
  <ul>
    <li>Planeta: ${planeta.name}</li>
    <li>Población: ${planeta.population}</li>
    <li>Peliculas donde aparece:</li>
    <ol>
      ${peliculasStr.map((pelicula) => `<li>${pelicula}</li>`).join('')}
    </ol>
    <li>Nativos:</li>
    <ol>
      ${nativosStr.map((nativo) => `<li>${nativo}</li>`).join('')}
    </ol>
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
  const response = await planetaStarWars(page);
  await renderStarWars(response);
  planetIndice = page;
};

// Cargar la primera página al cargar la página
loadPage(planetIndice);

previousButton.addEventListener('click', () => {
  if (planetIndice > 1) {
    loadPage(planetIndice - 1);
  }
});

nextButton.addEventListener('click', () => {
  loadPage(planetIndice + 1);
});

const input = document.getElementById('name');
const boton = document.getElementById('boton');
const conteinerLista = document.getElementById('lista');
const listaPersonajes = document.createElement('ul');
const conteiner = document.querySelector('.container');
const limpiarBoton = document.getElementById('limpiar');

boton.addEventListener('click', () => {
  // Limpia el contenido anterior antes de realizar una nueva búsqueda
  listaPersonajes.innerHTML = '';
  conteinerLista.textContent = '';

  (async () => {
    // Obtengo los datos del personaje buscado
    const respuesta = await (await fetch(`http://localhost:3000/api/personaje_busqueda/${input.value}`)).json();

    if (respuesta.count === 0) {
      alert('Mandaste cualquiera maestro');
    } else {
      respuesta.results.forEach(personaje => {
        const li = document.createElement('li');
        li.textContent = `${personaje.name}`;

        // Crea una lista no ordenada para las películas
        const listaPeliculas = document.createElement('ul');

        personaje.films.forEach(async (pelicula, index) => {
          const data = await (await fetch(pelicula)).json();

          // Crea un elemento de lista para la película
          const peliculaLi = document.createElement('li');

          // Agrega el número de película al principio del texto
          peliculaLi.textContent = `${index + 1}. ${data.title}`;

          // Agrega el número de episodio y el año de lanzamiento debajo del nombre de la película
          const episodioLi = document.createElement('li');
          episodioLi.textContent = `Episodio: ${data.episode_id}`;
          peliculaLi.appendChild(episodioLi);

          const lanzamientoLi = document.createElement('li');
          lanzamientoLi.textContent = `Año de lanzamiento: ${data.release_date}`;
          peliculaLi.appendChild(lanzamientoLi);

          // Agrega el elemento de película a la lista de películas
          listaPeliculas.appendChild(peliculaLi);
        });

        // Agrega la lista de películas al elemento del personaje
        li.appendChild(listaPeliculas);

        // Agrega el elemento del personaje a la lista de personajes
        listaPersonajes.appendChild(li);
      });

      conteinerLista.appendChild(listaPersonajes);
    }
  })();

  // Limpia el campo de busqueda
  input.value = '';
});

limpiarBoton.addEventListener('click', () => {
  // Limpia el campo de búsqueda
  input.value = '';
  
  // Limpia la lista de personajes
  listaPersonajes.innerHTML = '';

  // Limpia la lista de películas
  listaPeliculas.innerHTML = '';

  // Limpia el contenedor principal
  conteinerLista.innerHTML = '';
});
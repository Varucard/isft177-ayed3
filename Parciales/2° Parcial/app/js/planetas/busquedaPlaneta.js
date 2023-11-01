const input = document.getElementById('name');
const boton = document.getElementById('boton');
const conteinerLista = document.getElementById('lista');
const listaPersonajes = document.createElement('ul');
const conteiner = document.querySelector('.container');
const limpiarBoton = document.getElementById('limpiar');

boton.addEventListener('click', () => {
  listaPersonajes.innerHTML = '';
  conteinerLista.textContent = '';

  (async () => {
    const respuesta = await (await fetch(`http://localhost:3000/api/planeta_busqueda/${input.value}`)).json();

    console.log(respuesta);

    if (respuesta.count === 0) {
      alert('Mandaste cualquiera maestro');
    } else {
    respuesta.results.forEach(personaje => {
      const li = document.createElement('li');
  
      li.textContent = `${personaje.name}`;
  
      listaPersonajes.appendChild(li);
    });

    conteinerLista.appendChild(listaPersonajes);
  }
  
  })();

  input.value = '';
})

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
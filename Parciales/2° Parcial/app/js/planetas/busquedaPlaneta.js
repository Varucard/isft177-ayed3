const input = document.getElementById('name');
const boton = document.getElementById('boton');
const conteinerLista = document.getElementById('lista');
const listaPlanetas = document.createElement('ul');
const conteiner = document.querySelector('.container');
const limpiarBoton = document.getElementById('limpiar');

boton.addEventListener('click', () => {
  // Limpia el contenido anterior antes de realizar una nueva búsqueda
  listaPlanetas.innerHTML = '';
  conteinerLista.textContent = '';

  (async () => {
    // Obtengo los datos del personaje buscado
    const respuesta = await (await fetch(`http://localhost:3000/api/planeta_busqueda/${input.value}`)).json();

    if (respuesta.count === 0) {
      alert('Mandaste cualquiera maestro');
    } else {
    respuesta.results.forEach(planeta => {
      const li = document.createElement('li');
  
      li.textContent = `${planeta.name}`;
  
      listaPlanetas.appendChild(li);
    });

    conteinerLista.appendChild(listaPlanetas);
  }
  
  })();

  input.value = '';
})

limpiarBoton.addEventListener('click', () => {
  // Limpia el campo de búsqueda
  input.value = '';
  
  // Limpia la lista de personajes
  listaPlanetas.innerHTML = '';

  // Limpia la lista de películas
  listaPeliculas.innerHTML = '';

  // Limpia el contenedor principal
  conteinerLista.innerHTML = '';
});
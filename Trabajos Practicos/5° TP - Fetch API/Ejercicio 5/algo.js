const input = document.getElementById('name');
const boton = document.getElementById('boton');
const conteinerLista = document.getElementById('lista');
const lista = document.createElement('ul');
const conteiner = document.querySelector('.container');
const loader = document.getElementById('loader');

// Oculta el loader al cargar la página
loader.style.display = 'none';

boton.addEventListener('click', () => {
  conteinerLista.textContent = '';
  loader.style.display = 'block';

  (async () => {
    try {
      const respuesta = await (await fetch(`https://swapi.dev/api/people/?search=${input.value}`)).json();

      if (respuesta.count === 0) {
        alert('Mandaste cualquiera maestro');
      } else {
        respuesta.results.forEach(usuario => {
          const li = document.createElement('li');
          li.textContent = `${usuario.name}`;
          lista.appendChild(li);
        });
        conteinerLista.appendChild(lista);
      }
    } catch (error) {
      console.error('Error:', error);
      // Aquí puedes manejar el error si la solicitud a la API falla
    } finally {
      loader.style.display = 'none'; // Oculta el loader cuando la búsqueda se completa
    }
  })();
});

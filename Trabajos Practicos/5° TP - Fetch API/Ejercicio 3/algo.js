const input = document.getElementById('name');
const boton = document.getElementById('boton');
const conteinerLista = document.getElementById('lista');
const lista = document.createElement('ul');
const conteiner = document.querySelector('.container');

boton.addEventListener('click', () => {

  conteinerLista.textContent = '';

  (async () => {
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
  
  })();

})


const contenedor = document.getElementById('container');
const listaContainer = document.getElementById('lista');
const lista = document.createElement('ul');
const botonAntes = document.getElementById('botonPrevious');
const botonDespues = document.getElementById('botonNext');

const botones = document.getElementsByTagName('button')
// Esto se cambia al clickear los botones, maquina, titan
let paginaActual = 1;
let cantMaximaPaginas = 9;

let request = (async () => {
  const respuesta = await (await fetch(`https://swapi.dev/api/people/?search=&page=${paginaActual}`)).json();

  respuesta.results.forEach(usuario => {
    const li = document.createElement('li');

    li.innerHTML = `<a href="${usuario.url}" target="_blank"> ${usuario.name}</a>`;

    lista.textContent = '';
    lista.appendChild(li);
  
  });

  listaContainer.appendChild(lista);

})();


container.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';

  if (isButton) {
    console.log('la');
    request;
  }
})


console.log(request);

if(paginaActual == 1) {
  botonAntes.setAttribute('disabled', true);
}

botonAntes.addEventListener('click', () => {
  request;
  paginaActual--;
  
  // Si existe otra pagina, habilita
  if(paginaActual == cantMaximaPaginas - 1) {
    botonDespues.removeAttribute('disabled');
  }
});

botonDespues.addEventListener('click', () => {
  request;
  paginaActual++;
  console.log(paginaActual);
  
  if(paginaActual == 9) {
    botonDespues.setAttribute('disabled', true);
  }
  if(paginaActual == 2) {
    botonAntes.removeAttribute('disabled');
  }
});
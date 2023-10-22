const body = document.body;
const lista = document.createElement('ul');

body.appendChild(lista);

(async () => {
  const respuesta = await (await fetch('https://swapi.dev/api/people')).json();

  respuesta.results.forEach(usuario => {
    const li = document.createElement('li');

    li.innerHTML = `<a href="${usuario.url}" target="_blank"> ${usuario.name}</a>`;

    lista.appendChild(li);
  });

})();
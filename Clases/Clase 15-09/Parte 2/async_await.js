const body = document.body;
const lista = document.createElement('ul');

body.appendChild(lista);

(async () => {
  const respuesta = (await (await fetch('https://reqres.in/api/users')).json()).data;

  respuesta.forEach(usuario => {
    const li = document.createElement('li');
    const img = document.createElement('img');

    img.setAttribute('src', usuario.avatar);
    img.setAttribute('style', 'border-radius:150px; border:3px solid #666');

    li.setAttribute('style', 'margin: 10px; margin-bottom: 25px');
    li.textContent = `${usuario.first_name} - ${usuario.last_name}`;

    lista.appendChild(img);
    lista.appendChild(li);
  });

})();
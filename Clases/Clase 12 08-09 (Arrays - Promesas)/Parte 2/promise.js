  /*
G:
  * George
J:
  * John
E:
  * Eve
*/
const divLista = document.getElementById('lista');

fetch('https://reqres.in/api/users')
.then((respuesta) => respuesta.json())
.then((datos) => {

  const nombre = datos.data.reduce((acumulador, item) => {
    acumulador.push(item.first_name);

    return acumulador;
  }, []);

  const obj = nombre.reduce((acumulador, item) => {
    const initialChar = item[0];

    if (initialChar in acumulador) {
      acumulador[initialChar].push(item);
    } else {
      acumulador[initialChar] = [item];
    }

    return acumulador;
  }, {});

  for (const clave in obj) {
    if (obj.hasOwnProperty(clave)) {
      const lista = document.createElement('ul');
      const titulo = document.createElement('h2');
      titulo.textContent = clave + ':';
  
      obj[clave].forEach(nombre => {
        const item = document.createElement('li');
        item.textContent = nombre;
        lista.appendChild(item);
      });
  
      titulo.appendChild(lista);
      divLista.appendChild(titulo);
    }
  }

})
.catch((error) => {})
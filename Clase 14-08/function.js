const p = [2, 45, 37, 29, 10, 54, 22];

const personas = [
  {
    nombre: 'Lucas',
    edad: 30
  },
  {
    nombre: 'Cristian',
    edad: 12
  },
  {
    nombre: 'Camila',
    edad: 76
  }
];

const elementoHTML = (elemento, contenido) => {
  const elementoHTML = document.createElement(elemento);
  elementoHTML.textContent = contenido;
  return elementoHTML;
};

const listaHTML = (tipoLista, numeroItems) => {
  const listaHTML = document.createElement(tipoLista);
  
  let text = 'Elemento desordenado';

  for (let i = 0; i < numeroItems; i++) {
    const li = document.createElement('li');
    const textNodo = document.createTextNode(text);
    li.appendChild(textNodo);
    listaHTML.appendChild(li);
  }

  return listaHTML;
};

console.log(elementoHTML('p', 'Bienvenido'));

console.log(listaHTML('ol', 3));

console.log(listaHTML('ul', 3));

console.log([4, 9, 49, 81, 100, 121, 36, 16, 25].map((item) => Math.sqrt(item)));

console.log(p);
console.log(p.map((item) => item % 2 === 1 ? false : true));
console.log(p.map((item) => item % 2 === 0));

console.log(personas.map((item) => ({nombre: item.nombre, año: (2023 - item.edad)})));
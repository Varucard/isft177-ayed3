window.onload = function () {

  const animales = ['Perro', 'Gato', 'Loro', 'Zorro', 'Zarigueya'];
  const body = document.body;
  const div = document.createElement('div');
  const listaNoOrdenada = document.createElement('ul');
  
  body.appendChild(div);

  div.appendChild(listaNoOrdenada);

  animales.forEach(animal => {
    const item = document.createElement('li');
    item.textContent = animal;
    listaNoOrdenada.appendChild(item);
  });

}
const body = document.body;
const div = document.getElementById('div');
div.style.width = '10px';
div.style.height = '100000px';

console.error(navigator.credentials);

const colores = ['red', 'green', 'blue', 'orange', 'yellow', 'black'];

const intervalo = setInterval(() => {
  let numero = Math.floor(Math.random() * colores.length);
  div.style.backgroundColor = colores[numero];
}, 500);   
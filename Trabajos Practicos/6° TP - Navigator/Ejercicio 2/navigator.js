const body = document.body;
const br = document.createElement('br');
let p;

const intervalo = setInterval(() => {
  const fechaActual = new Date();

  p = document.createElement('p');
  p.textContent = fechaActual;
  body.appendChild(p);
  body.appendChild(br);
}, 2000);

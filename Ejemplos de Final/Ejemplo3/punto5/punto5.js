const v = [2, 4, 35, 83, 22, 78, 85];

const numero =  Math.floor(Math.random() * 25) + 1;

const funcion = function random(arreglo, numero) {
  let i = false;

  arreglo.forEach(item => {
    if (item === numero) i = true;
  });

  return i;
};

console.log(funcion(v, numero));
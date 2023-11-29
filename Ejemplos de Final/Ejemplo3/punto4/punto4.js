const v = [2, 4, 35, 83, 22, 78, 85];

const numero = v.reduce((acumulador, item) => {
  if (item > acumulador) acumulador = item;
  return acumulador;
});

console.log(numero);
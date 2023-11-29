const v = [1.5, 2.2, 3.5, 8.3, 2.2, 7.8];

const numero = v.reduce((acumulador, item, index, array) => {
  acumulador += item;

  if (index === array.length - 1) return acumulador / array.length - 1;
  else return acumulador;
});

console.log(numero);
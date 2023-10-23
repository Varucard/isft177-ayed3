// Ejercicio N°6
const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question("Por favor, ingrese 3 numeros: ", (ingreso) => {

  const numeros = ingreso.split(" ").map((numero) => parseInt(numero));
  const numero2 = numeros.map((numero) => numero * 2);

  console.log(`Le devolvemos su arreglo aumentado: ${numero2}`);

  r.close();
})
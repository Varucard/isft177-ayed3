// Ejercicio N°5
const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question("Por favor, ingrese 10 numeros: ", (ingreso) => {

  const numeros = ingreso.split(" ").map((numero) => parseInt(numero));
  let promedio = 0;

  numeros.forEach(element => {
    promedio += element;
  });

  promedio = promedio / numeros.length;

  console.log(`El promedio de los numeros que ingreso es: ${promedio}`);

  r.close();
})
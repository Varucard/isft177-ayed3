// Ejercicio N°3
const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question("Ingrese su nombre y un numero por favor: ", (ingreso) => {

  let data = ingreso.split(" ");
  nombre = data[0];
  contador = data[1];

  for (let i = 0; i < contador; i ++) console.log(`Nombre ingresado: ${nombre}`);

  r.close();
})
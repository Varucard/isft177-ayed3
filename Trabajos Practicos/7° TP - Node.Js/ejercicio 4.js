// Ejercicio N°4
const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question("Ingrese su nombre por favor: ", (ingreso) => {

  console.log(`Hola: ${ingreso}`);
  console.log(`Usted tiene ${ingreso.length} letras en su nombre`);

  r.close();
})
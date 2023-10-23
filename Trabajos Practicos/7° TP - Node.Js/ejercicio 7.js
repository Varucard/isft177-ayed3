// Ejercicio N°7
const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question("Por favor, ingrese 5 palabras de su agrado: ", (ingreso) => {

  const palabras = ingreso.split(" ");
  const palabra = palabras.reduce((stringMasLargo, palabra) => {
    if (palabra.length > stringMasLargo.length) {
      return palabra;
    } else {
      return stringMasLargo;
    }
  }, '');

  console.log(`Queremos mostrale la palabra mas larga que ingreso: ${palabra}`);

  r.close();
})
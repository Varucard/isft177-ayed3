// Importar la biblioteca readline
const readline = require('readline');

// process.stdin - entrada standard - Por defecto teclado
// process.stdout - salida standard - Por defecto pantalla (Consola)
// process.stderr - error standard - Por defecto pantalla (Consola)

// console.log(process);

// console.info('Bienvenidos a Node.js');

// Vinculamos readline con entrada/ salida standard
const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// r.question('Por favor ingrese su nombre: ', (nombre) => {
//   console.info(`Hola ${nombre}, como andas?`);
//   r.close();
// });

r.question('Por favor ingrese 3 numeros enteros separados por un espacio: ', (numeros) => {
  
  const v = numeros.split(' ').map(item => parseInt(item)).reduce((sumatorio, valor) => {
    return sumatorio + valor;
  }, 0);

  console.info(v);
  r.close();
});
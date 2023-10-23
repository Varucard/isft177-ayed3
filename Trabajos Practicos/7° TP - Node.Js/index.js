const fs = require('fs');

// Ruta del archivo que deseas leer
const rutaArchivo = '../7° TP - Node.Js/assets/archivo.txt';

// Leer el contenido del archivo de forma asincrónica
fs.readFile(rutaArchivo, 'utf8', (error, datos) => {
  if (error) {
    console.error('Error al leer el archivo:', error);
    return;
  }

  console.log('Contenido del archivo:', datos);
  console.log(`El contenido del archivo tiene ${datos.length} de caracteres de largo`);
});

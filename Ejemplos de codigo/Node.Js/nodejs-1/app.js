// Importar la biblioteca readline
const readline = require("readline");

// process.stdin - entrada estandar - por defecto teclado
// process.stdout - salida estandar - por defecto pantalla (consola)
// process.stderr - error estandar - por defecto pantalla (consola)

console.info("Bienvenidos a Node.js");

// Vincular readline con entrada/salida estandar
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r.question("Ingrese 3 numeros enteros separados por un espacio: ", (numeros) => {
    const sumatoria = numeros.split(" ").map(item => Number(item)).reduce((sumatoria, valor) => {
        return sumatoria + valor;
    }, 0);

    console.log();
    r.close();
})
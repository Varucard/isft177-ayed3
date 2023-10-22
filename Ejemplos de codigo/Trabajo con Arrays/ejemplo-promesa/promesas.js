/**
 * Una promesa puede estar en uno de tres estados
 * 
 * Pendiente (Pending): es una operacion que aun no comienza
 *  a ejecutarse
 * 
 * Completada (Fulfilled): es una promesa que se completó
 *  exitosamente
 * 
 * Rechazada (Rejected): es una promesa que no se completó
 *  exitosamente
 */

// Creacion
const promesa = new Promise((resolve, reject) => {
    // Numero aleatorio entre 0 y 10
    const numero = Math.round(Math.random() * 10);
    const esPar = numero % 2 == 0;

    if (esPar) 
        resolve("Promesa completada exitosamente");
    else
        reject("La promesa falló");
});

// Uso
promesa
    .then((resultado) => console.log(resultado))
    .catch((error) => console.error(error))

/**
 * Implementar una promesa que al cabo de 2,5 segundos
 * resuelva exitosamente si un numero calculado aleatoriamente entre 0 y 100 
 * es mayor o igual a 50. En caso contrario, la promesa sera rechazada.
 * 
 * En caso de exito, la promesa debe devolver el valor "Resuelta OK"; en caso
 * de error, el valor sera "Promesa incumplida 😅".
 * 
 * En ambos casos, mostrar el valor por consola
 * https://unicode.org/emoji/charts/full-emoji-list.html 
 */
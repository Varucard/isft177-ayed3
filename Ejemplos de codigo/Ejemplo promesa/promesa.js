// Como programador
const promesa = new Promise((resolve, reject) => {
    // Esta promesa se resolvera exitosamente
    // al cabo de 3 segundos, devolviendo el mensaje
    // "Promesa completada"
    setTimeout(() => {
        resolve("Promesa completada")
    }, 3000);
});

const promesaAleatorio = new Promise((resolve, reject) => {
    // Valor aleatorio entre 1 y 100
    const numero = Math.floor(Math.random() * 100 + 1);
    const esNumeroPar = numero % 2 == 0;

    esNumeroPar ? resolve(numero) : reject("El número es impar");
});

// Como consumidor
// promesaAleatorio
//     .then((valor) => console.log(valor))
//     .catch((error) => console.error(error))
//     .finally(() => console.log("Yo me ejecuto siempre"));

///////////////////////////////////////////////////////////////

/**
 * Usando fetch, realizar una solicitud tipo GET a la URL
 * https://reqres.in/api/users y mostrar el resultado
 * por consola
 */
fetch("https://reqres.in/api/users")
    // fetch devuelve un objeto que representa a la respuesta
    .then((respuesta) => respuesta.json())
    // .json() devuelve otra promesa con el contenido de la respuesta
    .then((datos) => {
        const usuarios = datos.data.map(item => {
            return { nombre: item.first_name + " " + item.last_name }
        });
        for(let k = 0; k < usuarios.length; k++) 
            console.log(usuarios[k]);
    })
    .catch((error) => console.error(error));

//////////////////////////////////////////////////////

/**
 * Consumiendo la API https://reqres.in/api/users, utilizando fetch,
 * desarrollar un programa que por cada usuario que devuelve la API,
 * genere un item de lista y lo inserte en una lista no ordenada
 */
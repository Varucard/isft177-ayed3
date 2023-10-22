const animales = ["perro", "gato", "oveja", "oveja", "hamster", "hamster", "perro", "perro"];

/**
 * Implementar una funcion reductora que retorne un objeto donde cada clave
 * sea un animal del arreglo de animales y el valor la cantidad de veces que
 * el animal aparece en el arreglo
 * 
 * {
 *      perro: 3,
 *      gato: 1,
 *      oveja: 1,
 *      lobo: 1,
 *      hamster: 2
 * }
 */

const contadorDeAnimales = animales.reduce((acumulador, item) => {
    if (item in acumulador) {
        acumulador[item]++;
    } else {
        acumulador[item] = 1;
    }

    return acumulador;
}, {});

console.log("Contador de animales", contadorDeAnimales);

////////////////////////////////////////////////////////////////////

const personas = [
    { nombre: "Lucas", pais: "Argentina" },
    { nombre: "Matias", pais: "Argentina" },
    { nombre: "Gonzalo", pais: "Hackerlandia" },
    { nombre: "Diego", pais: "Argentina" },
    { nombre: "Marcela", pais: "Argentina" },
    { nombre: "Angel", pais: "Argentina" },
    { nombre: "Camila", pais: "Argentina" },
    { nombre: "Cristian", pais: "Argentina" }
];

/**
 * Crear una funcion reductora para el arreglo personas, de manera que
 * devuelva un objeto donde cada clave sea un pais y su valor la cantidad
 * de personas que pertenecen a ese pais
 * 
 * {
 *      Argentina: 7,
 *      Hackerlandia: 1
 * }
 */


////////////////////////////////////////////////////////////////////

const respuesta = {
    cantidad_personas: 4,
    datos: [
        { nombre: "Lucas", apellido: "Sosa", edad: 24 },
        { nombre: "Cristian", apellido: "Rives", edad: 20 },
        { nombre: "Diego", apellido: "Ramírez", edad: 50 },
        { nombre: "Diego", apellido: "Fernández", edad: 51 }
    ]
};

/**
 * Suponiendo que una API retorna el objeto almacenado en la constante "respuesta",
 * procesarlo y devolver otro objeto con la siguiente estructura:
 * 
 * {
 *      mayoresDe50: 1,
 *      menoresDe50: 3,
 *      contadorDeNombres: {
 *          Lucas: 1,
 *          Cristian: 1,
 *          Diego: 2
 *      }
 * }
 */
function mostrarAgrupado(nombre, dato) {
    console.groupCollapsed(nombre);
    console.log(dato);
    console.groupEnd(nombre);
}
const v = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
mostrarAgrupado("Vector v original", v);

/**
 * Dado el vector v de numeros enteros, calcular su sumatoria
 */
const sumatoria = v.reduce((acumulador, item) => {
    return acumulador + item;
}, 0); 
mostrarAgrupado("Sumatoria", sumatoria);

/**
 * Dado el vector v, calcular su promedio
 */
const promedio = v.reduce((acumulador, item, indice, arreglo) => {
    return acumulador + item / arreglo.length
}, 0);
mostrarAgrupado("Promedio", promedio);

/**
 * Dado el vector v, escribir una funcion reductora que
 * sume los elementos que esten en una posicion impar de v
 */
const sumaPosImpar = v.reduce((acumulador, item, indice) => {
    if (indice % 2 == 1) {
        return acumulador + item;
    }
    return acumulador;
}, 0);
mostrarAgrupado("Sumatoria de posiciones impares", sumaPosImpar);

/**
 * Dado un arreglo de alumnos y su promedio, retornar un objeto
 * contenido la cantidad de aprobados y de desaprobados
 * 
 * {
 *      aprobados: N,
 *      desaprobados: M
 * }
 */
const alumnos = [
    { nombre: "Cristian", promedio: 7.5 },
    { nombre: "Gonzalo", promedio: 8.66 },
    { nombre: "Matías", promedio: 5.66 },
    { nombre: "Lucas", promedio: 10 }
];

const aprobadosDesaprobados = alumnos.reduce((acumulador, item) => {
    if (item.promedio >= 7) {
        acumulador.aprobados++;
    } else {
        acumulador.desaprobados++;
    }
    return acumulador;
}, { aprobados: 0, desaprobados: 0 });
mostrarAgrupado("Aprobados y desaprobados", aprobadosDesaprobados);

/**
 * Dado un arreglo de alumnos y sus correspondientes notas,
 * retornar un arreglo de objetos, donde cada uno tenga la estructura:
 * 
 * [{
 *      nombre: "nombre del alumno",
 *      promedio: promedio del alumno
 * }]
 * 
 * Tip: usar un map y un reductor
 */
const alumnosConNotas = [
    { nombre: "Cristian", notas: [6.66, 7.5, 8.33] },
    { nombre: "Camila", notas: [8.66, 7.5, 8.33] },
    { nombre: "Marcelo", notas: [8.88, 1.5, 7.5, 8.33] },
    { nombre: "David", notas: [9.66, 7.5, 8.33, 4.5] },
];

const alumnosConPromedio = alumnosConNotas.map((item) => ({
        nombre: item.nombre,
        promedio: Math.round(item.notas.reduce((acumulador, item, indice, arreglo) => acumulador + item / arreglo.length, 0))
    }));
mostrarAgrupado("Alumnos con promedio", alumnosConPromedio);

/**
 * Dado un arreglo de paises y provincias, devolver un arreglo de objetos,
 * donde la estructura de cada uno de ellos sea:
 * 
 * [
 *      { pais: "Argentina", provincia: "Buenos Aires" },
 *      { pais: "Argentina", provincia: "La Rioja" },
 *      { pais: "Argentina", provincia: "Córdoba" },
 *      { pais: "Uruguay", provincia: "Maldonado" },
 *      ...
 * ]
 * 
 * Considerar solo los paises que tengan mas de 2 provincias.
 */

const paisesConProvincias = [
    {
        pais: "Argentina",
        provincias: ["Buenos Aires", "La Rioja", "Córdoba"]
    },
    {
        pais: "Uruguay",
        provincias: ["Maldonado", "Montevideo", "Ciudad del Este", "Canelones"]
    },
    {
        pais: "Estados Unidos",
        provincias: ["Manhattan", "Delaware", "Iowa", "Texas", "Florida", "Des Moines"]
    },
    {
        pais: "Islandia",
        provincias: ["Reikjavic"]
    }
];
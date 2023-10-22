function mostrarAgrupado(nombre, dato) {
    console.groupCollapsed(nombre);
    console.log(dato);
    console.groupEnd(nombre);
}
const v = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
mostrarAgrupado("Vector v original", v);

/**
 * Dado un vector v, crear dos nuevos vectores donde uno contenga
 * solo los elementos pares y el otro los elementos impares de v
 */
const pares = v.filter(item => item % 2 == 0);
mostrarAgrupado("Vector de pares", pares);
const impares = v.filter(item => item % 2 == 1);
mostrarAgrupado("Vector de impares", impares);

/**
 * Dado un vector de nombres de personas, crear un nuevo vector
 * que contenga solo los nombres que comiencen con la letra L
 * y que contengan 5 o más caracteres
 */
const nombres = ["Matías", "Cristian", "Camila", "Gonzalo", "Ángel", "Lucas", "Luis"];
const resultado = nombres.filter(item => {
    return item.length >= 5 && item.startsWith("L")
});
mostrarAgrupado("Nombres que empiezan con L y tienen mas de 5 letras", resultado);

/**
 * Dado un vector de nombres de animales, crear un nuevo vector
 * que contenga sólo los animales cuyo nombre tenga la letra p o P,
 * El vector resultante debe contener los nombres en letra mayuscula
 */
const animales = ["Perro", "gato", "pavo", "cobayo", "hámster", "tortuga", "petauro de azúcar"];
const animalesConP = animales.filter(item => item.toLowerCase().includes("p")).map(item => item.toUpperCase());
mostrarAgrupado("Animales con letra p", animalesConP);

/**
 * Dado un arreglo de personas y sus edades en años, crear un nuevo vector
 * con las personas mayores de 21 años
 */
const personas = [
    { nombre: "Cristian", edad: 29 },
    { nombre: "David", edad: 54 },
    { nombre: "Camila", edad: 23 },
    { nombre: "Lucas", edad: 21 },
    { nombre: "Ángel", edad: 17 }
];
const mayoresDe21 = personas.filter(item => item.edad > 21);
mostrarAgrupado("Mayores de 21 años", mayoresDe21);
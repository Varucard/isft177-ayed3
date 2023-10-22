function agrupar(nombre, datos) {
    console.groupCollapsed(nombre)
    console.log(datos);
    console.groupEnd();
}

const v = [4, 1, -10, -3, 7, 99, 80, -6, 19];
agrupar("Vector v", v);


/**
 * Crear un nuevo vector, a partir de v,
 * que contenga todos los números pares de v
 */
const f = v.filter(function(item) {
    return item % 2 == 0;
});

agrupar("Vector f: numeros pares", f);

/**
 * Crear un nuevo vector, a partir de v,
 * que contenga todos los números impares
 *  de v
 * 
 * Usar una función flecha
 */
const f2 = v.filter(item => [-1, 1].includes(item % 2));
agrupar("Vector f2: numeros impares", f2);


const nombres = ["Matías", "David", "Jorge", "Lucas", "Diego", "Ángel", "Marcela", "Camila", "Cristian"];
agrupar("Vector de nombres", nombres);

/**
 * Crear un nuevo vector que sólo contenga
 * los nombres de más de 5 letras
 */
const s = nombres.filter(nombre => nombre.length > 5);
agrupar("Nombres de mas de 5 letras", s);

/**
 * Crear un nuevo vector que sólo contenga
 * los nombres que empiecen con L
 */
const s2 = nombres.filter(nombre => {
    return nombre.startsWith("L");
});
agrupar("Nombres que empiecen con L", s2);


const personas = [
    { nombre: "Lucas", edad: 18 },
    { nombre: "Ángel", edad: 27 },
    { nombre: "Lucas", edad: 34 },
    { nombre: "Matías", edad: 20 }
];
agrupar("Vector de personas", personas);

/**
 * Crear un nuevo vector que sólo contenga
 * las personas mayores de 30 años
 */
const p = personas.filter(item => {
   return item.edad > 30; 
});
agrupar("Vector p: mayores de 30 años", p);

/**
 * Crear un nuevo vector que sólo contenga
 * las personas cuya edad esté entre 20 y 30 años (ambos inclusive),
 * y su nombre tenga más de 5 letras
 */
const p2 = personas.filter(item => item.edad >= 20 && item.edad <= 30 && item.nombre.length > 5);
agrupar("Vector p2: edad entre 20 y 30 y nombre mas de 5 letras", p2);
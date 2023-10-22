function agrupar(nombre, datos) {
    console.groupCollapsed(nombre)
    console.log(datos);
    console.groupEnd();
}

const v = [1, 2, 3];
agrupar("Vector v", v);

/**
 * Crear un nuevo vector, donde cada 
 * elemento sea el doble de los elementos
 * del vector v
 */
const r = v.map(function(item) {
    return 2*item;
});
agrupar("Vector r", r);

/**
 * Crear un nuevo vector, donde cada 
 * elemento sea el triple de los elementos
 * del vector v
 */
const r2 = v.map(function(item) {
    return 3*item;
});
agrupar("Vector r2", r2);

/**
 * Crear un nuevo vector, donde cada 
 * elemento sea la raiz cuadrada de los 
 * elementos del vector v
 */
const r3 = v.map(function(item) {
    return Math.sqrt(item);
});
agrupar("Vector r3", r3);

/**
 * Crear un nuevo vector, donde cada elemento
 * sea la tercera potencia de los elementos
 * del vector v
 */
const r4 = v.map((item) => {
    return Math.pow(item, 3);
});
agrupar("Vector r4 | Potencia de 3", r4);

/**
 * Crear un nuevo vector, donde cada elemento
 * sea la quinta potencia de los elementos
 * del vector v.
 * 
 * Si la unica linea que la funcion flecha posee
 * es el return, se puede omitir la palabra return
 * y las llaves
 * 
 * Si la funcion flecha posee un solo parametro,
 * se pueden omitir los parentesis
 */
const r5 = v.map(item => Math.pow(item, 5));
agrupar("Vector r5 | Potencia de 5", r5);
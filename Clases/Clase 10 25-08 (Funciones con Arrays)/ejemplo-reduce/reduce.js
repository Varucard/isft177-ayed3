function agrupar(nombreGrupo, datos) {
  console.groupCollapsed(nombreGrupo);
  console.log(datos);
  console.groupEnd(nombreGrupo);
}

const v = [3, 10, 99, 3, -4, -8, 1, 2, 2, 8, 5, 4];
agrupar("Vector original v", v);

/**
 * Dado un vector de numeros enteros, calcular la sumatoria
 * de todos sus elementos
 */
const sumatoria = v.reduce((acumulador, item) => item + acumulador, 0);
agrupar("Sumatoria de v", sumatoria);


/**
 * Dado un vector de numeros enteros, calcular el promedio
 * de sus elementos
 */
const promedio = v.reduce(function (acumulador, item) {
  return acumulador + item / v.length;
}, 0);
agrupar("Promedio de v", promedio);


/**
 * Dado un vector de cadenas de caracteres con nombres de personas,
 * crear y retornar un objeto con la cantidad de veces que se
 * repite cada nombre
 * 
 */

const p = ["Lucas", "Lucas", "Franco", "Karen", "Diego", "Angel", "Marcelo", "Marcelo", "Walter", "Marcelo", "Franco", "Juan"];
const repeticiones = p.reduce((acumulador, item) => {
  if (acumulador[item])
    acumulador[item]++;
  else
    acumulador[item] = 1;

  return acumulador;
}, {});
agrupar("Numero de repeticiones de los nombres", repeticiones);
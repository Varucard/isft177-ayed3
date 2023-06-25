/**
 * @param {string} valor Dato a revisar y validar
 * @param {string} expresionRegular Expresión regular para validar
 * @returns {true} Retorn True si encontro un Match o un False si no encontro
 */
function validarString(valor, expresionRegular) {
  if (expresionRegular.test(valor)) return true;

  return false;
}

/**
 * Verifica si el elemento pasado se encuentra repetido dentro del array
 * @param {[string]} lista 
 * @param {string} valor 
 * @returns Retorn FALSE si no encuentra una coincidencia y TRUE si la encuetra
 */
function validarDuplicado(lista, valor) {

  for (var i = 0; i < lista.length; i++) {
    if (lista[i] == valor.toString()) {
      return true
    }
  }

  return false; // El valor no se repite
}

/**
 * Recibe un mensaje para ser mostrado por pantalla
 * @param {string} mensaje 
 */
function mensajePantalla(mensaje) {
  alert(mensaje);
}
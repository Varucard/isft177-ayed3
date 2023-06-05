$(document).ready(function() {
  $('.chosen-select').chosen();

  $('#formulario').submit(function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe automáticamente

      // Obtener los valores de los elementos
      var opciones = $('#ciudades').val();
      var input1 = $('#nombre').val();
      var input2 = $('#edad').val();

      // Hacer algo con los valores obtenidos
      console.log('Opciones seleccionadas:', opciones);
      console.log('Input 1:', input1);
      console.log('Input 2:', input2);

      // Aquí puedes realizar cualquier acción adicional con los datos obtenidos, como enviarlos a un servidor o procesarlos en JavaScript.
  });
});

/**
 * Pinta el contenido que se encuentre dentro del arreglo pasado dentro de una lista no ordenada
 * La lista no ordenada tambien es recibida por parametro
 * @param {[string]} listadoTareas Arreglo de string que se ven a escribir en la lista
 * @param {string} lista Elemento de Lista no ordenada extraido del HTML
 */
function pintarLista(listadoTareas, lista) {

  listadoTareas.forEach(function(tarea) {

    // Crear el li a agregar en la Lista
    li = document.createElement("li"); 

    // Establecer el contenido del li como el elemento actual del array
    li.textContent = tarea;

    // Agregar el li al ul
    lista.appendChild(li); 
  });

}
  
/**
 * Recibe un string para pintar un nuevo elemento al final de la lista pasada
 * @param {string} tarea Contenido que se va a escribir en el nuevo elemento
 * @param {string} lista Lista donde se va a pintar el nuevo elemento
 */
function agregarElementoLista(tarea, lista) {

  // Crear el li a agregar en la Lista
  li = document.createElement("li"); 

  // Establecer el contenido del li
  li.textContent = tarea;

  // Agregar el li al ul
  lista.appendChild(li); 
}

function validarString(valor) {
  const expresionRegular = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  return expresionRegular.test(valor);
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
 * Recibe un String y lo normaliza capitalizando el primer caracter
 * @param {string} string Palabra a Normalizar
 * @returns Retorna la Palabra con la primar letra Capitalizada
 */
function capitalizarPrimerLetra(string) {

  // Obtengo y capitalizo la primer letra de la palabra pasada
  var primeraLetra = string.charAt(0).toUpperCase();

  // Al resto de la palabra la paso a minuscualas
  var restoPalabra = string.slice(1).toLowerCase();

  // Retorno la suma de lo obtenido
  return primeraLetra + restoPalabra;

}

/**
 * Recibe un mensaje para ser mostrado por pantalla
 * @param {string} mensaje 
 */
function mensajePantalla(mensaje) {
  alert(mensaje);
}
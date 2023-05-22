window.onload = function () {

  // Listado de Tareas
  var tareas = [ "Desayunar", "Ir a cursar", "Almorzar" ];
  // Obtengo la Lista por ID
  const lista = document.getElementById("list");
  // Obtengo lo ingresado por Input por ID
  const ingreso = document.getElementById("input");
  // Obtengo el Boton para saber cuando lo presionan
  const boton = document.getElementById("button");

  // Llamo a la función para generar el contenido de la lista dentro de la Pagina
  pintarLista(tareas, lista);

  // Agrego un escuchador para saber cuando se apreta el boton y obtener el valor del input
  boton.addEventListener("click", function() {

    // Valido que no se ingresen cosas raras
    if (!(validarString(ingreso.value))) {
      
      // En caso de que no Capitalizo el valor ingresado
      valorIngresado = capitalizarPrimerLetra(ingreso.value)
      
      // Valido que el valor ingreso no este duplicado
      if (!validarDuplicado(tareas, valorIngresado)) {
        
        // Si no esta duplicado lo meto dentro del arreglo
        tareas.push(valorIngresado);
        
        // Agrego el Elemento a lista
        agregarElementoLista(valorIngresado, lista);
      } else {

        // Si es duplicado se lo notifico al Usuario
        mensajePantalla(`El valor ingresado "${valorIngresado}" ya se encuentra en la lista`);
      }

    } else {

      // En caso de que si le aviso al Usuario que no haga cosas raras
      mensajePantalla("Por favor no ingrese cosas raras al sistema");
    }
    
  });

}
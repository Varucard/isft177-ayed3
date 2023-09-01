window.onload = function () {
  const input = document.getElementById("opcion");
  const boton = document.querySelector("button");
  const lista = document.getElementById("lista");

  boton.onclick = function () {
    // Leemos el contenido del input y lo almacenamos en la constante textoOpcion
    const textoOpcion = input.value;
    // Bandera para determinar si el elemento ya existe o no en la lista de opciones
    let existe = false;

    // Iteramos las opciones de la lista, comparandolas con lo ingresado en el input
    // y valorizamos apropiadamente la bandera
    for (let k = 0; k < lista.options.length; k++) {
      const elementoActual = lista.options[k];

      if (elementoActual.value == textoOpcion) {
        alert("El elemento existe");
        existe = true;
        break;
      }
    }

    // Si el elemento no existe, o sea, no fue agregado todavia en la lista,
    // lo creamos y lo agregamos
    if (!existe) {
      const opcion = document.createElement("option");
      opcion.innerText = textoOpcion;
      opcion.value = textoOpcion;
      lista.appendChild(opcion);
    }
  };
};

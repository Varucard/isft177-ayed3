window.onload = function () {

  const body = document.body;
  const sectionTitulo = document.createElement('section');
  const sectionFormulario = document.createElement('section');
  const form = document.createElement('form');
  const h1 = document.createElement('h1');
  const labelNombre = document.createElement('label');
  const labelEdad = document.createElement('label');
  const labelCiudad = document.createElement('label');
  const inputNombre = document.createElement('input');
  const inputEdad = document.createElement('input');
  const inputButton = document.createElement('input');
  const selectCiudad = document.createElement('select');
  
  const ciudades = [ 'Libertad', 'Parque San Martin', 'Merlo Centro', 'San Antonio de Padua', 'Ituzaingo', 'Moreno', 'Ciudadela' ];

  h1.textContent = 'Formulario de Alta de Personas';
  labelNombre.textContent = 'Nombre y Apellido:';
  labelEdad.textContent = 'Edad:';
  labelCiudad.textContent = 'Ciudad:';

  // <section> del Titulo
  body.appendChild(sectionTitulo);
  sectionTitulo.appendChild(h1);

  // <section> del Formulario
  body.appendChild(sectionFormulario);
  sectionFormulario.appendChild(form);

  // Ingreso del Nombre
  inputNombre.setAttribute('id', 'nombre');
  inputNombre.setAttribute('type', 'text');
  inputNombre.setAttribute('required', 'required');
  labelNombre.appendChild(inputNombre);
  form.appendChild(labelNombre);

  // Ingreso de la Edad
  inputEdad.setAttribute('id', 'edad');
  inputEdad.setAttribute('type', 'number');
  inputEdad.setAttribute('required', 'required');
  inputEdad.setAttribute('min', '18');
  inputEdad.setAttribute('max', '110');
  labelEdad.appendChild(inputEdad);
  form.appendChild(labelEdad);

  // Ingreso de las Ciudades
  ciudades.forEach(function(ciudad) {
    optionSelect = document.createElement('option');
    optionSelect.textContent = ciudad;
    optionSelect.setAttribute('value', ciudad);
    selectCiudad.appendChild(optionSelect)
  });
  selectCiudad.setAttribute('id', 'ciudades');
  selectCiudad.setAttribute('multiple', 'multiple');
  selectCiudad.setAttribute('required', 'required');
  labelCiudad.appendChild(selectCiudad)
  form.appendChild(labelCiudad);
  
  // Boton 
  inputButton.textContent = 'Enviar';
  inputButton.setAttribute('class', 'false-button');
  inputButton.setAttribute('value', 'Enviar');
  inputButton.setAttribute('type', 'submit');
  form.appendChild(inputButton);


  function mostrarOpciones() {
    var lista = document.getElementById("ciudades");
    lista.size = lista.options.length;
  }

  function mostrarSeleccion() {
    var lista = document.getElementById("ciudades");
    var seleccionadas = [];
  
    for (var i = 0; i < lista.options.length; i++) {
      if (lista.options[i].selected) {
        seleccionadas.push(lista.options[i].value);
      }
    }
  }


  // Listado de Tareas
  // Obtengo la Lista por ID
  const lista = document.getElementById('list');
  // Obtengo lo ingresado por Input por ID
  const ingreso = document.getElementById('input');
  // Obtengo el Boton para saber cuando lo presionan
  const boton = document.getElementById('button');

  // Llamo a la función para generar el contenido de la lista dentro de la Pagina
  pintarLista(tareas, lista);
  titulo;

  // Agrego un escuchador para saber cuando se apreta el boton y obtener el valor del input
  boton.addEventListener('click', function() {

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
        mensajePantalla(`El valor ingresado '${valorIngresado}' ya se encuentra en la lista`);
      }

    } else {

      // En caso de que si le aviso al Usuario que no haga cosas raras
      mensajePantalla('Por favor no ingrese cosas raras al sistema');
    }
    
  });

}
window.onload = () => {

  // Variables
  const listado_ciudades = ['Mariano Acosta', 'Agustin Ferrari', 'Merlo', 'S.A de Padua', 'Libertad', 'Pontevedra'];

  const body = document.body;
  const empleados = [];
  const div_list_empleados = document.createElement('div');
  const title_list = document.createElement('h2');
  const listado_empleado = document.createElement('li');
  const parrafo = document.createElement('p');

  // Obtengo los inputs y el formulario
  const formulario = document.querySelector("form");
  nombre = document.getElementById('nombre')
  apellido = document.getElementById('apellido')
  select_ciudad = document.getElementById('ciudad')
  color_favorito = document.getElementById('color')
  fecha_nacimiento = document.getElementById('fecha_nacimiento')
  salario = document.getElementById('salario')

  // Agrego items al listado por medio de un arreglo
  listado_ciudades.forEach(function(item) {
    optionSelect = document.createElement('option');
    optionSelect.textContent = item;

    // Si la ciudad es Libertad la deja pre-seleccionada
    if (item === 'Libertad') optionSelect.setAttribute('selected', '');

    optionSelect.setAttribute('value', item);
    select_ciudad.appendChild(optionSelect)
  });

  // Mediante el evento trabajo con el formulario
  formulario.onsubmit = (event) => {
    event.preventDefault();

    // Variable usada de bandera para validar el Select
    var contador = 0;
  
    // Hago una validacion general de los campos Nombre, Apellido, Color y Salario para que no esten vacios
    if (nombre.value === '' || apellido.value === '' || color.value === '' || salario.value === '') {
      mensajePantalla('Por favor rellene todos los campos que sean obligatorios');
      console.log('Se detecto un ingreso vacio en los campos obligatorios');
      return false;
    }

    // Valido que el Nombre y el Apellido sea correcto 
    if (validarString(nombre.value, /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) ||
        validarString(nombre.value, /^[0-9]+$/) ||
        validarString(apellido.value, /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) ||
        validarString(apellido.value, /^[0-9]+$/)
       ) {
      mensajePantalla('Por favor ingrese un nombre y apellido validos');
      console.log('Se detecto un mal ingreso en los campos de Nombre y Apellido');
      return false;
    }

    // Valido que se seleccione una ciudad al menos y no se agreguen otras
    if (validarDuplicado(listado_ciudades, '')) {
      mensajePantalla('Por favor seleccione al menos una ciudad');
      console.log('Se detecto un ingreso vacio en la ciudad');
      return false;
    } else {
      // Recorro el listado original verificando que los datos ingresados sean iguales
      listado_ciudades.forEach(function(item) {
        if (!listado_ciudades.includes(select_ciudad.value)) contador++;
      });

      // De lo contrario te bocho
      if (contador > 0) {
        mensajePantalla('Por favor seleccione solo ciudades pre-cargadas');
        console.log('Se detecto un mal ingreso en la ciudad');
        return false;
      }
    }

    // Valido el exadecimal del color
    if (validarString(color.value, /^([0-9A-Fa-f]+)$/)) {
      mensajePantalla('Por favor ingrese un color valido');
      console.log('Se detecto un mal ingreso en el color');
      return false;
    }

    // Valido el Salario ingresado
    if (!validarString(salario.value, /^[0-9]+$/)) {
      mensajePantalla('Por favor ingrese un salario con valores validos');
      console.log('Se detecto un mal ingreso en el salario');
      return false;
    }

    // Si todo es correcto guardo dentro del arreglo de empleados los valores solicitados
    empleados.push(`Nombre empleado: ${nombre.value}, Apellido empleado: ${apellido.value}, Salario bruto empleado: $${salario.value}`);

    if (empleados.length != 0) {
      // Creo un div para meter el Listado
      body.appendChild(div_list_empleados);
  
      // Seteo un titulo y abro el listado con los valores agregados
      title_list.textContent = `Lista de empleados dentro de la empresa`;
      div_list_empleados.appendChild(title_list);
      div_list_empleados.appendChild(listado_empleado);
  
      // Con el listado de empleados creo el listado
      empleados.forEach(function(item) {
        item_empleado = document.createElement('ul');
        item_empleado.textContent = item;
      });
  
      listado_empleado.appendChild(item_empleado);

      // Muestro la cantidad de empleados dentro de la oficina
      parrafo.textContent = `Cantidad de empleados en la empresa: ${empleados.length}`
      div_list_empleados.appendChild(parrafo)
    }
  };

}